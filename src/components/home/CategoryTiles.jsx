import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-taupe mb-3">
          Curated For You
        </p>
        <h2 className="heading-lg text-velmora-base">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] bg-velmora-beige overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/70 via-velmora-base/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide">
                {cat.name}
              </h3>
              <span className="inline-block mt-2 font-sans text-xs tracking-widest uppercase text-white/70 group-hover:text-velmora-gold transition-colors">
                Explore &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}