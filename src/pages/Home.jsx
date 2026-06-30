import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ProductCard from '@/components/products/ProductCard';
import CartDrawer from '@/components/layout/CartDrawer';
import { getProducts, subscribeNewsletter } from '@/api/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { toast } from 'sonner';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const containerRef = React.useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!loading && containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await subscribeNewsletter(email);
      toast.success('Joined the inner circle! 10% off code sent.', {
        style: { background: '#FDFCF8', color: '#1A1A1A', border: '1px solid #C5A059' }
      });
      setEmail('');
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const categories = [
    { name: 'Earrings', id: 'earrings', desc: 'Sculptural elegance for every day.' },
    { name: 'Necklaces', id: 'necklaces', desc: 'Delicate layers, crafted to last.' },
    { name: 'Huggies', id: 'huggies', desc: 'Minimalist accents with maximum impact.' },
  ];

  const ugcPosts = [
    { id: 1, text: 'Perfect for stacking.' },
    { id: 2, text: 'The glow is real.' },
    { id: 3, text: 'The Golden Sphere Huggies.' },
    { id: 4, text: 'Self-love essentials.' },
    { id: 5, text: 'Velmora in the wild.' },
  ];

  const testimonials = [
    { name: 'Emma L.', text: 'The quality of the gold plating is incredible. I wear my huggies every single day and they still look brand new.' },
    { name: 'Sarah M.', text: 'Beautifully packaged and arrived so fast. The Royal Heirloom Set was the perfect gift for my sister.' },
    { name: 'Grace T.', text: 'Finally, fine jewelry that is actually affordable without sacrificing that editorial luxury look.' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      <Hero />
      <CartDrawer />

      {/* Trust bar is in hero but can be repeated if needed */}

      {/* Bestsellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Curated Favorites</p>
          <h2 className="text-3xl sm:text-4xl font-serif">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {products.filter(p => p.isBestseller).slice(0, 5).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reels Strip */}
      <section className="py-20 bg-[#F5F5F3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="font-serif text-2xl">Seen on you</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 pb-4">
          {ugcPosts.map((post) => (
            <div key={post.id} className="relative min-w-[280px] sm:min-w-[320px] aspect-[9/16] bg-[#EBEBEB] overflow-hidden group">
               <img 
                data-strk-img={`woman wearing jewelry Instagram reels style [ugc-post-${post.id}-text]`}
                data-strk-img-id={`ugc-post-${post.id}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                alt="Community post"
                className="w-full h-full object-cover transition-luxury group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <p id={`ugc-post-${post.id}-text`} className="text-white font-serif italic text-lg opacity-90">"{post.text}"</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section id="collections" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              to={`/shop?category=${cat.id}`} 
              key={cat.id} 
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
               <img 
                data-strk-img={`jewelry [cat-title-${cat.id}] aesthetic`}
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                alt={cat.name}
                className="w-full h-full object-cover transition-luxury group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-luxury flex items-center justify-center">
                 <div className="text-center text-white p-6">
                    <h3 id={`cat-title-${cat.id}`} className="text-2xl sm:text-3xl font-serif tracking-[0.2em] uppercase mb-2">{cat.name}</h3>
                    <p className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-luxury translate-y-2 group-hover:translate-y-0">
                      Explore
                    </p>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="bg-[#1A1A1A] text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
             <img 
              data-strk-img="jewelry artisan workshop editorial"
              data-strk-img-id="brand-story-img"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              alt="Artisan at work"
              className="w-full h-full object-cover opacity-80"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            />
          </div>
          <div className="space-y-8">
            <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold">Our Philosophy</p>
            <h2 className="text-4xl sm:text-5xl font-serif leading-tight">Quiet records of your journey.</h2>
            <p className="text-[#EBEBEB] leading-loose max-w-lg font-light">
              Velmora was founded on the belief that fine jewelry shouldn't be reserved for vaults and special occasions. We craft demi-fine pieces from recycled 18k gold and ethically sourced gems, designed for the quiet luxury of daily life.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 text-xs tracking-[0.3em] font-bold uppercase hover:text-[#C5A059] transition-colors">
              READ OUR STORY <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {testimonials.map((t, i) => (
             <div key={i} className="space-y-4">
               <p className="font-serif italic text-lg leading-relaxed text-[#1A1A1A]/90">"{t.text}"</p>
               <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#717171]">— {t.name}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto bg-[#F5F5F3] p-12 sm:p-20 text-center space-y-8">
           <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold">The Archive</p>
           <h2 className="text-3xl sm:text-4xl font-serif">Join for 10% off your first order</h2>
           <p className="text-[#717171] max-w-md mx-auto text-sm leading-relaxed">
             Be the first to hear about new collection drops, private sales, and jewelry care rituals.
           </p>
           <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white border border-[#E5E5E5] px-6 py-4 outline-none focus:border-[#C5A059] transition-luxury text-sm"
                required
              />
              <button 
                type="submit"
                className="bg-[#1A1A1A] text-white px-10 py-4 tracking-widest text-xs font-bold hover:bg-[#C5A059] transition-luxury uppercase"
              >
                Join
              </button>
           </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-[0.3em] font-medium">VELMORA</h3>
            <p className="text-[#717171] text-xs leading-loose italic max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury, timeless design.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Shop</h4>
            <ul className="space-y-3 text-xs text-[#717171]">
              <li><Link to="/shop?category=earrings" className="hover:text-[#1A1A1A]">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[#1A1A1A]">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[#1A1A1A]">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-[#1A1A1A]">New Arrivals</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Help</h4>
             <ul className="space-y-3 text-xs text-[#717171]">
              <li><Link to="/shipping" className="hover:text-[#1A1A1A]">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-[#1A1A1A]">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-[#1A1A1A]">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-[#1A1A1A]">FAQ</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Company</h4>
             <ul className="space-y-3 text-xs text-[#717171]">
              <li><Link to="/about" className="hover:text-[#1A1A1A]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#1A1A1A]">Journal</Link></li>
              <li><Link to="/privacy" className="hover:text-[#1A1A1A]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#1A1A1A]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-[#E5E5E5]">
          <p className="text-[10px] text-[#717171] uppercase tracking-[0.1em]">© 2026 Velmora Fine Jewelry. All Rights Reserved.</p>
          <div className="flex gap-6">
            {['Instagram', 'Pinterest', 'TikTok'].map(s => (
              <a key={s} href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] hover:text-[#C5A059] transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
