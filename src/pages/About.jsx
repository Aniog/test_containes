import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Gem, Truck, Leaf } from 'lucide-react';

const values = [
  {
    icon: Gem,
    title: 'Exceptional Quality',
    description: 'Every piece is crafted with 18K gold plating over hypoallergenic metals, set with carefully selected stones that meet our exacting standards.'
  },
  {
    icon: Heart,
    title: 'Thoughtful Design',
    description: 'Our designs balance timeless elegance with contemporary sensibility. Each piece is meant to be worn, loved, and passed on.'
  },
  {
    icon: Truck,
    title: 'Free Worldwide Shipping',
    description: 'We believe beautiful jewelry should be accessible to everyone, everywhere. That\'s why we offer free shipping on all orders.'
  },
  {
    icon: Leaf,
    title: 'Responsible Luxury',
    description: 'We\'re committed to ethical sourcing and sustainable practices. Our packaging is plastic-free, and we partner with verified suppliers.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] text-[var(--color-gold-primary)] mb-4">
            OUR STORY
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)] mb-6">
            Beauty within reach
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Founded in 2019, Velmora began with a simple belief: every woman deserves to wear jewelry that makes her feel extraordinary, without the extraordinary price tag.
          </p>
        </div>
      </section>

      {/* Mission Image */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80"
              alt="Velmora jewelry collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs tracking-[0.3em] text-[var(--color-gold-primary)] mb-3">
              WHAT WE BELIEVE
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-bg-secondary)] rounded-full flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-[var(--color-gold-primary)]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-6">
            Explore our collection
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Discover jewelry that\'s designed to be treasured. From everyday elegance to special occasion sparkle.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-[var(--color-text-primary)] text-white font-sans text-sm tracking-wider hover:bg-[var(--color-text-secondary)] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
