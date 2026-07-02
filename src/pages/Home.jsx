import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcImages = [
    { id: 1, caption: "Morning light", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
    { id: 2, caption: "Golden hour", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80" },
    { id: 3, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { id: 4, caption: "Soft glow", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { id: 5, caption: "Treasured moments", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. My huggies have become my daily signature.", rating: 5 },
    { name: "Sofia R.", text: "Beautiful packaging and even more beautiful jewelry. A gift I'll treasure.", rating: 5 },
    { name: "Isabella T.", text: "Finally found pieces that feel luxurious without the luxury price tag.", rating: 5 },
  ];

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div>
      {/* 1. Sticky Nav - handled in Navbar component */}

      {/* 2. Full-bleed Hero */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2823]">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=80" 
            alt="Warm-lit close-up of gold jewelry on model"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-6xl md:text-7xl text-white tracking-[0.05em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40" />
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
            <div className="uppercase text-xs tracking-[0.2em] text-[#8B7355] mb-2">Signature Pieces</div>
            <h2 className="serif text-4xl tracking-[0.05em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[#8B7355] transition-colors hidden md:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group">
              <div className="product-image-container bg-[#F8F5F1]">
                <img src={product.image} alt={product.name} className="product-image" />
                <img src={product.hoverImage} alt={product.name} className="product-image-hover" />
                <button 
                  onClick={(e) => handleQuickAdd(product, e)}
                  className="quick-add btn btn-gold text-xs py-2.5 px-6"
                >
                  Add to Cart
                </button>
              </div>
              <div className="p-4">
                <div className="product-name text-sm tracking-wider mb-1 pr-2">{product.name}</div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#6B665F]">${product.price}</span>
                  <div className="flex items-center gap-1 text-xs text-[#C5A46E]">
                    <Star size={12} fill="currentColor" /> {product.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="uppercase text-xs tracking-[0.2em] text-[#8B7355] mb-8 text-center">As Seen On You</div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcImages.map((item) => (
              <div key={item.id} className="ugc-card snap-start">
                <img src={item.img} alt={item.caption} />
                <div className="ugc-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="uppercase text-xs tracking-[0.2em] text-[#8B7355] mb-2">Discover</div>
          <h2 className="serif text-4xl tracking-[0.05em]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", link: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", link: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", link: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="category-tile group">
              <img src={cat.img} alt={cat.name} />
              <div className="category-overlay">
                <span className="serif text-white text-2xl tracking-[0.1em]">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80" 
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center p-10 md:p-16 lg:p-20">
            <div>
              <div className="uppercase text-xs tracking-[0.2em] text-[#8B7355] mb-4">Since 2019</div>
              <h2 className="serif text-4xl tracking-[0.05em] mb-6">Our Story</h2>
              <p className="text-[#6B665F] leading-relaxed mb-8">
                Velmora was born from a simple belief: every woman deserves jewelry that feels as precious as the moments she wears it for. We craft demi-fine pieces with the same attention to detail as fine jewelry—without the fine jewelry price.
              </p>
              <Link to="/about" className="btn btn-outline inline-block">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="uppercase text-xs tracking-[0.2em] text-[#8B7355] mb-8">Voices of Velmora</div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="flex justify-center gap-0.5 mb-4 text-[#C5A46E]">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#6B665F] italic mb-4">"{t.text}"</p>
              <div className="text-sm tracking-[0.1em]">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="serif text-3xl tracking-[0.05em] mb-3">Join the Circle</div>
          <p className="text-[#A89F91] mb-8">Receive 10% off your first order and early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); toast.success("Welcome to Velmora"); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/40"
              required
            />
            <button type="submit" className="btn btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
