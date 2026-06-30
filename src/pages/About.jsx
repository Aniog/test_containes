import React from 'react';

export default function About() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] bg-velmora-espresso flex items-center justify-center overflow-hidden">
        <img
          alt="Velmora Atelier"
          data-strk-img-id="about-hero-img"
          data-strk-img="Velmora Fine Jewelry atelier craftsmanship"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-white">Our Story</h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 text-velmora-charcoal leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-velmora-espresso mb-4">Fine jewelry should be lived in</h2>
              <p className="text-sm text-velmora-warm-gray">
                Velmora was founded with a simple belief: every woman deserves the weight and warmth of fine craftsmanship — not just on special occasions, but every single day. We design demi-fine pieces that bridge the gap between costume and heirloom, at a price that makes collecting them a joy, not a commitment.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-velmora-espresso mb-4">Crafted with care</h2>
              <p className="text-sm text-velmora-warm-gray">
                Every Velmora piece is designed in our atelier and plated in luminous 18K gold over brass. We work exclusively with ethical artisans who share our commitment to quality. Each stone is hand-set, each surface polished by hand. The result: jewelry that feels substantial, catches the light, and lasts.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-velmora-espresso mb-4">Kind to skin & planet</h2>
              <p className="text-sm text-velmora-warm-gray">
                All our metals are nickel-free and hypoallergenic. We use recycled brass wherever possible and minimize plastic in our packaging. Luxury should never come at a cost to your skin or the planet — and with Velmora, it doesn't.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
