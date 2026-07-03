import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BrandStorySection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="velmora-section overflow-hidden" style={{ backgroundColor: 'var(--velmora-warm-white)' }}>
      <div className="velmora-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div 
            ref={ref}
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
              {/* Decorative element */}
              <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 hidden md:block"
                style={{ 
                  border: '1px solid var(--velmora-gold)',
                  opacity: 0.3
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`order-first lg:order-last transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p 
              className="text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: 'var(--velmora-gold)' }}
            >
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Craft Meets<br />Intention
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed" style={{ color: 'var(--velmora-walnut)' }}>
                Velmora was born from a simple belief: everyone deserves to feel adorned. 
                We create jewelry that bridges the gap between fashion and fine — pieces that 
                feel special without the intimidating price tag.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--velmora-walnut)' }}>
                Each design starts with an intention — a feeling we want you to carry. 
                Whether it's the confidence of a statement piece or the quiet joy of your 
                everyday favorites, our pieces are made to be part of your story.
              </p>
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider transition-all hover:gap-4 group"
              style={{ color: 'var(--velmora-charcoal)' }}
            >
              Learn More About Us
              <ArrowRight 
                size={16} 
                strokeWidth={1.5} 
                className="transform group-hover:translate-x-1 transition-transform duration-300" 
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
