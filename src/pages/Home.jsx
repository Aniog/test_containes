import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

const Home = ({ products, onAddToCart }) => {
  const bestsellers = products.slice(0, 5);

  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  const categories = [
    { name: 'Earrings', href: '/shop?category=earrings', img: 'earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces', img: 'necklace' },
    { name: 'Huggies', href: '/shop?category=huggies', img: 'huggies' },
  ];

  const ugcPosts = [
    { id: 1, caption: 'Daily Sparkle', author: '@sophia_m' },
    { id: 2, caption: 'Golden Hour', author: '@emma_l' },
    { id: 3, caption: 'Stack Goals', author: '@mia_v' },
    { id: 4, caption: 'Layered Perfection', author: '@lily_j' },
  ];

  return (
    <div className="bg-velmora-alabaster overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle] gold jewelry lifestyle editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="relative z-10 text-center text-velmora-alabaster px-6">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.p
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="text-lg md:text-xl font-sans tracking-wide mb-10 max-w-2xl mx-auto font-light"
          >
            Timed fine jewelry for the modern woman. Premium quality at an accessible price.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            <Link
              to="/shop"
              className="inline-block bg-velmora-gold text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-velmora-charcoal transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-charcoal text-velmora-alabaster/80 py-4 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {trustItems.map((item) => (
            <span key={item} className="text-[10px] uppercase tracking-widest font-sans flex items-center">
              <span className="w-1 h-1 bg-velmora-gold rounded-full mr-3" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif">The Bestsellers</h2>
            <p className="text-velmora-grey font-sans text-sm tracking-wide">Most-loved pieces curated for your everyday elegance.</p>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-velmora-charcoal pb-1 flex items-center group">
            Explore All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-8">
          {bestsellers.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-velmora-charcoal/5 mb-6">
                <img
                  data-strk-img-id={`product-${product.id}-main`}
                  data-strk-img={`[product-title-${product.id}] gold jewelry luxury editorial`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onAddToCart(product);
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-velmora-charcoal text-velmora-alabaster py-4 text-[10px] uppercase tracking-widest font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                >
                  Quick Add to Bag
                </button>
              </Link>
              <div className="text-center">
                <h3 id={`product-title-${product.id}`} className="text-xs uppercase tracking-widest font-serif font-medium mb-2 group-hover:text-velmora-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-sans text-velmora-grey">{formatPrice(product.price)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="bg-velmora-alabaster py-24 overflow-hidden border-y border-velmora-charcoal/5">
        <div className="px-6 lg:px-12 mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-serif">Worn by You</h2>
            <p className="text-xs uppercase tracking-widest font-sans text-velmora-grey">#MyVelmora</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide px-6 lg:px-12 snap-x">
          {ugcPosts.map((post) => (
            <div key={post.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative overflow-hidden group snap-start">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img="woman wearing gold jewelry lifestyle mirror selfie aesthetic"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="UGC"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-velmora-alabaster">
                <p className="font-serif italic text-lg mb-1 leading-tight">{post.caption}</p>
                <p className="text-[10px] uppercase tracking-widest opacity-80">{post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                data-strk-img-id={`cat-${cat.name}`}
                data-strk-img={`close up of gold ${cat.img} jewelry editorial`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <h3 className="text-velmora-alabaster text-2xl font-serif uppercase tracking-[0.3em] opacity-100 group-hover:scale-110 transition-transform duration-500">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-velmora-charcoal text-velmora-alabaster flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto h-[600px] overflow-hidden">
          <img
            data-strk-img-id="story-img"
            data-strk-img="jewelry craftsmanship gold plating tools fine detail editorial"
            data-strk-img-ratio="3x2"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-12 lg:p-24 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif">Our Story</h2>
          <p className="text-velmora-alabaster/60 font-sans leading-relaxed text-sm md:text-base max-w-lg">
            VELMORA was born from a desire to bridge the gap between costume jewelry and unattainable luxury. We believe every piece should tell a story, regardless of the price point.
            <br /><br />
            Using only responsibly sourced 18K gold plating over surgical-grade steel, we ensure our pieces are as durable as they are beautiful. Designed in New York, made to be worn everywhere.
          </p>
          <Link
            to="/about"
            className="inline-block text-xs uppercase tracking-widest font-bold border-b border-velmora-gold pb-1 text-velmora-gold hover:text-white hover:border-white transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-16 underline decoration-velmora-gold/30 underline-offset-8 decoration-2">Whispers of Praise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Sarah J.', text: '"The quality of the Golden Sphere Huggies is unmatched. I wear them every single day."' },
            { name: 'Elena K.', text: '"Stunning presentation and the jewelry looks even better in person. Perfectly weighted."' },
            { name: 'Maya R.', text: '"Finally, gold jewelry that doesn\'t irritate my skin. I\'m obsessed with the heirloom set."' }
          ].map((testi, i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-center text-velmora-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif italic text-lg">"{testi.text}"</p>
              <p className="text-[10px] uppercase tracking-widest text-velmora-grey font-bold">— {testi.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#EBE9E4] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif">Join the Inner Circle</h2>
          <p className="text-velmora-grey font-sans text-sm tracking-wide">Receive early access to new collections and 10% off your first order.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 bg-transparent border-b border-velmora-charcoal py-4 text-xs font-sans tracking-widest focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button className="bg-velmora-charcoal text-velmora-alabaster px-10 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-velmora-charcoal/80 transition-colors">
              Join Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
