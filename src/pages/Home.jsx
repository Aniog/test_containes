import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ProductCard } from '@/components/ui/product-card';
import { seedProducts } from '@/lib/data';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = seedProducts.slice(0, 4);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <section className="relative h-screen flex border-b border-border">
          <div 
            className="absolute inset-0 z-0 bg-secondary"
            data-strk-bg-id="hero-bg-main"
            data-strk-bg="[hero-sub] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white text-center px-4 pt-20">
            <span id="hero-sub" className="text-sm uppercase tracking-[0.3em] mb-6">Demi-Fine Gold Jewelry</span>
            <h1 id="hero-title" className="text-5xl md:text-7xl font-serif max-w-4xl mb-8 leading-tight">
              Crafted to be Treasured.
            </h1>
            <Link 
              to="/shop" 
              className="bg-white text-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-primary text-primary-foreground py-4 border-b border-border">
          <div className="container mx-auto px-4 overflow-hidden">
            <div className="flex justify-between items-center whitespace-nowrap text-xs md:text-sm uppercase tracking-widest overflow-x-auto gap-8 no-scrollbar">
              <span className="flex-shrink-0">Free Worldwide Shipping</span>
              <span className="hidden md:inline-block w-1 h-1 bg-accent rounded-full"></span>
              <span className="flex-shrink-0">30-Day Returns</span>
              <span className="hidden md:inline-block w-1 h-1 bg-accent rounded-full"></span>
              <span className="flex-shrink-0">18K Gold Plated</span>
              <span className="hidden md:inline-block w-1 h-1 bg-accent rounded-full"></span>
              <span className="flex-shrink-0">Hypoallergenic</span>
            </div>
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="text-4xl font-serif mb-4">Bestsellers</h2>
              <div className="w-12 h-px bg-accent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {bestsellers.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <Link 
                to="/collections/bestsellers" 
                className="border border-foreground text-foreground px-8 py-3 uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                View All Bestsellers
              </Link>
            </div>
          </div>
        </section>

        {/* UGC Reel Section */}
        <section className="py-16 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-serif">Worn By You</h2>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest border-b border-foreground hover:text-accent hover:border-accent transition-colors">
                @velmorajewelry
              </a>
            </div>
          </div>
          
          <div className="flex overflow-x-auto gap-6 px-4 md:px-12 pb-8 no-scrollbar snap-x">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex-none w-72 h-[32rem] relative group snap-center rounded-sm overflow-hidden bg-background">
                <img
                  data-strk-img-id={`ugc-${item}`}
                  data-strk-img="women wearing elegant simple gold jewelry lifestyle"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Lifestyle view ${item}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-serif text-lg leading-snug">"The perfect everyday stack. Obsessed."</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Earrings', query: 'gold earrings flat lay' },
                { title: 'Necklaces', query: 'gold necklaces layering' },
                { title: 'Huggies', query: 'gold huggie earrings small hoops' }
              ].map((cat, i) => (
                <Link key={cat.title} to={`/shop?category=${cat.title.toLowerCase()}`} className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <img
                    data-strk-img-id={`cat-${i}`}
                    data-strk-img={cat.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Shop ${cat.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-serif tracking-wide">{cat.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story Split */}
        <section className="bg-primary/50">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            <div className="lg:w-1/2 relative min-h-[400px]">
              <div 
                className="absolute inset-0 z-0 bg-secondary"
                data-strk-bg-id="brand-story-bg"
                data-strk-bg="jewelry maker workshop gold editorial"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              ></div>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center p-12 md:p-24">
              <div className="max-w-md">
                <h2 className="text-4xl font-serif mb-6">Quiet Luxury, Everyday Wear</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Velmora was born from a simple desire: demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. We design accessible solid gold-plated pieces that elevate your daily uniform without trying too hard.
                </p>
                <Link to="/about" className="uppercase tracking-widest text-sm font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
                  Read Our Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-4">Loved By You</h2>
            <div className="w-12 h-px bg-accent mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'Sarah M.', quote: "Finally found huggies that don't tarnish after a week. The quality feels so premium for the price." },
                { name: 'Elena R.', quote: "The packaging alone is stunning. I bought the Heirloom Set for myself and felt like a queen." },
                { name: 'Jessica T.', quote: "Perfect weight, perfect gold tone. Not too yellow, just that beautiful warm vintage hue." }
              ].map((review, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex gap-1 text-accent mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="font-serif text-xl italic leading-relaxed mb-6">"{review.quote}"</p>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}