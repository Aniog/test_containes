import HomeHero from '@/components/home/HomeHero';
import TrustBar from '@/components/home/TrustBar';
import HomeServices from '@/components/home/HomeServices';
import HomeSourcingProcess from '@/components/home/HomeSourcingProcess';
import HomeProducts from '@/components/home/HomeProducts';
import HomeProblems from '@/components/home/HomeProblems';
import HomeCaseStudies from '@/components/home/HomeCaseStudies';
import HomeTestimonials from '@/components/home/HomeTestimonials';
import HomeFAQ from '@/components/home/HomeFAQ';
import HomeInquiryForm from '@/components/home/HomeInquiryForm';

const Home = () => (
  <>
    <HomeHero />
    <TrustBar />
    <HomeServices />
    <HomeSourcingProcess />
    <HomeProducts />
    <HomeProblems />
    <HomeCaseStudies />
    <HomeTestimonials />
    <HomeFAQ />
    <HomeInquiryForm />
  </>
);

export default Home;
