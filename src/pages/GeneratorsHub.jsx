import { strings } from '@/data/strings';
import { featuredGenerators, categories, allGenerators } from '@/data/generators';
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

const t = strings.en;

export default function GeneratorsHub() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Breadcrumb t={t.breadcrumb} />
      <main>
        <Hero t={t.hero} />
        <FeaturedGenerators t={t.featured} items={featuredGenerators} />
        <BrowseByCategory t={t.browseCategory} categories={categories} />
        <AllGenerators t={t.allGenerators} categories={categories} generators={allGenerators} />
        <HowItWorks t={t.howItWorks} />
        <WhyStrikingly t={t.whyStrikingly} />
        <FAQ t={t.faq} />
        <ClosingCTA t={t.closingCta} />
      </main>
      <Footer t={t.footer} />
    </div>
  );
}
