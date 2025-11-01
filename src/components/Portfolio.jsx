import GameCard from './GameCard'; // Import the new component

// --- Image Imports ---
// 
// IMPORTANT: Adjust these paths to where you save your images.
// I'm assuming you'll put them in `src/assets/portfolio/`
//
import blackjackImage from '../assets/blackjack-lab.png';
import cardGameImage from '../assets/card-game.png';
import diceGameImage from '../assets/dice-game.png';
import displayPanelImage from '../assets/display-panel.png';
import midiAppImage from '../assets/midi-app.png';
import patrolXImage from '../assets/patrolx.png';
import spaceGameImage from '../assets/space-game.png';
import ticTacToeImage from '../assets/tic-tac-toe-game.png';
import vinDecoderImage from '../assets/vin-decoder.png';

const games = [
  {
    title: 'Tic-Tac-Toe Lab',
    description: 'Watch two AIs play Tic-Tac-Toe against each other.',
    imageUrl: ticTacToeImage,
    imageAlt: 'A screenshot of the game',
    playUrl: 'https://mtickle.github.io/tic-tac-toe-lab/',
    buttonText: 'Sure, why not?',
  },
  {
    title: 'Dice Breaker AI Lab',
    description:
      'A Yahztee-inspired dice game where the AI plays forever. Also, charts and graphs.',
    imageUrl: diceGameImage,
    imageAlt: 'A screenshot of the Dice Game',
    playUrl: 'https://mtickle.github.io/dice-game/',
    buttonText: 'Play it now',
  },
  {
    title: 'Card Breaker AI Lab',
    description:
      'An Uno-inspired card game where the AI plays forever. More charts and graphs here.',
    imageUrl: cardGameImage,
    imageAlt: 'A screenshot of the Card Game',
    playUrl: 'https://mtickle.github.io/card-game/',
    buttonText: 'Play it now',
  },
  {
    title: 'Blackjack Lab',
    description:
      'Another AI experiment, this time with Blackjack. Watch two AIs play against each other until the money runs dry.',
    imageUrl: blackjackImage,
    imageAlt: 'A screenshot of the Puzzle Game',
    playUrl: 'https://mtickle.github.io/blackjack-lab/',
    buttonText: 'Never tell me the odds.',
  },
  {
    title: 'Space Game',
    description:
      'An experiment in procedural generation and space exploration. Pan, scan, and click to explore the universe.',
    imageUrl: spaceGameImage,
    imageAlt: 'A screenshot of the Space Game',
    playUrl: 'https://mtickle.github.io/space-game/',
    buttonText: 'Play it now',
  },
  {
    title: 'Display Panel Lab',
    description:
      'A completely useless, albeit mesmerizing, experiment in random colorful things.',
    imageUrl: displayPanelImage,
    imageAlt: 'A screenshot of the game',
    playUrl: 'https://mtickle.github.io/display-panel-lab/',
    buttonText: 'Give me a seizure',
  },
  {
    title: 'VIN Decoder',
    description:
      'Enter a VIN to decode it. This tool provides detailed information about vehicles based on their VIN.',
    imageUrl: vinDecoderImage,
    imageAlt: 'A screenshot of the Puzzle Game',
    playUrl: 'https://mtickle.github.io/vin-app/',
    buttonText: 'Try it now',
  },
  {
    title: 'MIDI Decoder',
    description:
      'Understand how MIDI commands are issued from MIDI controllers and how they can be processed in JavaScript. Requires a MIDI controller.',
    imageUrl: midiAppImage,
    imageAlt: 'A screenshot of the Puzzle Game',
    playUrl: 'https://mtickle.github.io/midi-app/',
    buttonText: 'Try it now',
  },
  {
    title: 'PatrolX Interface',
    description: 'Front end of a data collection tool.',
    imageUrl: patrolXImage,
    imageAlt: 'A screenshot of the Puzzle Game',
    playUrl: 'https://mtickle.github.io/patrolx-interface/',
    buttonText: 'Try it now',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="card">
      <h2>My Portfolio</h2>
      <p>
        A collection of my personal projects, from AI game labs to
        data utilities.
      </p>

      {/* This uses the existing responsive .portfolio-grid class from index.css.
        It will be 1 column on mobile and 3 columns on desktop.
      */}
      <div className="portfolio-grid">
        {games.map((game) => (
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
    </section>
  );
}

export default Portfolio;