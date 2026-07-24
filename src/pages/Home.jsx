import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 5, caption: "Everyday luxury", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily signature." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I will treasure." },
    { name: "Isabella T.", text: "Finally found pieces that feel premium without the luxury markup." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#0F0F0F]">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=2000&q=90"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.02em]">
            Demi-fine gold jewelry for the modern woman.
          </p>
          <Link to="/shop" className="btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5E0D5] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#5A5A5A]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-2">Signature Pieces</div>
            <h2 className="font-serif text-4xl tracking-[-0.01em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] hover:text-[#C5A26F] transition-colors">View All →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container aspect-[4/3.6] bg-[#E8E4DC] mb-4 overflow-hidden">
                  <img src={product.image1} alt={product.name} className="product-image primary absolute inset-0 w-full h-full object-cover" />
                  <img src={product.image2} alt={product.name} className="product-image secondary absolute inset-0 w-full h-full object-cover opacity-0" />
                </div>
              </Link>
              <div className="px-1">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-[0.12em] mb-1 group-hover:text-[#C5A26F] transition-colors">{product.name}</div>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#5A5A5A]">${product.price}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="text-xs uppercase tracking-[0.08em] text-[#C5A26F] hover:text-[#0F0F0F] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-white py-16 border-y border-[#E5E0D5]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-8 text-center">As Seen On You</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[170px] md:w-[200px] aspect-[9/16] bg-[#0F0F0F] relative snap-start overflow-hidden">
                <img src={item.img} alt={item.caption} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="caption absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="font-serif text-white text-sm tracking-[0.05em]">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-8 text-center">Discover</div>
        <h2 className="font-serif text-center text-4xl tracking-[-0.01em] mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { label: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { label: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80' },
          ].map((cat, idx) => (
            <Link key={idx} to={cat.path} className="category-tile group block aspect-[16/10] overflow-hidden bg-[#0F0F0F]">
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
              <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[0.1em] group-hover:text-[#C5A26F] transition-colors">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white border-y border-[#E5E0D5]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#E8E4DC]">
            <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=80" alt="Our atelier" className="w-full h-full object-cover" />
          </div>
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-4">Since 2019</div>
            <h3 className="font-serif text-4xl tracking-[-0.01em] mb-6">Our Story</h3>
            <p className="text-[#5A5A5A] leading-relaxed mb-8 max-w-[42ch]">
              Velmora was born from a desire to create jewelry that feels both elevated and wearable. 
              Each piece is thoughtfully designed in our New York studio and crafted with the finest materials.
            </p>
            <Link to="/about" className="btn-outline self-start">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1100px] mx-auto px-6 py-20 text-center">
        <div className="uppercase tracking-[0.15em] text-xs text-[#C5A26F] mb-8">Voices of Velmora</div>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#C5A26F]" fill="#C5A26F" />)}
              </div>
              <p className="italic text-[#5A5A5A] mb-4 leading-snug">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-white text-3xl tracking-[-0.01em] mb-3">Join for 10% off</div>
          <p className="text-white/70 text-sm mb-8 tracking-[0.02em]">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input flex-1 text-white placeholder:text-white/40"
            />
            <button type="submit" className="btn-gold px-8">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
