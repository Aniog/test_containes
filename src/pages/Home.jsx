import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);
  
  const categories = [
    { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings' },
    { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces' },
    { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies' },
  ];

  const ugcImages = Array.from({ length: 6 }).map((_, i) => ({
    id: `ugc-${i}`,
    title: `Velmora Love ${i+1}`,
    imgId: `ugc-img-${i}`
  }));

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full -z-10"
          data-strk-bg-id="hero-main-bg"
          data-strk-bg="[hero-headline] warm gold jewelry on model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/20 -z-10" />
        
        <div className="container mx-auto px-4 text-center text-white mt-16">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-sm">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="font-light tracking-wide text-lg md:text-xl max-w-xl mx-auto mb-10 drop-shadow-sm">
            Demi-fine gold jewelry for the modern muse. Pieces designed for everyday elegance and lifelong wear.
          </p>
          <Link 
            to="/collection"
            className="inline-block bg-white text-primary px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold hover:text-white transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-4 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-xs md:text-sm uppercase tracking-wider font-light gap-4 overflow-x-auto whitespace-nowrap hidden-scrollbar">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl mb-3">Our Bestsellers</h2>
              <p className="text-muted-foreground font-light">The pieces everyone is loving right now.</p>
            </div>
            <Link to="/collection" className="hidden md:block uppercase tracking-widest text-sm border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {bestsellers.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden block">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`${product.imgId}-main`}
                    data-strk-img={`[product-${product.id}-title] on model`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                  />
                  {/* Second image on hover */}
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.title} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    data-strk-img-id={`${product.imgId}-alt`}
                    data-strk-img={`[product-${product.id}-title] close up product shot`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 'Gold');
                      }}
                      className="w-full bg-white/90 backdrop-blur text-primary py-3 uppercase tracking-wider text-xs font-medium hover:bg-gold hover:text-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div className="flex flex-col flex-1 mt-auto">
                  <h3 id={`product-${product.id}-title`} className="font-serif uppercase tracking-wide text-sm font-medium mb-1">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground font-light">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link to="/collection" className="inline-block uppercase tracking-widest text-sm border-b border-foreground pb-1">
              View All Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Row (Reel style) */}
      <section className="bg-secondary/50 py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl">Styled By You</h2>
          <p className="text-muted-foreground mt-3 font-light">Tag @velmorajewelry to be featured</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcImages.map((img) => (
            <div key={img.id} className="relative w-[280px] h-[498px] flex-shrink-0 snap-center rounded-sm overflow-hidden group">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={img.imgId}
                data-strk-img="[ugc-title] aesthetic jewelry instagram"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-serif text-lg italic">Beautiful layers</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 id="category-title" className="font-serif text-3xl md:text-4xl mb-12 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/collection?category=${cat.id}`} className="relative h-[600px] overflow-hidden group">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[cat-${cat.id}-name] jewelry collection`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 id={`cat-${cat.id}-name`} className="text-white font-serif text-3xl tracking-wide drop-shadow-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora Studio"
                  className="w-full h-full object-cover"
                  data-strk-img-id="story-image"
                  data-strk-img="[story-headline] elegant editorial jewelry model"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 id="story-headline" className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                Designed to be lived in. Crafted to be treasured.
              </h2>
              <div className="w-12 h-[1px] bg-gold" />
              <p className="text-muted-foreground font-light leading-relaxed text-lg pb-4">
                At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. Our pieces are meticulously crafted from premium materials—18k gold vermeil and sterling silver—designed to withstand the beautifully chaotic rhythm of daily life.
              </p>
              <Link to="/about" className="inline-block border border-primary px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="testimonials-title" className="font-serif text-3xl mb-16">Words from our Muses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Sarah M.", text: "The quality is simply unmatched. I've worn my Vivid Aura cuff every day for months and it still looks brand new." },
              { name: "Elena R.", text: "Finally, jewelry that doesn't irritate my sensitive skin. The Golden Sphere huggies are my new everyday staple." },
              { name: "Jessica T.", text: "I received the Royal Heirloom set as an anniversary gift and it's the most elegant jewelry I own. Breathtaking." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif italic text-lg mb-6 leading-relaxed">"{review.text}"</p>
                <p className="uppercase tracking-widest textxs font-medium">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 id="newsletter-title" className="font-serif text-3xl md:text-4xl">Join the Velmora Inner Circle</h2>
          <p className="text-primary-foreground/80 font-light pb-4">
            Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button className="bg-gold text-primary font-medium px-8 py-3 uppercase tracking-wider text-sm hover:bg-white transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;