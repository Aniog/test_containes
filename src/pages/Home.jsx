import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import TrustBar from '../components/TrustBar';
import UGCReel from '../components/UGCReel';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

const Home = () => {
  // Get first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--velmora-deep)]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
            alt="Velmora Fine Jewelry - Warm gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-[-0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 font-light">
            Demi-fine jewelry for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Bestsellers */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-muted)]">Curated for you</span>
              <h2 className="mt-1">Bestsellers</h2>
            </div>
            <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hidden md:block hover:text-[var(--velmora-gold-dark)]">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/shop" className="text-sm tracking-[0.08em] uppercase">View All →</Link>
          </div>
        </div>
      </section>

      {/* UGC Reel */}
      <section className="section bg-[var(--velmora-bg-alt)]">
        <div className="container">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-muted)]">As seen on you</span>
            <h2 className="mt-1">Worn in the Wild</h2>
          </div>
          <UGCReel />
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-muted)]">Find your piece</span>
            <h2 className="mt-1">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/shop?category=earrings" className="category-tile group">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" 
                alt="Earrings" 
              />
              <div className="category-tile-label">
                <span>Earrings</span>
              </div>
            </Link>
            <Link to="/shop?category=necklaces" className="category-tile group">
              <img 
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" 
                alt="Necklaces" 
              />
              <div className="category-tile-label">
                <span>Necklaces</span>
              </div>
            </Link>
            <Link to="/shop?category=huggies" className="category-tile group">
              <img 
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" 
                alt="Huggies" 
              />
              <div className="category-tile-label">
                <span>Huggies</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section bg-[var(--velmora-bg-alt)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-[var(--velmora-bg)] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" 
                alt="Velmora craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-muted)]">Since 2018</span>
              <h2 className="mt-2 mb-6">Our Story</h2>
              <div className="body-text space-y-4">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
                  not exclusive. We design demi-fine pieces that feel like heirlooms — crafted with 
                  intention, meant to be worn daily and passed down.
                </p>
                <p>
                  Each piece is plated in 18K gold over sterling silver, set with carefully selected 
                  crystals, and finished by hand. We believe in quiet luxury: pieces that speak 
                  through their quality, not their price tag.
                </p>
              </div>
              <Link to="/about" className="btn btn-outline mt-6 inline-block">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-muted)]">Kind words</span>
            <h2 className="mt-1">From Our Community</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="testimonial">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The Golden Sphere Huggies are my everyday go-to. I've worn them for over a year 
                and they still look brand new. The quality is exceptional."
              </p>
              <p className="testimonial-author">— Sarah M.</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. 
                The packaging alone feels so special. Will be back for more."
              </p>
              <p className="testimonial-author">— Elena R.</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I love that I can wear these pieces every day without worrying. The Majestic Flora 
                necklace gets so many compliments. It's become my signature."
              </p>
              <p className="testimonial-author">— Priya K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;