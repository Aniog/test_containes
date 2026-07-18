import React from 'react';

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-velmora">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-cream-dark">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-gold/30 hidden lg:block" />
          </div>

          {/* Text Side */}
          <div className="lg:pl-12">
            <div className="w-16 h-px bg-gold mb-8" />
            <h2 className="heading-serif text-4xl md:text-5xl mb-8">
              Our Story
            </h2>
            <div className="space-y-6 body-text">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions or come with an impossible price tag.
              </p>
              <p>
                We create demi-fine pieces that bridge the gap between precious and accessible — using 18K gold plating, careful craftsmanship, and designs that feel both timeless and modern.
              </p>
              <p>
                Each piece is designed to be lived in, loved, and treasured. From morning coffee to evening celebrations, Velmora is jewelry for your real life.
              </p>
            </div>
            <a
              href="/about"
              className="btn-secondary inline-block mt-10"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
