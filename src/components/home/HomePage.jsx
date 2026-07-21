import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { products, testimonials, ugcItems } from '../../data/products';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
            alt="Gold jewelry on model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-charcoal)]/70 via-[var(--color-charcoal)]/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <div className="max-w-xl lg:max-w-2xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] leading-tight mb-6 animate-fade-in"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Crafted to be Treasured
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-ivory)]/90 mb-8 max-w-md leading-relaxed">
              Demi-fine jewelry for the modern woman. Elevate your everyday with 
              pieces that tell your story.
            </p>
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--color-ivory)]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[var(--color-ivory)]/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[var(--color-charcoal)] py-4">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-xs text-[var(--color-ivory)]/80 uppercase tracking-[0.1em]">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              Free Worldwide Shipping
            </span>
            <span className="hidden sm:block text-[var(--color-mocha)]">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
              30-Day Returns
            </span>
            <span className="hidden sm:block text-[var(--color-mocha)]">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
              18K Gold Plated
            </span>
            <span className="hidden sm:block text-[var(--color-mocha)]">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Hypoallergenic
            </span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-[var(--color-espresso)] mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Bestsellers
            </h2>
            <p className="text-[var(--color-mocha)] max-w-md mx-auto">
              Most-loved pieces chosen by our community of jewelry enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {products.filter(p => p.bestseller).slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/shop" className="btn-secondary">
              View All Jewelry
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider" />
      </div>

      {/* UGC / Instagram Reels Style Section */}
      <section className="section bg-[var(--color-ivory)]">
        <div className="container">
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl text-[var(--color-espresso)] mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Styled by You
            </h2>
            <p className="text-[var(--color-mocha)]">
              Share your look with @velmorajewelry
            </p>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 px-4 lg:px-8 hide-scrollbar">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 lg:w-52 relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[9/16]">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p
                    className="text-xs text-[var(--color-ivory)] italic mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    "{item.caption}"
                  </p>
                  <p className="text-[10px] text-[var(--color-ivory)]/70">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-[var(--color-espresso)] mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Earrings */}
            <Link
              to="/shop?category=Earrings"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
                alt="Earrings collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/30 group-hover:bg-[var(--color-charcoal)]/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-2xl lg:text-3xl text-[var(--color-ivory)] tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Earrings
                </span>
              </div>
            </Link>

            {/* Necklaces */}
            <Link
              to="/shop?category=Necklaces"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                alt="Necklaces collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/30 group-hover:bg-[var(--color-charcoal)]/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-2xl lg:text-3xl text-[var(--color-ivory)] tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Necklaces
                </span>
              </div>
            </Link>

            {/* Huggies */}
            <Link
              to="/shop?category=Huggies"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Huggies collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/30 group-hover:bg-[var(--color-charcoal)]/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-2xl lg:text-3xl text-[var(--color-ivory)] tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Huggies
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section bg-[var(--color-ivory)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <p className="text-xs text-[var(--color-gold)] uppercase tracking-[0.2em] mb-4">
                Our Story
              </p>
              <h2
                className="text-3xl md:text-4xl text-[var(--color-espresso)] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Where Elegance Meets <br />
                <span className="italic">Everyday Life</span>
              </h2>
              <div className="space-y-4 text-[var(--color-mocha)] leading-relaxed">
                <p>
                  Velmora was born from a simple belief: jewelry should be 
                  treasured, not hidden away. We create demi-fine pieces that 
                  move with you—from morning coffee to evening celebrations.
                </p>
                <p>
                  Each piece is crafted with 18K gold plating and 
                  hypoallergenic materials, ensuring beauty that lasts. 
                  Our designs balance timeless elegance with modern sensibility, 
                  making luxury accessible without compromise.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[var(--color-espresso)] hover:text-[var(--color-gold)] transition-colors group"
              >
                <span>Discover Our Journey</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-[var(--color-espresso)] mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What Our Community Says
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[var(--color-ivory)] p-6 lg:p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-[var(--color-gold)]"
                      fill="var(--color-gold)"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[var(--color-mocha)] leading-relaxed mb-4 italic" style={{ fontFamily: 'var(--font-serif)' }}>
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <p className="text-sm font-medium text-[var(--color-espresso)]">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-20 bg-[var(--color-charcoal)]">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl text-[var(--color-ivory)] mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Join the Velmora Circle
            </h2>
            <p className="text-[var(--color-warm-gray)] mb-8">
              Be the first to know about new collections and receive 10% off your first order.
            </p>

            {subscribed ? (
              <div className="text-[var(--color-gold)]">
                <p className="text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                  Welcome to the family!
                </p>
                <p className="text-sm text-[var(--color-warm-gray)] mt-2">
                  Check your inbox for your 10% off code.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 bg-transparent border border-[var(--color-mocha)] text-[var(--color-ivory)] placeholder-[var(--color-warm-gray)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Get 10% Off
                </button>
              </form>
            )}

            <p className="text-[10px] text-[var(--color-warm-gray)] mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
