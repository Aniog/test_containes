import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1920&h=1080&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="hairline w-16 mx-auto mb-12" />

          <div className="prose prose-lg mx-auto text-velmora-700 leading-relaxed space-y-6">
            <p className="font-serif text-2xl sm:text-3xl text-center leading-relaxed text-charcoal">
              Velmora was born from a simple belief: that luxury should be felt every day, not saved for special occasions.
            </p>

            <p>
              Founded in 2020, we set out to create demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. Our pieces are crafted with 18K gold plating over sterling silver, offering the rich look and feel of solid gold at a price that makes everyday luxury possible.
            </p>

            <p>
              Every Velmora piece begins as a sketch in our studio, where our designers balance timeless silhouettes with modern sensibility. We believe jewelry should be an extension of who you are — subtle enough for the office, striking enough for the evening.
            </p>

            <h2 className="font-serif text-2xl text-charcoal mt-12 mb-6">Our Materials</h2>

            <p>
              We use only sterling silver (925) as our base metal, ensuring durability and hypoallergenic properties. Our 18K gold plating is applied using advanced electroplating techniques, creating a thick, even layer that resists tarnishing and maintains its luster.
            </p>

            <p>
              All our crystals are ethically sourced, and our packaging is made from recycled materials. We believe beautiful jewelry shouldn't come at the earth's expense.
            </p>

            <h2 className="font-serif text-2xl text-charcoal mt-12 mb-6">Our Promise</h2>

            <p>
              Every piece comes with our 30-day happiness guarantee. If you're not completely in love with your Velmora jewelry, return it for a full refund — no questions asked.
            </p>

            <p>
              We're here to help you find pieces that you'll reach for every single day. Because the best jewelry isn't the one you save for special occasions — it's the one that makes every day feel special.
            </p>
          </div>

          <div className="hairline w-16 mx-auto mt-12 mb-12" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-charcoal">50K+</p>
              <p className="text-sm text-velmora-500 mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-charcoal">200+</p>
              <p className="text-sm text-velmora-500 mt-1">Unique Designs</p>
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-charcoal">4.9</p>
              <p className="text-sm text-velmora-500 mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
