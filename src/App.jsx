import './App.css';
// 非遗文化推广网站
import Navbar from './components/heritage/Navbar';
import HeroSection from './components/heritage/HeroSection';
import AboutSection from './components/heritage/AboutSection';
import HeritageGrid from './components/heritage/HeritageGrid';
import StoriesSection from './components/heritage/StoriesSection';
import JoinSection from './components/heritage/JoinSection';
import Footer from './components/heritage/Footer';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HeritageGrid />
      <StoriesSection />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;
