import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

export default function Collections() {
  const collections = [
    {
      id: 'everyday',
      name: 'Everyday Essentials',
      description: 'Subtle pieces designed for daily wear',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop'
    },
    {
      id: 'statement',
      name: 'Statement Pieces',
      description: 'Bold jewelry for special occasions',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop'
    },
    {
      id: 'gifts',
      name: 'Gift Sets',
      description: 'Perfectly paired pieces for gifting',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop'
    }
  ];

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=600&fit=crop"
            alt="Collections"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.6) 100%)' }}
          />
        </div>
        <div className="relative z-10 text-center text-cream px-6">
          <h1 
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Collections
          </h1>
          <p className="text-cream/80">
            Curated pieces for every moment
          </p>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link 
                key={collection.id}
                to={`/shop?collection=${collection.id}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-charcoal/30 transition-opacity duration-300 group-hover:bg-charcoal/40"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-cream p-6 text-center">
                  <h3 
                    className="font-serif text-2xl mb-2 tracking-wider"
                    style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.15em' }}
                  >
                    {collection.name.toUpperCase()}
                  </h3>
                  <p className="text-cream/80 text-sm mb-4">{collection.description}</p>
                  <span className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop Now <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section" style={{ backgroundColor: 'var(--color-warm-white)' }}>
        <div className="container">
          <h2 
            className="font-serif text-2xl md:text-3xl text-center mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-square overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors"
                  style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span 
                    className="font-serif text-lg text-cream tracking-widest"
                    style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.2em' }}
                  >
                    {category.name.toUpperCase()}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}