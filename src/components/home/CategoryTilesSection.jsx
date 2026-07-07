import { Link } from 'react-router-dom';
import { getImageSrc } from '@/lib/images';

const tiles = [
  { id: 'earrings', name: 'Earrings', imgId: 'category-earrings', titleId: 'cat-title-earrings' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'category-necklaces', titleId: 'cat-title-necklaces' },
  { id: 'huggies', name: 'Huggies', imgId: 'category-huggies', titleId: 'cat-title-huggies' },
];

export function CategoryTilesSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-sand"
            >
              <img
                src={getImageSrc(tile.imgId)}
                alt={tile.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-3xl md:text-4xl text-cream uppercase tracking-brand border-b border-transparent group-hover:border-cream pb-1 transition-all duration-300"
                >
                  {tile.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
