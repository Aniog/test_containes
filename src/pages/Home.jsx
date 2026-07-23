import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../store/CartContext';

// Seed data
const bestsellers = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, imageId: 'vivid-aura', descId: 'vivid-desc' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, imageId: 'majestic-flora', descId: 'flora-desc' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, imageId: 'golden-sphere', descId: 'sphere-desc' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, imageId: 'amber-lace', descId: 'amber-desc' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, imageId: 'royal-heirloom', descId: 'royal-desc' },
];

const categories = [
  { id: 'earrings', title: 'Earrings', imgId: 'cat-earrings' },
  { id: 'necklaces', title: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'huggies', title: 'Huggies', imgId: 'cat-huggies' },
];

const testimonials = [
  { id: 1, text: "The quality is absolutely stunning. I wear my Golden Sphere Huggies every day and they still look brand new.", author: "Sarah M.", rating: 5 },
  { id: 2, text: "Beautiful packaging and even better jewelry. It feels so much more expensive than it is.", author: "Jessica T.", rating: 5 },
  { id: 3, text: "I bought the Royal Heirloom Set as a gift and ended up keeping it for myself. Obsessed!", author: "Emily R.", rating: 5 },
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-black/40"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-subhead] [hero-headline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        ></div>
        <div className="relative z-10 text-center text-primary-foreground px-4 flex flex-col items-center border-0 bg-transparent">
          <h1 id="hero-headline" className="text-5xl md:text-7xl font-serif font-medium mb-6 border-0 bg-transparent text-primary-foreground tracking-wide">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="text-lg md:text-xl font-light max-w-xl mx-auto mb-10 border-0 bg-transparent text-primary-foreground">
            Discover demi-fine jewelry designed for everyday elegance.
          </p>
          <Link 
            to="/collections" 
            className="bg-accent text-accent-foreground px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-muted py-3 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs md:text-sm tracking-widest uppercase text-muted-foreground gap-4 text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">&middot;</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">&middot;</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
            <Link to="/collections" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-accent transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <div key={product.id} className="group relative border-0 bg-transparent flex flex-col h-full">
                <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] mb-4 bg-muted overflow-hidden">
                  <img 
                    alt={product.name}
                    data-strk-img-id={`bestseller-${product.imageId}`}
                    data-strk-img={`[${product.descId}] [product-title-${product.id}] [bestsellers-title]`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex flex-col justify-end p-4 hidden">
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart({ ...product, quantity: 1, variant: 'gold tone' }); }}
                      className="w-full bg-background text-foreground py-3 text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-accent-foreground transition-colors translate-y-4 group-hover:translate-y-0 duration-300 border-0"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div className="flex-1 flex flex-col text-center border-0 bg-transparent">
                  <h3 id={`product-title-${product.id}`} className="font-serif text-lg mb-1 border-0 bg-transparent text-foreground uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p id={product.descId} className="hidden">Demi-fine gold jewelry</p>
                  <p className="text-muted-foreground text-sm border-0 bg-transparent">${product.price}</p>
                </div>
                <button 
                  onClick={() => addToCart({ ...product, quantity: 1, variant: 'gold tone' })}
                  className="mt-4 w-full border border-foreground py-2 text-xs uppercase tracking-widest md:hidden border-solid"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden border-0 bg-transparent">
            <Link to="/collections" className="inline-flex items-center text-sm uppercase tracking-widest hover:text-accent transition-colors border-0 bg-transparent">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC / Instagram Reel Style Section */}
      <section className="bg-foreground text-background py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10 border-0 bg-transparent">
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif text-background border-0 bg-transparent">As Seen On You</h2>
          <p className="text-background/70 mt-2 font-light border-0 bg-transparent">Tag @velmora to be featured</p>
        </div>
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="min-w-[280px] w-[280px] aspect-[9/16] relative flex-shrink-0 snap-center bg-muted/20">
              <img 
                alt={`Instagram styling ${i}`}
                data-strk-img-id={`ugc-image-${i}`}
                data-strk-img={`woman wearing fine gold jewelry [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-6 left-6 right-6 border-0 bg-transparent">
                 <p className="text-background font-serif text-lg italic border-0 bg-transparent">"Everyday elegance in gold."</p>
                 <p className="text-xs uppercase tracking-widest text-background/80 mt-2 border-0 bg-transparent">@user_{i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 border-0 bg-transparent">
          <h2 id="categories-title" className="text-3xl md:text-4xl font-serif mb-12 text-center border-0 bg-transparent">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/collections?category=${cat.id}`} className="group relative aspect-square overflow-hidden bg-muted flex items-center justify-center border-0 bg-transparent">
                <img 
                   alt={cat.title}
                   data-strk-img-id={`category-${cat.imgId}`}
                   data-strk-img={`[category-title-${cat.id}] [categories-title]`}
                   data-strk-img-ratio="1x1"
                   data-strk-img-width="800"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <h3 id={`category-title-${cat.id}`} className="relative z-10 text-white font-serif text-3xl font-medium tracking-wide border-0 bg-transparent">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 border-0 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-muted relative order-2 md:order-1 border-0 bg-transparent">
                <img 
                   alt="Brand Story"
                   data-strk-img-id="story-image"
                   data-strk-img="[story-headline] [story-desc]"
                   data-strk-img-ratio="4x5"
                   data-strk-img-width="1000"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   className="w-full h-full object-cover"
                />
            </div>
            <div className="order-1 md:order-2 px-0 md:px-12 border-0 bg-transparent">
              <h2 id="story-headline" className="text-3xl md:text-5xl font-serif mb-6 border-0 bg-transparent text-foreground">Inspired by Vintage Glamour</h2>
              <p id="story-desc" className="text-muted-foreground mb-8 text-lg font-light leading-relaxed border-0 bg-transparent">
                Velmora was born from a desire to bridge the gap between costume jewelry and fine fine heirlooms. We create demi-fine pieces that offer the luxury of solid gold without the markup, designed to be lived in, layered, and loved for a lifetime.
              </p>
              <Link to="/about" className="inline-flex items-center text-sm uppercase tracking-widest font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors border-solid">
                Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 text-center border-0 bg-transparent">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 border-0 bg-transparent text-foreground">Loved by You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t) => (
              <div key={t.id} className="flex flex-col items-center text-center border-0 bg-transparent">
                <div className="flex gap-1 mb-6 text-accent border-0 bg-transparent">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-xl italic mb-6 text-foreground border-0 bg-transparent">"{t.text}"</p>
                <p className="text-sm uppercase tracking-widest text-muted-foreground border-0 bg-transparent">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-4 border-0 bg-transparent text-center max-w-2xl">
           <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground border-0 bg-transparent">Join The Velmora Club</h2>
           <p className="text-muted-foreground mb-8 border-0 bg-transparent">Sign up for 10% off your first order, styling tips, and exclusive access to new launches.</p>
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto border-0 bg-transparent">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="flex-1 bg-transparent border border-border px-4 py-3 focus:outline-none focus:border-accent text-foreground"
             />
             <button type="button" className="bg-foreground text-background px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-accent transition-colors border-0">
               Subscribe
             </button>
           </form>
        </div>
      </section>
    </div>
  );
};

export default Home;