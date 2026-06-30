import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '../lib/data';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-foreground/20 z-10" /> {/* Dark overlay for text readability */}
        <div className="relative z-20 px-4 max-w-4xl mx-auto space-y-6">
          <p id="hero-subtitle" className="text-secondary tracking-[0.2em] uppercase text-sm font-medium">Demi-Fine Jewelry</p>
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl text-secondary">Crafted to be Treasured</h1>
          <p className="text-secondary/90 text-lg md:text-xl max-w-xl mx-auto font-light">
            Quiet luxury for the modern woman. Everyday elegance, consciously created.
          </p>
          <div className="pt-8">
            <Link 
              to="/shop" 
              className="inline-inline bg-accent text-accent-foreground px-10 py-4 font-medium tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-primary text-primary-foreground py-4 border-y border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-wider uppercase opacity-90 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">&middot;</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">&middot;</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-foreground">Our Bestsellers</h2>
              <p className="text-muted-foreground mt-2">Loved by women around the world.</p>
            </div>
            <Link to="/collections/bestsellers" className="hidden md:flex items-center text-sm font-medium border-b border-foreground pb-1 hover:text-primary transition-colors">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                  <img 
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={product.imgQuery}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-background text-foreground px-6 py-2 text-sm font-medium tracking-wide uppercase hover:bg-foreground hover:text-background transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <h3 id={product.nameId} className="font-serif text-lg leading-tight uppercase tracking-wider pr-4">{product.name}</h3>
                  <span className="font-medium text-muted-foreground">${product.price.toFixed(2)}</span>
                </div>
                <p id={product.descId} className="text-sm text-muted-foreground hidden">{product.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center md:hidden">
            <Link to="/collections/bestsellers" className="inline-flex items-center text-sm border-b border-foreground pb-1 font-medium">
              View All Bestsellers <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. UGC Reel Row */}
      <section className="py-16 overflow-hidden bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
          <h2 id="ugc-title" className="font-serif text-3xl text-foreground">Styled by You</h2>
          <p className="text-muted-foreground mt-2">Tag @velmora to be featured</p>
        </div>
        <div className="flex space-x-4 px-4 overflow-x-auto scrollbar-hide pb-8 snap-x" style={{ paddingLeft: 'max(1rem, calc((100vw - 1280px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1280px) / 2))' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-none w-[280px] aspect-[9/16] relative bg-muted snap-center group">
              <div 
                className="absolute inset-0"
                data-strk-bg-id={`ugc-bg-${i}`}
                data-strk-bg={`[ugc-title] woman wearing gold jewelry ${i}`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-secondary font-serif text-lg leading-tight italic">"So in love with my new everyday pieces. Beautiful packaging too!"</p>
                <p className="text-secondary/70 text-xs tracking-wider uppercase mt-4">@velmora_muse_{i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'Earrings', id: 'cat-earrings' },
              { title: 'Necklaces', id: 'cat-necklaces' },
              { title: 'Huggies', id: 'cat-huggies' }
            ].map((cat, i) => (
              <Link to={`/collections/${cat.title.toLowerCase()}`} key={i} className="group relative aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center">
                 <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`cat-bg-${i}`}
                  data-strk-bg={`[${cat.id}] gold jewelry`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <h3 id={cat.id} className="relative z-10 text-secondary font-serif text-3xl md:text-4xl tracking-widest uppercase">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Story Split */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] bg-primary-foreground/10">
              <div 
                className="absolute inset-0"
                data-strk-bg-id="story-bg"
                data-strk-bg="[story-title] jewelry craftsmanship"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <span className="text-secondary/70 tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
              <h2 id="story-title" className="font-serif text-4xl md:text-5xl mb-6">Redefining Everyday Luxury</h2>
              <div className="space-y-6 text-primary-foreground/90 font-light leading-relaxed mb-8">
                <p>
                  Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. We design luxurious, demi-fine pieces crafted to be worn, loved, and lived in every single day.
                </p>
                <p>
                  Working directly with expert jewelers, we bypass traditional markups to bring you premium materials—thick 18k gold vermeil and ethically sourced stones—at an accessible price point.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center text-sm font-medium border-b border-primary-foreground pb-1 hover:text-accent transition-colors">
                Discover Our Craft <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center space-x-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-12 italic">
            "The quality is absolutely stunning. I haven't taken my Golden Sphere Huggies off since I bought them. Highly recommend Velmora!"
          </h2>
          <p className="tracking-wide uppercase text-sm font-medium">— Sarah M.</p>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Velmora Inner Circle</h2>
          <p className="text-muted-foreground mb-10">Subscribe to receive 10% off your first order, plus early access to new collections.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 bg-background border-border px-6 py-3 md:py-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 md:py-4 font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
