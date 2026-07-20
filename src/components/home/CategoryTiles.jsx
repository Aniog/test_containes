import { Link } from 'react-router-dom';
import useScrollReveal from '@/hooks/useScrollReveal';

const tiles = [
  { name: 'Earrings', slug: 'earrings', desc: 'Curated for every ear', gradient: 'from-warm-200 to-warm-400' },
  { name: 'Necklaces', slug: 'necklaces', desc: 'Layers of elegance', gradient: 'from-warm-300 to-gold-300' },
  { name: 'Huggies', slug: 'huggies', desc: 'Everyday essentials', gradient: 'from-warm-200 to-warm-500' },
];

export default function CategoryTiles() {
  const [ref, revealed] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 transition-all duration-700 ease-out ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-14">
        <p className="section-subtitle">Browse By</p>
        <h2 className="section-title mt-3">Categories</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.slug}
            to={`/shop?category=${tile.slug}`}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient}`} />
            <div className="absolute inset-0 bg-deep-950/0 group-hover:bg-deep-950/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl text-deep-800 tracking-wide group-hover:scale-105 transition-transform duration-500">
                {tile.name}
              </span>
              <span className="mt-2 font-sans text-xs text-deep-500 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {tile.desc}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}