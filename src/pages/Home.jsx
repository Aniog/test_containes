import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';

const Home = ({ addToCart }) => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://picsum.photos/id/1005/400/600" },
    { id: 2, caption: "Golden hour", img: "https://picsum.photos/id/1009/400/600" },
    { id: 3, caption: "Effortless", img: "https://picsum.photos/id/1011/400/600" },
    { id: 4, caption: "Timeless", img: "https://picsum.photos/id/1006/400/600" },
    { id: 5, caption: "Everyday luxe", img: "https://picsum.photos/id/1027/400/600" },
  ];

  const categories = [
    { name: "Earrings", path: "/shop", img: "https://picsum.photos/id/251/600/400" },
    { name: "Necklaces", path: "/shop", img: "https://picsum.photos/id/106/600/400" },
    { name: "Huggies", path: "/shop", img: "https://picsum.photos/id/201/600/400" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She was absolutely thrilled. Beautiful packaging too." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and warm." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1011/2000/1200')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine gold jewelry, made with intention.
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5DFD3] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B665F]">
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
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="uppercase text-xs tracking-[0.2em] text-[#B89778] mb-2">Signature Pieces</div>
            <h2 className="font-serif text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wider hover:text-[#B89778] hidden md:block">View All →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
              <div className="image-hover aspect-[4/3] bg-[#F8F5F1] mb-4 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button 
                  onClick={(e) => { e.preventDefault(); addToCart(product, 'Gold'); }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-gold text-xs opacity-0 group-hover:opacity-100 transition-all"
                >
                  Quick Add
                </button>
              </div>
              <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
              <div className="text-sm text-[#6B665F]">${product.price}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-white py-16 border-y border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="uppercase text-xs tracking-[0.2em] text-[#B89778] mb-8 text-center">As Seen On You</div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] aspect-[9/16] bg-[#F8F5F1] snap-start overflow-hidden">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="uppercase text-xs tracking-[0.2em] text-[#B89778] mb-2">Discover</div>
          <h2 className="font-serif text-4xl tracking-[0.02em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group aspect-[16/10] bg-[#F8F5F1] overflow-hidden block">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay">
                <span className="text-white text-xl tracking-[0.15em] font-serif">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white border-y border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[url('https://picsum.photos/id/1011/1200/900')] bg-cover bg-center" />
          <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <div className="uppercase text-xs tracking-[0.2em] text-[#B89778] mb-4">Since 2019</div>
            <h2 className="font-serif text-4xl tracking-[0.02em] mb-6">Our Story</h2>
            <p className="text-[#6B665F] leading-relaxed mb-8 max-w-md">
              Velmora was born from a desire to create jewelry that feels personal, not precious. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials.
            </p>
            <Link to="/" className="btn btn-outline self-start">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="uppercase text-xs tracking-[0.2em] text-[#B89778] mb-2">In Their Words</div>
          <h2 className="font-serif text-4xl tracking-[0.02em]">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[#E5DFD3] p-8">
              <div className="flex gap-1 mb-4 text-[#B89778]">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-[#6B665F] mb-6 leading-relaxed">"{t.text}"</p>
              <div className="text-sm tracking-wider">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl tracking-[0.05em] mb-4">Join the Circle</div>
          <p className="text-[#B89778] mb-8 tracking-wide">Receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 placeholder:text-white/50 text-white focus:outline-none focus:border-white"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;