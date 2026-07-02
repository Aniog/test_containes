import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const categoryImages = {
  earrings: {
    id: 'cat-earrings-tile',
    query: '[cat-earrings-subtitle] [cat-earrings-title]',
    ratio: '4x3',
    width: '800',
  },
  necklaces: {
    id: 'cat-necklaces-tile',
    query: '[cat-necklaces-subtitle] [cat-necklaces-title]',
    ratio: '4x3',
    width: '800',
  },
  huggies: {
    id: 'cat-huggies-tile',
    query: '[cat-huggies-subtitle] [cat-huggies-title]',
    ratio: '4x3',
    width: '800',
  },
};

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Browse by Style</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => {
            const img = categoryImages[cat.id];
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm block"
              >
                <div
                  className="absolute inset-0"
                  data-strk-bg-id={img.id}
                  data-strk-bg={img.query}
                  data-strk-bg-ratio={img.ratio}
                  data-strk-bg-width={img.width}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/40 transition-all duration-500" />
                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3
                    id={`cat-${cat.id}-title`}
                    className="font-serif text-3xl md:text-4xl text-white tracking-[0.08em] uppercase mb-1"
                  >
                    {cat.name}
                  </h3>
                  <span
                    id={`cat-${cat.id}-subtitle`}
                    className="font-sans text-xs text-white/80 tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
