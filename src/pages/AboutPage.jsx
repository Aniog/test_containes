import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-velmora-cream">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Story</h1>
          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Crafting demi-fine jewelry that celebrates the beauty of everyday moments
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" 
              alt="Velmora jewelry craftsmanship"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl mb-8">Quiet Luxury, Timeless Design</h2>
            <p className="font-sans text-gray-700 mb-6 leading-relaxed">
              Founded with a passion for accessible elegance, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine jewelry. Each piece is thoughtfully 
              designed to be treasured and worn every day.
            </p>
            <p className="font-sans text-gray-700 mb-6 leading-relaxed">
              We use 18K gold plating and hypoallergenic materials to ensure our jewelry is 
              not only beautiful but comfortable for sensitive skin. Our pieces are crafted to 
              last, using techniques that honor traditional jewelry-making while embracing modern aesthetics.
            </p>
            <p className="font-sans text-gray-700 mb-8 leading-relaxed">
              Whether you're treating yourself or finding the perfect gift, Velmora offers 
              jewelry that tells a story — your story.
            </p>
            <Link to="/shop" className="btn-gold">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-velmora-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Quality', description: '18K gold plating, hypoallergenic materials, and rigorous quality control ensure each piece meets our high standards.' },
              { title: 'Sustainability', description: 'We are committed to ethical sourcing and sustainable practices, minimizing our environmental impact.' },
              { title: 'Accessibility', description: 'Demi-fine jewelry that offers the look and feel of fine jewelry at a price point that is accessible.' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                <p className="font-sans text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="font-serif text-4xl mb-6">Join the Velmora Community</h2>
        <p className="font-sans text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, styling tips, and first access to new collections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-3 border border-velmora-border focus:border-velmora-gold outline-none"
          />
          <button className="btn-gold whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
