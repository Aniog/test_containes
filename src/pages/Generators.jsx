import TopBar from '../components/TopBar.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import Hero from '../components/Hero.jsx';
import FeaturedGenerators from '../components/FeaturedGenerators.jsx';
import BrowseByCategory from '../components/BrowseByCategory.jsx';
import AllGenerators from '../components/AllGenerators.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import WhyStrikingly from '../components/WhyStrikingly.jsx';
import Faq from '../components/Faq.jsx';
import ClosingCTA from '../components/ClosingCTA.jsx';
import Footer from '../components/Footer.jsx';

export default function GeneratorsPage() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <Faq />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}