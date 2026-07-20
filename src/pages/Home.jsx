import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Everyday luxe", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Timeless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person.", rating: 5 },
    { name: "Maya K.", text: "My go-to for gifting. Friends always ask where I shop.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1A1816] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#D4B896] text-lg mb-10 tracking-wide">
            Demi-fine gold jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.15em] text-[#6B6560] uppercase text-center">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-[#B8976F] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="secondary absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-wider mb-1 pr-8">{product.name}</div>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B6560]">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="quick-add btn btn-gold text-xs py-2 px-5"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">#VELMORA</div>
            <h3 className="font-serif text-3xl tracking-[0.05em]">As Seen on You</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] bg-[#1A1816] snap-start">
                <img src={item.img} alt="" className="w-full h-full object-cover" />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">EXPLORE</div>
          <h2 className="font-serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile aspect-[16/10] bg-[#1A1816] overflow-hidden block">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="label tracking-[0.15em]">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[#E5E0D8]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2ED]">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Our atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] text-[#B8976F] mb-3">SINCE 2018</div>
            <h2 className="font-serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels both timeless and modern. 
              Each piece is thoughtfully designed in our New York studio and crafted with the finest 
              materials—18K gold plating, premium crystals, and hypoallergenic findings.
            </p>
            <Link to="/" className="text-sm tracking-wider hover:text-[#B8976F] transition-colors">
              READ MORE →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1A1816] py-20 text-[#F8F6F3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">LOVED BY MANY</div>
            <h2 className="font-serif text-4xl tracking-[0.05em]">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <div className="stars flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="italic mb-4 text-[#D4B896]">"{t.text}"</p>
                <p className="text-sm tracking-wider">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.2em] text-[#B8976F] mb-3">STAY CLOSE</div>
        <h2 className="font-serif text-4xl tracking-[0.05em] mb-4">Join for 10% off your first order</h2>
        <p className="text-[#6B6560] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="input flex-1" 
            required 
          />
          <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;