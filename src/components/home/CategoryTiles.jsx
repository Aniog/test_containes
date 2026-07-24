import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

const categoryImages = {
  Earrings: { ratio: '4x3', width: 800, query: '[category-earrings-desc] [category-earrings-title]' },
  Necklaces: { ratio: '4x3', width: 800, query: '[category-necklaces-desc] [category-necklaces-title]' },
  Huggies: { ratio: '4x3', width: 800, query: '[category-huggies-desc] [category-huggies-title]' },
};

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium mb-3">
          Curated For You
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-velvet-900 font-light">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {categories.map((cat) => {
          const img = categoryImages[cat.name];
          const slug = cat.slug;
          return (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-velvet-200 via-gold-100/30 to-velvet-300" />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-700 group-hover:scale-105 transition-transform duration-700"
                data-strk-bg-id={`category-bg-${slug}`}
                data-strk-bg={img.query}
                data-strk-bg-ratio={img.ratio}
                data-strk-bg-width={img.width}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velvet-950/20 group-hover:bg-velvet-950/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`category-${slug}-title`}
                  className="font-serif text-2xl lg:text-3xl text-white font-light tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                >
                  {cat.name}
                </h3>
                <p
                  id={`category-${slug}-desc`}
                  className="text-velvet-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-2 group-hover:translate-y-0"
                >
                  {cat.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-gold-400 text-[11px] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>

              {/* Static label for non-hover */}
              <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-serif text-xl lg:text-2xl text-white font-light tracking-wide">
                  {cat.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
