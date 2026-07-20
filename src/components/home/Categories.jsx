import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function Categories() {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-display mb-4">Shop by Category</h2>
          <p className="text-text-secondary text-sm">
            Find your perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/collection/${cat.id}`}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-1">
                    {cat.name}
                  </h3>
                  <span className="text-white/70 text-xs tracking-nav uppercase font-medium group-hover:text-white transition-colors">
                    Explore Collection &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
