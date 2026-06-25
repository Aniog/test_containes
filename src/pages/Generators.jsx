import TopBar from '@/components/generators/TopBar';
import Breadcrumb from '@/components/generators/Breadcrumb';
import Hero from '@/components/generators/Hero';
import FeaturedGenerators from '@/components/generators/FeaturedGenerators';
import BrowseByCategory from '@/components/generators/BrowseByCategory';
import AllGenerators from '@/components/generators/AllGenerators';
import HowItWorks from '@/components/generators/HowItWorks';
import WhyStrikingly from '@/components/generators/WhyStrikingly';
import FAQ from '@/components/generators/FAQ';
import ClosingCTA from '@/components/generators/ClosingCTA';
import Footer from '@/components/generators/Footer';

const GeneratorsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Breadcrumb />
      <Hero />
      <FeaturedGenerators />
      <BrowseByCategory />
      <AllGenerators />
      <HowItWorks />
      <WhyStrikingly />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
};

export default GeneratorsPage;
