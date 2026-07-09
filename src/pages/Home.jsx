import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const ugcItems = [
    { id: 1, caption: "My everyday staple", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
    { id: 2, caption: "Obsessed with these", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
    { id: 3, caption: "Perfect for gifting", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80" },
    { id: 4, caption: "Feels so luxurious", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80" },
    { id: 5, caption: "Worn on repeat", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
  ];

  const testimonials = [
    { name: "Elena M.", text: "The quality is exceptional. These pieces feel like they cost three times as much.", rating: 5 },
    { name: "Sophia R.", text: "Beautiful packaging and even more beautiful jewelry. My go-to for gifts.", rating: 5 },
    { name: "Isabella T.", text: "Finally found jewelry that doesn't irritate my sensitive skin. Love every piece.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[#2C2825]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=90" 
            alt="Velmora Fine Jewelry"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="heading-serif text-6xl md:text-7xl text-white tracking-[0.06em] mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">
            Demi-fine jewelry for the modern woman
          </p>
          <Link to="/shop">
            <button className="btn btn-primary">Shop the Collection</button>
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-[#E5E0D8] py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-[0.1em] text-[#8A8178] text-center">
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

      {/* Bestsellers */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-2">DISCOVER</p>
            <h2 className="heading-serif text-4xl tracking-[0.04em]">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-sm tracking-[0.08em] hover:text-[#B89778] hidden md:block">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="product-image-container aspect-[4/3.5] bg-[#F8F6F3] relative">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="product-image product-image-primary w-full h-full object-cover"
                  />
                  <img 
                    src={product.images[1]} 
                    alt={product.name}
                    className="product-image product-image-secondary w-full h-full object-cover"
                  />
                  <button 
                    onClick={(e) => { e.preventDefault(); addToCart(product); }}
                    className="quick-add btn btn-accent text-xs px-6 py-2.5"
                  >
                    ADD TO CART
                  </button>
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <p className="product-name text-sm tracking-[0.12em] mb-1.5">{product.name}</p>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#8A8178]">${product.price}</p>
                  <div className="flex items-center gap-1 text-xs text-[#B89778]">
                    <Star size={12} fill="#B89778" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC Reel */}
      <section className="bg-[#F8F6F3] py-16 border-y border-[#E5E0D8]">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-8 text-center">AS SEEN ON YOU</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {ugcItems.map((item) => (
              <div key={item.id} className="ugc-card w-[180px] md:w-[200px] aspect-[9/16] bg-[#2C2825] snap-start">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
                <div className="ugc-caption">
                  <p>"{item.caption}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-2">EXPLORE</p>
          <h2 className="heading-serif text-4xl tracking-[0.04em]">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Earrings", path: "/shop?category=Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
            { name: "Necklaces", path: "/shop?category=Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
            { name: "Huggies", path: "/shop?category=Huggies", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-tile aspect-[16/10] bg-[#2C2825] overflow-hidden block">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              <div className="category-label">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 border-t border-[#E5E0D8]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[#2C2825]">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80" 
              alt="Our Story" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-4">EST. 2019</p>
            <h2 className="heading-serif text-5xl tracking-[0.03em] mb-8">Our Story</h2>
            <div className="space-y-5 text-[#5C5651] leading-relaxed">
              <p>Velmora was born from a simple belief: that beautiful, well-crafted jewelry should be accessible without compromise.</p>
              <p>Each piece is thoughtfully designed in our studio and hand-finished by skilled artisans using the finest materials.</p>
            </div>
            <Link to="/about" className="inline-block mt-8 text-sm tracking-[0.08em] hover:text-[#B89778]">
              READ MORE →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1440px] mx-auto px-6 py-20 bg-[#F8F6F3]">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-2">LOVED BY MANY</p>
          <h2 className="heading-serif text-4xl tracking-[0.04em]">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="flex gap-0.5 mb-5 text-[#B89778]">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="#B89778" />
                ))}
              </div>
              <p className="text-[#5C5651] mb-6 leading-relaxed">"{t.text}"</p>
              <p className="text-sm tracking-[0.05em]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="heading-serif text-3xl tracking-[0.04em] mb-4">Join for 10% off</h3>
          <p className="text-white/70 mb-8 text-sm tracking-wide">Be the first to know about new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/60"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer pt-16 pb-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/10">
            <div>
              <p className="heading-serif text-xl tracking-[0.15em] mb-6">VELMORA</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.1em] mb-4 text-white/50">SHOP</p>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#B89778]">All Jewelry</Link>
                <Link to="/shop?category=Earrings" className="block hover:text-[#B89778]">Earrings</Link>
                <Link to="/shop?category=Necklaces" className="block hover:text-[#B89778]">Necklaces</Link>
                <Link to="/shop?category=Huggies" className="block hover:text-[#B89778]">Huggies</Link>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.1em] mb-4 text-white/50">HELP</p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B89778]">Shipping</a>
                <a href="#" className="block hover:text-[#B89778]">Returns</a>
                <a href="#" className="block hover:text-[#B89778]">Care Guide</a>
                <a href="#" className="block hover:text-[#B89778]">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.1em] mb-4 text-white/50">COMPANY</p>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-[#B89778]">Our Story</Link>
                <Link to="/journal" className="block hover:text-[#B89778]">Journal</Link>
                <a href="#" className="block hover:text-[#B89778]">Sustainability</a>
                <a href="#" className="block hover:text-[#B89778]">Careers</a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 tracking-[0.08em]">
            <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;