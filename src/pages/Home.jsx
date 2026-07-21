import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

const Home = () => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState({});

  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel style images
  const ugcItems = [
    { id: 1, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Delicate details", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
    { id: 5, caption: "Effortless charm", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
  ];

  const handleAddToCart = (product) => {
    const variant = selectedVariant[product.id] || product.variants[0];
    addToCart(product, variant, 1);
  };

  const handleVariantSelect = (productId, variant) => {
    setSelectedVariant(prev => ({ ...prev, [productId]: variant }));
  };

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-velmora-bg-dark">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90" 
            alt="Velmora Fine Jewelry - Woman wearing elegant gold necklace"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-[-0.02em]">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar border-b border-velmora-border py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-2 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-muted mb-2">Discover</div>
            <h2 className="font-serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm uppercase tracking-widest hover:text-velmora-gold transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => {
            const variant = selectedVariant[product.id] || product.variants[0];
            const secondaryImage = product.images[1] || product.images[0];
            
            return (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.slug}`} className="block">
                  <div className="product-card-image">
                    <img src={product.images[0]} alt={product.name} />
                    <img src={secondaryImage} alt={product.name} className="secondary" />
                    
                    {/* Quick Add */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="quick-add btn btn-primary text-xs py-2 px-6"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>

                <div className="product-card-info px-1">
                  <Link to={`/product/${product.slug}`}>
                    <div className="product-card-name">{product.name}</div>
                  </Link>
                  <div className="product-card-price">{formatPrice(product.price)}</div>
                  
                  {/* Variant Pills */}
                  <div className="flex gap-2 mt-3">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => handleVariantSelect(product.id, v)}
                        className={`variant-pill text-[10px] py-1 px-3 ${variant.id === v.id ? 'active' : ''}`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm uppercase tracking-widest">View All →</Link>
        </div>
      </section>

      {/* 4. UGC REEL ROW */}
      <section className="bg-velmora-surface-warm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-muted mb-2">As Seen On</div>
            <h2 className="font-serif text-3xl">Real Moments</h2>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card snap-start rounded-sm">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10">
          <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-muted mb-2">Explore</div>
          <h2 className="font-serif text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block">
              <img src={cat.img} alt={cat.name} />
              <div className="category-tile-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="aspect-[4/3] bg-velmora-surface-warm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" 
              alt="Velmora atelier - artisan hands crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-muted mb-3">Since 2018</div>
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <div className="body-text text-velmora-text-muted space-y-4 mb-8">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                not exclusive. We create demi-fine pieces that honor traditional craftsmanship while 
                embracing modern sensibilities.
              </p>
              <p>
                Each piece is thoughtfully designed in our studio and crafted with 18K gold plating 
                over hypoallergenic brass. We believe in jewelry that becomes part of your story — 
                worn daily, passed down, and treasured.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="bg-velmora-surface py-16 md:py-20 border-y border-velmora-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-muted mb-2">Voices</div>
            <h2 className="font-serif text-4xl">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "The quality is exceptional. I've worn my huggies every day for a year and they still look brand new.", author: "Elena M." },
              { text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. Worth every penny.", author: "Sofia R." },
              { text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful.", author: "Aisha K." },
            ].map((review, idx) => (
              <div key={idx} className="testimonial">
                <div className="testimonial-stars flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{review.text}"</p>
                <div className="testimonial-author">— {review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter-block py-16 md:py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Join for 10% off</h2>
          <p className="text-white/70 mb-8 text-sm">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! You are now subscribed with 10% off your first order.');
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="newsletter-input flex-1"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-white/50 mt-4 tracking-wide">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
