import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCSection from '@/components/home/UGCSection';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/ui/CartDrawer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Bestsellers />
        <UGCSection />
        <CategoryTiles />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}