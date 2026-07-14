import React, { useEffect, useRef, useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { useCart } from '@/lib/cart-context';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MOCK_PRODUCTS } from '@/lib/constants';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 bg-muted"
      />
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="hero-subtitle"
          className="text-xs md:text-sm text-white uppercase tracking-[0.4em] mb-4"
        >
          Timeless Demi-Fine Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="hero-title"
          className="text-4xl md:text-7xl lg:text-8xl text-white font-serif mb-12 max-w-4xl"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/shop" className="btn-premium bg-white text-foreground hover:bg-background h-auto py-5 px-12">
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

const TrustBar = () => (
  <div className="bg-background py-4 px-6 md:px-12 border-b border-border">
    <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 max-w-7xl mx-auto">
      {[
        "Free Worldwide Shipping",
        "30-Day Returns",
        "18K Gold Plated",
        "Hypoallergenic"
      ].map((text, i) => (
        <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
          {text}
        </span>
      ))}
    </div>
  </div>
);

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-muted aspect-[3/4]">
        <img
          data-strk-img-id={`prod-img-${product.id}`}
          data-strk-img={`[prod-name-${product.id}] jewelry gold luxury`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={product.data.images[0]}
          alt={product.data.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
            hovered && product.data.images[1] ? "opacity-0" : "opacity-100"
          )}
        />
        {product.data.images[1] && (
          <img
            src={product.data.images[1]}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 flex-shrink-0",
              hovered ? "opacity-100" : "opacity-0"
            )}
            alt={`${product.data.name} alternate view`}
          />
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-4 text-[10px] uppercase tracking-widest font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        >
          Quick Add
        </button>
      </Link>
      <div className="mt-6 text-center">
        <h3 id={`prod-name-${product.id}`} className="text-[11px] uppercase tracking-widest font-medium mb-1">{product.data.name}</h3>
        <p className="text-sm font-serif italic">${product.data.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data: response } = await client.from('Products').select('*').eq('isBestseller', true).limit(5);
        if (response?.data?.list && response.data.list.length > 0) {
          setProducts(response.data.list);
        } else {
          setProducts(SEED_PRODUCTS.filter(p => p.data.isBestseller).slice(0, 5));
        }
      } catch (err) {
        setProducts(SEED_PRODUCTS.filter(p => p.data.isBestseller).slice(0, 5));
      }
    };
    fetchBestsellers();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif mb-4">The Bestsellers</h2>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Loved by many, crafted for you.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

const UGCGrid = () => {
  const containerRef = useRef(null);
  const items = [
    { id: 1, caption: "Effortless Elegance" },
    { id: 2, caption: "Golden Hour Glow" },
    { id: 3, caption: "The Perfect Huggie" },
    { id: 4, caption: "Curated Stack" },
    { id: 5, caption: "Daily Treasures" },
    { id: 6, caption: "Quiet Luxury" }
  ];

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 overflow-hidden border-y border-border">
      <div className="px-6 md:px-12 mb-12 flex items-baseline justify-between max-w-7xl mx-auto">
        <h2 className="text-2xl font-serif">As Worn By</h2>
        <a href="#" className="text-[10px] uppercase tracking-widest border-b border-foreground pb-1">Follow @Velmora</a>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar px-6 md:px-12">
        {items.map((item) => (
          <div key={item.id} className="min-w-[200px] md:min-w-[280px] aspect-[9/16] relative bg-muted group snap-start overflow-hidden">
            <img
              data-strk-img-id={`ugc-img-${item.id}`}
              data-strk-img={`woman wearing gold jewelry lifestyle [ugc-caption-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <p id={`ugc-caption-${item.id}`} className="absolute bottom-6 left-6 right-6 text-white font-serif text-lg italic">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const categories = [
    { name: "Earrings", id: "cat-earrings", img: "gold earrings elegant close up" },
    { name: "Necklaces", id: "cat-necklaces", img: "gold necklace on model editorial" },
    { name: "Huggies", id: "cat-huggies", img: "gold huggie earrings ear stack" },
  ];

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <Link key={cat.id} to={`/shop?category=${cat.name}`} className="relative aspect-[4/5] bg-muted overflow-hidden group">
          <img
            data-strk-img-id={cat.id}
            data-strk-img={cat.img}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
            <h3 className="text-white text-2xl font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500">{cat.name}</h3>
          </div>
          <div className="absolute bottom-6 left-6 md:hidden">
             <h3 className="text-white text-xl font-serif">{cat.name}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <div className="flex-1 aspect-[3/4] bg-muted overflow-hidden w-full">
        <img
          data-strk-img-id="story-img"
          data-strk-img="jewelry artisan workshop elegant woman gold tools"
          data-strk-img-ratio="3x4"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Our Legacy</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Designed to endure, styled for the modern muse.</h2>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
          Velmora was born from a desire for jewelry that feels meaningful. Every piece in our collection is crafted with intention—balancing timeless aesthetics with sustainable practices. We believe in luxury that is quiet yet profound.
        </p>
        <Link to="/about" className="group flex items-center gap-3 text-xs uppercase tracking-widest font-medium">
          The Full Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Eleanor W.", text: "The Golden Sphere Huggies are my new daily staple. The weight is perfect and the quality is undeniable." },
    { name: "Sophia L.", text: "Beautifully packaged and even more stunning in person.Velmora has become my go-to for gifting." },
    { name: "Isabella K.", text: "Quiet luxury at its finest. The finish is so lustrous, it looks identical to solid 18K gold." }
  ];

  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 text-center md:text-left">
        {reviews.map((rev, i) => (
          <div key={i} className="flex-1 flex flex-col items-center md:items-start text-center">
             <div className="flex gap-1 mb-6 text-accent">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
             </div>
             <p className="font-serif italic text-lg lg:text-xl mb-6 leading-relaxed">"{rev.text}"</p>
             <p className="text-xs uppercase tracking-[0.2em] font-medium">— {rev.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="py-24 px-6 md:px-12 text-center bg-background border-y border-border">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-serif mb-6">Join the Circle</h2>
      <p className="text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed">
        Be the first to see new collections and receive 10% off your first order.
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-4 items-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 bg-white border border-border px-6 py-4 text-sm font-sans focus:outline-none focus:border-primary transition-colors h-14 w-full"
        />
        <button type="submit" className="btn-premium py-4 w-full md:w-auto h-14 whitespace-nowrap">Subscribe</button>
      </form>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <CategoryTiles />
      <BrandStory />
      <UGCGrid />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
