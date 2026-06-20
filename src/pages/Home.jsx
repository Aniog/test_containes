import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
    { id: 2, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 3, caption: "Timeless beauty", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80" },
    { id: 4, caption: "Delicate details", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80" },
    { id: 5, caption: "Effortless luxury", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. I've worn my huggies every day for months and they still look brand new." },
    { name: "Sofia R.", text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too." },
    { name: "Aisha K.", text: "Finally found jewelry that doesn't irritate my sensitive skin. The gold is warm and rich. Will be back for more." },
  ];

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <div className="pt-20">
      {/* 1. HERO */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-[#0F0E0C]/40" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="serif text-5xl md:text-7xl text-white tracking-[2px] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Demi-fine jewelry for the woman who values quiet luxury.
          </p>
          <Link to="/shop">
            <Button size="lg" className="tracking-[2px]">
              SHOP THE COLLECTION
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <div className="trust-bar py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[2px] text-[#6B665C]">
            <span>FREE WORLDWIDE SHIPPING</span>
            <span className="hidden sm:inline">·</span>
            <span>30-DAY RETURNS</span>
            <span className="hidden sm:inline">·</span>
            <span>18K GOLD PLATED</span>
            <span className="hidden sm:inline">·</span>
            <span>HYPOALLERGENIC</span>
          </div>
        </div>
      </div>

      {/* 3. BESTSELLERS */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[3px] text-[#C5A46E] mb-2">DISCOVER</p>
            <h2 className="serif text-4xl tracking-wide">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[1.5px] hover:text-[#C5A46E] transition-colors">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="product-card bg-white">
                <div className="product-image-container aspect-[4/3.5] bg-[#F5F2EB] relative overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="product-image w-full h-full object-cover"
                  />
                  {product.images[1] && (
                    <img 
                      src={product.images[1]} 
                      alt={product.name}
                      className="product-image-secondary w-full h-full object-cover"
                    />
                  )}
                  <button 
                    onClick={(e) => handleQuickAdd(product, e)}
                    className="quick-add btn-premium bg-white text-[#2C2A26] px-6 py-2 text-xs tracking-[1.5px] shadow-lg hover:bg-[#C5A46E] hover:text-white"
                  >
                    QUICK ADD
                  </button>
                </div>
                <div className="p-4">
                  <p className="product-name text-sm tracking-[2px] mb-1">{product.name}</p>
                  <p className="text-sm text-[#6B665C]">{formatPrice(product.price)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/shop" className="text-sm tracking-[1.5px] hover:text-[#C5A46E]">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* 4. UGC REEL-STYLE ROW */}
      <section className="bg-[#F5F2EB] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs tracking-[3px] text-[#C5A46E] mb-8">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] snap-start">
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-[#0F0E0C]">
                  <img 
                    src={item.img} 
                    alt={item.caption}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="serif text-white text-sm tracking-wide">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY */}
      <section className="section-padding max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[3px] text-[#C5A46E] mb-2">EXPLORE</p>
          <h2 className="serif text-4xl tracking-wide">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", slug: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", slug: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", slug: "Huggies", img: "https://images.unsplash.com/photo-1535632787350-4e68b0f9b8b7?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="category-tile group block aspect-[16/10] relative overflow-hidden rounded">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="category-overlay absolute inset-0 bg-[#0F0E0C]/50 flex items-center justify-center">
                <span className="serif text-white text-3xl tracking-[3px] group-hover:text-[#C5A46E] transition-colors">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. BRAND STORY */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#F5F2EB] overflow-hidden rounded">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80" 
              alt="Velmora craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[3px] text-[#C5A46E] mb-3">OUR PHILOSOPHY</p>
            <h2 className="serif text-4xl tracking-wide mb-6">Jewelry that endures.</h2>
            <div className="space-y-4 text-[#6B665C] leading-relaxed">
              <p>
                Velmora was born from a desire to create demi-fine jewelry that feels as precious as fine jewelry, 
                without the precious price tag.
              </p>
              <p>
                Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over 
                hypoallergenic brass. We believe in pieces that become part of your daily ritual—worn, loved, 
                and passed down.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-6 text-sm tracking-[1.5px] hover:text-[#C5A46E] transition-colors">
              READ OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="section-padding max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[3px] text-[#C5A46E] mb-2">IN THEIR WORDS</p>
          <h2 className="serif text-4xl tracking-wide">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[#6B665C] italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm tracking-[1px]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="newsletter-block py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="serif text-3xl tracking-wide mb-3">Join for 10% off your first order</h3>
          <p className="text-white/70 text-sm mb-6">Be the first to know about new arrivals and exclusive offers.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }} className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="input-premium flex-1 px-4 py-3 text-sm text-[#2C2A26]"
              required 
            />
            <Button type="submit" className="px-8">JOIN</Button>
          </form>
          <p className="text-[10px] text-white/50 mt-3 tracking-wide">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#0F0E0C] text-[#F8F6F1] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10">
          <div>
            <p className="serif text-xl tracking-[3px] mb-4">VELMORA</p>
            <p className="text-xs text-white/50">Fine Jewelry</p>
          </div>

          <div>
            <p className="text-xs tracking-[2px] mb-4 text-white/60">SHOP</p>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#C5A46E]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#C5A46E]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A46E]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#C5A46E]">Huggies</Link>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[2px] mb-4 text-white/60">HELP</p>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A46E]">Shipping</a>
              <a href="#" className="block hover:text-[#C5A46E]">Returns</a>
              <a href="#" className="block hover:text-[#C5A46E]">Care Guide</a>
              <a href="#" className="block hover:text-[#C5A46E]">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[2px] mb-4 text-white/60">COMPANY</p>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#C5A46E]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#C5A46E]">Journal</Link>
              <a href="#" className="block hover:text-[#C5A46E]">Sustainability</a>
              <a href="#" className="block hover:text-[#C5A46E]">Careers</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
          <div className="flex gap-3 text-[10px]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
