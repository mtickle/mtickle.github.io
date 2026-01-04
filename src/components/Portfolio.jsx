import GameCard from './GameCard';

import blackjackImage from '../assets/blackjack-lab.png';
import cardGameImage from '../assets/card-game.png';
import diceGameImage from '../assets/dice-game.png';
import displayPanelImage from '../assets/display-panel.png';
import midiAppImage from '../assets/midi-app.png';
import patrolXImage from '../assets/patrolx.png';
import pianoChordFinderImage from '../assets/piano-chord-finder.png';
import spaceGameImage from '../assets/space-game.png';
import ticTacToeImage from '../assets/tic-tac-toe-game.png';
import vinDecoderImage from '../assets/vin-decoder.png';


const games = [


  {
    title: 'VIN Decoder',
    category: 'tools',
    description: 'Enter a VIN to decode it. This tool provides detailed information about vehicles based on their VIN.',
    imageUrl: vinDecoderImage,
    imageAlt: 'A screenshot of the VIN Decoder',
    playUrl: 'https://mtickle.github.io/vin-app/',
    buttonText: 'Try it now',
  },
  {
    title: 'PatrolX Interface',
    category: 'tools',
    description: 'Front end of a data collection tool for public safety data.',
    imageUrl: patrolXImage,
    imageAlt: 'A screenshot of PatrolX',
    playUrl: 'https://mtickle.github.io/patrolx-interface/',
    buttonText: 'View Interface',
  },
  {
    title: 'Tic-Tac-Toe Lab',
    category: 'ai',
    description: 'Watch two AIs play Tic-Tac-Toe against each other.',
    imageUrl: ticTacToeImage,
    imageAlt: 'A screenshot of the game',
    playUrl: 'https://mtickle.github.io/tic-tac-toe-lab/',
    buttonText: 'Sure, why not?',
  },
  {
    title: 'Dice Breaker AI Lab',
    category: 'ai',
    description: 'A Yahtzee-inspired dice game where the AI plays forever. Also, charts and graphs.',
    imageUrl: diceGameImage,
    imageAlt: 'A screenshot of the Dice Game',
    playUrl: 'https://mtickle.github.io/dice-game/',
    buttonText: 'Play it now',
  },
  {
    title: 'Card Breaker AI Lab',
    category: 'ai',
    description: 'An Uno-inspired card game where the AI plays forever. More charts and graphs here.',
    imageUrl: cardGameImage,
    imageAlt: 'A screenshot of the Card Game',
    playUrl: 'https://mtickle.github.io/card-game/',
    buttonText: 'Play it now',
  },
  {
    title: 'Blackjack Lab',
    category: 'ai',
    description: 'Another AI experiment, this time with Blackjack. Watch two AIs play against each other until the money runs dry.',
    imageUrl: blackjackImage,
    imageAlt: 'A screenshot of the Blackjack Game',
    playUrl: 'https://mtickle.github.io/blackjack-lab/',
    buttonText: 'Never tell me the odds',
  },
  {
    title: 'Space Game',
    category: 'space',
    description: 'An experiment in procedural generation and space exploration. Pan, scan, and click to explore the universe.',
    imageUrl: spaceGameImage,
    imageAlt: 'A screenshot of the Space Game',
    playUrl: 'https://mtickle.github.io/space-game/',
    buttonText: 'Blast off',
  },
  {
    title: 'Display Panel Lab',
    category: 'space',
    description: 'A completely useless, albeit mesmerizing, experiment in random colorful things. Sci-Fi UI inspired.',
    imageUrl: displayPanelImage,
    imageAlt: 'A screenshot of the Display Panel',
    playUrl: 'https://mtickle.github.io/display-panel-lab/',
    buttonText: 'Give me a seizure',
  },
  {
    title: 'MIDI Decoder',
    category: 'music',
    description: 'Understand how MIDI commands are issued from MIDI controllers and processed in JS. Requires a MIDI controller.',
    imageUrl: midiAppImage,
    imageAlt: 'A screenshot of the MIDI app',
    playUrl: 'https://mtickle.github.io/midi-app/',
    buttonText: 'Connect & Play',
  },
  {
    title: 'Piano Chord Finder',
    category: 'music',
    description: 'A quick reference for piano chords. Pick a root note from the selector, or press the root note key.',
    imageUrl: pianoChordFinderImage,
    imageAlt: 'A screenshot of the piano chord app',
    playUrl: 'https://mtickle.github.io/piano-chord-finder/',
    buttonText: 'What is a Bbm7sus4 anyway?',
  },
];

const categories = [

  { id: 'music', title: 'Music Utilities' },
  { id: 'space', title: 'Space & Visuals' },
  { id: 'ai', title: 'AI Game Labs' },
  { id: 'tools', title: 'Public Facing Tools' },
];

function Portfolio() {
  return (
    <section id="portfolio" className="card">
      <h2>My Portfolio</h2>
      <p>
        A collection of my personal projects, broken down by area of interest.
      </p>

      {categories.map((cat) => {
        const categoryGames = games.filter((game) => game.category === cat.id);
        if (categoryGames.length === 0) return null;

        return (
          <div key={cat.id} className="portfolio-section">
            <h3 className="portfolio-category-title">{cat.title}</h3>

            {/* The Grid happens HERE, inside the section */}
            <div className="portfolio-grid">
              {categoryGames.map((game) => (
                <GameCard
                  key={game.title}
                  title={game.title}
                  description={game.description}
                  imageUrl={game.imageUrl}
                  imageAlt={game.imageAlt}
                  playUrl={game.playUrl}
                  buttonText={game.buttonText}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Portfolio;