import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading]);

  const categories = [
    { name: 'Earrings', id: 'cat-earrings', query: 'earrings' },
    { name: 'Necklaces', id: 'cat-necklaces', query: 'necklaces' },
    { name: 'Huggies', id: 'cat-huggies', query: 'huggies' },
  ];

  const testimonials = [
    { name: 'Elena R.', body: 'The Golden Sphere Huggies are my new daily staple. So lightweight yet feel incredibly premium.', stars: 5 },
    { name: 'Sarah M.', body: 'Bought the Royal Heirloom Set for my sister and she was obsessed with the packaging and quality.', stars: 5 },
    { name: 'Chloe T.', body: 'Incredible customer service and the jewelry doesn’t tarnish even after months of wear.', stars: 5 }
  ];

  const ugcPosts = [
    { id: 'ugc-1', label: 'Golden Hour' },
    { id: 'ugc-2', label: 'Minimalist Detail' },
    { id: 'ugc-3', label: 'Signature Layering' },
    { id: 'ugc-4', label: 'Everyday Luxury' },
    { id: 'ugc-5', label: 'The Perfect Gift' },
  ];

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p id="hero-sub" className="uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-medium">
            Modern Heirlooms
          </p>
          <h1 id="hero-title" className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight">
            Crafted to be <br className="hidden md:block" /> Treasured
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/shop">
              <Button className="rounded-none bg-white text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white h-14 px-12 uppercase tracking-widest text-xs transition-all duration-300">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-white/40" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-charcoal text-white/80 py-4 overflow-hidden border-y border-white/5 relative">
        <div className="flex justify-center items-center gap-8 md:gap-16 lg:gap-24 whitespace-nowrap animate-marquee">
          {[
            'Free Worldwide Shipping',
            '30-Day Returns',
            '18K Gold Plated',
            'Hypoallergenic',
            'Eco-Friendly Packaging'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
              <Star className="w-3 h-3 text-velmora-gold fill-velmora-gold" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-serif">Bestsellers</h2>
            <p className="text-velmora-gray text-sm md:text-base">Our most coveted pieces, loved by you.</p>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold pb-1 border-b border-velmora-charcoal/20 hover:border-velmora-gold transition-colors">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 md:gap-x-8">
          {loading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="aspect-[3/4] bg-velmora-sand" />
                <div className="h-4 bg-velmora-sand w-2/3 mx-auto" />
                <div className="h-4 bg-velmora-sand w-1/3 mx-auto" />
              </div>
            ))
          ) : (
            products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      {/* Reel-style UGC Row */}
      <section className="py-24 bg-velmora-sand/30">
        <div className="px-6 max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Worn by You</h2>
          <p className="text-velmora-gray text-sm font-sans tracking-wide">Tag @VELMORA for a chance to be featured</p>
        </div>
        
        <div className="relative group">
          <div className="flex overflow-x-auto gap-4 px-6 pb-8 scrollbar-hide snap-x">
            {ugcPosts.map((post, idx) => (
              <div key={post.id} className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative overflow-hidden group/reel snap-start cursor-pointer">
                <img 
                  data-strk-img-id={`ugc-img-${idx}`}
                  data-strk-img={`jewelry lifestyle woman worn [ugc-caption-${idx}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                  alt={post.label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/reel:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/reel:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p id={`ugc-caption-${idx}`} className="text-white font-serif text-lg tracking-wide uppercase">{post.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-square overflow-hidden bg-velmora-sand"
            >
              <img 
                data-strk-img-id={`cat-img-${idx}`}
                data-strk-img={`jewelry [cat-name-${idx}] model close-up`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 id={`cat-name-${idx}`} className="text-white text-3xl font-serif tracking-widest uppercase transition-transform duration-500 group-hover:scale-110">
                  {cat.name}
                </h3>
                <div className="mt-4 overflow-hidden">
                  <p className="text-white text-[10px] uppercase tracking-[0.3em] font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    Explore Now
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-velmora-sand/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-24">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              data-strk-img-id="story-img"
              data-strk-img="minimalist jewelry workshop artisan hands gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              alt="Our Story"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <p className="uppercase tracking-[0.3em] text-[10px] font-bold text-velmora-gold">Since 2018</p>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Quiet luxury, <br />louder confidence.</h2>
            <div className="space-y-6 text-velmora-gray text-base md:text-lg font-light leading-relaxed font-sans">
              <p>
                Velmora was born from a desire for jewelry that bridges the gap between fast-fashion trinkets and unattainable high-fine jewelry. 
              </p>
              <p>
                We believe in the power of subtle details. Each piece is crafted from premium 18k gold vermeil and ethically sourced crystals, designed to be worn today and cherished for years to come.
              </p>
            </div>
            <Link to="/about">
              <Button variant="outline" className="rounded-none border-velmora-charcoal text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white px-10 h-12 uppercase tracking-widest text-[10px]">
                Our Full Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-16 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-velmora-gold fill-velmora-gold" />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {testimonials.map((t, idx) => (
              <div key={idx} className="text-center space-y-6 flex flex-col items-center">
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-velmora-charcoal/90">
                  "{t.body}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-[1px] bg-velmora-gold mb-4" />
                  <p className="uppercase tracking-[0.2em] text-[11px] font-bold">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Styles for Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default Home;
