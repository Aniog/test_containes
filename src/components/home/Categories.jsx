import { Link } from 'react-router-dom';
import { collections } from '@/data/products';

const Categories = () => (
  <section className="bg-velmora-cream py-24 md:py-32">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4">
          Explore
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {collections.map((c) => (
          <Link
            key={c.id}
            to={`/shop?collection=${c.id}`}
            className="group relative block aspect-[3/4] overflow-hidden bg-velmora-soft"
          >
            <img
              alt={c.name}
              data-strk-img-id={`category-${c.id}`}
              data-strk-img={c.tileQuery}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-ink/20 group-hover:bg-velmora-ink/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
              <span className="text-velmora-cream text-xs uppercase tracking-[0.3em] mb-3 opacity-90">
                Collection
              </span>
              <h3 className="font-serif text-4xl md:text-5xl text-velmora-cream font-light">
                {c.name}
              </h3>
              <span className="mt-5 inline-block border-b border-velmora-cream/70 pb-1 text-[10px] uppercase tracking-[0.3em] text-velmora-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Shop {c.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
