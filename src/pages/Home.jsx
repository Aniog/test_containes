import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Star } from 'lucide-react';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 4, caption: "Timeless beauty", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 5, caption: "Effortless grace", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
  ];

  const categories = [
    { name: "Earrings", path: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Necklaces", path: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { name: "Huggies", path: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new." },
    { name: "Sophia R.", text: "Bought the Royal Heirloom Set as a gift. The packaging alone made it feel so special." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is beautiful." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2825] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.03em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn-accent inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] text-[#6B665F]">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden md:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden md:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden md:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">DISCOVER</span>
            <h2 className="serif text-4xl tracking-wide">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#8B7355] transition-colors hidden md:block">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="bg-[#F8F5F1] py-16 border-y border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">AS SEEN ON</span>
            <h3 className="serif text-3xl tracking-wide">Real Moments</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-[180px] aspect-[9/16] overflow-hidden snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
                <div className="absolute bottom-6 left-4 right-4">
                  <p className="serif text-white text-sm tracking-wide italic">"{item.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">EXPLORE</span>
          <h2 className="serif text-4xl tracking-wide mt-2">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="group relative aspect-[16/10] overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl tracking-[0.15em] serif opacity-0 group-hover:opacity-100 transition-opacity">{cat.name}</span>
              </div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white text-sm tracking-[0.1em] border-b border-white/60 pb-0.5">SHOP NOW</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-[#2C2825] text-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
              alt="Our Story" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16">
            <div>
              <span className="text-[#C5A46E] text-xs tracking-[0.15em]">EST. 2019</span>
              <h2 className="serif text-5xl tracking-wide mt-4 mb-6">Our Story</h2>
              <p className="text-[#A89F8F] leading-relaxed mb-8 max-w-md">
                Velmora was born from a simple belief: that beautiful, well-made jewelry should be accessible without compromise. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/" className="text-sm tracking-[0.08em] border-b border-white pb-0.5 hover:text-[#C5A46E] hover:border-[#C5A46E] transition-colors">
                LEARN MORE ABOUT OUR CRAFT →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[#8B7355]">LOVED BY MANY</span>
          <h2 className="serif text-4xl tracking-wide mt-2">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[#E5DFD3] p-8">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C5A46E" className="text-[#C5A46E]" />)}
              </div>
              <p className="text-[#6B665F] italic mb-6">"{t.text}"</p>
              <div className="text-sm tracking-wide">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-[#8B7355] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl text-white tracking-wide mb-3">Join for 10% off</h3>
          <p className="text-white/80 text-sm mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="input flex-1 text-sm placeholder:text-[#6B665F]/50"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;