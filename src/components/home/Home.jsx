import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const HomeHero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-black/20"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-subhead] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      ></div>
      <div className="absolute inset-0 bg-foreground/20 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 text-center text-background">
        <p id="hero-subhead" className="uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-medium">Velmora Fine Jewelry</p>
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
          Crafted to be Treasured
        </h1>
        <Link 
          to="/shop" 
          className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <span>Shop the Collection</span>
        </Link>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const benefits = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-foreground text-background py-4 border-b border-background/10">
      <div className="container mx-auto px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex items-center justify-center md:justify-between space-x-8 md:space-x-0 text-xs md:text-sm tracking-wider uppercase opacity-80 font-medium">
          {benefits.map((benefit, index) => (
            <span key={index} className="flex items-center">
              {index !== 0 && <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-primary mx-6"></span>}
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const { addToCart } = useCart();
  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
            <p className="text-muted-foreground mt-2">Our most loved demi-fine pieces.</p>
          </div>
          <Link to="/shop?category=bestsellers" className="hidden md:flex items-center text-sm uppercase tracking-wider font-medium hover:text-primary transition-colors">
            Shop All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block block aspect-[4/5] bg-muted mb-4 overflow-hidden relative">
                <img 
                  data-strk-img-id={`prod-${product.id}-1`}
                  data-strk-img={`[prod-title-${product.id}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10"
                />
                <img 
                  data-strk-img-id={`prod-${product.id}-2`}
                  data-strk-img={`[prod-title-${product.id}] model`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} alternate view`}
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
              </Link>
              <div className="text-center">
                <h3 id={`prod-title-${product.id}`} className="font-serif text-lg mb-1 uppercase tracking-wide">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-muted-foreground mb-4">${product.price}</p>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full py-2 bg-foreground text-background text-xs uppercase tracking-widest absolute bottom-24 left-0 z-20"
                >
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop?category=bestsellers" className="inline-flex items-center text-sm uppercase tracking-wider font-medium hover:text-primary transition-colors">
            Shop All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const UGCRow = () => {
  const items = [
    { id: 'ugc-1', text: "The perfect everyday huggies. I never take them off." },
    { id: 'ugc-2', text: "Stunning quality. Looks better in person!" },
    { id: 'ugc-3', text: "My new go-to layering piece for any outfit." },
    { id: 'ugc-4', text: "So delicate and elegant. Highly recommend Velmora." },
    { id: 'ugc-5', text: "Obsessed is an understatement. Getting more!" },
  ];

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
        <h2 id="ugc-title" className="text-2xl md:text-3xl font-serif">Spotted in Velmora</h2>
        <p className="text-muted-foreground mt-2">Tag us to be featured #VelmoraMuse</p>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-8 px-4 md:px-6 scrollbar-hide snap-x" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        {items.map((item) => (
          <div key={item.id} className="min-w-[280px] w-[280px] md:min-w-[320px] aspect-[9/16] relative snap-center flex-shrink-0 group overflow-hidden">
            <img 
              data-strk-img-id={item.id}
              data-strk-img="jewelry on model selfie aesthetic"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="UGC Content"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif text-lg leading-snug italic">"{item.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { id: 'cat-earrings', title: "Earrings", slug: "earrings" },
    { id: 'cat-necklaces', title: "Necklaces", slug: "necklaces" },
    { id: 'cat-huggies', title: "Huggies", slug: "huggies" }
  ];

  return (
    <section className="py-2 px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-background">
      {categories.map((cat) => (
        <Link 
          key={cat.id} 
          to={`/shop?category=${cat.slug}`}
          className="relative aspect-[3/4] md:aspect-square group overflow-hidden"
        >
          <img 
            data-strk-img-id={cat.id}
            data-strk-img={`[cat-title-${cat.slug}] jewelry on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={cat.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 id={`cat-title-${cat.slug}`} className="text-white text-3xl font-serif tracking-widest uppercase relative">
              {cat.title}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

const Story = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-16 lg:pr-24">
            <div className="aspect-[4/5] relative">
              <img 
                data-strk-img-id="story-img"
                data-strk-img="[story-title] [story-desc]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Brand Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-6">The Art of the Everyday Muse</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p id="story-desc">
                Velmora was born from a desire to bridge the gap between inaccessible fine jewelry and fleeting fashion pieces. We believe that true luxury shouldn't be reserved for special occasions—it should be woven into the fabric of your daily life.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed to be an extension of your personal style. Crafted with premium materials, including thick 18k gold plating over sterling silver or brass, our demi-fine pieces deliver the look, feel, and longevity of solid gold without the markup.
              </p>
            </div>
            <Link 
              to="/about" 
              className="inline-block mt-10 border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-primary hover:border-primary transition-colors"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sarah M.", text: "The quality is unmatched for the price point. These huggies haven't tarnished after months of daily wear." },
    { name: "Emily R.", text: "I bought the Majestic Flora necklace for my wedding day and it was perfect. Now I wear it with a plain white tee." },
    { name: "Jessica T.", text: "Beautiful packaging and incredible attention to detail. Velmora makes an unboxing experience feel truly luxurious." }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif">Loved by You</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex space-x-1 text-primary mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed mb-6">"{review.text}"</p>
              <p className="text-sm uppercase tracking-widest">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Muse Club</h2>
        <p className="text-background/70 mb-10">Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="flex-1 bg-transparent border border-background/30 text-background px-6 py-4 placeholder:text-background/50 focus:outline-none focus:border-background transition-colors"
            required
          />
          <button type="submit" className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <Categories />
      <Story />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;