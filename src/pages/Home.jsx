import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Golden hour", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 5, caption: "Quiet luxury", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person.", rating: 5 },
    { name: "Isabella T.", text: "I bought the set as a gift and my sister hasn't taken it off since.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2823]">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=90" 
            alt="Velmora Jewelry"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry, designed for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F] text-center">
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

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">DISCOVER</p>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] hover:text-[#B8976F] transition-colors">View All →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container">
                  <img 
                    src={product.images.primary} 
                    alt={product.name}
                    className="product-image primary"
                  />
                  <img 
                    src={product.images.secondary} 
                    alt={product.name}
                    className="product-image secondary"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.12em] mb-1 pr-8">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B665F]">${product.price}</p>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="quick-add btn btn-gold text-xs py-2.5 px-8"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F5F1EA] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
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
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-8 text-center">EXPLORE</p>
        <h2 className="font-serif text-4xl tracking-[0.05em] text-center mb-12">Shop by Category</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group rounded-sm overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-overlay">
                <span className="font-serif text-2xl text-white tracking-[0.1em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F1EA]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Velmora Atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pr-4">
            <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-4">EST. 2019</p>
            <h2 className="font-serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels both precious and wearable. 
              Each piece is thoughtfully designed in our atelier, using only the finest materials. 
              We believe that true luxury lies in the details—the weight of gold, the sparkle of crystal, 
              the comfort of a perfect fit.
            </p>
            <Link to="/about" className="btn btn-outline text-sm">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-8">LOVED BY MANY</p>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i}>
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[#B8976F] text-[#B8976F]" />
                  ))}
                </div>
                <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.1em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <div className="bg-[#2C2823] text-white p-12 md:p-16">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-4">JOIN THE CIRCLE</p>
          <h3 className="font-serif text-3xl tracking-[0.05em] mb-4">Receive 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-1 text-white placeholder:text-white/50"
              required 
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;