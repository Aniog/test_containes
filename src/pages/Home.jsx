import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Timeless", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Everyday", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies daily for months and they still look brand new." },
    { name: "Sofia R.", text: "Beautiful packaging and the necklace is even more stunning in person. My go-to gift for friends." },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The ear cuffs are my favorite." },
  ];

  return (
    <div>
      {/* 1. Sticky Nav - handled in Layout */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1C1A17] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
            Demi-fine gold jewelry, thoughtfully designed for the modern woman.
          </p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="trust-bar py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* 4. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#B8976F] transition-colors hidden md:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={product.imageSecondary} 
                  alt={product.name}
                  className="secondary absolute inset-0 w-full h-full object-cover"
                />
                <button 
                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  className="quick-add btn btn-gold text-xs px-6 py-2.5"
                >
                  Add to Cart
                </button>
              </Link>
              <div className="pt-4 pb-2">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                </Link>
                <p className="text-sm text-[#6B665F]">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-[#F5F2ED] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] aspect-[9/16] bg-[#1C1A17] snap-start">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", link: "/shop?category=Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", link: "/shop?category=Huggies", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile aspect-[16/10] bg-[#1C1A17] overflow-hidden block">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <span className="label">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2ED]">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-4">EST. 2018</p>
            <h2 className="serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#6B665F] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.</p>
              <p>Each piece is crafted with intention, using only the finest materials and traditional techniques passed down through generations of artisans.</p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">LOVED BY MANY</p>
            <h2 className="serif text-4xl tracking-[0.05em]">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#B8976F] text-[#B8976F]" />
                  ))}
                </div>
                <p className="text-[#6B665F] mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm tracking-[0.05em]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-4">MEMBERS ONLY</p>
          <h2 className="serif text-3xl text-white tracking-[0.05em] mb-4">Join for 10% off your first order</h2>
          <p className="text-[#A39B8F] mb-8">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;