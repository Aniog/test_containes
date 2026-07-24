import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products, categories, testimonials, ugcItems } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const { addItem, setCartOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (product) => {
    addItem(product, 'gold', 1);
    setCartOpen(true);
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-soft-black/40 via-brand-soft-black/20 to-brand-soft-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
            Demi-fine jewelry designed for the modern woman. Each piece is thoughtfully crafted to be worn, loved, and passed down.
          </p>
          <div className="mt-10">
            <Link to="/shop" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-gold-dark hover:shadow-lg">
              Shop the Collection
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-brand-charcoal/10 bg-brand-warm-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
              <span key={item} className="text-xs font-medium uppercase tracking-widest text-brand-warm-gray">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">Bestsellers</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-warm-gray">
              Our most-loved pieces, chosen by you.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="group relative cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-brand-cream">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-soft-black/0 transition-all duration-300 group-hover:bg-brand-soft-black/20" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/95 px-4 py-3 text-center transition-transform duration-300 group-hover:translate-y-0">
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal">
                      Add to Cart
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg uppercase tracking-widest text-brand-charcoal text-sm">{product.name}</h3>
                  <p className="mt-1 font-serif text-lg text-brand-charcoal">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal text-center">As Seen On</h2>
          <div className="mt-12 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-64 aspect-[9/16] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="font-serif text-sm text-white">{item.caption}</p>
                  <p className="mt-1 text-xs text-white/70">{item.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">Shop by Category</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 group-hover:from-black/60" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">Our Story</h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-warm-gray">
                Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and made to last. 
                Each piece in our collection is designed in California and crafted with care using premium materials that stand the test of time.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-brand-warm-gray">
                We believe in quiet luxury — jewelry that speaks softly but leaves a lasting impression. 
                From our signature gold-plated finishes to our hypoallergenic designs, every detail is considered.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center justify-center rounded-full border border-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-white self-start">
                Read Our Story
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">What Our Customers Say</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-2xl border border-brand-charcoal/10 bg-white p-8"
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
                <p className="mt-4 font-serif text-lg italic text-brand-charcoal/80 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/10">
                    <span className="font-serif text-sm font-semibold text-brand-gold">
                      {testimonial.initial}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-brand-charcoal">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-soft-black py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-cream">
            Join for 10% off your first order
          </h2>
          <p className="mt-4 text-brand-cream/70">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-brand-cream/20 bg-brand-cream/10 px-6 py-3 text-sm text-brand-cream placeholder:text-brand-cream/50 focus:border-brand-gold focus:outline-none sm:w-80"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-gold-dark hover:shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-brand-cream/50">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
