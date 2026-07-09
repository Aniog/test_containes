import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages = {
  earrings: {
    query: 'gold earrings collection on dark background editorial',
    gradient: 'from-amber-900/60 to-amber-800/40',
  },
  necklaces: {
    query: 'gold necklace collection on dark background editorial',
    gradient: 'from-stone-800/60 to-stone-700/40',
  },
  huggies: {
    query: 'gold huggie earrings collection on dark background editorial',
    gradient: 'from-yellow-900/60 to-yellow-800/40',
  },
};

export default function ShopByCategory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-widest-2xl text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl lg:text-heading-2 text-velmora-charcoal mb-4">
            Shop by Category
          </h2>
          <div className="section-divider" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category) => {
            const imgData = categoryImages[category.id];
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded"
              >
                <div
                  data-strk-img-id={`category-${category.id}`}
                  data-strk-img={`[category-name-${category.id}] ${imgData.query}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                >
                  <div className="w-full h-full bg-gradient-to-br from-velmora-linen to-velmora-sand flex items-center justify-center">
                    <span className="font-serif text-4xl text-velmora-gold-muted/40 tracking-widest-2xl">VM</span>
                  </div>
                </div>

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${imgData.gradient} group-hover:opacity-80 transition-opacity duration-300`} />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                  <h3 id={`category-name-${category.id}`} className="font-serif text-2xl text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="font-sans text-[10px] uppercase tracking-widest-xl text-white/80 group-hover:text-velmora-gold transition-colors">
                    Explore
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
