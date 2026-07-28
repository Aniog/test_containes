import HomeHero from '../components/home/HomeHero';
import HomeServices from '../components/home/HomeServices';
import HomeProcess from '../components/home/HomeProcess';
import HomeProducts from '../components/home/HomeProducts';
import HomeProblems from '../components/home/HomeProblems';
import HomeTrust from '../components/home/HomeTrust';
import HomeCaseStudies from '../components/home/HomeCaseStudies';
import HomeFAQ from '../components/home/HomeFAQ';
import HomeInquiryForm from '../components/home/HomeInquiryForm';
import SectionCTA from '../components/shared/SectionCTA';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />
      <SectionCTA
        title="Ready to Start Sourcing from China?"
        subtitle="Get a free, no-obligation sourcing quote from our team. We'll review your requirements and respond within 24 hours."
        ctaLabel="Get a Free Sourcing Quote"
        secondary="See How It Works"
        secondaryPath="/how-it-works"
      />
      <HomeFAQ />
      <HomeInquiryForm />
    </>
  );
}
