import BakeryNav from './components/bakery/BakeryNav';
import BakeryHero from './components/bakery/BakeryHero';
import BakeryMenu from './components/bakery/BakeryMenu';
import BakeryArticles from './components/bakery/BakeryArticles';
import BakeryAbout from './components/bakery/BakeryAbout';
import BakeryFooter from './components/bakery/BakeryFooter';

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <BakeryNav />
      <BakeryHero />
      <BakeryMenu />
      <BakeryArticles />
      <BakeryAbout />
      <BakeryFooter />
    </div>
  );
}

export default App;
