import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { seedProducts } from '@/lib/data';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';
import { ChevronRight, Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = seedProducts.slice(0, 5);

  const categories = [
    { name: 'Earrings', dataStrkImg: 'gold editorial drop earrings jewelry model ear', path: '/shop?category=Earrings' },
    { name: 'Necklaces', dataStrkImg: 'refined gold necklace delicate gold jewelry model neck', path: '/shop?category=Necklaces' },
    { name: 'Huggies', dataStrkImg: 'gold huggie hoop earrings minimal jewelry model ear', path: '/shop?category=Huggies' },
  ];

  const ugcPosts = [
    { id: 1, text: "The perfect everyday huggies.", dataStrkImg: 'woman wearing gold huggie earrings portrait warm lighting' },
    { id: 2, text: "Obsessed with this crystal glow.", dataStrkImg: 'close up of gold crystal necklace on woman neck soft bokeh' },
    { id: 3, text: "Elevating my morning routine.", dataStrkImg: 'woman putting on gold earrings in mirror soft aesthetic' },
    { id: 4, text: "Timeless pieces for any occasion.", dataStrkImg: 'detail of gold jewelry on woman hands and neck natural light' },
    { id: 5, text: "Gifting myself something special.", dataStrkImg: 'unboxing gold jewelry from elegant cream box' },
  ];

  const testimonials = [
    { name: "Sarah J.", text: "The quality is outstanding for the price. I've been wearing my huggies daily for months and they still look brand new.", rating: 5 },
    { name: "Elena R.", text: "Ordered the Heirloom set as a gift and the packaging was just as beautiful as the jewelry. My sister loved it!", rating: 5 },
    { name: "Maya L.", text: "Velmora jewelry has that high-end feeling without the massive markup. So happy I discovered this brand.", rating: 5 },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-bg">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-headline] close-up gold jewelry on model warm lighting editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="container-custom max-w-[1440px] mx-auto px-6 relative z-20 text-white text-center md:text-left">
          <h1 id="hero-headline" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight max-w-3xl">
            Crafted to be <br /> Treasured
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-xl opacity-90 tracking-wide">
            Demifine gold jewelry designed for the modern romantic. Effortless elegance for every day.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-velmora-bg py-6 border-b border-velmora-text/5 overflow-x-auto">
        <div className="container-custom max-w-[1440px] mx-auto px-6 flex justify-between items-center whitespace-nowrap space-x-12 lg:space-x-0">
          {["Free Worldwide Shipping", "30-Day Returns", "18K Gold Plated", "Hypoallergenic"].map((text) => (
            <span key={text} className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-velmora-muted">
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-24">
        <div className="container-custom max-w-[1440px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif text-velmora-text uppercase tracking-widest">Bestsellers</h2>
              <p className="text-sm text-velmora-muted mt-2">The pieces our community loves most.</p>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center text-xs uppercase tracking-widest hover:text-velmora-accent transition-colors">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
            {bestsellers.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-velmora-beige overflow-hidden mb-4">
                  <img
                    data-strk-img-id={`bestseller-${product.id}`}
                    data-strk-img={product.images[0].dataStrkImg}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                      toast.success(`${product.name} added to bag`);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-velmora-text text-[10px] uppercase tracking-widest py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-accent hover:text-white"
                  >
                    Add to Cart
                  </button>
                </Link>
                <Link to={`/product/${product.id}`} className="font-serif uppercase tracking-widest text-sm hover:text-velmora-accent transition-colors">
                  {product.name}
                </Link>
                <p className="text-sm text-velmora-muted mt-1">${product.price}</p>
              </div>
            ))}
          </div>
          
          <Link to="/shop" className="sm:hidden mt-10 w-full btn-outline flex justify-center items-center">
            View All
          </Link>
        </div>
      </section>

      {/* Reels UGC Row */}
      <section className="py-24 bg-velmora-beige/30">
        <div className="container-custom max-w-[1440px] mx-auto px-6 mb-12">
          <h2 className="text-3xl font-serif text-velmora-text uppercase tracking-widest text-center">As Seen On You</h2>
          <p className="text-center text-sm text-velmora-muted mt-2">Tag @VELMORA to be featured</p>
        </div>
        <div className="flex overflow-x-auto pb-10 gap-4 px-6 md:px-10 no-scrollbar">
          {ugcPosts.map((post) => (
            <div key={post.id} className="relative flex-none w-[280px] aspect-[9/16] bg-velmora-beige group cursor-pointer overflow-hidden shadow-sm">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={post.dataStrkImg}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="UGC Content"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-serif text-lg italic tracking-wide">"{post.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop Category Tiles */}
      <section className="py-24">
        <div className="container-custom max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.name} to={cat.path} className="relative aspect-[4/5] bg-velmora-beige group overflow-hidden">
                <img
                  data-strk-img-id={`category-${cat.name}`}
                  data-strk-img={cat.dataStrkImg}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors duration-500 group-hover:bg-black/40">
                  <h3 className="text-white font-serif text-3xl uppercase tracking-[0.2em]">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 overflow-hidden">
        <div className="container-custom max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 aspect-[3/4] lg:aspect-auto bg-velmora-beige overflow-hidden">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="minimal gold jewelry designer workshop editorial lighting"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt="Brand Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-velmora-text max-w-md leading-tight">
                Quiet luxury, crafted for your most cherished moments.
              </h2>
              <div className="space-y-6 text-velmora-muted leading-relaxed max-w-xl">
                <p>
                  Velmora was born from a desire for high-quality jewelry that tells a story. Our pieces are designed for women who appreciate the finer things but believe true luxury should be accessible.
                </p>
                <p>
                  Each design is thoughtfully prototyped and crafted using premium gold plating over ethical metals, ensuring every piece of Velmora jewelry feels as good as it looks.
                </p>
              </div>
              <Link to="/about" className="btn-outline inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-velmora-beige/20">
        <div className="container-custom max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {testimonials.map((t, idx) => (
              <div key={idx} className="space-y-6 flex flex-col items-center">
                <div className="flex space-x-1 text-velmora-accent">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-xl italic text-velmora-text max-w-xs leading-relaxed">
                  "{t.text}"
                </p>
                <span className="text-[10px] uppercase tracking-widest font-bold text-velmora-muted">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-velmora-text/5">
        <div className="container-custom max-w-[1440px] mx-auto px-6">
          <div className="bg-velmora-beige/40 p-12 md:p-20 text-center space-y-8 max-w-4xl mx-auto border border-velmora-accent/10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-velmora-text uppercase tracking-widest">Join The Journal</h2>
              <p className="text-velmora-muted max-w-md mx-auto">
                Discover new collections and enjoy 10% off your first order.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => {
              e.preventDefault();
              toast.success('Thank you for joining!');
            }}>
              <input 
                type="email" 
                placeholder="Email Address"
                className="flex-1 bg-white border border-velmora-text/10 px-6 py-4 outline-none focus:border-velmora-accent transition-colors"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
