import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ArrowRight } from 'lucide-react';

const bestsellers = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    price: 42,
    desc: 'Gold ear cuff with crystal accent',
    imgId: 'vivid-aura-cuff-1a',
    hoverImgId: 'vivid-aura-cuff-1b'
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    price: 68,
    desc: 'Multicolor floral crystal necklace',
    imgId: 'majestic-flora-neck-2a',
    hoverImgId: 'majestic-flora-neck-2b'
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    price: 38,
    desc: 'Chunky gold dome huggie earrings',
    imgId: 'golden-sphere-hug-3a',
    hoverImgId: 'golden-sphere-hug-3b'
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    price: 54,
    desc: 'Textured gold filigree drop earrings',
    imgId: 'amber-lace-drop-4a',
    hoverImgId: 'amber-lace-drop-4b'
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    price: 95,
    desc: 'Gift-boxed earring + necklace set',
    imgId: 'royal-heirloom-set-5a',
    hoverImgId: 'royal-heirloom-set-5b'
  }
];

const categories = [
  { id: 'cat-1', name: 'Earrings', imgId: 'cat-earrings' },
  { id: 'cat-2', name: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'cat-3', name: 'Huggies', imgId: 'cat-huggies' },
];

const testimonials = [
  { id: 't1', name: 'Sarah M.', text: 'Absolutely stunning quality. The weight of the gold feels so premium, yet they are comfortable to wear all day.' },
  { id: 't2', name: 'Elena R.', text: 'I bought the Royal Heirloom Set as a gift for myself and I have not taken it off since. Gorgeous packaging too.' },
  { id: 't3', name: 'Jessica T.', text: 'The perfect demi-fine pieces. They actually look and feel like solid gold without the astronomical price tag.' }
];

const ugcImages = [
  { id: 'ugc1', caption: 'Everyday elegance in gold', imgId: 'ugc-earrings-worn' },
  { id: 'ugc2', caption: 'Layered perfection', imgId: 'ugc-necklaces-layered' },
  { id: 'ugc3', caption: 'The chunky huggie stack', imgId: 'ugc-huggies-stack' },
  { id: 'ugc4', caption: 'Evening statement pieces', imgId: 'ugc-evening-cuff' },
  { id: 'ugc5', caption: 'Our bestselling set styled', imgId: 'ugc-set-styled' },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only load if we are mounting properly
    let cleanup = undefined;
    if (containerRef.current) {
      try {
         cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch (e) {
         console.error("Image loading failed - config might not exist yet", e);
      }
    }
    return () => {
        if(cleanup) cleanup();
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* 1 & 2. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-sub] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Dark overlay for contrast */}
        
        <div className="relative z-20 text-center text-primary-foreground px-4 flex flex-col items-center">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-serif mb-4 tracking-wide max-w-3xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-sub" className="text-lg md:text-xl mb-8 max-w-xl font-light text-primary-foreground/90">
            Demi-fine warm gold jewelry designed for the modern romantic. Everyday luxury, within reach.
          </p>
          <Link 
            to="/collection"
            className="bg-accent text-accent-foreground px-8 py-3 rounded-none font-medium tracking-wide hover:bg-white transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="bg-primary text-primary-foreground py-4 border-b border-primary-foreground/10 text-xs md:text-sm tracking-wider uppercase">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center items-center">
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

      {/* 4. Bestsellers Grid */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif mb-3">Our Bestsellers</h2>
            <p className="text-muted-foreground">The pieces our community loves most.</p>
          </div>
          <Link to="/collection" className="group flex items-center text-sm font-medium mt-4 md:mt-0 hover:text-accent transition-colors">
            Shop All <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((item) => (
            <div key={item.id} className="group relative flex flex-col">
              <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-secondary w-full">
                 <Link to={`/product/${item.id}`} className="block h-full">
                    {/* Primary Image */}
                    <img 
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[product-desc-${item.id}] [product-title-${item.id}] [bestsellers-title]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                    />
                    {/* Hover Image */}
                    <img 
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${item.name} alternate view`}
                      data-strk-img-id={item.hoverImgId}
                      data-strk-img={`model wearing [product-desc-${item.id}] [product-title-${item.id}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                    />
                 </Link>
                 <button className="absolute bottom-0 left-0 w-full bg-primary text-primary-foreground py-2 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-none">
                   Quick Add
                 </button>
              </div>
              <div className="flex flex-col flex-grow">
                <Link to={`/product/${item.id}`}>
                  <h3 id={`product-title-${item.id}`} className="font-serif uppercase tracking-widest-plus text-xs md:text-sm mb-1">{item.name}</h3>
                </Link>
                <p id={`product-desc-${item.id}`} className="sr-only">{item.desc}</p>
                <div className="mt-auto pt-2 flex items-center justify-between">
                  <span className="text-sm font-medium">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="py-12 bg-secondary/30">
         <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
               {categories.map((cat) => (
                 <Link to={`/collection?category=${cat.name.toLowerCase()}`} key={cat.id} className="group relative block aspect-square md:aspect-[3/4] overflow-hidden bg-secondary">
                    <img 
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`Shop ${cat.name}`}
                      data-strk-img-id={cat.imgId}
                      data-strk-img={`fine gold jewelry [cat-title-${cat.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <h3 id={`cat-title-${cat.id}`} className="text-primary-foreground font-serif text-3xl md:text-4xl tracking-widest uppercase">
                         {cat.name}
                       </h3>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 5. UGC Reel Row */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-8">
          <h2 id="ugc-title" className="text-3xl font-serif text-center mb-2">Styled by You</h2>
          <p className="text-center text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
            Tag @velmorajewelry to be featured
          </p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
          {ugcImages.map((ugc) => (
            <div key={ugc.id} className="relative flex-none w-[260px] md:w-[300px] aspect-[9/16] snap-center bg-secondary overflow-hidden rounded-md group">
               <img 
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={ugc.caption}
                  data-strk-img-id={ugc.imgId}
                  data-strk-img={`close up selfie beautiful woman wearing gold jewelry [ugc-caption-${ugc.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
               <p id={`ugc-caption-${ugc.id}`} className="absolute bottom-6 left-6 right-6 text-primary-foreground font-serif text-lg leading-tight">
                 {ugc.caption}
               </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Brand Story Split */}
      <section className="bg-primary text-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
             <div 
                className="absolute inset-0 w-full h-full"
                data-strk-bg-id="story-split-bg"
                data-strk-bg="[story-title] [story-desc]"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
             />
          </div>
          <div className="flex flex-col items-center justify-center p-12 md:p-24 text-center md:text-left md:items-start">
             <h2 id="story-title" className="text-3xl md:text-5xl font-serif mb-6">Our Story</h2>
             <p id="story-desc" className="text-primary-foreground/80 mb-8 max-w-md leading-relaxed text-sm md:text-base">
               Velmora was born from the belief that fine jewelry should be worn every day, not kept in a safe. 
               We bridge the gap between costume jewelry and solid gold, creating demi-fine pieces that endure. 
               Each piece is thoughtfully crafted using 18k gold vermeil over sterling silver, ensuring a 
               warm, rich tone that flatters every complexion.
             </p>
             <Link 
               to="/about"
               className="uppercase tracking-widest text-sm border-b border-accent pb-1 text-accent hover:text-white hover:border-white transition-colors"
             >
               Read Our Journal
             </Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-20 md:py-32 bg-background">
         <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-serif text-center mb-16">Words from our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex flex-col items-center">
                     <div className="flex text-accent mb-6">
                        <Star fill="currentColor" size={16} className="mx-0.5" />
                        <Star fill="currentColor" size={16} className="mx-0.5" />
                        <Star fill="currentColor" size={16} className="mx-0.5" />
                        <Star fill="currentColor" size={16} className="mx-0.5" />
                        <Star fill="currentColor" size={16} className="mx-0.5" />
                     </div>
                     <p className="font-serif text-lg md:text-xl italic mb-6 leading-relaxed">
                        "{testimonial.text}"
                     </p>
                     <p className="text-sm tracking-widest uppercase text-muted-foreground">
                        &mdash; {testimonial.name}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. Newsletter Capture */}
      <section className="py-24 bg-secondary">
         <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Velmora List</h2>
            <p className="text-muted-foreground mb-8">
               Subscribe to receive 10% off your first order, plus early access to new collections.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
               <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 bg-white border border-border focus:outline-none focus:ring-1 focus:ring-primary w-full md:w-96 rounded-none text-foreground"
                  required
               />
               <button 
                  type="submit" 
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-none font-medium hover:bg-primary/90 transition-colors uppercase tracking-wider text-sm"
               >
                  Subscribe
               </button>
            </form>
         </div>
      </section>

    </div>
  );
};

export default Home;