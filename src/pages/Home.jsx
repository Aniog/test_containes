import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { products, REVIEWS } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

const Home = () => {
  const bestsellers = products.slice(0, 5);

  const ugcPosts = [
    { id: 'ugc-1', caption: 'Everyday elegance.' },
    { id: 'ugc-2', caption: 'The perfect stack.' },
    { id: 'ugc-3', caption: 'Golden hour glow.' },
    { id: 'ugc-4', caption: 'Minimalist dreams.' },
    { id: 'ugc-5', caption: 'Detail obsessed.' },
  ];

  return (
    <div className="fade-in">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        
        <div className="relative z-10 text-center text-velmora-warm px-6">
          <motion.h2 
            id="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] mb-4 font-medium"
          >
            The Summer Collection
          </motion.h2>
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 max-w-4xl mx-auto leading-[1.1]"
          >
            Crafted to be Treasured
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="inline-block bg-velmora-gold text-velmora-warm px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-velmora-warm hover:text-velmora-charcoal transition-all duration-300"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-velmora-stone py-4 text-velmora-warm/60 overflow-hidden whitespace-nowrap border-y border-velmora-taupe/10">
        <div className="flex animate-marquee gap-12 md:gap-20 justify-center">
          {[
            "Free Worldwide Shipping",
            "30-Day Returns",
            "18K Gold Plated",
            "Hypoallergenic",
            "Gift Ready Packaging"
          ].map((text, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-medium flex items-center gap-2">
              <span className="w-1 h-1 bg-velmora-gold rounded-full" />
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Bestsellers Product Grid */}
      <section className="py-24 px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium text-velmora-gold mb-3">Our Favorites</h3>
            <h2 className="text-4xl font-serif">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. UGC Reel Style Strip */}
      <section className="py-24 bg-velmora-cream/50 overflow-hidden">
        <div className="px-6 md:px-20 mb-12 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] font-medium mb-4">Seen on You</h2>
          <p className="text-2xl font-serif">Tag #VelmoraMoments</p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-6 md:px-20 no-scrollbar pb-10">
          {ugcPosts.map((post) => (
            <div key={post.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative bg-velmora-cream overflow-hidden group">
              <img 
                data-strk-img-id={post.id}
                data-strk-img={`[ugc-caption-${post.id}] model jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="UGC Content"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p id={`ugc-caption-${post.id}`} className="text-velmora-warm font-serif text-lg italic tracking-wide">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
            <Link key={cat} to={`/shop?category=${cat.toLowerCase()}`} className="relative aspect-[3/4] group overflow-hidden bg-velmora-stone">
              <img 
                data-strk-img-id={`cat-img-${cat}`}
                data-strk-img={`[cat-title-${cat}] jewelry aesthetic`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-velmora-warm/95 px-8 py-4 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 id={`cat-title-${cat}`} className="text-xl font-serif tracking-widest uppercase">{cat}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="py-24 bg-velmora-warm overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto md:h-[600px] relative overflow-hidden">
            <img 
              data-strk-img-id="story-img"
              data-strk-img="jewelry craftsmanship details luxury"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col items-start gap-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium text-velmora-taupe">Our Philosophy</h3>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Quiet Luxury, <br/>Loud Craftsmanship.</h2>
            <p className="text-velmora-charcoal/70 leading-relaxed max-w-md">
              Velmora was founded on the belief that everyday jewelry should feel like an heirloom. Each piece is meticulously designed in our studio, balancing timeless silhouettes with a modern edge.
            </p>
            <Link to="/about" className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors mt-4">
              Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-velmora-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {REVIEWS.map((review, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <p className="text-xl font-serif italic mb-2">"{review.text}"</p>
                <p className="text-xs uppercase tracking-widest font-semibold">{review.name} {review.initial}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-velmora-charcoal p-12 md:p-20 text-center text-velmora-warm flex flex-col items-center gap-8">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.4em]">Velmora Insider</h2>
            <p className="text-3xl font-serif italic">Join for 10% off your first order</p>
          </div>
          <form className="w-full max-w-md flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-transparent border-b border-velmora-warm/30 py-3 text-sm focus:border-velmora-gold outline-none transition-colors"
            />
            <button className="bg-velmora-gold text-velmora-warm px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-velmora-warm hover:text-velmora-charcoal transition-all">
              Join Us
            </button>
          </form>
          <p className="text-[10px] uppercase tracking-widest text-velmora-warm/30">
            By subscribing, you agree to our privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
