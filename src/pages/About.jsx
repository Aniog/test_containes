import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <nav className="mb-8 text-xs text-brand-muted">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-ink">About</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-wide text-brand-ink">Our Story</h1>
          <div className="mt-6 w-16 h-px bg-brand-gold" />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="https://placehold.co/800x1000/2C2C2C/C9A96E?text=Velmora+founder+story"
              alt="Velmora founder"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-brand-ink">
              Jewelry Made for Real Life
            </h2>
            <div className="mt-6 w-12 h-px bg-brand-gold" />
            <div className="mt-6 space-y-4 text-brand-charcoal leading-relaxed">
              <p>
                Velmora Fine Jewelry was founded in 2020 with a clear mission: to create demi-fine jewelry that bridges the gap 
                between everyday wear and special occasions. We believe that beautiful jewelry shouldn't be reserved for 
                rare events — it should be part of your daily story.
              </p>
              <p>
                Each piece is designed in our Los Angeles studio and crafted by skilled artisans using 18K gold-plated brass, 
                hypoallergenic materials, and ethically sourced crystals. We obsess over the details so you can simply enjoy 
                wearing them.
              </p>
              <p>
                From our family to yours — every Velmora piece arrives in signature packaging, ready to gift or treat yourself.
              </p>
            </div>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-brand-gold hover:text-brand-gold-dark transition-colors"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { title: 'Ethically Crafted', text: 'Responsibly sourced materials and transparent supply chains.' },
            { title: 'Designed to Last', text: '18K gold plating over hypoallergenic brass for daily wear.' },
            { title: 'Gift Ready', text: 'Beautiful packaging with every order, free worldwide shipping.' },
          ].map((item) => (
            <div key={item.title} className="text-center p-6">
              <h3 className="font-serif text-xl font-medium tracking-wide text-brand-ink">{item.title}</h3>
              <div className="mt-3 mx-auto w-8 h-px bg-brand-gold" />
              <p className="mt-4 text-sm text-brand-charcoal leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
