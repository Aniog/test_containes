import { Link } from 'react-router-dom';

const categories = [
  { label: 'Earrings', href: '/shop?category=Earrings', bg: 'from-velmora-goldlight/40 via-velmora-stone/30 to-velmora-sand' },
  { label: 'Necklaces', href: '/shop?category=Necklaces', bg: 'from-velmora-rose/20 via-velmora-stone/30 to-velmora-sand' },
  { label: 'Huggies', href: '/shop?category=Huggies', bg: 'from-velmora-goldlight/30 via-velmora-stone/20 to-velmora-sand' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="container-site">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg} transition-transform duration-700 group-hover:scale-105`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-velmora-warmgray/25 text-lg italic">{cat.label}</span>
                </div>
              </div>

              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/30 transition-colors duration-500 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
