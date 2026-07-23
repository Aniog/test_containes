import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const bestSellers = [
  {
    id: 'vivid-aura-jewels',
    title: 'Vivid Aura Jewels',
    price: 42,
    desc: 'Gold ear cuff with crystal accent',
    imgId: 'vivid-aura-img',
    variant: 'Gold',
  },
  {
    id: 'majestic-flora-nectar',
    title: 'Majestic Flora Nectar',
    price: 68,
    desc: 'Multicolor floral crystal necklace',
    imgId: 'majestic-flora-img',
    variant: 'Gold',
  },
  {
    id: 'golden-sphere-huggies',
    title: 'Golden Sphere Huggies',
    price: 38,
    desc: 'Chunky gold dome huggie earrings',
    imgId: 'golden-sphere-img',
    variant: 'Gold',
  },
  {
    id: 'amber-lace-earrings',
    title: 'Amber Lace Earrings',
    price: 54,
    desc: 'Textured gold filigree drop earrings',
    imgId: 'amber-lace-img',
    variant: 'Gold',
  },
  {
    id: 'royal-heirloom-set',
    title: 'Royal Heirloom Set',
    price: 95,
    desc: 'Gift-boxed earring + necklace set',
    imgId: 'royal-heirloom-img',
    variant: 'Gold',
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // We would use ImageHelper here when we have strkImgConfig
    // For now, these use placeholder data URLs
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-brand-dark/20"
          data-strk-bg-id="hero-bg-2a4d9f"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599643478524-fb66f70d00f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-md">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/90 mb-10 font-light drop-shadow">Demi-fine gold jewelry for your everyday elegance.</p>
          <Link 
            to="/shop" 
            className="inline-block bg-brand-light text-brand-dark hover:bg-brand-gold hover:text-white transition-colors duration-300 font-medium uppercase tracking-widest text-sm py-4 px-10 rounded-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-light border-b border-brand-DEFAULT/30 py-4">
        <div className="container mx-auto px-4 text-center overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-xs uppercase tracking-widest text-brand-dark space-y-2 md:space-y-0 opacity-80">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline text-brand-gold">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline text-brand-gold">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline text-brand-gold">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="font-serif text-4xl text-brand-dark">Bestsellers</h2>
              <p className="text-brand-muted mt-2">Our most loved everyday pieces.</p>
            </div>
            <Link to="/collections/best-sellers" className="hidden md:block uppercase tracking-widest text-sm border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-[3/4] overflow-hidden bg-[#EFECE8] relative mb-4">
                  <img
                    alt={product.title}
                    data-strk-img-id={`${product.imgId}-bestseller`}
                    data-strk-img={`[desc-${product.id}] [title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src={`https://source.unsplash.com/random/400x533/?gold,jewelry,${product.title.split(' ')[0]}`}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Quick Add Button Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={() => addToCart({ id: product.id, name: product.title, price: product.price, image: `https://source.unsplash.com/random/400x533/?gold,jewelry,${product.title.split(' ')[0]}` }, product.variant)}
                      className="w-full bg-brand-light/95 backdrop-blur-sm text-brand-dark py-3 text-sm uppercase tracking-widest hover:bg-brand-dark hover:text-brand-light transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                
                <h3 id={`title-${product.id}`} className="font-serif text-lg text-brand-dark mb-1">{product.title}</h3>
                <p id={`desc-${product.id}`} className="text-sm text-brand-muted hidden">{product.desc}</p>
                <p className="text-brand-dark">${product.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/collections/best-sellers" className="inline-block uppercase tracking-widest text-sm border border-brand-dark px-8 py-3 hover:bg-brand-dark hover:text-white transition-colors">
              View All Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-16 bg-[#EDE9E1] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-8 text-center">
          <h2 id="ugc-title" className="font-serif text-3xl text-brand-dark mb-2">Styled by You</h2>
          <p className="text-brand-muted">Tag @VelmoraJewelry to be featured.</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-4 md:px-8 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-none w-64 md:w-80 aspect-[9/16] snap-start relative group cursor-pointer overflow-hidden rounded-sm bg-brand-dark/10">
              <img 
                src={`https://source.unsplash.com/random/400x711/?woman,jewelry,earrings,${i}`}
                alt="Customer wearing jewelry"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-img-item-${i}`}
                data-strk-img="[ugc-title] woman wearing gold jewelry"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif text-xl">Shop the Look</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <h2 id="categories-title" className="font-serif text-4xl text-center text-brand-dark mb-16">The Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat) => (
              <Link key={cat} to={`/shop?category=${cat.toLowerCase()}`} className="group block relative overflow-hidden aspect-[4/5] bg-brand-DEFAULT/20">
                <img 
                  src={`https://source.unsplash.com/random/600x750/?gold,${cat.toLowerCase()}`}
                  alt={`${cat} collection`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`cat-img-${cat.toLowerCase()}`}
                  data-strk-img={`[categories-title] gold ${cat.toLowerCase()}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                  <h3 className="font-serif text-3xl text-white mb-2">{cat}</h3>
                  <span className="text-white/90 uppercase tracking-widest text-xs border-b border-white/50 pb-1 font-medium opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 inline-block pointer-events-none">Explore</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-brand-dark text-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-brand-light/10 relative overflow-hidden">
               <img 
                  src="https://source.unsplash.com/random/800x800/?jewelry,craftsmanship,gold"
                  alt="Jewelry making"
                  className="w-full h-full object-cover opacity-80"
                  data-strk-img-id="brand-story-img-square"
                  data-strk-img="[story-title] jewelry craftsmanship"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="1000"
                />
            </div>
            <div className="max-w-md mx-auto md:mx-0">
              <h2 id="story-title" className="font-serif text-4xl mb-6 text-brand-gold">Redefining Fine Jewelry</h2>
              <p className="text-brand-light/80 mb-6 leading-relaxed">
                We believe that fine jewelry shouldn't be locked away for special occasions. Velmora was born from a desire to create demi-fine pieces that offer the weight, shine, and durability of solid gold, without the traditional markup.
              </p>
              <p className="text-brand-light/80 mb-10 leading-relaxed">
                Each piece is thoughtfully designed to layer, stack, and move with you—an effortless extension of your personal style.
              </p>
              <Link to="/about" className="uppercase tracking-widest text-sm border-b border-brand-gold pb-1 text-brand-gold hover:text-white hover:border-white transition-colors">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-light border-b border-brand-DEFAULT/20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl text-brand-dark mb-16">Stories of Love</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                text: "The quality is absolutely stunning. I've been wearing the Golden Sphere Huggies every day for months, even in the shower, and they still look brand new.",
                name: "Sarah M.",
                product: "Golden Sphere Huggies"
              },
              {
                text: "I bought the Royal Heirloom Set as a gift for myself and I couldn't be happier. It feels substantial and looks like it costs five times the price.",
                name: "Elena P.",
                product: "Royal Heirloom Set"
              },
              {
                text: "Velmora is my new go-to for earrings. The designs are unique but classic enough for work. Beautiful packaging, too!",
                name: "Jessica T.",
                product: "Amber Lace Earrings"
              }
            ].map((review, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex text-brand-gold mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-dark/80 italic mb-6 leading-relaxed">"{review.text}"</p>
                <span className="font-medium tracking-wide uppercase text-sm">{review.name}</span>
                <span className="text-brand-muted text-xs mt-1 border-t border-brand-DEFAULT/30 pt-2">{review.product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#EFECE8]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-4xl text-brand-dark mb-4">Join the Club</h2>
          <p className="text-brand-muted mb-8">Sign up for updates, behind-the-scenes access, and 10% off your first order.</p>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white border border-brand-DEFAULT px-6 py-4 outline-none focus:border-brand-gold transition-colors text-brand-dark placeholder:text-brand-muted"
              required
            />
            <button 
              type="submit" 
              className="bg-brand-dark text-white uppercase tracking-widest text-sm font-medium px-8 py-4 hover:bg-brand-gold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}