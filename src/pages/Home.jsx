import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { Star, ArrowRight } from 'lucide-react';

const Home = ({ products }) => {

  const bestsellers = products.filter(p => p.data.isBestseller).slice(0, 5);

  const categories = [
    { name: 'Earrings', path: '/shop?category=Earrings', imgId: 'cat-earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces', imgId: 'cat-necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies', imgId: 'cat-huggies' },
  ];

  const ugcPosts = [
    { caption: 'The Daily Stack', id: 'ugc-1' },
    { caption: 'Golden Hour Glow', id: 'ugc-2' },
    { caption: 'Everyday Essentials', id: 'ugc-3' },
    { caption: 'Minimalist Magic', id: 'ugc-4' },
    { caption: 'The Portrait', id: 'ugc-5' },
  ];

  const testimonials = [
    { name: 'Elena R.', text: "Absolutely stunning pieces. The weight and quality feel much more expensive than they are. My new go-to for gifting.", rating: 5 },
    { name: 'Sarah M.', text: "I've worn my Golden Sphere Huggies every day for three months—no tarnishing. Truly hypoallergenic and high-end.", rating: 5 },
    { name: 'Isabella K.', text: "The editorial vibe is what pulled me in, but the craft is what kept me. Velmora is modern luxury at its finest.", rating: 5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 z-0 scale-105"
        />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#F9F7F2]">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl mb-6 leading-tight animate-fade-in-up">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light tracking-wide mb-10 opacity-90">
            Demi-fine jewelry for your everyday editorial moments.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-[#C5A059] text-white px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 shadow-lg"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-[#E5E5E5] py-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500 space-x-12 min-w-max">
          <span>Free Worldwide Shipping</span>
          <span className="text-[#C5A059]">•</span>
          <span>30-Day Returns</span>
          <span className="text-[#C5A059]">•</span>
          <span>18K Gold Plated</span>
          <span className="text-[#C5A059]">•</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="text-left">
            <h2 id="bestsellers-title" className="font-serif text-4xl mb-4">The Bestsellers</h2>
            <p className="text-gray-500 font-light max-w-md">Our most-loved pieces, chosen by our community of modern women.</p>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-widest flex items-center group">
            View All <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Strip */}
      <section className="py-24 bg-[#1A1A1A] overflow-hidden">
        <div className="px-6 md:px-12 mb-12 flex justify-between items-center">
          <h2 className="font-serif text-3xl text-white">Seen on You</h2>
          <span className="text-[#C5A059] uppercase tracking-widest text-xs">@velmorajewelry</span>
        </div>
        <div className="flex space-x-4 px-6 md:px-12 overflow-x-auto scrollbar-hide pb-4">
          {ugcPosts.map((post) => (
            <div key={post.id} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] bg-gray-800 overflow-hidden group">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[ugc-caption-${post.id}] model wearing jewelry`}
                data-strk-img-ratio="9x16"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p id={`ugc-caption-${post.id}`} className="font-serif text-lg text-white italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="relative group overflow-hidden aspect-[4/5] bg-gray-200">
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-name-${cat.name}] jewelry background`}
                data-strk-img-ratio="4x5"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-x-0 bottom-10 text-center">
                <h3 id={`cat-name-${cat.name}`} className="font-serif text-3xl text-white tracking-widest uppercase">
                  {cat.name}
                </h3>
                <span className="text-white/0 group-hover:text-white/100 block mt-4 uppercase tracking-[0.2em] text-[10px] transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
        <div className="relative aspect-square md:aspect-auto">
          <img
            data-strk-img-id="story-img"
            data-strk-img="jewelry crafting process close up"
            data-strk-img-ratio="1x1"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white flex items-center justify-center px-10 md:px-20 py-20">
          <div className="max-w-md">
            <span className="text-[#C5A059] uppercase tracking-[0.2em] text-[10px] mb-6 block">Our Legacy</span>
            <h2 id="story-title" className="font-serif text-4xl mb-8 leading-snug">Designed for the Modern Muse</h2>
            <p className="font-light text-gray-600 leading-relaxed mb-10">
              Velmora was born from a desire for jewelry that bridges the gap between fast fashion and fine jewelry. We believe luxury should be accessible, empowering you to tell your story through pieces that last.
            </p>
            <Link to="/about" className="border-b border-[#1A1A1A] pb-1 uppercase tracking-widest text-xs hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl mb-16 tracking-wide italic">Kind Words</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex space-x-1 mb-6 text-[#C5A059]">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg italic text-[#1A1A1A]/80 mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <span className="uppercase tracking-widest text-[10px] text-gray-400">— {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 md:px-12 bg-[#F3F3F3]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Join the Circle</h2>
          <p className="text-gray-500 font-light mb-12">Sign up for editorial updates, first access to new collections, and <span className="text-[#1A1A1A] font-medium">10% off your first order</span>.</p>
          <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-[#E5E5E5] px-6 py-4 focus:outline-none focus:border-[#C5A059] transition-colors font-light text-sm"
              required
            />
            <button type="submit" className="bg-[#1A1A1A] text-white px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#C5A059] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
