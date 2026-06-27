import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="bg-velmora-pearl">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-velmora-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-velmora-gold text-xs font-medium tracking-editorial uppercase mb-4">Our Story</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-velmora-charcoal tracking-wide leading-tight">
            Jewelry with intention
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="font-serif text-xl sm:text-2xl text-velmora-ink leading-relaxed text-center mb-12">
              Velmora was founded with a simple belief: fine jewelry should be accessible, sustainable, and designed for real life.
            </p>
            <div className="space-y-6 text-sm text-velmora-ink leading-relaxed">
              <p>
                Our founder started Velmora after years of working in the fine jewelry industry, watching talented artisans create beautiful pieces that were priced far beyond what most people could afford. She saw an opportunity to bridge that gap — to create demi-fine jewelry that looked and felt luxurious, without the luxury price tag.
              </p>
              <p>
                Every Velmora piece is designed in our California studio and hand-finished in small batches by skilled artisans. We use 18K gold-plated brass and ethically sourced crystals, chosen for their brilliance and durability.
              </p>
              <p>
                We believe in quiet luxury — jewelry that doesn't shout, but speaks. Pieces that become part of your daily wardrobe and your most cherished memories. That's why we call it "crafted to be treasured."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-velmora-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <h3 className="font-serif text-xl font-semibold text-velmora-charcoal mb-3">Thoughtful Design</h3>
              <p className="text-sm text-velmora-ink leading-relaxed">
                Every piece is designed to be worn daily — versatile enough for the office, elegant enough for evening.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-semibold text-velmora-charcoal mb-3">Ethical Materials</h3>
              <p className="text-sm text-velmora-ink leading-relaxed">
                We source our materials responsibly and work with artisans who are paid fairly for their craft.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-semibold text-velmora-charcoal mb-3">Built to Last</h3>
              <p className="text-sm text-velmora-ink leading-relaxed">
                Quality materials and careful construction mean your Velmora pieces will be treasured for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-velmora-charcoal tracking-wide mb-6">
            Find your piece
          </h2>
          <p className="text-sm text-velmora-ink leading-relaxed mb-8">
            Explore our collection and discover jewelry that feels as special as the moments you wear it for.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-velmora-charcoal text-velmora-white text-xs font-semibold tracking-editorial uppercase hover:bg-velmora-gold transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
