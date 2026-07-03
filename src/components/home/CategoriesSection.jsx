// Velmora Fine Jewelry - Shop by Category Section
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#B8860B] mb-3"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Explore
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#1A1A1A] font-normal"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Shop by Category
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collections/${category.id}`}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Border */}
              <div className="absolute inset-0 border border-white/20 m-4 md:m-6 group-hover:border-white/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3
                  className="text-2xl md:text-3xl text-white font-normal mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {category.name}
                </h3>
                <p
                  className="text-xs text-white/70 uppercase tracking-[0.2em] transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 delay-75"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {category.description}
                </p>
                
                {/* Shop Now Link */}
                <span
                  className="mt-6 text-xs text-white uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-150"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
