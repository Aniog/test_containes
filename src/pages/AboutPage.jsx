import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main>
      <section className="section-container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Story</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Quiet luxury, made intentional.</h1>
          <p className="mt-6 text-sm leading-relaxed text-ink-secondary md:text-base">
            Velmora was founded with a single idea: fine jewelry should feel as good as it looks. We design every piece in-house,
            using 18K gold-plated materials and responsibly sourced crystals. Each design is tested for comfort, durability,
            and everyday elegance—so you can wear it from morning meetings to evening gatherings without a second thought.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
            We believe in fewer, better things. That means thoughtful materials, considered packaging, and a customer experience
            that feels as premium as the jewelry itself.
          </p>
          <Link to="/shop" className="btn-primary mt-8">Shop the Collection</Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
