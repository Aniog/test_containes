import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80", caption: "Everyday elegance" },
    { id: 2, image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80", caption: "Golden hour glow" },
    { id: 3, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "Statement piece" },
    { id: 4, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "Layered beauty" },
    { id: 5, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80", caption: "Modern classic" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily go-to.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and the necklace is even more stunning in person.", rating: 5 },
    { name: "Isabella K.", text: "I bought the set as a gift and my sister hasn't taken it off since.", rating: 5 },
  ];

  return (
    <div className="pt-20">
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#2C2823] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-display text-6xl md:text-7xl text-white mb-6 tracking-[0.02em]">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg mb-10 max-w-md mx-auto">
            Demi-fine gold jewelry, designed for the moments that matter.
          </p>
          <Link to="/shop">
            <Button variant="primary">Shop the Collection</Button>
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.2em]">SCROLL TO EXPLORE</div>
      </section>

      {/* 3. Trust Bar */}
      <div className="border-b border-[#E5DFD3] py-4">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] text-[#6B665F] text-center">
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

      {/* 4. Bestsellers */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.15em] text-[#B89778] mb-2">DISCOVER</div>
            <h2 className="serif text-4xl tracking-[0.02em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] underline hover:text-[#B89778] hidden md:block">VIEW ALL</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container bg-[#F8F5F1]">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <img src={product.hoverImage || product.image} alt={product.name} className="product-image-hover" />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <div className="product-name text-sm tracking-[0.1em] mb-1 pr-8">{product.name}</div>
                </Link>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#6B665F]">${product.price}</span>
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="quick-add btn btn-accent text-xs py-2 px-5"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.08em] underline">VIEW ALL</Link>
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-white py-16 border-y border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] text-[#B89778] mb-2">AS SEEN ON YOU</div>
            <h2 className="serif text-3xl tracking-[0.02em]">Real Moments, Real Beauty</h2>
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

      {/* 6. Shop by Category */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[#B89778] mb-2">EXPLORE</div>
          <h2 className="serif text-4xl tracking-[0.02em]">Shop by Category</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile group">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-overlay">
                <span className="text-white text-xl tracking-[0.1em] serif">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="bg-white border-y border-[#E5DFD3]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80" 
              alt="Velmora atelier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-8 md:px-16 py-16 md:py-0">
            <div>
              <div className="text-xs tracking-[0.15em] text-[#B89778] mb-3">EST. 2019</div>
              <h2 className="serif text-4xl tracking-[0.02em] mb-6">Our Story</h2>
              <p className="text-[#6B665F] leading-relaxed mb-8 max-w-md">
                Velmora was born from a desire to create jewelry that feels as meaningful as it is beautiful. 
                Each piece is thoughtfully designed in our studio and crafted with the finest materials.
              </p>
              <Link to="/about" className="text-sm tracking-[0.08em] underline hover:text-[#B89778]">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] text-[#B89778] mb-2">LOVED BY MANY</div>
          <h2 className="serif text-4xl tracking-[0.02em]">What Our Customers Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-[#B89778] text-[#B89778]" />
                ))}
              </div>
              <p className="text-[#6B665F] mb-6 leading-relaxed">"{t.text}"</p>
              <div className="text-sm tracking-[0.05em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter-block py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="serif text-3xl tracking-[0.02em] mb-4">Join the Circle</div>
          <p className="text-white/70 mb-8">Be the first to know about new arrivals, stories, and receive 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;