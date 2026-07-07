import { Link } from 'react-router-dom';
import StrkImage from '@/components/ui/StrkImage';

const tiles = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings on neutral background' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace editorial jewelry photography' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie hoop earrings close up' },
];

export function CategoryTiles() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl font-light text-charcoal md:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-charcoal"
            >
              <StrkImage
                id={`category-${tile.id}`}
                query={`[category-${tile.id}-label]`}
                ratio="3x4"
                width={700}
                alt={tile.label}
                className="transition-transform duration-700 ease-premium group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-charcoal/20 transition-colors duration-500 group-hover:bg-charcoal/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${tile.id}-label`}
                  className="border border-ivory/60 bg-ivory/90 px-8 py-3 font-serif text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ivory"
                >
                  {tile.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
