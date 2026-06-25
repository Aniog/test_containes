import HomeHero from "@/components/home/HomeHero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChoose from "@/components/home/WhyChoose";
import ProcessSection from "@/components/home/ProcessSection";
import CallToAction from "@/components/home/CallToAction";

const Home = () => {
  return (
    <>
      <HomeHero />
      <FeaturedProducts />
      <WhyChoose />
      <ProcessSection />
      <CallToAction />
    </>
  );
};

export default Home;
