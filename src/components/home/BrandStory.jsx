import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 max-w-6xl mx-auto">
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative aspect-[3/4] max-w-lg mx-auto md:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1610444369046-24ba08edab7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Jewelry design process" 
                className="w-full h-full object-cover rounded-t-full"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Designed for the <br />everyday aesthetic.
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed font-light text-lg">
              At Velmora, we believe that fine jewelry shouldn't be hidden away in a box waiting for a special occasion. We create demi-fine pieces crafted from premium materials—designed to be lived in, layered, and loved every single day.
            </p>
            <Link 
              to="/about" 
              className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-primary hover:border-primary transition-colors duration-300"
            >
              Discover Our Story
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
