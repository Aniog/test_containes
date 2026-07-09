import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="container-velmora">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square md:aspect-[4/5] bg-velmora-ivory overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-velmora-gold/20 m-8 pointer-events-none" />
          </div>

          {/* Right: Text Content */}
          <div className="max-w-lg">
            <p className="text-velmora-gold text-sm tracking-widest mb-6 font-light">
              OUR STORY
            </p>

            <h2
              className="font-serif text-4xl md:text-5xl mb-8 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Quiet Luxury,
              <br />
              <em className="italic text-velmora-gold">Timelessly Crafted</em>
            </h2>

            <div className="space-y-6 text-velmora-charcoal/80 leading-relaxed">
              <p>
                At Velmora, we believe that true luxury doesn't shout—it whispers.
                Our pieces are designed for the woman who appreciates the finer details,
                who understands that elegance lies in simplicity.
              </p>
              <p>
                Each piece in our collection is crafted with meticulous attention to detail,
                using 18K gold plating over high-quality brass. We prioritize hypoallergenic
                materials, ensuring our jewelry is as comfortable as it is beautiful.
              </p>
              <p>
                From our studio to your jewelry box, every Velmora piece carries a story
                of craftsmanship, sustainability, and timeless design.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-block mt-10 border-b-2 border-velmora-gold text-velmora-charcoal pb-1 text-sm tracking-wide hover:text-velmora-gold transition-colors"
            >
              DISCOVER OUR JOURNEY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
