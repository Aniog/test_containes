import Nav from './components/microcosmos/Nav';
import Hero from './components/microcosmos/Hero';
import Explore from './components/microcosmos/Explore';
import Organisms from './components/microcosmos/Organisms';
import Gallery from './components/microcosmos/Gallery';
import Science from './components/microcosmos/Science';
import Join from './components/microcosmos/Join';
import Footer from './components/microcosmos/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Nav />
      <Hero />
      <Explore />
      <Organisms />
      <Gallery />
      <Science />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
