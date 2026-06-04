import Navbar from '@/components/microcosmos/Navbar';
import Hero from '@/components/microcosmos/Hero';
import About from '@/components/microcosmos/About';
import Gallery from '@/components/microcosmos/Gallery';
import Worlds from '@/components/microcosmos/Worlds';
import Featured from '@/components/microcosmos/Featured';
import Techniques from '@/components/microcosmos/Techniques';
import Facts from '@/components/microcosmos/Facts';
import Footer from '@/components/microcosmos/Footer';

const MicroCosmosPage = () => {
  return (
    <div className="bg-[#050a0f] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Worlds />
      <Featured />
      <Techniques />
      <Facts />
      <Footer />
    </div>
  );
};

export default MicroCosmosPage;
