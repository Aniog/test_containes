import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
    { id: 2, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
    { id: 3, caption: "Golden hour", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Timeless layers", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 5, caption: "Soft glow", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift. My sister hasn't taken it off since. Beautiful packaging too." },
    { name: "Maya K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold tone is so rich and warm." },
  ];

  return (
    <div className="bg-[#F9F6F0]">
      {/* 1. Sticky Nav - handled in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2522] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80')] bg-cover bg-center opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[-1px] text-white mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-[#EDE9E3] text-lg mb-10 tracking-wide">Timeless demi-fine jewelry, made to last.</p>
          <Link to="/shop">
            <Button size="lg">Shop the Collection</Button>
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]">SCROLL TO EXPLORE</div>
      </section>

      {/* 3. Trust Bar */}
      <div className="border-b border-[#EDE9E3] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[1.5px] text-[#5C5248]">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[3px] text-[#C5A26F] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl tracking-[-0.5px]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-wide hover:text-[#C5A26F] transition-colors hidden md:block">View All →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reel-style Row */}
      <section className="bg-[#2C2522] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-[#C5A26F] text-xs tracking-[3px] mb-2">AS SEEN ON YOU</div>
            <h3 className="font-serif text-3xl text-white tracking-[-0.5px]">Moments in Gold</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="relative flex-shrink-0 w-[180px] aspect-[9/16] overflow-hidden snap-start">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="font-serif text-white text-sm tracking-wide">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[3px] text-[#C5A26F] mb-2">EXPLORE</div>
          <h2 className="font-serif text-4xl tracking-[-0.5px]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="group relative aspect-[16/10] overflow-hidden bg-[#EDE9E3]">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-3xl tracking-[4px] opacity-0 group-hover:opacity-100 transition-opacity">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#EDE9E3] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80" alt="Velmora atelier" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-md">
            <div className="text-xs tracking-[3px] text-[#C5A26F] mb-3">EST. 2019</div>
            <h2 className="font-serif text-4xl tracking-[-0.5px] mb-6">Our Story</h2>
            <p className="text-[#5C5248] leading-relaxed mb-8">
              Velmora was born from a desire to create jewelry that feels as meaningful as it is beautiful. 
              Each piece is thoughtfully designed in our studio and crafted with the finest materials, 
              meant to be worn, loved, and passed down.
            </p>
            <Link to="/about" className="inline-block text-sm tracking-wide border-b border-[#C5A26F] pb-0.5 hover:text-[#C5A26F]">Learn more about us →</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[3px] text-[#C5A26F] mb-2">LOVED BY MANY</div>
            <h2 className="font-serif text-3xl tracking-[-0.5px]">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-[#C5A26F] text-[#C5A26F]" />
                  ))}
                </div>
                <p className="text-[#5C5248] italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="text-sm tracking-wide">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="max-w-[700px] mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[3px] text-[#C5A26F] mb-3">STAY CLOSE</div>
        <h2 className="font-serif text-4xl tracking-[-0.5px] mb-4">Join for 10% off your first order</h2>
        <p className="text-[#5C5248] mb-8">Be the first to know about new arrivals and special collections.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-5 py-3.5 border border-[#EDE9E3] bg-white text-sm placeholder:text-[#8B7F6F] focus:outline-none focus:border-[#C5A26F]"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </section>
    </div>
  );
};

export default Home;