import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products } from '../lib/data';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  const trustBarItems = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  const categories = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' }
  ];

  const ugcPosts = [
    { id: 'ugc-1', caption: 'Effortless Radiance' },
    { id: 'ugc-2', caption: 'The Perfect Stack' },
    { id: 'ugc-3', caption: 'Daily Rituals' },
    { id: 'ugc-4', caption: 'Golden Hour' },
    { id: 'ugc-5', caption: 'Timeless Glow' }
  ];

  const testimonials = [
    { name: 'Sarah M.', text: '"The quality exceeded my expectations. These have become my daily signature pieces."', rating: 5 },
    { name: 'Elena R.', text: '"Beautifully packaged and even more stunning in person. Perfect for gifting (to self!)"', rating: 5 },
    { name: 'Maya J.', text: '"Finally found gold jewelry that doesn\'t irritate my skin. Simply elegant."', rating: 5 }
  ];

  return (
    <div ref={containerRef} className="overflow-hidden bg-background">
      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center pt-20">
        <div
          data-strk-bg-id="hero-bg-98a2b1"
          data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting editorial photography"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 z-0 bg-secondary/20"
        />
        <div className="absolute inset-0 z-[1] bg-black/20" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-white">
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif mb-6 leading-[1.1]"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] mb-12 opacity-90"
          >
            Fine Jewelry for your many chapters
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link 
              to="/shop" 
              className="inline-block bg-accent hover:bg-accent/90 text-background px-12 py-5 text-[10px] uppercase tracking-[0.3em] transition-all transform hover:scale-105"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-secondary/40 py-4 border-b border-hairline border-accent/10 overflow-hidden">
        <div className="flex animate-marquee space-x-24 whitespace-nowrap">
          {[...trustBarItems, ...trustBarItems].map((item, idx) => (
            <span key={idx} className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground flex items-center">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-4 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 4. Bestsellers */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-center md:text-left">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-sans mb-4 block">Most Loved</span>
            <h2 className="text-4xl md:text-5xl font-serif">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all inline-block mx-auto md:mx-0">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. UGC Reels Row */}
      <section className="bg-secondary/20 py-24 border-y border-hairline border-accent/10 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-serif text-center">Seen on You</h2>
        </div>
        <div className="flex overflow-x-auto no-scrollbar space-x-6 px-6 pb-4">
          {ugcPosts.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -10 }}
              className="relative w-64 aspect-[9/16] group flex-shrink-0 bg-secondary/40"
            >
              <img 
                data-strk-img-id={post.id}
                data-strk-img={`jewelry worn on ear neck model styling aesthetic closeup [${post.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
                alt={post.caption}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p id={`${post.id}-caption`} className="font-serif text-background text-lg italic opacity-0 group-hover:opacity-100 transition-opacity">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category Tiles */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-3">
        {categories.map((cat, idx) => (
          <Link to={`/shop?category=${cat.title}`} key={cat.id} className="relative aspect-square group overflow-hidden border-hairline border-secondary">
            <div 
              data-strk-bg-id={cat.id}
              data-strk-bg={`luxury ${cat.title} jewelry photography minimal background editorial`}
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
              className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 bg-secondary/30"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-all flex items-center justify-center">
              <span className="text-background font-serif text-3xl md:text-4xl tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase">
                {cat.title}
              </span>
            </div>
            <div className="absolute bottom-10 left-10 md:hidden">
               <span className="text-background font-serif text-2xl uppercase tracking-widest">{cat.title}</span>
            </div>
          </Link>
        ))}
      </section>

      {/* 7. Brand Story Split */}
      <section id="about" className="py-24 container mx-auto px-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-secondary overflow-hidden">
             <img 
                data-strk-img-id="story-img-992a"
                data-strk-img="editorial jewelry brand photography workshop craftsmanship gold artisan hands tools"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover grayscale-[30%] bg-secondary/50"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Story"
             />
          </div>
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent block font-sans">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-serif">Made for Memories</h2>
            <p className="text-muted-foreground font-sans leading-relaxed text-lg max-w-xl mx-auto md:mx-0">
              At VELMORA, we believe the pieces we wear should carry the weight of our stories. Founded on the principle of "Quiet Luxury," our demi-fine collection focuses on timeless silhouettes, ethically sourced materials, and craftsmanship that endures.
            </p>
            <Link to="/about" className="inline-block text-xs uppercase tracking-[0.3em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all font-sans">
              Discover Our Roots
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center space-y-6 px-4">
              <div className="flex justify-center text-accent text-sm">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="font-serif text-xl italic leading-relaxed text-foreground/80">
                {t.text}
              </p>
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
                &mdash; {t.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Newsletter Capture */}
      <section className="py-32 container mx-auto px-6 font-sans">
        <div className="bg-foreground text-background p-12 md:p-20 text-center space-y-12 shadow-2xl">
          <div className="space-y-4">
             <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Inner Circle</span>
             <h2 className="text-4xl md:text-6xl font-serif">Join for 10% off your first order</h2>
          </div>
          <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border-b border-background/20 py-4 px-2 focus:border-accent outline-none text-sm tracking-wide transition-colors placeholder:text-background/30"
              required
            />
            <button className="bg-accent hover:bg-accent/90 text-background px-12 py-4 text-[10px] uppercase tracking-widest transition-all">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-background/30 uppercase tracking-widest italic">
            By signing up, you agree to our privacy policy.
          </p>
        </div>
      </section>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
