import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { products, useCartStore } from '@/store';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const { addItem } = useCartStore();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted mb-4 rounded-sm">
        <Link to={`/product/${product.id}`} className="block h-full w-full">
           <img
            data-strk-img-id={`prod-${product.id}-img-1`}
            data-strk-img={`[prod-${product.id}-title] primary image close up jewelry product shot on neutral background`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            data-strk-img-id={`prod-${product.id}-img-2`}
            data-strk-img={`[prod-${product.id}-title] lifestyle image model wearing jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={`${product.name} lifestyle`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </Link>
        <div className={`absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden lg:block z-20`}>
          <Button 
            className="w-full bg-background/95 text-foreground hover:bg-background tracking-widest uppercase text-xs h-12"
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
          >
            Quick Add +
          </Button>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h3 id={`prod-${product.id}-title`} className="text-xs tracking-[0.2em] font-medium uppercase mb-2">
          <Link to={`/product/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0 z-10 lg:z-auto" />
            {product.name}
          </Link>
        </h3>
        <p className="text-sm font-serif italic text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
};

const UGCVideoCard = ({ id, label }) => {
    return (
        <div className="flex-shrink-0 w-64 md:w-72 lg:w-80 snap-center relative group rounded-sm overflow-hidden cursor-pointer">
            <div className="aspect-[9/16] w-full relative">
                <img
                    data-strk-img-id={`ugc-img-${id}`}
                    data-strk-img={`[ugc-label-${id}] portrait orientation lifestyle photo of person wearing jewelry natural light`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    alt={label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <p id={`ugc-label-${id}`} className="text-white font-serif text-xl italic drop-shadow-md">
                        {label}
                    </p>
                </div>
            </div>
        </div>
    )
}

const CategoryTile = ({ title, categoryUrl }) => {
    return (
        <Link to={categoryUrl} className="group relative block aspect-square md:aspect-[4/5] overflow-hidden rounded-sm">
             <img
                data-strk-img-id={`cat-tile-${title.toLowerCase()}`}
                data-strk-img={`[cat-title-${title.toLowerCase()}] elegant editorial photo of jewelry category flat lay or lifestyle`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`cat-title-${title.toLowerCase()}`} className="text-white text-3xl font-serif tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out drop-shadow-lg">
                    {title}
                </h3>
            </div>
        </Link>
    )
}

const Testimonial = ({ quote, name, initial }) => (
    <div className="flex flex-col items-center text-center max-w-lg mx-auto">
        <div className="flex gap-1 mb-6 text-accent">
            <Star fill="currentColor" className="w-5 h-5"/>
            <Star fill="currentColor" className="w-5 h-5"/>
            <Star fill="currentColor" className="w-5 h-5"/>
            <Star fill="currentColor" className="w-5 h-5"/>
            <Star fill="currentColor" className="w-5 h-5"/>
        </div>
        <p className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-8 text-foreground/90">"{quote}"</p>
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">— {name} {initial}.</p>
    </div>
)


const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
            data-strk-bg-id="home-hero-bg"
            data-strk-bg="[hero-title] [hero-subtitle] cinematic editorial photo model wearing gold jewelry warm golden hour lighting close up portrait"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
        ></div>
        <div className="absolute inset-0 z-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <h1 id="hero-title" className="text-white font-serif text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-white/90 font-serif italic text-xl md:text-2xl mb-10 max-w-2xl drop-shadow-md">
            Demi-fine jewelry designed for the modern romantic. Elevate your everyday with accessible luxury.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-10 text-sm tracking-widest uppercase font-medium group">
            <Link to="/shop">
              Shop the Collection
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-4 border-y border-primary/20">
        <div className="container mx-auto">
            <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-[0.15em] uppercase font-medium opacity-90 text-center">
                <li>Free Worldwide Shipping</li>
                <li className="hidden md:block opacity-50">•</li>
                <li>30-Day Returns</li>
                <li className="hidden md:block opacity-50">•</li>
                <li>18K Gold Plated</li>
                <li className="hidden md:block opacity-50">•</li>
                <li>Hypoallergenic</li>
            </ul>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">Curated Favorites</h2>
                <div className="w-12 h-px bg-accent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
                {bestsellers.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="mt-16 text-center">
                <Button asChild variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background tracking-[0.2em] uppercase text-xs h-12 px-8">
                    <Link to="/shop">View All Pieces</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
         <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12 flex justify-between items-end">
            <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-2">As Seen On You</h2>
                <p className="text-muted-foreground font-serif italic">Tag @velmorajewelry to be featured.</p>
            </div>
         </div>
         {/* Horizontal scroll container */}
         <div className="flex px-4 md:px-6 lg:px-8 gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">
             <UGCVideoCard id="1" label="The Amber Drop" />
             <UGCVideoCard id="2" label="Everyday Huggies" />
             <UGCVideoCard id="3" label="Layered Chains" />
             <UGCVideoCard id="4" label="Golden Hour Glow" />
             <UGCVideoCard id="5" label="Weekend Uniform" />
             <UGCVideoCard id="6" label="The Statement Cuff" />
         </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 md:py-32">
         <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">Shop by Category</h2>
                <div className="w-12 h-px bg-accent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <CategoryTile title="Earrings" categoryUrl="/shop?category=Earrings" />
                <CategoryTile title="Necklaces" categoryUrl="/shop?category=Necklaces" />
                <CategoryTile title="Huggies" categoryUrl="/shop?category=Huggies" />
            </div>
         </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
              <div className="w-full lg:w-1/2 relative bg-secondary order-2 lg:order-1 min-h-[400px]">
                 <div 
                    className="absolute inset-0 bg-cover bg-center"
                    data-strk-bg-id="story-split-bg"
                    data-strk-bg="[story-heading] [story-desc] elegant artisan working on jewelry studio warm lighting soft focus"
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="1200"
                 ></div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24 bg-background order-1 lg:order-2">
                  <div className="max-w-md">
                      <h2 id="story-heading" className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Quiet Luxury, Everyday Wear</h2>
                      <p id="story-desc" className="text-muted-foreground leading-relaxed mb-10 font-serif text-lg">
                          At Velmora, we believe that fine jewelry shouldn't wait for a special occasion. We craft pieces that merge vintage romance with modern restraint, using premium 18K gold plating over hypoallergenic materials. Our mission is to make the feeling of luxury accessible, everyday.
                      </p>
                      <Button asChild variant="link" className="p-0 h-auto font-semibold tracking-[0.2em] uppercase text-xs flex items-center gap-2 hover:no-underline hover:text-muted-foreground group">
                          <Link to="/about">
                              Discover Our Story
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4">
              <Testimonial 
                quote="The most beautiful earrings I own. I receive compliments every time I wear the Vivid Aura ear cuff. The quality feels incredibly high-end for the price."
                name="Sarah"
                initial="M"
              />
          </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Inner Circle</h2>
              <p className="font-serif italic text-primary-foreground/80 mb-10 text-lg">Subscribe to receive 10% off your first order, plus early access to new collections.</p>
              <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-transparent border-b border-primary-foreground/30 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground w-full md:w-80 rounded-none transition-colors"
                  />
                  <Button type="submit" variant="outline" className="rounded-none border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary tracking-widest uppercase text-xs h-12 px-8">
                      Subscribe
                  </Button>
              </form>
          </div>
      </section>

    </div>
  );
};

export default Home;