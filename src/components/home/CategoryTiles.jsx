import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', slug: 'earrings', image: 'Earrings' },
  { name: 'Necklaces', slug: 'necklaces', image: 'Necklaces' },
  { name: 'Huggies', slug: 'huggies', image: 'Huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Browse By Style</p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-white">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <img
                src={`https://placehold.co/800x1000/1A1918/C8A97E?text=${encodeURIComponent(cat.image)}`}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-warm-white tracking-wide opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-3 text-xs uppercase tracking-[0.2em] text-warm-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
