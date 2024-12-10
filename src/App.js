import './App.css';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import Footer from './pages/Footer';
import Information from './pages/Information';
import Navbar from './pages/Navbar';
import PortfolioPage from './pages/PortifolioPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Information />
      <SkillsPage />
      <PortfolioPage />
      <ExperiencePage />
      <AboutUsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
