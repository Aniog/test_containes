import Hero from './components/microcosm/Hero';
import Introduction from './components/microcosm/Introduction';
import Gallery from './components/microcosm/Gallery';
import Worlds from './components/microcosm/Worlds';
import Quote from './components/microcosm/Quote';
import Spotlight from './components/microcosm/Spotlight';
import Footer from './components/microcosm/Footer';

function App() {
  return (
    <div className="bg-[#050a14] min-h-screen">
      <Hero />
      <Introduction />
      <Gallery />
      <Worlds />
      <Quote />
      <Spotlight />
      <Footer />
    </div>
  );
}

export default App;
