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
import GeneratorsFooter from '@/components/generators/GeneratorsFooter';

export default function Generators() {
  return (
    <>
      {/* Section 0 */}
      <TopBar />

      <main>
        {/* Section 1 */}
        <Breadcrumb />

        <hr className="section-divider" />

        {/* Section 2 */}
        <Hero />

        <hr className="section-divider" />

        {/* Section 3 */}
        <FeaturedGenerators />

        <hr className="section-divider" />

        {/* Section 4 */}
        <BrowseByCategory />

        <hr className="section-divider" />

        {/* Section 5 */}
        <AllGenerators />

        <hr className="section-divider" />

        {/* Section 6 */}
        <HowItWorks />

        <hr className="section-divider" />

        {/* Section 7 */}
        <WhyStrikingly />

        <hr className="section-divider" />

        {/* Section 8 */}
        <FAQ />

        {/* Section 9 */}
        <ClosingCTA />
      </main>

      {/* Section 10 */}
      <GeneratorsFooter />
    </>
  );
}
