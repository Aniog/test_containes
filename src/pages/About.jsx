import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
            Our Story
          </h1>
          <div className="hairline w-24 mx-auto" />
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="relative overflow-hidden aspect-[4/5] bg-velmora-warm-gray">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-lg">
            <h2 className="font-serif text-3xl mb-6 tracking-wide">
              Quiet Luxury,<br />
              <span className="italic font-light">Timeless Design</span>
            </h2>
            
            <div className="hairline w-16 mb-8" />
            
            <p className="text-velmora-text-light leading-relaxed mb-6">
              Velmora was born from a simple belief: that jewelry should be treasured, not just worn. 
              We create demi-fine pieces that bridge the gap between accessible luxury and timeless elegance.
            </p>
            
            <p className="text-velmora-text-light leading-relaxed mb-6">
              Each piece in our collection is thoughtfully designed and crafted using 18k gold plating 
              over high-quality brass. We prioritize hypoallergenic materials, ensuring our jewelry is 
              safe for sensitive skin and comfortable for everyday wear.
            </p>

            <p className="text-velmora-text-light leading-relaxed mb-8">
              Our designs draw inspiration from the modern woman's life — pieces that transition seamlessly 
              from office to dinner, from casual to celebratory. We believe that true elegance doesn't 
              shout; it whispers.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-serif text-2xl mb-2">18K</h3>
                <p className="text-sm text-velmora-text-light">Gold Plating</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">100%</h3>
                <p className="text-sm text-velmora-text-light">Hypoallergenic</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">30</h3>
                <p className="text-sm text-velmora-text-light">Day Returns</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">1K+</h3>
                <p className="text-sm text-velmora-text-light">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-velmora-warm-gray py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl mb-8 tracking-wide">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-xl mb-3">Quality</h3>
                <p className="text-sm text-velmora-text-light">
                  We use only the finest materials and rigorous quality control to ensure each piece meets our standards.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Sustainability</h3>
                <p className="text-sm text-velmora-text-light">
                  Our packaging is 100% recyclable, and we're committed to reducing our environmental footprint.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Community</h3>
                <p className="text-sm text-velmora-text-light">
                  We celebrate the women who wear our pieces and share their stories with our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
