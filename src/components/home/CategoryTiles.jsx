import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', slug: 'earrings' },
  { name: 'Necklaces', slug: 'necklaces' },
  { name: 'Huggies', slug: 'huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet font-medium">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] bg-velvet overflow-hidden"
            >
              {/* Placeholder image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest text-taupe">
                  {cat.name}
                </span>
              </div>
              <div className="absolute inset-0 bg-velvet/30 group-hover:bg-velvet/20 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-6 py-3 border border-cream/40 text-cream text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
