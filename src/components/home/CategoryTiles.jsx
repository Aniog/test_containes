import { Link } from 'react-router-dom';
import { StrkImg } from '@/components/ui/StrkImg';

const CATEGORIES = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings editorial' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace editorial' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings editorial' },
];

export function CategoryTiles() {
  return (
    <section className="bg-velmora-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold">
            Shop by Category
          </span>
          <h2 className="font-serif text-4xl text-velmora-base sm:text-5xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-cream-dark"
            >
              <StrkImg
                id={`category-${category.id}`}
                query={`[category-${category.id}-label] ${category.query}`}
                ratio="4x5"
                width={800}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-base/20 transition-colors duration-300 group-hover:bg-velmora-base/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-${category.id}-label`}
                  className="border border-white/40 bg-white/90 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-base transition-all duration-300 group-hover:bg-white"
                >
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
