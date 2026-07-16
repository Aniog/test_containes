import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../components/cart/CartContext';

const Home = () => {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // If we had a real strkImgConfig, we'd import it. For now, pass empty config.
    // The image integration guidelines say: "To initiate image loading, use ImageHelper.loadImages(strkImgConfig, containerRef.current)."
    // We will use standard SVG placeholders for the images initially as configured in sdk to run.
    try {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    } catch (e) {
      console.log('ImageHelper not yet fully configured', e);
    }
  }, []);

  const bestsellers = [
    { id: '1', title: 'Vivid Aura Jewels', price: 42, type: 'Ear Cuff' },
    { id: '2', title: 'Majestic Flora Nectar', price: 68, type: 'Necklace' },
    { id: '3', title: 'Golden Sphere Huggies', price: 38, type: 'Huggies' },
    { id: '4', title: 'Amber Lace Earrings', price: 54, type: 'Drop Earrings' },
    { id: '5', title: 'Royal Heirloom Set', price: 95, type: 'Gift Set' },
  ];

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-stone-900"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          {/* Fallback overlay if image doesn't load immediately */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto mt-20">
          <h1 id="hero-title" className="text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-light mb-10 text-stone-200">
            Demi-fine gold jewelry for the modern romantic. Quiet luxury you can wear every day.
          </p>
          <Link to="/shop" className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-4 px-10 tracking-widest uppercase transition-colors">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-stone-200 bg-stone-50 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-wide uppercase text-stone-500 font-medium">
            <li>Free Worldwide Shipping</li>
            <li className="hidden md:block">&bull;</li>
            <li>30-Day Returns</li>
            <li className="hidden md:block">&bull;</li>
            <li>18K Gold Plated</li>
            <li className="hidden md:block">&bull;</li>
            <li>Hypoallergenic</li>
          </ul>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-4xl text-stone-900">Trending Now</h2>
              <p className="text-stone-500 mt-2">Our most loved pieces this season.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-amber-700 hover:text-amber-800 transition-colors">
              Shop All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    data-strk-img-id={`bestseller-img-${item.id}`}
                    data-strk-img={`[bestseller-title-${item.id}] [bestsellers-title]`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="400"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-center">
                    <button 
                      className="bg-white/90 text-stone-900 text-xs font-semibold py-2 px-6 uppercase tracking-wider backdrop-blur-sm shadow-sm inline-block w-full hover:bg-amber-700 hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(item, 1, 'gold');
                      }}
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                <h3 id={`bestseller-title-${item.id}`} className="font-medium text-sm md:text-base uppercase tracking-wider text-stone-900 mb-1">{item.title}</h3>
                <p className="text-stone-500 text-sm">${item.price}</p>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-amber-700 transition-colors">
              Shop All <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-stone-50">
         <div className="container mx-auto px-4 md:px-8">
            <h2 id="categories-title" className="text-3xl md:text-4xl text-center mb-12 text-stone-900">Explore Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { id: 'earrings', name: 'Earrings', prompt: 'gold earrings on model elegant' },
                { id: 'necklaces', name: 'Necklaces', prompt: 'gold necklace pendant delicate' },
                { id: 'huggies', name: 'Huggies', prompt: 'gold huggie earrings small hoop' }
              ].map(cat => (
                <Link to={`/shop?category=${cat.id}`} key={cat.id} className="relative group block overflow-hidden aspect-[4/5]">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    data-strk-img-id={`category-img-${cat.id}`}
                    data-strk-img={`[category-name-${cat.id}] [categories-title]`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <h3 id={`category-name-${cat.id}`} className="text-white text-3xl font-serif tracking-widest">{cat.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
         </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative overflow-hidden bg-stone-100">
               <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Jewelry making process"
                  data-strk-img-id="brand-story-img"
                  data-strk-img="[story-desc] [story-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  className="object-cover w-full h-full"
                />
            </div>
            <div className="max-w-xl">
              <h2 id="story-title" className="text-3xl md:text-4xl mb-6 text-stone-900">The Art of Subtle Elegance</h2>
              <p id="story-desc" className="text-stone-600 mb-6 leading-relaxed">
                Founded on the belief that luxury should be an everyday experience. Every Velmora piece is thoughtfully designed to be layered, lived in, and loved. We cast in 18k solid gold over a sterling silver base, ensuring brilliance that endures.
              </p>
              <Link to="/about" className="inline-block border-b border-amber-700 text-amber-700 uppercase tracking-widest text-sm font-medium pb-1 hover:text-amber-800 transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center text-amber-500 font-serif text-3xl mb-16">Loved by You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'The Golden Sphere Huggies are my new everyday staple. Amazing quality and they never irritate my ears.' },
              { name: 'Elena R.', text: 'I received the Flora necklace as a gift and I am obsessed. The crystal detailing catches the light beautifully.' },
              { name: 'Jessica T.', text: 'Fast shipping, gorgeous packaging, and the earrings look even more expensive in person. Recommend!' }
            ].map((review, i) => (
              <div key={i} className="text-center px-4">
                <div className="flex justify-center gap-1 mb-4 text-amber-500">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-stone-300 font-serif italic text-lg mb-6 leading-relaxed">"{review.text}"</p>
                <p className="uppercase tracking-widest text-xs text-stone-500 font-medium">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-stone-100 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-serif mb-4 text-foreground">Join the Velmora Insider</h2>
          <p className="text-stone-600 mb-8">Subscribe to receive 10% off your first order, early access to new collections, and exclusive styling tips.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-stone-900 text-white px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-amber-700 transition-colors whitespace-nowrap"
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