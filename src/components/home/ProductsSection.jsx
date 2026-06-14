import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../../data/content';

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
            Products We Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wide Range of Product Categories
          </h2>
          <p className="text-lg text-[#6B7280]">
            We have extensive experience sourcing products across multiple industries. Tell us what you need, and we will find the right suppliers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productCategories.map((category, index) => (
            <Link
              key={category.id}
              to="/products"
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] group-hover:from-[#2D5A87] group-hover:to-[#1E3A5F] transition-all duration-300" />
              
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-semibold text-sm md:text-base mb-2 group-hover:text-[#E67E22] transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-white/60 text-xs hidden md:block">
                  {category.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#E67E22]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">View Details</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#1E3A5F] hover:text-white transition-all duration-200"
          >
            Explore All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;