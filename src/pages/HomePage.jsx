import { Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCRow from '../components/home/UGCRow';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/cart/CartDrawer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Bestsellers />
        <UGCRow />
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