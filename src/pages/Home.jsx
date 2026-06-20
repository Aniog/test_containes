import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel style
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "Golden hour glow" },
    { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "Everyday elegance" },
    { id: 3, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Soft light, soft gold" },
    { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Layered with love" },
    { id: 5, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", caption: "Timeless pieces" },
  ];

  // Testimonials
  const testimonials = [
    { id: 1, text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", author: "Elena M." },
    { id: 2, text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", author: "Sofia R." },
    { id: 3, text: "Finally found jewelry that doesn't irritate my skin. The gold tone is beautiful.", author: "Aisha K." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1C1C1C]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
            alt="Velmora Fine Jewelry" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 
            className="text-white mb-4" 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-8 tracking-wide">
            Demi-fine gold jewelry, made for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-primary">
            SHOP THE COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <span>FREE WORLDWIDE SHIPPING</span>
        <span>30-DAY RETURNS</span>
        <span>18K GOLD PLATED</span>
        <span>HYPOALLERGENIC</span>
      </div>

      {/* Bestsellers */}
      <section className="section container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-muted mb-1">CURATED FOR YOU</div>
            <h2>Bestsellers</h2>
          </div>
          <Link to="/shop" className="btn btn-ghost hidden sm:block">VIEW ALL →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8 sm:hidden">
          <Link to="/shop" className="btn btn-ghost">VIEW ALL →</Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-8 bg-[#F1EDE6]">
        <div className="container">
          <div className="mb-6">
            <div className="uppercase tracking-[3px] text-xs text-muted mb-1">AS SEEN ON YOU</div>
            <h2 style={{ fontSize: '1.75rem' }}>Real Moments</h2>
          </div>
        </div>
        
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-3 pl-6 pr-6">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card rounded-sm">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section container">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[3px] text-xs text-muted mb-1">DISCOVER</div>
          <h2>Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Earrings", category: "earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { label: "Necklaces", category: "necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { label: "Huggies", category: "huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88483?w=800&q=80" },
          ].map((cat) => (
            <Link 
              key={cat.category} 
              to={`/shop?category=${cat.category}`}
              className="category-tile rounded-sm"
            >
              <img src={cat.img} alt={cat.label} />
              <div className="category-tile-label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="aspect-[4/3] bg-[#F1EDE6] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1602751584552-e17149ad2f83?w=900&q=80" 
                alt="Our craft" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="uppercase tracking-[3px] text-xs text-muted mb-2">SINCE 2018</div>
              <h2 className="mb-6">Our Story</h2>
              <div className="body-text space-y-4">
                <p>
                  Velmora was born from a simple belief: that beautiful jewelry should be worn, not saved. 
                  We design demi-fine pieces that feel as precious as fine jewelry, but made for real life.
                </p>
                <p>
                  Each piece is crafted with 18K gold plating over hypoallergenic brass, 
                  set with carefully selected crystals. Timeless silhouettes, thoughtfully made.
                </p>
              </div>
              <Link to="/about" className="btn btn-outline mt-6 inline-block">
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <div className="text-center mb-10">
          <div className="uppercase tracking-[3px] text-xs text-muted mb-1">LOVED BY MANY</div>
          <h2>Kind Words</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="testimonial-stars flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <p className="testimonial-author">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="max-w-md mx-auto px-4">
          <h3 style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}>Join for 10% off</h3>
          <p className="text-sm">Be the first to know about new arrivals and private events.</p>
          
          <form 
            className="flex flex-col sm:flex-row gap-3" 
            onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}
          >
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="input flex-1" 
              required 
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-[10px] mt-3 opacity-60">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            <div>
              <div className="footer-logo">VELMORA</div>
              <p className="text-xs text-muted max-w-[180px]">
                Quiet luxury, thoughtfully made.
              </p>
            </div>
            
            <div className="footer-col">
              <h4>Shop</h4>
              <Link to="/shop">All Jewelry</Link>
              <Link to="/shop?category=earrings">Earrings</Link>
              <Link to="/shop?category=necklaces">Necklaces</Link>
              <Link to="/shop?category=huggies">Huggies</Link>
            </div>
            
            <div className="footer-col">
              <h4>Help</h4>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
              <a href="#">Care Guide</a>
              <a href="#">Contact</a>
            </div>
            
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">Our Story</Link>
              <Link to="/journal">Journal</Link>
              <a href="#">Sustainability</a>
              <a href="#">Wholesale</a>
            </div>
          </div>
          
          <div className="divider my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
            <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">TikTok</a>
            </div>
            <div className="flex gap-2 items-center">
              <span>WE ACCEPT</span>
              <span className="tracking-widest">VISA • MC • AMEX • APPLE PAY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
