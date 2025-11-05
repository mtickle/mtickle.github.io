import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import NoImagePlaceholder from '../assets/no-lego-image.jpg';

function LegoCollection() {
    // --- 1. SET THE DEFAULT FILTER ---
    // We'll restore the filtering state hooks
    const [allSets, setAllSets] = useState([]);
    const [filteredSets, setFilteredSets] = useState([]); // This will hold our "HOME" sets
    const [currentFilter, setCurrentFilter] = useState('HOME'); // Default is now "HOME"
    const [isLoading, setIsLoading] = useState(true);

    // This function will apply a filter. We need it again.
    const applyFilter = (filterNote) => {
        setCurrentFilter(filterNote);

        if (filterNote.toLowerCase() === 'all') {
            setFilteredSets(allSets);
            return;
        }

        const newFilteredList = allSets.filter(set =>
            set.notes && set.notes.toLowerCase().includes(filterNote.toLowerCase())
        );
        setFilteredSets(newFilteredList);
    };

    // This hook fetches, parses, and *applies the default filter*
    useEffect(() => {
        const fetchLegoSets = async () => {
            try {
                const response = await fetch('/legoCollection.csv');
                const csvText = await response.text();

                Papa.parse(csvText, {
                    header: true,
                    complete: (results) => {

                        const cleanData = results.data
                            .filter(csvRow => csvRow.SetID && csvRow.Number)
                            .map(csvRow => ({
                                setID: csvRow.SetID,
                                name: csvRow.SetName,
                                setNumber: csvRow.Number,
                                pieces: parseInt(csvRow.Pieces, 10) || 0,
                                imageUrl: csvRow.Image,
                                notes: csvRow.UserNotes
                            }));

                        setAllSets(cleanData); // Save the full list of 700+

                        // --- 2. APPLY THE "HOME" FILTER ON LOAD ---
                        const defaultFilteredList = cleanData.filter(set =>
                            set.notes && set.notes.toLowerCase().includes('home')
                        );
                        setFilteredSets(defaultFilteredList); // Set the default view
                        setIsLoading(false);
                    },
                    error: (error) => {
                        console.error("Papa Parse failed:", error);
                        setIsLoading(false);
                    }
                });
            } catch (error) {
                console.error("Failed to load legoCollection.csv:", error);
                setIsLoading(false);
            }
        };

        fetchLegoSets();
    }, []); // Runs once on component load

    // Helper component to render a single set (unchanged)
    const LegoSetCard = ({ set }) => (
        <div className="game-card">
            <img
                // Use backticks `` and combine 'setNumber' and 'variant'
                src={`https://cdn.rebrickable.com/media/sets/${set.setNumber}-${set.variant}.jpg`}
                alt={set.name}
                className="game-card-image"
                onError={(e) => { e.target.src = NoImagePlaceholder; }}
            />
            <div className="game-card-content">
                <h3>{set.name}</h3>
                <p>
                    {set.setNumber} | {set.pieces} pieces
                    {set.notes && (
                        <em style={{ display: 'block', color: '#555', marginTop: '10px' }}>
                            Notes: {set.notes}
                        </em>
                    )}
                </p>
            </div>
        </div>
    );

    // Main render output (with filter buttons restored)
    return (
        <section id="lego" className="card">
            <h2>My Lego Collection</h2>
            <p className="experience-intro">
                An impressive (and growing) collection. Filtered by the notes I've
                added in my Brickset account.
            </p>

            {/* 3. RESTORE THE FILTER BUTTONS */}
            {/* You can now use these to change the view */}
            <div className="filter-buttons" style={{ marginBottom: '20px' }}>
                <button className="filter-button" onClick={() => applyFilter('HOME')}>Home</button>
                <button className="filter-button" onClick={() => applyFilter('Star Wars')}>Star Wars</button>
                <button className="filter-button" onClick={() => applyFilter('Display')}>Display</button>
                <button className="filter-button" onClick={() => applyFilter('Modular')}>Modular</button>
                <button className="filter-button" onClick={() => applyFilter('All')}>Show All ({allSets.length})</button>
            </div>

            <div className="portfolio-grid">
                {isLoading ? (
                    <p>Loading collection...</p>
                ) : filteredSets.length > 0 ? (
                    // We map over 'filteredSets' which now defaults to "HOME"
                    filteredSets.map(set => <LegoSetCard key={set.setNumber} set={set} />)
                ) : (
                    <p>No sets found for filter: "{currentFilter}"</p>
                )}
            </div>
        </section>
    );
}

export default LegoCollection;