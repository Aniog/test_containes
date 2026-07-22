export default function About() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-velmora-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-velmora-cream mb-4">
            Our Story
          </h1>
          <p className="text-velmora-cream/80 max-w-xl mx-auto">
            Crafted with intention, designed to be treasured
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg mx-auto">
          <p className="text-velmora-gray leading-relaxed mb-8 text-xl font-serif text-velmora-charcoal">
            Velmora was born from a simple belief: jewelry should be more than an accessory. It should be a memory, a statement, a treasure to be passed down through generations.
          </p>
          
          <p className="text-velmora-gray leading-relaxed mb-8">
            Founded in 2020, we set out to create a collection of demi-fine jewelry that bridges the gap between everyday wearability and timeless sophistication. Each piece is thoughtfully designed with premium materials and meticulous attention to detail.
          </p>

          <p className="text-velmora-gray leading-relaxed mb-8">
            Our name, Velmora, evokes elegance and refinement. We believe in quiet luxury—the kind that doesn't shout but whispers sophistication. Our pieces are designed for the modern woman who values quality over quantity, and elegance without excess.
          </p>

          <h2 className="font-serif text-3xl text-velmora-charcoal mt-12 mb-6">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="font-serif text-xl text-velmora-charcoal mb-3">Quality First</h3>
              <p className="text-velmora-gray">
                We use only the finest materials—18K gold plating, genuine gemstones, and premium base metals—to ensure each piece stands the test of time.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-velmora-charcoal mb-3">Sustainable Luxury</h3>
              <p className="text-velmora-gray">
                We're committed to responsible sourcing and sustainable practices. Every piece is crafted with care for both quality and the planet.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-velmora-charcoal mb-3">Timeless Design</h3>
              <p className="text-velmora-gray">
                Our designs transcend trends. We create pieces that become cherished staples in your jewelry collection for years to come.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-velmora-charcoal mb-3">Accessible Elegance</h3>
              <p className="text-velmora-gray">
                We believe everyone deserves to feel special. Our price points make premium jewelry accessible without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-velmora-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-6">
            Discover Our Collection
          </h2>
          <p className="text-velmora-cream/70 mb-8 max-w-xl mx-auto">
            Explore our curated selection of premium demi-fine jewelry, each piece designed to be treasured.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-velmora-gold text-velmora-charcoal font-semibold tracking-widest text-sm hover:bg-velmora-cream transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </section>
    </div>
  );
}