import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-90">Est. 2024</p>
          <h1 className="serif-heading text-5xl md:text-7xl mb-6">Our Story</h1>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto" />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[var(--color-warm-white)]">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-lg mx-auto">
            <p className="serif-heading text-2xl md:text-3xl leading-relaxed mb-8 text-center">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible to everyone.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-6">
              Founded in 2024, we set out to create demi-fine jewelry that bridges the gap between everyday accessories and luxury pieces. Each design is crafted with 18K gold plating over sterling silver, ensuring lasting beauty at a price that makes sense.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-6">
              Our design philosophy centers on timeless elegance with a modern twist. We draw inspiration from nature, architecture, and the quiet moments of everyday life. Every piece in our collection is designed to be worn daily, transitioning effortlessly from morning meetings to evening gatherings.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-6">
              We work with skilled artisans who share our commitment to quality and ethical production. Our pieces are hypoallergenic, nickel-free, and made to last. We believe that jewelry should enhance your natural beauty, not overpower it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="container-wide">
          <h2 className="serif-heading text-4xl md:text-5xl text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--color-gold)] rounded-full">
                <span className="serif-heading text-2xl text-[var(--color-gold)]">Q</span>
              </div>
              <h3 className="serif-heading text-2xl mb-4">Quality First</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">
                Every piece undergoes rigorous quality checks. We use only the finest materials and work with artisans who share our standards.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--color-gold)] rounded-full">
                <span className="serif-heading text-2xl text-[var(--color-gold)]">E</span>
              </div>
              <h3 className="serif-heading text-2xl mb-4">Ethical Sourcing</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">
                We source our materials responsibly and ensure fair working conditions throughout our supply chain.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--color-gold)] rounded-full">
                <span className="serif-heading text-2xl text-[var(--color-gold)]">A</span>
              </div>
              <h3 className="serif-heading text-2xl mb-4">Accessible Luxury</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">
                We believe luxury shouldn't come with a luxury price tag. Our direct-to-consumer model keeps prices fair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-charcoal)] text-white text-center">
        <div className="container-wide">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6">Discover the Collection</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Explore our curated selection of demi-fine jewelry, designed to be treasured.
          </p>
          <Link to="/shop" className="inline-block bg-[var(--color-gold)] text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-[var(--color-gold-dark)] transition-colors">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
