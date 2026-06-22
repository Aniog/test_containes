import { useEffect } from 'react';
import HomeHero from '@/components/home/HomeHero';
import HomeServices from '@/components/home/HomeServices';
import HomeProcess from '@/components/home/HomeProcess';
import HomeProducts from '@/components/home/HomeProducts';
import HomeProblems from '@/components/home/HomeProblems';
import HomeTrust from '@/components/home/HomeTrust';
import HomeCaseStudies from '@/components/home/HomeCaseStudies';
import HomeFaq from '@/components/home/HomeFaq';
import CtaBanner from '@/components/shared/CtaBanner';

export default function Home() {
  useEffect(() => {
    document.title = 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China';
  }, []);

  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />
      <HomeFaq />
      <CtaBanner
        title="Ready to Source Smarter from China?"
        subtitle="Submit your inquiry today and receive a free sourcing plan within 24 hours."
        cta="Get a Free Sourcing Quote"
      />
    </>
  );
}
