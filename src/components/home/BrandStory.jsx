import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';

const BrandStory = () => {
  const [imageRef, imageVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-[#F5F0E8]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div 
            ref={imageRef}
            className={`relative aspect-[4/5] rounded-lg overflow-hidden transition-all duration-700 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#C9A962]/30 rounded-lg" />
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`flex flex-col justify-center lg:pl-8 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="text-xs uppercase tracking-widest text-[#C9A962] mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-[#8B8178]">
              <p className="leading-relaxed">
                Founded in 2019, Velmora was born from a simple belief: everyone 
                deserves to wear beautiful jewelry without compromising on quality 
                or breaking the bank.
              </p>
              <p className="leading-relaxed">
                We work directly with skilled artisans who share our commitment to 
                excellence, using ethically sourced materials and traditional 
                techniques to create pieces that feel both modern and timeless.
              </p>
              <p className="leading-relaxed">
                Every piece in our collection is designed to be lived in, loved, 
                and passed down — jewelry that's meant to mark life's most precious 
                moments.
              </p>
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wider text-[#1A1A1A] hover:text-[#C9A962] transition-colors group"
            >
              <span>Discover More</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
