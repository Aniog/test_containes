import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { id: 4, caption: "Timeless", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Everyday luxury", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I wear my huggies every day.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and the necklace is even more stunning in person.", rating: 5 },
    { name: "Isabella T.", text: "My go-to for thoughtful gifts. My sister loved her set.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#1a1816]">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=2000&q=90"
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-[0.05em]">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            SHOP THE COLLECTION
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar bg-white border-b border-[#e5e0d8] py-4">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-[#6b6763]">
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
      <section className="max-w-[1440px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#8b7355] mb-2">DISCOVER</div>
            <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] hover:text-[#8b7355]">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="bg-[#1a1816] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.2em] text-[#c5a46e] mb-2">AS SEEN ON YOU</div>
            <h3 className="font-serif text-3xl text-white tracking-[0.05em]">Moments in Gold</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[180px] md:w-[200px] aspect-[9/16] bg-[#2c2a28] snap-start">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover" />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#8b7355] mb-2">EXPLORE</div>
          <h2 className="font-serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Earrings', path: '/shop?category=Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
            { name: 'Necklaces', path: '/shop?category=Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
            { name: 'Huggies', path: '/shop?category=Huggies', img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80' },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group block aspect-[4/3] overflow-hidden bg-[#e5e0d8]">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay">
                <span className="font-serif text-2xl text-white tracking-[0.1em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-[#e5e0d8]">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80"
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <div className="text-xs tracking-[0.2em] text-[#8b7355] mb-3">EST. 2018</div>
              <h2 className="font-serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
              <p className="text-[#6b6763] mb-8 leading-relaxed">
                Velmora was born from a desire to create jewelry that feels both special and wearable. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/about" className="text-sm tracking-[0.1em] border-b border-[#2c2a28] pb-0.5 hover:text-[#8b7355] hover:border-[#8b7355]">
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#8b7355] mb-2">LOVED BY MANY</div>
          <h2 className="font-serif text-4xl tracking-[0.05em]">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-[#c5a46e] text-[#c5a46e]" />
                ))}
              </div>
              <p className="text-[#6b6763] italic mb-4">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1a1816] py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="font-serif text-3xl text-white tracking-[0.05em] mb-3">Join the Circle</div>
          <p className="text-[#a39d95] mb-8">Receive 10% off your first order and stay in the know.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 bg-[#2c2a28] border-[#3a3632] text-white placeholder:text-[#6b6763]"
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
