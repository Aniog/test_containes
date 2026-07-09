import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const ugcRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.filter(p => p.isBestseller).slice(0, 5));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading]);

  const categories = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' }
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Absolutely love my huggies! They are so lightweight and the gold finish is stunning. Perfect for everyday wear.' },
    { name: 'Elena R.', text: 'The packaging was so elegant, it felt like a gift to myself. The necklace is even more beautiful in person.' },
    { name: 'Chloe T.', text: 'Fast shipping and beautiful quality. I have been wearing my ear cuff daily and it hasn\'t tarnished at all.' }
  ];

  const ugcPosts = [
    { id: 'ugc-1', caption: 'Golden Hour' },
    { id: 'ugc-2', caption: 'Minimalist Dreams' },
    { id: 'ugc-3', caption: 'Ear Stack Daily' },
    { id: 'ugc-4', caption: 'Luxe Layers' },
    { id: 'ugc-5', caption: 'Effortless Style' },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-stone-200"
          data-strk-bg-id="hero-bg"
          data-strk-bg="gold jewelry on model warm lighting editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 z-[1] bg-black/10" />

        <div className="relative z-[2] max-w-4xl pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            id="hero-title"
            className="text-5xl md:text-7xl font-serif text-white leading-tight"
          >
            Crafted to be <br /> <span className="italic">Treasured</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            id="hero-subtitle"
            className="text-stone-100 text-lg md:text-xl font-sans mt-8 max-w-lg font-light tracking-wide"
          >
            Refined demi-fine jewelry designed for the modern woman. Sophistication in every detail.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-12"
          >
            <Button asChild variant="accent" size="lg" className="rounded-none bg-[#9a7b4f] hover:bg-[#856a44]">
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-[#1a1a1a] py-3 text-white overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center justify-around space-x-12 px-6">
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">Free Worldwide Shipping</span>
          <span className="text-stone-500">•</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">30-Day Returns</span>
          <span className="text-stone-500">•</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">18K Gold Plated</span>
          <span className="text-stone-500">•</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium">Hypoallergenic</span>
          {/* Repeat for animation if needed */}
        </div>
      </div>

      {/* 3. Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif mb-4">Bestsellers</h2>
          <div className="h-0.5 w-12 bg-[#9a7b4f]" />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="animate-pulse flex flex-col space-y-4">
                <div className="aspect-[3/4] bg-stone-100" />
                <div className="h-4 bg-stone-100 w-2/3 mx-auto" />
                <div className="h-3 bg-stone-100 w-1/3 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-16">
          <Link to="/shop" className="text-xs uppercase tracking-[0.3em] font-sans font-semibold border-b border-stone-300 pb-1 hover:border-[#9a7b4f] transition-colors inline-flex items-center group">
            View All Products <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
          <h2 className="text-sm uppercase tracking-[0.3em] font-sans font-semibold text-stone-900">Worn By You</h2>
        </div>
        <div ref={ugcRef} className="flex overflow-x-auto space-x-4 px-6 md:px-12 no-scrollbar scroll-smooth">
          {ugcPosts.map((post, idx) => (
            <div key={post.id} className="relative flex-none w-64 md:w-80 aspect-[9/16] bg-stone-200 group overflow-hidden">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[ugc-cap-${post.id}] gold jewelry lifestyle close up`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p id={`ugc-cap-${post.id}`} className="text-lg font-serif italic mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {post.caption}
                </p>
                <div className="w-0 group-hover:w-full h-[1px] bg-white/50 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop By Category */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link to={`/shop?category=${cat.title}`} key={cat.id} className="relative aspect-[4/5] group overflow-hidden">
              <div
                className="absolute inset-0 bg-stone-200 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.id}
                data-strk-bg={`gold [cat-title-${cat.id}] clean setup`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span id={`cat-title-${cat.id}`} className="text-white text-xs uppercase tracking-[0.5em] font-sans border border-white/40 px-6 py-3 backdrop-blur-sm">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="bg-stone-50">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto min-h-[500px] relative">
            <div
              className="absolute inset-0 bg-stone-200"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="gold jewelry craftsmanship workshop aesthetic"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1000"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-white">
            <div className="max-w-md text-center md:text-left space-y-8">
              <h2 id="brand-story-title" className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">The Art of <br /> Quiet Luxury</h2>
              <p id="brand-story-text" className="text-stone-500 font-sans leading-relaxed text-sm md:text-base">
                Velmora was born from a desire to create jewelry that feels both timeless and personal. Each piece is crafted from premium 18K gold-plated vermeil, designed to be worn day after day, year after year.
              </p>
              <Link to="/about" className="text-xs uppercase tracking-widest font-sans font-semibold inline-flex items-center text-[#9a7b4f] hover:text-[#856a44] transition-colors">
                Our Story <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <div className="flex justify-center space-x-1 mb-8">
          {[1, 2, 3, 4, 5].map((n) => <Star key={n} className="w-4 h-4 fill-[#9a7b4f] text-[#9a7b4f]" />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="space-y-4">
              <p className="text-stone-600 font-serif italic text-lg leading-relaxed">"{t.text}"</p>
              <p className="text-xs uppercase tracking-widest font-sans font-semibold text-stone-400">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-stone-900 p-12 md:p-20 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 z-0"
            data-strk-bg-id="newsletter-bg"
            data-strk-bg="abstract gold silk texture"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="relative z-10 max-w-xl mx-auto space-y-8">
            <h2 id="newsletter-title" className="text-2xl md:text-4xl font-serif text-white uppercase tracking-widest">Join The Circle</h2>
            <p id="newsletter-desc" className="text-stone-400 font-sans text-sm md:text-base">Receive 10% off your first order and stay updated on our latest collections and stories.</p>
            <form className="flex flex-col md:flex-row gap-4 mt-8" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow bg-white/5 border border-white/20 px-6 py-4 text-white font-sans text-sm tracking-wider focus:outline-none focus:border-white transition-colors"
                required
              />
              <Button type="submit" variant="accent" className="rounded-none px-12 h-[54px] bg-[#9a7b4f] hover:bg-[#856a44]">Join</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
