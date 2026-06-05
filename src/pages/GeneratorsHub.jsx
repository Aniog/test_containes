import TopBar from '../components/generators/TopBar';
import Breadcrumb from '../components/generators/Breadcrumb';
import Hero from '../components/generators/Hero';
import FeaturedGenerators from '../components/generators/FeaturedGenerators';
import BrowseByCategory from '../components/generators/BrowseByCategory';
import AllGenerators from '../components/generators/AllGenerators';
import HowItWorks from '../components/generators/HowItWorks';
import WhyStrikingly from '../components/generators/WhyStrikingly';
import FAQ from '../components/generators/FAQ';
import ClosingCTA from '../components/generators/ClosingCTA';
import Footer from '../components/generators/Footer';

export default function GeneratorsHub() {
  return (
    <>
      {/* Section 0: Top bar */}
      <TopBar />

      <main>
        {/* Section 1: Breadcrumb */}
        <Breadcrumb />

        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Featured Generators */}
        <FeaturedGenerators />

        {/* Section 4: Browse by Category */}
        <BrowseByCategory />

        {/* Section 5: All Generators directory */}
        <AllGenerators />

        {/* Section 6: How It Works */}
        <HowItWorks />

        {/* Section 7: Why Strikingly */}
        <WhyStrikingly />

        {/* Section 8: FAQ */}
        <FAQ />

        {/* Section 9: Closing CTA */}
        <ClosingCTA />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </>
  );
}
