import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function Collections() {
  return (
    <div className="bg-brand-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="heading-serif text-3xl md:text-5xl text-brand-charcoal font-light mb-4">Collections</h1>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
          <p className="font-sans text-sm text-brand-taupe mt-4 max-w-md mx-auto">
            Curated edits from our latest drops and signature styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-brand-cream"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide">
                    {cat.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-all">
                    <span className="font-sans text-xs uppercase tracking-widest">Shop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}