import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block font-sans text-xs tracking-ultra-wide text-gold uppercase mb-4">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Where Craft Meets <br />
              <span className="italic text-gold">Elegance</span>
            </h1>
            <p className="font-sans text-white/70 text-lg leading-relaxed">
              We believe every woman deserves jewelry that makes her feel extraordinary. Velmora was born from this simple belief.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-6">Our Mission</h2>
              <p className="font-sans text-warmGray leading-relaxed mb-6">
                At Velmora, we're on a mission to make luxury accessible. We craft demi-fine pieces that marry the warmth of real gold with thoughtful, modern design—pieces you can wear every day and treasure forever.
              </p>
              <p className="font-sans text-warmGray leading-relaxed">
                Each piece is designed in our studio and created with care, using ethically sourced materials and 18K gold plating that stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-charcoal mb-4">What We Believe</h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Over Quantity',
                description: 'We create fewer pieces, but every one is made to last and designed to become a treasured part of your daily story.'
              },
              {
                title: 'Ethical Craftsmanship',
                description: 'All our materials are ethically sourced, and we work with workshops that share our commitment to fair practices.'
              },
              {
                title: 'Effortless Luxury',
                description: 'Luxury should feel accessible and personal. Our pieces are designed to make you feel extraordinary, not overwhelmed.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-xl text-charcoal mb-3">{value.title}</h3>
                <p className="font-sans text-warmGray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-white mb-4">Ready to Explore?</h2>
          <p className="font-sans text-white/80 mb-8">
            Discover jewelry that feels like it was made just for you.
          </p>
          <Link to="/collection">
            <Button variant="secondary" className="bg-white text-gold border-white hover:bg-ivory">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
