import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="section-padding py-10 md:py-16 text-center bg-charcoal/5">
        <p 
          className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
          style={{ letterSpacing: '0.3em' }}
        >
          Our Story
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
          About Velmora
        </h1>
      </section>

      {/* Story section */}
      <section className="section-padding section-margin">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image placeholder */}
            <div className="aspect-[4/5] bg-charcoal/5">
              <div className="w-full h-full bg-gradient-to-br from-charcoal/10 to-charcoal/5" />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                Jewelry That Feels Like You
              </h2>
              <div className="w-12 h-px bg-gold-500 mb-6" />
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Velmora was founded in 2022 with a clear mission: to create beautiful, 
                  high-quality jewelry that doesn't require a luxury budget. We believe 
                  every woman deserves to feel special every day.
                </p>
                <p>
                  Our pieces bridge the gap between costume jewelry and fine jewelry. 
                  Using premium 18K gold plating over carefully selected base metals, 
                  we create demi-fine pieces that look and feel luxurious, last through 
                  countless wearings, and remain accessible.
                </p>
                <p>
                  We work directly with skilled artisans who share our commitment to 
                  quality and craftsmanship. By cutting out the middlemen and traditional 
                  retail markups, we pass the savings directly to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal/5 section-padding section-margin">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Our Values
            </h2>
            <div className="w-12 h-px bg-gold-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Every piece is crafted with premium materials and meticulous attention to detail. We never compromise on quality.',
              },
              {
                title: 'Accessible Luxury',
                description: 'Beautiful jewelry shouldn\'t require a fortune. We create premium pieces at honest prices by selling directly to you.',
              },
              {
                title: 'Sustainable Practices',
                description: 'We\'re committed to responsible sourcing and sustainable packaging. Small steps toward a better future.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="font-serif text-xl text-charcoal mb-3">{value.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-margin text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
          Ready to Find Your Piece?
        </h2>
        <p className="text-charcoal/60 mb-8 max-w-lg mx-auto">
          Explore our collection and discover jewelry that speaks to you.
        </p>
        <Link to="/shop" className="btn-gold inline-block">
          Shop the Collection
        </Link>
      </section>
    </main>
  );
}
