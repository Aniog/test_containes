import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Left */}
          <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Every piece tells<br />
              <span className="font-normal">a story</span>
            </h2>
            
            <div className="space-y-4 text-velmora-text-muted leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be as unique as the moments it marks. 
                Our demi-fine pieces are crafted with intention, using 18K gold plating over 
                high-quality brass, designed to be worn, loved, and treasured.
              </p>
              <p>
                From our studio to your jewelry box, each piece undergoes careful crafting 
                and quality checks. We're committed to creating beautiful, accessible luxury 
                that fits seamlessly into your everyday life.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-block text-sm uppercase tracking-ultra-wide font-medium 
                       text-velmora-charcoal border-b-2 border-velmora-gold pb-1
                       hover:text-velmora-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
