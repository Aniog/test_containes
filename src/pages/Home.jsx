import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80" },
    { id: 5, caption: "Everyday", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily staple." },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. A perfect gift." },
    { name: "Isabella T.", text: "I wear my necklace every day. It never tarnishes and always gets compliments." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="serif text-6xl md:text-7xl tracking-[0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl mb-10 text-[#E5DFD3]">
            Demi-fine jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-[#C5A46E]">
          SCROLL TO DISCOVER
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.1em] text-[#6B665F]">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>18K Gold Plated</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
            <h2 className="serif text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#8B7355] hidden md:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="product-image product-image-primary"
                  />
                  <img 
                    src={product.images[1]} 
                    alt={product.name}
                    className="product-image product-image-secondary"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm mb-1 pr-2">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B665F]">${product.price}</p>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="quick-add btn btn-primary text-xs py-2.5 px-8"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F8F5F1] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">AS SEEN ON</span>
            <h3 className="serif text-3xl mt-1">Worn by you</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">EXPLORE</span>
          <h2 className="serif text-4xl mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-overlay">
                <span className="text-white text-lg tracking-[0.1em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2EB]">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=80" 
              alt="Our atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">OUR HERITAGE</span>
            <h2 className="serif text-4xl mt-3 mb-6">Every piece tells a story.</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8">
              Founded on the belief that fine jewelry should be accessible yet enduring, 
              Velmora creates demi-fine pieces designed to be worn daily and treasured forever. 
              Each design is crafted with intention, using only the finest materials.
            </p>
            <Link to="/" className="btn btn-outline">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">LOVED BY MANY</span>
          <h2 className="serif text-4xl mt-3 mb-14">What our customers say</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {testimonials.map((t, i) => (
              <div key={i} className="border-l-2 border-[#C5A46E] pl-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className="fill-[#C5A46E] text-[#C5A46E]" />
                  ))}
                </div>
                <p className="text-[#6B665F] mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2823] text-white py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.15em] text-[#C5A46E]">JOIN THE CIRCLE</span>
          <h3 className="serif text-3xl mt-3 mb-4">Receive 10% off your first order</h3>
          <p className="text-[#A39B8F] mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;