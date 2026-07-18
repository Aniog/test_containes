import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products, ugcImages } from '../data/products';

const Home = ({ addToCart }) => {
  const bestsellers = products.slice(0, 5);
  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my everyday staples." },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift that truly felt special." },
    { name: "Isabella K.", text: "Finally found pieces that feel luxurious without the luxury price tag." },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2823] text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=2000" 
          alt="Velmora Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl tracking-[0.1em] mb-6">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl mb-10 text-[#E5DFD3]">Timeless demi-fine jewelry, made to last a lifetime.</p>
          <Link to="/shop" className="btn btn-gold inline-block">Shop the Collection</Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="trust-bar py-4 border-b border-[#E5DFD3] text-center tracking-[0.15em]">
        Free Worldwide Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic
      </div>

      {/* 3. Bestsellers */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#8B7355]">View All →</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F5F1]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <img src={product.imageSecondary} alt={product.name} className="secondary w-full h-full object-cover" />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-wider mb-1">{product.name}</div>
                  <div className="text-sm text-[#8A8178]">${product.price}</div>
                </Link>
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

      {/* 4. UGC Reel Row */}
      <section className="bg-[#F8F5F1] py-16 border-y border-[#E5DFD3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-8 text-center">AS SEEN ON YOU</div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcImages.map((ugc) => (
              <div key={ugc.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] rounded overflow-hidden">
                <img src={ugc.image} alt={ugc.caption} className="w-full h-full object-cover" />
                <div className="ugc-caption">{ugc.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800" },
            { name: "Necklaces", link: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800" },
            { name: "Huggies", link: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile group block aspect-[16/10] overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-2xl serif tracking-[0.1em] group-hover:text-[#C5A46E] transition-colors">{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#E5DFD3]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Our Craft" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-4">SINCE 2018</div>
            <h2 className="serif text-5xl tracking-[0.05em] mb-8">Our Story</h2>
            <div className="space-y-5 text-[#4A4640] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful, lasting jewelry should be accessible to every woman who values quiet luxury.</p>
              <p>Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic materials—made to be worn daily, treasured forever.</p>
            </div>
            <Link to="/about" className="btn btn-outline mt-8 inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-white py-20 border-y border-[#E5DFD3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.2em] text-[#8A8178] mb-2">LOVED BY MANY</div>
            <h2 className="serif text-4xl tracking-[0.05em]">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial">
                <div className="flex gap-0.5 mb-4 text-[#C5A46E]">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#4A4640] mb-6 leading-relaxed">"{t.text}"</p>
                <div className="text-sm tracking-[0.1em]">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="serif text-4xl tracking-[0.05em] mb-4">Join the Circle</div>
          <p className="text-[#E5DFD3] mb-8">Be the first to know about new arrivals and receive 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); toast.success("Thank you for subscribing!"); }}>
            <input type="email" placeholder="Your email address" className="input flex-1 bg-white/10 border-white/30 text-white placeholder:text-[#8A8178]" required />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;