import TopBar from './components/TopBar';
import Breadcrumb from './components/Breadcrumb';
import Hero from './components/Hero';
import FeaturedGenerators from './components/FeaturedGenerators';
import BrowseByCategory from './components/BrowseByCategory';
import AllGenerators from './components/AllGenerators';
import HowItWorks from './components/HowItWorks';
import WhyStrikingly from './components/WhyStrikingly';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import { strings } from './data/strings';
import { categories, featuredGenerators, allGenerators } from './data/generators';

const t = strings.en;

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar t={t} />
      <Breadcrumb t={t} />
      <main>
        <Hero t={t} />
        <FeaturedGenerators t={t} generators={featuredGenerators} />
        <BrowseByCategory t={t} categories={categories} />
        <AllGenerators t={t} categories={categories} generators={allGenerators} />
        <HowItWorks t={t} />
        <WhyStrikingly t={t} />
        <FAQ t={t} />
        <ClosingCTA t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
