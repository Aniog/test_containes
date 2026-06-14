import Hero from '@/components/home/Hero';
import Products from '@/components/home/Products';
import WhyUs from '@/components/home/WhyUs';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <WhyUs />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
