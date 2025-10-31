
function MilitaryService() {
    return (
        <section id="military" className="card">
            <h2>Military Service</h2>
            <p>
                During my seven years of active duty service in the U.S. Army, I was
                trained as a military journalist and Public Affairs Specialist. This is
                the origin of my "I speak human" philosophy—I wrote feature stories for{' '}
                <strong>The Pentagram</strong> newspaper, served as a Regimental
                Photographer at the White House and Pentagon, and acted as a media
                liaison. This communications role quickly evolved with the rise of the
                early internet. I designed and built "<strong>BandLink</strong>," the U.S.
                Army Band's first website, which became the official model for military
                web presences and was demonstrated to a four-star general. This
                pioneering work led to me helping develop web policy, building other
                command sites with JavaScript, managing large-scale databases (FoxPro,
                Access), and serving as a <strong>team leader</strong>. This unique
                blend of communications and technical problem-solving set the
                foundation for my entire civilian career.
            </p>
            <div className="job">
                {/* --- DUTY STATIONS --- */}
                <strong className="job-subtitle">Duty Stations</strong>
                <ul>
                    {/* Add your duty stations as list items here */}
                    <li>3rd U.S. Infantry (The Old Guard), Fort Myer, VA</li>
                    <li>The U.S. Army Band (Pershing's Own), Fort Myer, VA</li>
                    <li>U.S. Army Military District of Washington, DC</li>
                </ul>

                {/* --- AWARDS & MEDALS --- */}
                <strong className="job-subtitle">Awards & Medals</strong>
                <ul>
                    {/* Add your awards as list items here */}
                    <li>Army Commendation Medal</li>
                    <li>Army Achievement Medal (2nd award)</li>
                    <li>Good Conduct Medal (2nd award)</li>
                    <li>National Defense Service Medal</li>
                    <li>Army Service Ribbon</li>
                </ul>
            </div>
        </section>
    );
}

export default MilitaryService;