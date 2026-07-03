import { Link } from 'react-router-dom';
import JewelryImage from '@/components/JewelryImage';

const categories = [
  { label: 'Earrings', id: 'cat-earrings', query: '[cat-earrings-label]' },
  { label: 'Necklaces', id: 'cat-necklaces', query: '[cat-necklaces-label]' },
  { label: 'Huggies', id: 'cat-huggies', query: '[cat-huggies-label]' },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">Shop by Category</h2>
        <p className="font-sans text-sm text-velmora-stone">Find your perfect piece</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <Link key={cat.label} to="/shop" className="group relative aspect-[4/5] overflow-hidden">
            <JewelryImage
              id={cat.id}
              query={cat.query}
              ratio="4x5"
              width={700}
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={cat.id + '-label'}
                className="font-serif text-xl md:text-2xl text-white tracking-widest uppercase border border-white/60 px-6 py-2.5 backdrop-blur-sm group-hover:bg-white/10 transition-colors"
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
