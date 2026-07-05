import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import useCartStore from '@/lib/store';

const SEED_PRODUCTS = [
  {
    id: '1',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    variant: 'gold',
    imageQuery: '[product-1-name] gold ear cuff with crystal accent jewelry on model'
  },
  {
    id: '2',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    variant: 'gold',
    imageQuery: '[product-2-name] multicolor floral crystal gold necklace'
  },
  {
    id: '3',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    variant: 'gold',
    imageQuery: '[product-3-name] chunky gold dome huggie earrings on model'
  },
  {
    id: '4',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    variant: 'gold',
    imageQuery: '[product-4-name] textured gold filigree drop earrings'
  },
  {
    id: '5',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    variant: 'gold',
    imageQuery: '[product-5-name] gift-boxed gold earring and necklace set elegant'
  }
];

const CATEGORIES = [
  { id: 'cat-earrings', title: 'Earrings', query: '[cat-earrings-title] demi-fine gold earrings editorial' },
  { id: 'cat-necklaces', title: 'Necklaces', query: '[cat-necklaces-title] delicate gold layered necklaces on neck' },
  { id: 'cat-huggies', title: 'Huggies', query: '[cat-huggies-title] small gold huggie hoop earrings' }
];

const TESTIMONIALS = [
  { id: 1, name: 'Sarah', initial: 'M.', text: 'The quality of the Golden Sphere Huggies is incredible. They look so much more expensive than they are, and I wear them every single day without any tarnishing.' },
  { id: 2, name: 'Elena', initial: 'R.', text: 'Beautiful packaging and stunning jewelry. The Majestic Flora necklace gets me compliments everywhere I go. Quiet luxury at its finest.' },
  { id: 3, name: 'Jessica', initial: 'T.', text: 'Finally found hypoallergenic earrings that don\'t irritate my sensitive ears. The design is elegant and timeless.' }
];

export function Home() {
  const containerRef = useRef(null);
  const { addItem, openCart } = useCartStore();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (product) => {
    addItem(product);
    toast.success('Added to cart', {
      description: `1x ${product.name}`,
      action: {
        label: 'View Cart',
        onClick: () => openCart()
      }
    });
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-secondary/50"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-title] close-up of warm gold jewelry on a model editorial lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Subtle overlay for text readability */}
        
        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto mt-20">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground mb-6 leading-tight">
            Crafted to be <br/>Treasured
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto font-light">
            Demi-fine gold jewelry for the modern woman. Discover quiet luxury designed for everyday elegance.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 uppercase tracking-widest text-sm">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary/50 border-b border-border py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground text-center">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">•</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">•</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">•</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-3xl font-serif tracking-wide">Bestsellers</h2>
          <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-primary/70 transition-colors flex items-center gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SEED_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative flex flex-col group/card cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary/30 overflow-hidden mb-4 rounded-sm">
                <img
                  data-strk-img-id={`product-${product.id}-main`}
                  data-strk-img={product.imageQuery}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                
                {/* Hover Add to Cart Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300">
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart({
                        ...product,
                        image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E` // Placeholder for cart until proper images are loaded
                      });
                    }}
                    className="w-full uppercase tracking-widest text-xs h-10 shadow-lg"
                    variant="default"
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <div className="flex-1 flex flex-col">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`product-${product.id}-name`} className="font-serif text-base tracking-widest uppercase mb-2 line-clamp-1">{product.name}</h3>
                </Link>
                <p className="text-muted-foreground mt-auto">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC / Editorial Reel Row */}
      <section className="bg-secondary/20 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 id="editorial-title" className="text-3xl font-serif text-center tracking-wide">As Seen On You</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[9/16] relative rounded-md overflow-hidden group">
              <img
                data-strk-img-id={`ugc-${item}`}
                data-strk-img="[editorial-title] aesthetic woman wearing gold jewelry selfie"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Editorial styling"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-serif text-lg italic">
                  "{['Effortless everyday.', 'My new favorite layer.', 'The perfect gold hue.', 'Obsessed with these hugs.', 'Quality is unmatched.', 'Never taking them off.'][item-1]}"
                </p>
                <div className="flex items-center gap-2 mt-3 text-primary-foreground/80 text-sm">
                  <Instagram className="w-4 h-4" />
                  <span>@velmorafine</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 id="categories-title" className="text-3xl font-serif text-center mb-12 tracking-wide">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-[3/4] overflow-hidden rounded-sm flex items-center justify-center">
              <img
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="relative z-10 p-6 bg-background/95 backdrop-blur-sm shadow-sm translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 id={`${cat.id}-title`} className="font-serif text-xl uppercase tracking-widest px-8 py-2">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-12 px-6 max-w-7xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="aspect-[4/5] relative rounded-sm overflow-hidden order-2 md:order-1">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] elegant woman looking away wearing demi-fine gold jewelry"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora styling"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 id="story-title" className="text-4xl lg:text-5xl font-serif mb-6 leading-tight text-primary">Uncompromising<br/>Elegance</h2>
            <div className="w-12 h-[1px] bg-primary/30 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              Velmora was born from a desire for jewelry that bridges the gap between fast fashion and fine jewelry. We believe that everyday luxury shouldn't be an oxymoron.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-light">
              Crafted meticulously with 18K gold plating over sterling silver, our pieces are designed to be worn, loved, and lived in. Hypoallergenic, water-resistant, and timeless.
            </p>
            <Link to="/about" className="uppercase tracking-widest text-sm font-medium hover:text-primary/70 transition-colors inline-block w-max pb-1 border-b border-primary">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16 tracking-wide">Loved by You</h2>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="flex flex-col text-center items-center">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-8 flex-1 italic text-foreground/90">
                  "{t.text}"
                </p>
                <div className="w-8 h-[1px] bg-primary/20 mb-4" />
                <p className="text-sm uppercase tracking-widest font-medium">
                  {t.name} {t.initial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}