import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'everyday-essentials',
    name: 'Everyday Essentials',
    description: 'Effortless pieces designed to go from morning to midnight. Minimal, refined, always elegant.',
    query: 'minimal gold jewelry flat lay elegant',
    count: 3,
  },
  {
    id: 'gift-worthy',
    name: 'Gift-Worthy',
    description: 'Beautifully packaged sets and standout pieces — perfect for celebrating someone special.',
    query: 'jewelry gift box luxury packaging gold',
    count: 2,
  },
  {
    id: 'the-edit',
    name: 'The Edit',
    description: 'Our newest arrivals, handpicked by our design team. Fresh takes on timeless forms.',
    query: 'new gold jewelry collection editorial fashion',
    count: 3,
  },
];

export default function Collections() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-cream-50">
      <div className="bg-cream-100 py-12 md:py-16 text-center">
        <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">Curated</p>
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal-800" style={{ fontWeight: 400 }}>
          Collections
        </h1>
        <div className="hairline max-w-24 mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-8 md:space-y-12">
          {collections.map((col) => (
            <Link
              key={col.id}
              to="/shop"
              className="group block relative overflow-hidden aspect-[16/6] md:aspect-[16/5]"
            >
              <img
                data-strk-img-id={`collection-${col.id}`}
                data-strk-img={col.query}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={col.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/55 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div>
                  <h2 className="font-serif text-cream-50 text-3xl md:text-5xl tracking-wider mb-3" style={{ fontWeight: 400 }}>
                    {col.name}
                  </h2>
                  <p className="text-cream-200/80 text-sm max-w-md mx-auto mb-4 hidden md:block">
                    {col.description}
                  </p>
                  <span className="text-cream-100/70 text-xs tracking-widest-xl uppercase border-b border-cream-100/40 pb-0.5 group-hover:border-cream-100/70 transition-colors">
                    Explore Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
