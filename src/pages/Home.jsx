import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products, ugcImages, testimonials } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=90"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-white text-6xl md:text-7xl tracking-[0.08em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-[0.05em]">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-5 border-b border-[#E5E0D8] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-[#E5E0D8]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-[#E5E0D8]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-[#E5E0D8]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B655F] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] hover:text-[#C5A26F]">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container bg-[#FAF8F5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image primary"
                  />
                  <img
                    src={product.imageSecondary}
                    alt={product.name}
                    className="product-image secondary"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B655F] mb-3">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="quick-add btn btn-primary text-xs py-2.5 px-8"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#1A1816] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-white/60 text-xs tracking-[0.15em] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {ugcImages.map((ugc) => (
              <div key={ugc.id} className="ugc-card">
                <img src={ugc.image} alt={ugc.caption} />
                <div className="ugc-caption">{ugc.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-[#6B655F] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.label} />
              <div className="category-label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#E5E0D8]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#1A1816]">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
              alt="Our Craft"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.15em] text-[#6B655F] mb-4">EST. 2019</p>
              <h3 className="serif text-4xl tracking-[0.05em] mb-6">Our Story</h3>
              <p className="text-[#6B655F] leading-relaxed mb-8">
                Velmora was born from a desire to create jewelry that feels both timeless and personal. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/about" className="btn btn-outline inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-[#6B655F] mb-2">LOVED BY MANY</p>
          <h2 className="serif text-4xl tracking-[0.05em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="stars flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#6B655F] italic mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[0.08em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl tracking-[0.08em] mb-3 text-white">Join the Circle</h3>
          <p className="text-white/70 mb-8 text-sm tracking-[0.05em]">
            Be the first to know about new arrivals and receive 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 bg-white/95 border-0"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-y-12 pb-12 border-b border-[#E5E0D8]">
            <div>
              <p className="serif text-xl tracking-[0.2em] mb-4">VELMORA</p>
              <p className="text-xs text-[#6B655F]">Fine Jewelry</p>
            </div>
            <div>
              <p className="filter-label mb-4">Shop</p>
              <div className="space-y-2 text-sm text-[#6B655F]">
                <Link to="/shop" className="block hover:text-[#1A1816]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#1A1816]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#1A1816]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#1A1816]">Huggies</Link>
              </div>
            </div>
            <div>
              <p className="filter-label mb-4">Help</p>
              <div className="space-y-2 text-sm text-[#6B655F]">
                <a href="#" className="block hover:text-[#1A1816]">Shipping</a>
                <a href="#" className="block hover:text-[#1A1816]">Returns</a>
                <a href="#" className="block hover:text-[#1A1816]">Care Guide</a>
                <a href="#" className="block hover:text-[#1A1816]">Contact</a>
              </div>
            </div>
            <div>
              <p className="filter-label mb-4">Company</p>
              <div className="space-y-2 text-sm text-[#6B655F]">
                <Link to="/about" className="block hover:text-[#1A1816]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#1A1816]">Journal</Link>
                <a href="#" className="block hover:text-[#1A1816]">Sustainability</a>
                <a href="#" className="block hover:text-[#1A1816]">Stockists</a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B655F]">
            <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#1A1816]">Instagram</a>
              <a href="#" className="hover:text-[#1A1816]">Pinterest</a>
              <a href="#" className="hover:text-[#1A1816]">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
