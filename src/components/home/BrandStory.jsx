import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-[#F1EDE6] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80"
              alt="Velmora atelier — hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Since 2018</span>
            <h2 className="font-serif text-3xl mt-2 mb-6">Our Story</h2>
            
            <div className="space-y-4 text-[#6B645C] leading-relaxed text-[15px]">
              <p>
                Velmora was born from a quiet conviction: that the jewelry we wear every day should feel as meaningful as the moments we remember.
              </p>
              <p>
                We work with skilled artisans to create demi-fine pieces in 18K gold plate — refined enough for the most special occasions, durable enough for the everyday.
              </p>
              <p>
                Each piece is designed to be passed down, not thrown away. To be worn, loved, and treasured.
              </p>
            </div>

            <Link
              to="/journal"
              className="inline-block mt-8 text-sm tracking-[0.06em] uppercase border-b border-[#B89778] pb-0.5 text-[#B89778] hover:text-[#8C6F52]"
            >
              Read Our Journal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;