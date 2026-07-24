import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Hero = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-black/40"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-title] [hero-sub] luxury jewelry editorial warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-1" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F9F7F2] mb-6 leading-tight"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p 
          id="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-base uppercase tracking-[0.4em] text-white/80 mb-10"
        >
          Premium Demi-Fine Jewelry for the Modern Woman
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link 
            to="/shop" 
            className="inline-block px-12 py-4 bg-[#C5A059] text-[#121212] uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#B38D48] transition-all transform hover:scale-105"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 hidden md:flex justify-center">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          lineheight="1.5"
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-20 bg-white/20"
        />
      </div>
    </section>
  );
};

const TrustBar = () => (
  <div className="py-4 bg-[#1C1C1C] border-b border-white/5 overflow-hidden">
    <div className="flex justify-around items-center whitespace-nowrap animate-marquee md:animate-none">
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
        Free Worldwide Shipping
      </span>
      <span className="w-1 h-1 bg-white/10 rounded-full hidden md:block" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
        30-Day Returns
      </span>
      <span className="w-1 h-1 bg-white/10 rounded-full hidden md:block" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
        18K Gold Plated
      </span>
      <span className="w-1 h-1 bg-white/10 rounded-full hidden md:block" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
        Hypoallergenic
      </span>
    </div>
  </div>
);

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const data = product.data;

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-white/5 mb-4">
        <img 
          src={isHovered && data.hover_image_url ? data.hover_image_url : data.image_url} 
          alt={data.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-[#C5A059] text-[#121212] py-4 uppercase text-[10px] tracking-widest font-bold"
        >
          Quick Add to Cart
        </button>
      </Link>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xs uppercase tracking-[0.2em] font-serif mb-1 group-hover:text-[#C5A059] transition-colors">
          {data.name}
        </h3>
        <p className="text-sm font-light text-white/60 mb-2">${data.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchBestsellers = async () => {
      const { data: response } = await client.from('Product').select('*').eq('is_bestseller', true).limit(5);
      if (response?.success) setProducts(response.data.list);
    };
    fetchBestsellers();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] mb-4">Curated Favorites</p>
          <h2 className="text-4xl md:text-5xl font-serif">Bestsellers</h2>
        </div>
        <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
          View All Products
        </Link>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

const UGCReels = () => {
  const reels = [
    { id: 1, caption: "Golden Hour Glow", img: "earrings" },
    { id: 2, caption: "Effortless Stacks", img: "necklace" },
    { id: 3, caption: "Daily Essentials", img: "huggies" },
    { id: 4, caption: "The Heirloom Set", img: "jewelry set" },
    { id: 5, caption: "Modern Romance", img: "gold jewelry woman" },
    { id: 6, caption: "Minimalist Charm", img: "gold earring close up" },
  ];

  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#1C1C1C]">
      <div className="px-6 md:px-12 mb-12">
        <h2 className="text-xs uppercase tracking-[0.4em] text-center font-bold">As Seen On You</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-8 px-6 md:px-12 no-scrollbar">
        {reels.map(reel => (
          <div key={reel.id} className="min-w-[200px] md:min-w-[280px] aspect-[9/16] relative group overflow-hidden">
            <img 
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-cap-${reel.id}] ${reel.img} worn model lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`ugc-cap-${reel.id}`} className="text-lg font-serif italic text-white/90">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CategoryTiles = () => {
  const categories = [
    { title: "Earrings", img: "earrings" },
    { title: "Necklaces", img: "necklace" },
    { title: "Huggies", img: "huggie earrings" },
  ];

  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <Link key={idx} to="/shop" className="relative group aspect-square overflow-hidden bg-white/5">
            <img 
              data-strk-img-id={`cat-${idx}`}
              data-strk-img={`[cat-title-${idx}] gold jewelry commercial editorial`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.title}
              className="w-full h-full object-cover grayscale-[0.1] transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span id={`cat-title-${idx}`} className="text-2xl font-serif uppercase tracking-[0.4em]">{cat.title}</span>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center md:hidden">
               <span className="text-sm uppercase tracking-widest font-bold">{cat.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const BrandStory = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#121212]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] overflow-hidden">
          <img 
            data-strk-img-id="story-img"
            data-strk-img="jewelry crafting workshop warm lighting cinematic"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col items-start">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] mb-6">Our Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Every piece tells a story of elegance and intention.</h2>
          <p className="text-white/60 leading-relaxed mb-10 max-w-md">
            Velmora was born from a desire to create jewelry that bridges the gap between fast fashion and fine jewelry. We believe in pieces that are made to last, designed to be layered, and crafted with conscious materials.
          </p>
          <Link to="/about" className="text-xs uppercase tracking-widest border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sarah", initial: "M.", text: "Absolutely stunning. The quality of the 18K plating is incredible, it hasn't tarnished after months of wear.", stars: 5 },
    { name: "Elena", initial: "K.", text: "The Golden Sphere Huggies are my new daily staple. So lightweight and looks much more expensive than they are.", stars: 5 },
    { name: "Jessica", initial: "P.", text: "Purchased the Heirloom set for my sister and she was in tears. The packaging alone is so premium.", stars: 5 },
  ];

  return (
    <section className="py-32 px-6 md:px-12 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {reviews.map((rev, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="flex gap-1 mb-6">
              {[...Array(rev.stars)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
              ))}
            </div>
            <p className="text-lg font-serif italic mb-8 leading-relaxed text-white/80">"{rev.text}"</p>
            <p className="text-xs uppercase tracking-[0.2em] font-bold">{rev.name} {rev.initial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="py-24 px-6 md:px-12 bg-[#1C1C1C]">
    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the Inner Circle</h2>
      <p className="text-white/60 mb-10 tracking-widest text-[10px] uppercase">Sign up for 10% off your first order and exclusive access to new drops.</p>
      <form className="w-full max-w-md flex flex-col md:flex-row gap-4" onSubmit={e => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="ENTER YOUR EMAIL" 
          className="flex-1 bg-transparent border-b border-white/20 py-4 text-xs tracking-widest focus:border-[#C5A059] outline-none transition-colors"
        />
        <button className="px-10 py-4 bg-[#C5A059] text-[#121212] uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-[#B38D48] transition-colors">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="bg-[#121212]">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
