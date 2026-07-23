import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages = {
  earrings: { imgId: 'cat-earrings-img-w9x0y1', descId: 'cat-earrings-desc' },
  necklaces: { imgId: 'cat-necklaces-img-z2a3b4', descId: 'cat-necklaces-desc' },
  huggies: { imgId: 'cat-huggies-img-c5d6e7', descId: 'cat-huggies-desc' },
};

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 border-t border-brand-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="categories-section-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => {
            const imgData = categoryImages[cat.id];
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-brand-ivory"
              >
                <img
                  data-strk-img-id={imgData.imgId}
                  data-strk-img={`[${imgData.descId}] [${cat.titleId}] [categories-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-white tracking-wider uppercase">
                    {cat.name}
                  </h3>
                </div>
                <p id={imgData.descId} className="sr-only">Gold {cat.name.toLowerCase()} jewelry collection</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
