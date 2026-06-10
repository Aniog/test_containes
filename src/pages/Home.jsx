import HomeHero from "@/components/home/HomeHero";
import HomeProducts from "@/components/home/HomeProducts";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeProcess from "@/components/home/HomeProcess";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeCTA from "@/components/home/HomeCTA";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeProducts />
      <HomeFeatures />
      <HomeProcess />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
};

export default Home;
