import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-[#faf9f6]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#c9a96e] opacity-10 hidden md:block" />
          </div>

          {/* Text Side */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Our Story
            </h2>
            <div className="space-y-6 font-light text-[#2d2d2d] leading-relaxed">
              <p>
                At Velmora, we believe that jewelry should be as enduring as the 
                moments it celebrates. Each piece in our collection is thoughtfully 
                designed to transition seamlessly from everyday elegance to life's 
                most cherished occasions.
              </p>
              <p>
                Our demi-fine pieces are crafted with 18K gold plating over 
                high-quality brass, ensuring each creation maintains its luster 
                while remaining accessible. We prioritize hypoallergenic materials 
                because beauty should never compromise comfort.
              </p>
              <p>
                Whether you're marking a milestone or simply celebrating yourself, 
                Velmora creates pieces meant to be treasured, layered, and loved 
                for years to come.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-10 text-sm uppercase tracking-wider text-[#c9a96e] hover:text-[#b8945a] transition-colors border-b border-[#c9a96e] pb-1"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
