import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
    { id: 3, caption: "Golden hour", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
    { id: 5, caption: "Quiet luxury", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My necklace has become my signature piece." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure." },
    { name: "Isabella T.", text: "Finally found pieces that feel premium without the markup. Love Velmora." },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#F2EFEA] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[-0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-[0.02em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5DFD6] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="uppercase tracking-[0.15em] text-xs text-[#6B655F]">Signature Pieces</span>
            <h2 className="serif text-4xl mt-2">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[#B89B6E]">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/3] bg-[#F2EFEA]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.imageAlt}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B655F] mb-3">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-xs uppercase tracking-[0.1em] text-[#B89B6E] hover:text-[#8C7250]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F2EFEA] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <span className="uppercase tracking-[0.15em] text-xs text-[#6B655F]">As Seen On You</span>
            <h2 className="serif text-3xl mt-1">Moments in Gold</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] snap-start">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="mb-10 text-center">
          <span className="uppercase tracking-[0.15em] text-xs text-[#6B655F]">Discover</span>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Earrings', path: '/shop?category=Earrings' },
            { label: 'Necklaces', path: '/shop?category=Necklaces' },
            { label: 'Huggies', path: '/shop?category=Huggies' },
          ].map((cat) => (
            <Link key={cat.label} to={cat.path} className="category-tile group">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
                alt={cat.label}
              />
              <div className="category-label">{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 border-t border-[#E5DFD6]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F2EFEA]">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80"
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="uppercase tracking-[0.15em] text-xs text-[#6B655F]">Since 2018</span>
            <h2 className="serif text-4xl mt-3 mb-6">Our Story</h2>
            <p className="text-[#6B655F] leading-relaxed mb-8">
              Velmora was born from a simple belief: that beautiful, well-made jewelry should be accessible. 
              We source the finest materials and work with skilled artisans to create pieces that feel 
              luxurious yet effortless—designed to be worn every day, treasured for years.
            </p>
            <Link to="/shop" className="btn btn-outline inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 border-t border-[#E5DFD6]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.15em] text-xs text-[#6B655F]">Voices</span>
          <h2 className="serif text-4xl mt-2 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, i) => (
              <div key={i} className="border-l-2 border-[#B89B6E] pl-6">
                <div className="stars flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[#6B655F] italic mb-4">"{t.text}"</p>
                <p className="text-sm tracking-[0.08em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2825] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl text-white mb-3">Join for 10% off</h3>
          <p className="text-white/70 text-sm mb-8">Be the first to know about new arrivals and special offers.</p>
          <form className="flex" onSubmit={(e) => { e.preventDefault(); toast.success('Thank you for subscribing!'); }}>
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 rounded-none border-[#E5DFD6] text-[#2C2825]"
              required
            />
            <button type="submit" className="btn btn-primary rounded-none">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;