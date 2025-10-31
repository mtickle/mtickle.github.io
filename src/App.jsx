import CommunityService from './components/CommunityService'; // <-- 1. IMPORT IT
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MilitaryService from './components/MilitaryService';
import Portfolio from './components/Portfolio';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Home />
        <Experience />
        <CommunityService />
        <MilitaryService />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;