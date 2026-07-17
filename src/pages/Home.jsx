import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { seedProducts } from '../lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="w-full flex-1" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-secondary/20 z-0"
          data-strk-bg-id="hero-main-bg"
          data-strk-bg="closeup of warm-lit fine gold jewelry on model"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide drop-shadow-sm">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto tracking-wide text-white/90">
            Demi-fine gold jewelry for the modern romantic. Quiet luxury meant for every day.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-accent hover:bg-accent/90 text-white font-medium uppercase tracking-widest text-sm px-10 py-4 transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-foreground text-background py-3 border-t border-background/20 font-light text-xs md:text-sm uppercase tracking-widest">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex justify-between items-center whitespace-nowrap min-w-max animate-none md:justify-center md:gap-12">
            <span>Free Worldwide Shipping</span>
            <span className="opacity-50 mx-4 md:hidden">•</span>
            <span className="hidden md:inline">·</span>
            <span>30-Day Returns</span>
            <span className="opacity-50 mx-4 md:hidden">•</span>
            <span className="hidden md:inline">·</span>
            <span>18K Gold Plated</span>
            <span className="opacity-50 mx-4 md:hidden">•</span>
            <span className="hidden md:inline">·</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-wide uppercase mb-2">Bestsellers</h2>
              <p className="text-muted-foreground font-light text-sm md:text-base">Our most loved everyday pieces.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest font-semibold hover:text-accent transition-colors gap-2 border-b border-foreground pb-1 hover:border-accent">
              Shop All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {seedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <Link to="/shop" className="md:hidden mt-8 w-full border border-foreground py-3 flex items-center justify-center text-sm uppercase tracking-widest font-semibold hover:bg-foreground hover:text-background transition-colors">
            Shop All
          </Link>
        </div>
      </section>

      {/* Reel-style UGC Row */}
      <section className="py-16 overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8 mb-10">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-center uppercase">Styled by You</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 snap-x snap-mandatory hide-scrollbar">
          {[
            { id: "ugc-1", q: "Everyday elegance." },
            { id: "ugc-2", q: "Obsessed with these layers." },
            { id: "ugc-3", q: "The perfect gold huggies." },
            { id: "ugc-4", q: "Vintage vibes." },
            { id: "ugc-5", q: "My new favorite set." }
          ].map((item, index) => (
            <div key={item.id} className="relative min-w-[280px] w-[280px] h-[498px] snap-center rounded-lg overflow-hidden group">
              <img 
                data-strk-img-id={item.id}
                data-strk-img={`woman wearing gold jewelry aesthetic instagram style ${index + 1}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                alt="Styled jewelry"
                className="absolute inset-0 w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-white text-lg drop-shadow-md">
                  "{item.q}"
                </p>
                <p className="text-white/80 text-xs mt-2 uppercase tracking-wide">@customer_style</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'earrings', title: 'Earrings', query: 'gold drop earrings on model high end', imgId: 'cat-img-earrings' },
              { id: 'necklaces', title: 'Necklaces', query: 'layered gold necklaces on neck high end', imgId: 'cat-img-necklaces' },
              { id: 'huggies', title: 'Huggies', query: 'gold huggie hoop earrings close up ear', imgId: 'cat-img-huggies' }
            ].map((cat) => (
              <Link to={`/shop/${cat.id}`} key={cat.id} className="group relative aspect-[4/5] overflow-hidden rounded bg-secondary/50">
                <img 
                  data-strk-img-id={cat.imgId}
                  data-strk-img={cat.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  alt={`Shop ${cat.title}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="bg-background/90 text-foreground px-8 py-3 font-serif uppercase tracking-widest text-lg group-hover:bg-background transition-colors duration-300 backdrop-blur-sm">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto relative bg-secondary/30">
            <img 
              data-strk-img-id="story-image"
              data-strk-img="jewelry designer workspace gold sketches tools aesthetic"
              data-strk-img-ratio="1x1"
              data-strk-img-width="1000"
              alt="Velmora Studio"
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide uppercase mb-8">Quiet Luxury, Everyday Wear</h2>
            <p className="font-light leading-relaxed mb-6 text-background/80 md:text-lg">
              Velmora was born from a desire for fine jewelry that doesn't need to stay in the vault. We create thoughtfully designed, high-quality gold pieces intended to be layered, lived in, and loved daily.
            </p>
            <p className="font-light leading-relaxed mb-10 text-background/80 md:text-lg">
              No crazy markups. No plated brass that tarnishes in a week. Just enduring style for the modern romantic.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest font-medium group text-accent hover:text-accent/80 transition-colors">
              <span className="border-b border-accent pb-1 group-hover:border-accent/80">Our Story</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-center uppercase mb-16">Words from our community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "I haven't taken these huggies off since I got them. The quality is incredible for the price point. Highly recommend!",
                author: "Sarah M.",
                stars: 5
              },
              {
                text: "Purchased the necklace set for my sister's birthday and the packaging alone was breathtaking. She loves it.",
                author: "Jessica T.",
                stars: 5
              },
              {
                text: "The vintage feel of the lace earrings is exactly what I've been searching for. So beautiful and surprisingly lightweight.",
                author: "Elena R.",
                stars: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-background p-10 flex flex-col items-center text-center shadow-sm">
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-sans text-sm tracking-wider uppercase font-semibold text-muted-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 md:px-8 bg-background border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-accent uppercase mb-4">Join the List</h2>
          <p className="font-light text-muted-foreground mb-10">
            Sign up for 10% off your first order, early access to new collections, and insider-only events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-b border-foreground py-3 px-2 focus:outline-none focus:border-accent text-sm pb-2 placeholder:text-muted-foreground"
              required
            />
            <button 
              type="submit" 
              className="bg-foreground text-background uppercase tracking-widest text-sm font-medium px-8 py-3 sm:py-0 hover:bg-accent transition-colors"
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