import HomeHero from '../components/home/HomeHero';
import HomeServices from '../components/home/HomeServices';
import HomeProcess from '../components/home/HomeProcess';
import HomeProducts from '../components/home/HomeProducts';
import HomeProblems from '../components/home/HomeProblems';
import HomeTrust from '../components/home/HomeTrust';
import HomeCaseStudies from '../components/home/HomeCaseStudies';
import HomeTestimonials from '../components/home/HomeTestimonials';
import HomeFaq from '../components/home/HomeFaq';
import CtaBanner from '../components/shared/CtaBanner';

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
      <HomeTestimonials />
      <HomeFaq />
      <CtaBanner
        title="Ready to Start Sourcing from China?"
        subtitle="Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan."
        buttonText="Get a Free Sourcing Quote"
        buttonLink="/contact"
      />
    </>
  );
}
