import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import Categories from '../components/home/Categories';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const seedProducts = [
  { id: '1', name: 'Vivid Aura Jewels', description: 'Gold ear cuff with crystal accent', price: 42, category: 'earrings' },
  { id: '2', name: 'Majestic Flora Nectar', description: 'Multicolor floral crystal necklace', price: 68, category: 'necklaces' },
  { id: '3', name: 'Golden Sphere Huggies', description: 'Chunky gold dome huggie earrings', price: 38, category: 'huggies' },
  { id: '4', name: 'Amber Lace Earrings', description: 'Textured gold filigree drop earrings', price: 54, category: 'earrings' },
  { id: '5', name: 'Royal Heirloom Set', description: 'Gift-boxed earring + necklace set', price: 95, category: 'sets' },
];

const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      <TrustBar />
      <Bestsellers products={seedProducts} />
      <UGCReel />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
export { seedProducts };
