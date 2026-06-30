import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image */}
        <div className="relative aspect-square lg:aspect-auto lg:h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
            Our Story
          </h2>
          <div className="divider w-16 my-6" />
          <p className="text-muted text-lg leading-relaxed mb-6">
            At Velmora, we believe that jewelry should be as unique as the moments it marks. 
            Founded with a passion for creating demi-fine pieces that bridge the gap between 
            luxury and accessibility, each design is thoughtfully crafted to become a treasured 
            part of your everyday.
          </p>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Using 18k gold plating and hypoallergenic materials, we create jewelry that not 
            only looks beautiful but feels comfortable for all-day wear. From self-purchase 
            treats to meaningful gifts, Velmora pieces are designed to be cherished.
          </p>
          <Link
            to="/about"
            className="btn-secondary inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
