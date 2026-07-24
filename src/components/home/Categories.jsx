import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages = {
  earrings: 'gold earrings jewelry collection elegant display',
  necklaces: 'gold necklaces jewelry collection elegant display',
  huggies: 'gold huggie hoop earrings collection elegant display',
};

export default function Categories() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-label mb-3">Shop by Category</p>
          <h2 className="heading-section">Find Your Style</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={categoryImages[category.id]}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
