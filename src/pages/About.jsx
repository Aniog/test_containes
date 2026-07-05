import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <main className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-4">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Where Every Piece
              <span className="block italic text-gold-600">Tells a Story</span>
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Founded with a passion for accessible luxury, Velmora was born from the belief that every woman deserves to wear jewelry that makes her feel extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-warmWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                The Beginning
              </h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Velmora began in a small studio, with a simple vision: create jewelry that bridges the gap between high-end luxury and everyday wearability. Our founder, inspired by vintage heirlooms and modern minimalism, set out to craft pieces that would become cherished keepsakes.
                </p>
                <p>
                  Each Velmora piece is designed with intention, using premium materials including 18K gold plating and hypoallergenic metals. We believe in quality that lasts, jewelry that can be worn every day and passed down through generations.
                </p>
              </div>
              <div className="hairline-divider" />
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <p className="font-serif text-3xl text-gold-600">5+</p>
                  <p className="text-sm text-charcoal/60 mt-1">Years of Craft</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl text-gold-600">50K+</p>
                  <p className="text-sm text-charcoal/60 mt-1">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl text-gold-600">18K</p>
                  <p className="text-sm text-charcoal/60 mt-1">Gold Plated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-3">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Every piece undergoes rigorous quality checks. We never compromise on materials or craftsmanship.',
              },
              {
                title: 'Sustainable Beauty',
                description: 'We source responsibly and package thoughtfully, because beauty should not cost the earth.',
              },
              {
                title: 'Inclusive Luxury',
                description: 'Elegance should be accessible. Premium jewelry at prices that make sense.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-warmWhite rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{value.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal text-warmWhite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Explore Our Collection
          </h2>
          <p className="text-warmWhite/70 mb-8">
            Discover jewelry that celebrates the everyday moments and marks the milestones.
          </p>
          <Link to="/shop">
            <button className="px-10 py-4 bg-gold-500 text-white text-sm tracking-extra-wide uppercase font-medium hover:bg-gold-600 transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
