import { Link } from 'react-router-dom';
import { useImageLoader } from '@/hooks/useImageLoader';

const tiles = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings' },
];

export function CategoryTiles() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-warmGray">Shop by Category</p>
          <h2 id="category-title" className="heading-md">Find Your Finish</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-ink/10"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${tile.id}`}
                data-strk-bg={`[category-${tile.id}-label] velmora ${tile.query}`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${tile.id}-label`}
                  className="border border-cream/60 px-8 py-3 font-serif text-xl uppercase tracking-widest text-cream backdrop-blur-sm transition-all duration-300 group-hover:bg-cream group-hover:text-ink"
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
