import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From studs to statement pieces',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    slug: 'earrings'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layer, stack, shine',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
    slug: 'necklaces'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Effortless everyday elegance',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    slug: 'huggies'
  }
];

export default function CategoryTiles() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="velmora-section" style={{ backgroundColor: 'var(--velmora-cream)' }}>
      <div className="velmora-container">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p 
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--velmora-gold)' }}
          >
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Find Your Style
          </h2>
        </div>

        {/* Category Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.slug}`}
              className={`group relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className="relative"
                style={{ aspectRatio: '4/5' }}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(31,28,26,0.7) 0%, rgba(31,28,26,0.2) 50%, rgba(31,28,26,0) 100%)',
                    opacity: 0.6
                  }}
                />
                
                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: 'rgba(31,28,26,0.3)' }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {category.name}
                  </h3>
                  <p 
                    className="text-sm text-white/80 mb-4 opacity-0 group-hover:opacity-100 transform transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                  >
                    {category.description}
                  </p>
                  <div 
                    className="flex items-center gap-2 text-sm uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transform transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                    style={{ transitionDelay: '100ms' }}
                  >
                    Shop Now
                    <ArrowRight size={16} strokeWidth={1.5} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
