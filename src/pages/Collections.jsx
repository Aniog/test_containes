import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function Collections() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="section-padding py-10 md:py-16 text-center bg-charcoal/5">
        <p 
          className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
          style={{ letterSpacing: '0.3em' }}
        >
          Curated For You
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
          Collections
        </h1>
        <p className="text-charcoal/60 max-w-lg mx-auto">
          Explore our thoughtfully curated collections, each designed to complement your unique style.
        </p>
      </section>

      {/* Collections grid */}
      <section className="section-padding section-margin">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group"
              >
                <div className="aspect-[4/5] bg-charcoal/5 overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-charcoal/10 to-charcoal/5 
                                  flex items-center justify-center">
                    <span className="font-serif text-6xl text-charcoal/10 uppercase" style={{ letterSpacing: '0.2em' }}>
                      {category.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h2 className="font-serif text-2xl text-charcoal group-hover:text-gold-700 transition-colors">
                  {category.name}
                </h2>
                <p className="text-sm text-charcoal/60 mt-1">{category.description}</p>
              </Link>
            ))}
          </div>

          {/* Featured collection */}
          <div className="mt-16 md:mt-20">
            <div className="text-center mb-10">
              <p 
                className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
                style={{ letterSpacing: '0.3em' }}
              >
                Featured
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                The Gift Collection
              </h2>
              <div className="w-12 h-px bg-gold-500 mx-auto mt-4" />
            </div>

            <div className="bg-charcoal/5 p-8 md:p-12 text-center">
              <p className="text-charcoal/70 max-w-2xl mx-auto mb-6 leading-relaxed">
                Finding the perfect gift has never been easier. Our curated gift sets 
                combine our most beloved pieces in beautiful packaging, ready to give 
                and guaranteed to delight.
              </p>
              <Link to="/shop?category=sets" className="btn-gold inline-block">
                Shop Gift Sets
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
