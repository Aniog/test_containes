import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    subtitle: 'Studs, drops & cuffs',
    query: 'gold earrings jewelry collection elegant display',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    subtitle: 'Chains, pendants & layers',
    query: 'gold necklaces jewelry collection elegant display',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    subtitle: 'Everyday hoops that hug',
    query: 'gold huggie hoop earrings jewelry collection elegant display',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-600 mb-4">
            Browse by style
          </p>
          <h2 className="font-serif text-heading-xl md:text-display text-charcoal-800">
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-charcoal-200"
            >
              {/* Image */}
              <img
                data-strk-img-id={`cat-${category.id}`}
                data-strk-img={category.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/50 transition-all duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3 className="font-serif text-heading-lg md:text-heading-xl text-cream-50 uppercase tracking-[0.15em]">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-cream-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {category.subtitle}
                </p>
                <div className="w-8 h-[1px] bg-cream-50 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
