import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { products, categories, testimonials, ugcItems } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const { addItem, setDrawer } = useCart();
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  const handleAddToCart = (product) => {
    addItem(product, 'gold');
    setDrawer(true);
  };

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          data-strk-bg-id="hero-bg-velmora-1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-brand-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto font-light">
            Demi-fine jewelry designed for the modern woman. Quiet luxury, warm gold, and pieces meant to last.
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-white text-brand-bg hover:bg-brand-gold hover:text-brand-bg">
              Shop the Collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-bg text-white/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: Truck, label: 'Free Worldwide Shipping' },
              { icon: RotateCcw, label: '30-Day Returns' },
              { icon: Shield, label: '18K Gold Plated' },
              { icon: Shield, label: 'Hypoallergenic' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 py-3 md:py-4">
                <item.icon className="w-4 h-4 text-brand-gold" />
                <span className="text-[11px] md:text-xs uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Bestsellers</h2>
            <p className="text-brand-textMuted max-w-xl mx-auto">Our most-loved pieces, chosen again and again for their timeless design and everyday wearability.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <div key={product.id} className="group relative">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[4/5] bg-brand-surfaceAlt rounded-sm overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`bestseller-${product.id}-1`}
                      data-strk-img={`[${product.name}] [bestsellers]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <img
                      data-strk-img-id={`bestseller-${product.id}-2`}
                      data-strk-img={`[${product.name}] [bestsellers]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-brand-bg text-white text-[10px] uppercase tracking-widest px-3 py-1">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className="w-full bg-brand-bg/90 backdrop-blur-sm text-white text-xs uppercase tracking-widest py-3 hover:bg-brand-gold hover:text-brand-bg transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <h3 className="product-name text-sm">{product.name}</h3>
                  <p className="text-sm text-brand-textMuted mt-1">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-12 bg-brand-surfaceAlt overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <h2 className="section-title text-center">As Worn By You</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative flex-shrink-0 w-40 md:w-56 aspect-[9/16] rounded-sm overflow-hidden group">
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[${item.title}] [${item.handle}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-serif text-white text-sm italic">{item.title}</p>
                <p className="text-white/70 text-[10px] uppercase tracking-widest mt-1">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  data-strk-img-id={`category-${cat.id}`}
                  data-strk-img={`[${cat.name}] [shop by category]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-white text-2xl md:text-3xl tracking-widest uppercase">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-brand-surfaceAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="[our story] [velmora fine jewelry]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-brand-textMuted leading-relaxed mb-6">
                Velmora was born from a simple belief: fine jewelry should feel attainable, personal, and timeless. We design each piece in our London atelier, using 18K gold-plated brass and ethically sourced crystals to create demi-fine jewelry that transitions seamlessly from day to evening.
              </p>
              <p className="text-brand-textMuted leading-relaxed mb-8">
                Every Velmora piece is crafted to be worn, loved, and passed down. We believe in quiet luxury—jewelry that speaks softly but leaves a lasting impression.
              </p>
              <Link to="/about">
                <Button variant="outline">Read Our Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-brand-surfaceAlt p-8 rounded-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-textMuted italic mb-6">"{t.text}"</p>
                <p className="text-sm font-medium text-brand-text">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-brand-bg text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join for 10% off your first order</h2>
          <p className="text-white/70 mb-8">Be the first to know about new collections, exclusive offers, and styling inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-full focus:outline-none focus:border-brand-gold"
            />
            <Button type="submit" className="bg-brand-gold text-brand-bg hover:bg-brand-goldDark">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-bg text-white/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="font-serif text-2xl tracking-widest text-white block mb-4">VELMORA</Link>
              <p className="text-sm text-white/60">Demi-fine jewelry for the modern woman. Designed in London.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link to="/shop?category=earrings" className="hover:text-brand-gold transition-colors">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="hover:text-brand-gold transition-colors">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="hover:text-brand-gold transition-colors">Huggies</Link></li>
                <li><Link to="/shop" className="hover:text-brand-gold transition-colors">All</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link to="/about" className="hover:text-brand-gold transition-colors">About</Link></li>
                <li><Link to="/journal" className="hover:text-brand-gold transition-colors">Journal</Link></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
