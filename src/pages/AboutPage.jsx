import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&h=800&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[var(--color-gold-300)]">Est. 2024</p>
          <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl">Our Story</h1>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-serif text-3xl md:text-4xl mb-6">Where Elegance Meets Accessibility</h2>
          <div className="w-12 h-px bg-[var(--color-gold-400)] mx-auto mb-8" />
          <p className="text-sm leading-relaxed text-[var(--color-velmora-700)] mb-6">
            Velmora was born from a simple frustration: why should beautiful, well-crafted jewelry cost a fortune? 
            We believe that everyone deserves to feel adorned in pieces that reflect their personal style, 
            without compromising on quality or breaking the bank.
          </p>
          <p className="text-sm leading-relaxed text-[var(--color-velmora-700)] mb-6">
            Our name comes from the Latin "velum" (veil) and "aura" (golden light) — capturing the essence 
            of what we create: jewelry that catches the light, frames your features, and adds a quiet 
            luminosity to every moment.
          </p>
          <p className="text-sm leading-relaxed text-[var(--color-velmora-700)]">
            Each Velmora piece is crafted with 18K gold plating over quality brass, designed for daily wear 
            and built to last. We work directly with skilled artisans who share our commitment to ethical 
            production and sustainable practices. The result? Demi-fine jewelry that rivals designer 
            collections at a fraction of the price.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { title: '18K Gold Plated', desc: 'Every piece features a thick layer of 18K gold over quality brass for lasting beauty.' },
            { title: 'Hypoallergenic', desc: 'Nickel-free and safe for sensitive skin. Jewelry you can wear with confidence.' },
            { title: 'Ethically Made', desc: 'Partnering with artisans who share our values of fair wages and sustainable practices.' },
          ].map((item) => (
            <div key={item.title} className="p-8 md:p-12 text-center border-b md:border-b-0 md:border-r border-[var(--color-velmora-200)] last:border-0">
              <h3 className="product-name text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-[var(--color-velmora-600)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[var(--color-cream)] text-center">
        <h2 className="heading-serif text-3xl md:text-4xl mb-6">Discover the Collection</h2>
        <div className="w-12 h-px bg-[var(--color-gold-400)] mx-auto mb-8" />
        <Link to="/shop" className="btn-outline">Shop All Pieces</Link>
      </section>
    </main>
  );
}
