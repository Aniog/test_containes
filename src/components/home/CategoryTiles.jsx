import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="heading-lg text-dark-900 mb-3">Shop by Category</h2>
        <p className="body-md text-dark-600">Find your perfect piece.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] overflow-hidden bg-stone-200"
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] jewelry collection`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.imgAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-dark-900/25 group-hover:bg-dark-900/40 transition-colors duration-500" />

            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h3 id={cat.titleId} className="heading-md text-cream-50 mb-2">{cat.name}</h3>
              <p id={cat.descId} className="font-sans text-sm text-cream-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
