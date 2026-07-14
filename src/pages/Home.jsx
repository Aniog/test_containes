import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80", caption: "Morning light" },
    { id: 2, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "Everyday elegance" },
    { id: 3, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "Golden hour" },
    { id: 4, image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80", caption: "Layered beauty" },
    { id: 5, image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80", caption: "Timeless" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staple." },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person." },
    { name: "Isabella K.", text: "I bought the set as a gift and my sister hasn't taken it off since." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.02em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#E5DFD3] text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, designed for the moments that matter.
          </p>
          <Link to="/shop" className="btn btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em] uppercase">
          Scroll to Explore
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#E5DFD3] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6B665F]">
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
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="uppercase text-xs tracking-[0.15em] text-[#8B7355] mb-2">Signature Pieces</div>
            <h2 className="serif text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm underline underline-offset-4 hover:text-[#8B7355]">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="uppercase text-xs tracking-[0.15em] text-[#8B7355] mb-2">As Seen On You</div>
            <h2 className="serif text-4xl">Moments in Gold</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card">
                <img src={item.image} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="uppercase text-xs tracking-[0.15em] text-[#8B7355] mb-2">Discover</div>
          <h2 className="serif text-4xl">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.name} />
              <div className="category-overlay">
                <span className="serif text-white text-2xl tracking-[0.08em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <div className="uppercase text-xs tracking-[0.15em] text-[#8B7355] mb-3">Since 2019</div>
              <h2 className="serif text-4xl mb-6">Our Story</h2>
              <p className="body-text text-[#6B665F] max-w-md mb-8">
                Velmora was born from a desire to create jewelry that feels as meaningful as the moments it's worn for. Each piece is thoughtfully designed in our studio and crafted with care.
              </p>
              <Link to="/" className="text-sm underline underline-offset-4 hover:text-[#8B7355]">Learn More About Us →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="uppercase text-xs tracking-[0.15em] text-[#8B7355] mb-3">Kind Words</div>
        <h2 className="serif text-4xl mb-14">From Our Community</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-2 border-[#C5A46E] pl-6">
              <div className="flex gap-0.5 mb-4 text-[#C5A46E]">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
              </div>
              <p className="body-text text-[#6B665F] mb-4">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#2C2823] py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="serif text-3xl text-white mb-3 tracking-[0.02em]">Join for 10% off</div>
          <p className="text-[#C5B8A8] mb-8 text-sm">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input text-white placeholder:text-[#8A857C] border-[#6B665F]"
            />
            <button type="submit" className="btn btn-accent">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;