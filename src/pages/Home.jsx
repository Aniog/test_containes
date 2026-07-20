import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Layout } from '../components/layout/Layout';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-900 text-brand-50">
          <div 
            className="absolute inset-0 opacity-60 mix-blend-overlay"
            data-strk-bg-id="hero-bg-main"
            data-strk-bg="[hero-title] [hero-subtitle] gold jewelry close up editorial"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 font-medium leading-tight">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl md:leading-relaxed mb-10 font-light max-w-2xl mx-auto text-brand-100">
              Demi-fine gold jewelry for the modern woman. Discover pieces that bring quiet luxury to your everyday moments.
            </p>
            <a href="/shop" className="btn-primary bg-brand-50 text-brand-900 hover:bg-brand-200">
              Shop the Collection
            </a>
          </div>
        </section>

        {/* Trust Bar */}
        <div className="bg-brand-100 text-brand-800 py-3 border-y border-brand-200">
          <div className="container mx-auto px-4 overflow-hidden">
            <div className="flex items-center justify-between whitespace-nowrap overflow-x-auto text-xs uppercase tracking-widest font-medium gap-8 no-scrollbar pb-1">
              <span>Free Worldwide Shipping</span>
              <span className="text-brand-300">•</span>
              <span>30-Day Returns</span>
              <span className="text-brand-300">•</span>
              <span>18K Gold Plated</span>
              <span className="text-brand-300">•</span>
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>

        {/* Bestsellers Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-12">
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl text-brand-900">Discover Bestsellers</h2>
              <a href="/collections/bestsellers" className="hidden md:flex items-center text-sm uppercase tracking-widest font-medium text-brand-600 hover:text-brand-900 transition-colors">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
              {products.slice(0, 5).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <a href="/collections/bestsellers" className="btn-secondary w-full">
                View All Bestsellers
              </a>
            </div>
          </div>
        </section>

        {/* UGC Reels Row */}
        <section className="py-16 bg-brand-100 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 mb-10">
            <h2 id="ugc-title" className="text-3xl text-brand-900 text-center">Styled by You</h2>
          </div>
          <div className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative shrink-0 w-64 md:w-80 aspect-[9/16] snap-start bg-brand-200">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Customer styling"
                  className="w-full h-full object-cover"
                  data-strk-img-id={`ugc-img-${i}`}
                  data-strk-img="[ugc-title] aesthetic portrait wearing gold jewelry neutral"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <p className="font-serif text-white text-lg">"Everyday elegance."</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Tiles */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {[
                { title: 'Earrings', id: 'cat-earrings' },
                { title: 'Necklaces', id: 'cat-necklaces' },
                { title: 'Huggies', id: 'cat-huggies' }
              ].map((category) => (
                <a href={`/collections/${category.title.toLowerCase()}`} key={category.id} className="group relative aspect-[3/4] overflow-hidden bg-brand-100 block">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`cat-img-${category.id}`}
                    data-strk-img={`[${category.id}] gold jewelry editorial close`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <h3 id={category.id} className="text-white font-serif text-3xl tracking-widest uppercase">
                      {category.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-24 bg-brand-900 text-brand-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="order-2 md:order-1 relative aspect-[4/5] bg-brand-800">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora Craftsmanship"
                  className="w-full h-full object-cover"
                  data-strk-img-id="story-img-main"
                  data-strk-img="[story-title] [story-desc] jewelry making craft aesthetic"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                />
              </div>
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 id="story-title" className="text-4xl md:text-5xl mb-6">Designed for the Modern Classic</h2>
                <div className="hairline-divider bg-brand-700 w-24 mx-auto md:mx-0 mb-8"></div>
                <p id="story-desc" className="text-brand-200 font-light leading-relaxed mb-10 text-lg">
                  At Velmora, we believe true luxury doesn't have to shout. Our pieces are meticulously crafted to be worn, loved, and lived in. We use premium 18K gold plating over sterling silver and brass foundations to ensure accessibility without compromising on longevity or luster.
                </p>
                <a href="/about" className="btn-primary bg-brand-50 text-brand-900 hover:bg-brand-200">
                  Read Our Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-brand-50">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl mb-16 text-brand-900">Loved by You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Sarah M.", text: "The quality is simply unmatched for the price point. These huggies have become my daily uniform." },
                { name: "Elena R.", text: "Beautifully packaged and even more stunning in person. It feels like wearing vintage heirlooms." },
                { name: "Jessica T.", text: "I have sensitive skin and usually can't wear plated jewelry, but Velmora pieces give me zero issues." }
              ].map((review, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex gap-1 mb-6 text-accent">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-brand-800 italic mb-6">"{review.text}"</p>
                  <p className="text-sm tracking-widest uppercase font-medium text-brand-500">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-accent-light text-brand-900">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Join the Club</h2>
            <p className="mb-10 font-light text-brand-800">Subscribe for early access to new collections and 10% off your first order.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 bg-white/80 border border-transparent focus:outline-none focus:border-brand-900 font-light placeholder:text-brand-500 transition-colors"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}