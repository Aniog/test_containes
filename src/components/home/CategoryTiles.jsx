import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest-xl text-velmora-gold mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso">
            Find Your Signature
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-velmora-espresso/20 group-hover:bg-velmora-espresso/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-3">
                    {category.name}
                  </h3>
                  <span className="inline-block text-xs uppercase tracking-widest text-velmora-cream border-b border-velmora-gold pb-1">
                    Shop Now
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                <h3 className="font-serif text-2xl text-velmora-cream">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
