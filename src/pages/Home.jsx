import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  // Bestsellers - first 5 products
  const bestsellers = products.slice(0, 5);

  // UGC mock data - vertical reel-style images
  const ugcItems = [
    { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" },
    { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Wedding day details", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 4, caption: "Layering goals", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80" },
    { id: 5, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
  ];

  // Testimonials
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day and they still look brand new.", rating: 5 },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special.", rating: 5 },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my skin. The gold tone is so warm and beautiful.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1816]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90"
            alt="Velmora Fine Jewelry - Woman wearing gold jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-[#F8F5F1] text-5xl md:text-6xl font-medium tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#F8F5F1]/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry for the moments that matter.
          </p>
          <Link
            to="/shop"
            className="btn btn-gold inline-block"
          >
            Shop the Collection
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F8F5F1]/60 text-xs tracking-[0.2em]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar border-b border-[#E5DFD6] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline text-[#E5DFD6]">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline text-[#E5DFD6]">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline text-[#E5DFD6]">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.01em]">Bestsellers</h2>
            <p className="text-[#6B635C] mt-1 text-sm">Our most-loved pieces</p>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-[#B8976A] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container aspect-[4/3.5]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="product-image w-full h-full object-cover"
                  />
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={product.name}
                    className="product-image-secondary w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-xs tracking-[0.08em] mb-1 leading-tight">{product.name}</p>
                  <p className="text-sm text-[#6B635C] mb-2">${product.price}</p>
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="quick-add btn btn-gold text-xs py-2 px-6"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.05em] hover:text-[#B8976A]">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F2ED] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-medium tracking-[-0.01em]">As Seen On You</h2>
            <span className="text-xs text-[#6B635C] tracking-[0.1em] hidden md:block">SWIPE FOR MORE</span>
          </div>
          <div className="scroll-container flex gap-3 overflow-x-auto pb-4">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card rounded-sm">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-medium tracking-[-0.01em] mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Earrings', category: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', category: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', category: 'Huggies', img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
          ].map((cat) => (
            <Link
              key={cat.label}
              to={`/shop?category=${cat.category}`}
              className="category-tile group rounded-sm"
            >
              <img src={cat.img} alt={cat.label} />
              <div className="label">
                <span>{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border-t border-[#E5DFD6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 py-16 items-center">
          <div className="aspect-[4/3] bg-[#F5F2ED] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.01em] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B635C] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions.
              </p>
              <p>
                We design demi-fine pieces that feel as good as they look — 18K gold plated over sterling silver, 
                hypoallergenic, and made to last. Each piece is crafted with intention, designed to become part of your everyday.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-6 text-sm tracking-[0.05em] border-b border-[#1A1816] pb-0.5 hover:text-[#B8976A] hover:border-[#B8976A] transition-colors"
            >
              READ MORE ABOUT US
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-2xl font-medium tracking-[-0.01em] mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="stars flex justify-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#6B635C] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-medium tracking-[-0.01em] mb-3">Join for 10% off your first order</h2>
        <p className="text-[#6B635C] mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you! Check your inbox for your 10% off code.');
            e.target.reset();
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="newsletter-input flex-1"
          />
          <button type="submit" className="btn btn-gold whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-[#6B635C] mt-4 tracking-[0.05em]">We respect your inbox. Unsubscribe anytime.</p>
      </section>
    </div>
  );
};

export default Home;
