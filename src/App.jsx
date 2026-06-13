import TopBar from './components/sections/TopBar';
import Breadcrumb from './components/sections/Breadcrumb';
import Hero from './components/sections/Hero';
import FeaturedGenerators from './components/sections/FeaturedGenerators';
import BrowseByCategory from './components/sections/BrowseByCategory';
import AllGenerators from './components/sections/AllGenerators';
import HowItWorks from './components/sections/HowItWorks';
import WhyStrikingly from './components/sections/WhyStrikingly';
import FAQ from './components/sections/FAQ';
import ClosingCTA from './components/sections/ClosingCTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <TopBar />
      <Breadcrumb />

      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
