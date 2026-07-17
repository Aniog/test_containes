import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const bestsellerSlugs = [
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'golden-sphere-huggies',
  'amber-lace-earrings',
  'royal-heirloom-set',
];

const bestsellers = bestsellerSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter(Boolean);

export default function Bestsellers() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deepbrown leading-tight">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
