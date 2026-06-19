import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    query: 'gold earrings collection jewelry display',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    query: 'gold necklace collection jewelry display',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    query: 'gold huggie hoop earrings collection',
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto section-padding">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-400 tracking-wide mb-3">
            Shop by Category
          </h2>
          <p className="text-sm text-charcoal-50 tracking-wide">
            Find your perfect piece.
          </p>
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative overflow-hidden aspect-[4/5] bg-cream-200"
            >
              <img
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`[cat-tile-label-${cat.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-charcoal-500/20 group-hover:bg-charcoal-500/40 transition-all duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3
                    id={`cat-tile-label-${cat.id}`}
                    className="font-serif text-cream-50 text-2xl md:text-3xl tracking-wide mb-2"
                  >
                    {cat.name}
                  </h3>
                  <span className="inline-block text-[10px] text-cream-100/80 uppercase tracking-widest-xl font-sans border-b border-cream-100/40 pb-0.5 group-hover:border-gold-400 group-hover:text-gold-400 transition-all duration-300">
                    Explore
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
