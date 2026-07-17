import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=800&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="serif-heading text-5xl md:text-7xl mb-4">Our Story</h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">Where tradition meets modern elegance</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="serif-heading text-2xl md:text-3xl leading-relaxed mb-8 text-foreground/80">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2024, we set out to create demi-fine pieces that bridge the gap between costume jewelry and fine jewelry. Each design is thoughtfully crafted with 18K gold plating over recycled brass, ensuring both beauty and sustainability.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our design team draws inspiration from nature, architecture, and the quiet moments of everyday life. The result is jewelry that feels both timeless and contemporary — pieces you'll reach for again and again.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're committed to ethical production, working with artisans who share our values of quality craftsmanship and fair labor practices. Every piece is designed in-house and produced in small batches to ensure the highest standards.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t">
            <div className="text-center">
              <h3 className="serif-heading text-xl mb-3">Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                18K gold plating, hypoallergenic materials, and rigorous quality checks on every piece.
              </p>
            </div>
            <div className="text-center">
              <h3 className="serif-heading text-xl mb-3">Sustainability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recycled brass, eco-friendly packaging, and a commitment to reducing our environmental footprint.
              </p>
            </div>
            <div className="text-center">
              <h3 className="serif-heading text-xl mb-3">Accessibility</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Luxury design at accessible prices. Because everyone deserves to feel beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
