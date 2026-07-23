import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const bestsellers = products.slice(0, 5);
  
  const ugcItems = [
    { id: 1, image: "https://picsum.photos/id/1005/400/700", caption: "Morning light" },
    { id: 2, image: "https://picsum.photos/id/1011/400/700", caption: "Golden hour" },
    { id: 3, image: "https://picsum.photos/id/1009/400/700", caption: "Effortless" },
    { id: 4, image: "https://picsum.photos/id/106/400/700", caption: "Timeless" },
    { id: 5, image: "https://picsum.photos/id/160/400/700", caption: "Everyday" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday signature.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that truly felt special.", rating: 5 },
    { name: "Isabella K.", text: "Finally found pieces that feel premium without the luxury markup. Obsessed.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2522] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-7xl text-white tracking-[0.1em] mb-6">Crafted to be Treasured</h1>
          <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">Demi-fine jewelry, thoughtfully made for the modern woman.</p>
          <Link to="/shop" className="btn btn-accent inline-block">Shop the Collection</Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5DFD6] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-xs tracking-[0.15em] uppercase text-[#6B635E]">
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
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-2">Signature Pieces</p>
            <h2 className="text-4xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase hover:text-[#8B7355] hidden md:block">View All →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#F0EBE3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-8">As Seen On You</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[180px] snap-start relative aspect-[9/16] overflow-hidden bg-[#2C2522]">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm tracking-[0.1em] text-serif italic">"{item.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-10">Discover</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", img: "https://picsum.photos/id/1011/800/600" },
            { name: "Necklaces", link: "/shop?category=Necklaces", img: "https://picsum.photos/id/1005/800/600" },
            { name: "Huggies", link: "/shop?category=Huggies", img: "https://picsum.photos/id/106/800/600" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="group relative aspect-[4/3] overflow-hidden bg-[#2C2522]">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl tracking-[0.2em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] bg-[#F0EBE3]">
          <img src="https://picsum.photos/id/1015/1000/750" alt="Our atelier" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-4">Since 2019</p>
          <h2 className="text-4xl mb-6">Our Story</h2>
          <p className="body-text text-[#6B635E] mb-8">Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible. We design demi-fine pieces that feel like quiet luxury—refined, wearable, and made to be treasured for years.</p>
          <Link to="/about" className="btn btn-outline">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#2C2522] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C5A46E] mb-10">Voices We Treasure</p>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i}>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={14} fill="#C5A46E" color="#C5A46E" />)}
                </div>
                <p className="italic text-lg mb-4">"{t.text}"</p>
                <p className="text-sm text-[#C5A46E] tracking-[0.1em]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-3">Stay Close</p>
        <h2 className="text-3xl mb-4">Join for 10% off your first order</h2>
        <p className="text-[#6B635E] mb-8">Receive early access to new collections and stories from our atelier.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
          <input type="email" placeholder="Your email address" className="input flex-1" required />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DFD6] bg-[#F0EBE3] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <div className="text-xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-[#6B635E] text-xs">Demi-fine jewelry, thoughtfully made.</p>
          </div>
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#8B7355]">Shop</div>
            <div className="space-y-2 text-[#6B635E]">
              <Link to="/shop?category=Earrings" className="block hover:text-[#2C2522]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#2C2522]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#2C2522]">Huggies</Link>
              <Link to="/shop" className="block hover:text-[#2C2522]">All Jewelry</Link>
            </div>
          </div>
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#8B7355]">Help</div>
            <div className="space-y-2 text-[#6B635E]">
              <a href="#" className="block hover:text-[#2C2522]">Shipping</a>
              <a href="#" className="block hover:text-[#2C2522]">Returns</a>
              <a href="#" className="block hover:text-[#2C2522]">Care Guide</a>
              <a href="#" className="block hover:text-[#2C2522]">Contact</a>
            </div>
          </div>
          <div>
            <div className="uppercase tracking-[0.15em] text-xs mb-4 text-[#8B7355]">Company</div>
            <div className="space-y-2 text-[#6B635E]">
              <Link to="/about" className="block hover:text-[#2C2522]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#2C2522]">Journal</Link>
              <a href="#" className="block hover:text-[#2C2522]">Sustainability</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#E5DFD6] text-center text-xs text-[#6B635E]">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;