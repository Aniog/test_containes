import { Link } from 'react-router-dom';
import { products } from './data';
import { useAppStore } from './store';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function App() {
  const containerRef = useRef(null);
  const { addToCart } = useAppStore();

  useEffect(() => {
    // Only load images if strkImgConfig is present. 
    // Fallback safely if it's not generated yet since we use placeholders.
    if (strkImgConfig && Object.keys(strkImgConfig).length > 0) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center -mt-20">
        <div 
          className="absolute inset-0 z-0 bg-brand-dark/40"
          data-strk-bg-id="hero-bg-2a4b8c"
          data-strk-bg="[hero-subtitle] [hero-title] warm editorial portrait"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{
             backgroundColor: '#2A2421',
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 id="hero-title" className="text-white text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-brand-beige/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Demi-fine gold jewelry for the modern romantic. Quiet luxury designed for everyday elegance.
          </p>
          <Link 
            to="/collections/all" 
            className="inline-block bg-brand-gold text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-brand-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-sand py-4 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-wider uppercase text-brand-dark font-medium">
          <span>Free Worldwide Shipping</span>
          <span className="text-brand-gray">&middot;</span>
          <span>30-Day Returns</span>
          <span className="text-brand-gray">&middot;</span>
          <span>18K Gold Plated</span>
          <span className="text-brand-gray">&middot;</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 id="bestsellers-title" className="text-4xl text-brand-dark">Bestsellers</h2>
          <Link to="/collections/all" className="uppercase tracking-widest text-xs font-medium border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] mb-4 overflow-hidden bg-brand-sand/30">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`prod-img-1-${product.id}`}
                  data-strk-img={product.image.replace(/\[|\]/g, '')}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                />
                
                {/* Secondary Image on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-sand/30">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={`${product.name} alternate view`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`prod-img-2-${product.id}`}
                    data-strk-img={product.images[1].replace(/\[|\]/g, '')}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                  />
                </div>
                
                {/* Quick Add Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm text-brand-dark uppercase tracking-widest text-xs py-3 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  Quick Add
                </button>
              </Link>
              <div className="text-center font-serif text-lg text-brand-dark mb-1">
                <Link to={`/product/${product.id}`} id={`prod-name-${product.id}`} className="hover:text-brand-gold transition-colors">
                  {product.name}
                </Link>
              </div>
              <div className="text-center font-sans tracking-wide text-brand-gray text-sm">
                ${product.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="py-16 overflow-hidden bg-brand-sand">
        <h2 className="text-center text-3xl text-brand-dark mb-12">Styled By You</h2>
        <div className="flex gap-4 px-4 overflow-x-auto snap-x pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative snap-center cursor-pointer group">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                    alt={`Styled photo ${i}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`ugc-img-${i}`}
                    data-strk-img="woman wearing gold jewelry editorial portrait natural lighting minimalist"
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                     <p className="text-white font-serif text-lg truncate">@velmorastyle</p>
                  </div>
              </div>
           ))}
        </div>
      </section>
      
      {/* Category Tiles */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          <Link to="/collections/earrings" className="relative group overflow-hidden bg-brand-dark">
             <img 
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
               alt="Earrings Collection"
               className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
               data-strk-img-id="cat-earrings"
               data-strk-img="gold elegant drop earrings close up"
               data-strk-img-ratio="3x4"
               data-strk-img-width="600"
             />
             <div className="absolute inset-0 flex items-center justify-center">
               <h3 className="text-white font-serif text-4xl tracking-wide group-hover:tracking-widest transition-all duration-500">Earrings</h3>
             </div>
          </Link>
          
          <div className="flex flex-col gap-6">
             <Link to="/collections/necklaces" className="relative group overflow-hidden bg-brand-dark flex-1">
               <img 
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                 alt="Necklaces Collection"
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                 data-strk-img-id="cat-necklaces"
                 data-strk-img="delicate gold chain necklace collarbone"
                 data-strk-img-ratio="16x9"
                 data-strk-img-width="600"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <h3 className="text-white font-serif text-3xl tracking-wide group-hover:tracking-widest transition-all duration-500">Necklaces</h3>
               </div>
             </Link>
             
             <Link to="/collections/huggies" className="relative group overflow-hidden bg-brand-dark flex-1">
               <img 
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                 alt="Huggies Collection"
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                 data-strk-img-id="cat-huggies"
                 data-strk-img="multiple gold huggie hoops ear"
                 data-strk-img-ratio="16x9"
                 data-strk-img-width="600"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <h3 className="text-white font-serif text-3xl tracking-wide group-hover:tracking-widest transition-all duration-500">Huggies</h3>
               </div>
             </Link>
          </div>
          
          <Link to="/collections/sets" className="relative group overflow-hidden bg-brand-dark">
             <img 
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
               alt="Sets Collection"
               className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
               data-strk-img-id="cat-sets"
               data-strk-img="gold jewelry set necklace and earrings curated"
               data-strk-img-ratio="3x4"
               data-strk-img-width="600"
             />
             <div className="absolute inset-0 flex items-center justify-center">
               <h3 className="text-white font-serif text-4xl tracking-wide group-hover:tracking-widest transition-all duration-500">Curated Sets</h3>
             </div>
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-brand-dark text-brand-beige">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan workshop tools warm light"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
            />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center max-w-xl mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-8">Modern Heirlooms</h2>
            <p className="font-light leading-relaxed mb-6">
              We believe fine jewelry shouldn't be reserved for special occasions. It should be lived in, loved, and layered every day.
            </p>
            <p className="font-light leading-relaxed mb-10 text-white/70">
              Each Velmora piece is thoughtfully designed and responsibly crafted using 18K gold plating over sterling silver or brass, resulting in accessible luxury that stands the test of time.
            </p>
            <Link to="/about" className="uppercase tracking-widest text-xs font-medium border-b border-brand-gold text-brand-gold pb-1 self-start hover:text-white hover:border-white transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                text: "The quality is outstanding. My Amber Lace earrings look like a vintage find from Paris. So many compliments.",
                name: "Eleanor T."
              },
              {
                text: "I haven't taken off the Golden Sphere huggies since they arrived. They are the perfect everyday statement.",
                name: "Sarah M."
              },
              {
                text: "Beautiful packaging and stunning design. It felt like opening a truly special gift to myself. Highly recommend.",
                name: "Jessica K."
              }
            ].map((review, i) => (
              <div key={i} className="text-center p-8 bg-white shadow-sm border border-brand-sand">
                <div className="text-brand-gold mb-6 text-xl tracking-widest flex justify-center space-x-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="font-serif text-xl leading-relaxed text-brand-dark mb-6">"{review.text}"</p>
                <p className="text-sm uppercase tracking-widest font-medium text-brand-gray">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-brand-sand px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-brand-dark mb-4">Join the Inner Circle</h2>
          <p className="text-brand-gray mb-10">Sign up for early access to new collections, exclusive events, and 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border-b border-brand-dark px-4 py-3 outline-none focus:border-brand-gold transition-colors rounded-none"
              required
            />
            <button 
              type="submit" 
              className="bg-brand-dark text-white px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors duration-300 sm:w-auto w-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App
