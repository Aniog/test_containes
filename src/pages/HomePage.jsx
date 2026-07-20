import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import { products, categories, testimonials } from '@/data/products';
import { Star, Truck, Shield, Gem, Heart, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      <CartDrawer />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p id="hero-subtitle" className="text-xs tracking-[0.3em] uppercase mb-4 text-white/80">
            Demi-Fine Gold Jewelry
          </p>
          <h1 id="hero-title" className="serif-heading text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-sm md:text-base text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
            Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
          </p>
          <Link to="/shop" className="inline-block bg-accent text-accent-foreground px-10 py-4 text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60 mx-auto" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-white py-4">
        <div className="section-padding">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs tracking-wider">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-accent" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Gem className="w-4 h-4 text-accent" />
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section-padding py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Curated for You</p>
          <h2 className="serif-heading text-4xl md:text-5xl font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-flex items-center gap-2">
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* UGC / Reels Row */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="text-center mb-12 px-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">As Worn By You</p>
          <h2 className="serif-heading text-4xl md:text-5xl font-light">@velmora</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory">
          {[
            { id: 'ugc-1', caption: 'Everyday elegance ✨' },
            { id: 'ugc-2', caption: 'Stacked & styled' },
            { id: 'ugc-3', caption: 'Golden hour glow' },
            { id: 'ugc-4', caption: 'Date night ready' },
            { id: 'ugc-5', caption: 'Layered perfection' },
            { id: 'ugc-6', caption: 'Minimal & chic' },
          ].map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] bg-secondary overflow-hidden group">
                <img
                  data-strk-img-id={`ugc-${item.id}-${index}`}
                  data-strk-img="[ugc-jewelry] [velmora-instagram]"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora jewelry worn"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm serif-heading italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Explore</p>
          <h2 className="serif-heading text-4xl md:text-5xl font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] bg-secondary overflow-hidden group"
            >
              <img
                data-strk-img-id={`category-${cat.id}-tile`}
                data-strk-img={`[${cat.id}-category] [shop-by-category]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="serif-heading text-3xl md:text-4xl font-light mb-2">{cat.name}</h3>
                  <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2">
                    Shop Now <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto bg-stone-200">
            <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400" />
          </div>
          <div className="flex items-center justify-center p-8 lg:p-16 xl:p-24">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
              <h2 className="serif-heading text-4xl md:text-5xl font-light mb-6">
                Jewelry That<br />Tells Your Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Founded with a simple belief: luxury shouldn't be out of reach. Each Velmora piece is thoughtfully designed 
                to transition seamlessly from your morning coffee to evening cocktails — because the best jewelry is the kind 
                you never want to take off.
              </p>
              <Link to="/about" className="btn-outline inline-flex items-center gap-2">
                Discover More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding py-16 lg:py-24 bg-secondary/30">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Love Letters</p>
          <h2 className="serif-heading text-4xl md:text-5xl font-light">What They Say</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="serif-heading text-lg md:text-xl font-light italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="section-padding text-center max-w-xl mx-auto">
          <h2 className="serif-heading text-4xl md:text-5xl font-light mb-4">Join for 10% Off</h2>
          <p className="text-white/70 mb-8 text-sm">
            Be the first to know about new collections, exclusive offers, and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button type="submit" className="bg-accent text-accent-foreground px-8 py-3 text-xs tracking-widest uppercase hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-white/40 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
