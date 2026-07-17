import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center p-6 md:p-12">
      <div
        className="absolute inset-0 z-0 scale-105"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 id="hero-title" className="text-4xl md:text-6xl font-serif uppercase tracking-[0.25em] mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-sm md:text-base uppercase tracking-widest font-light mb-12 opacity-90">
          Demi-fine gold jewelry designed for your every day.
        </p>
        <Link to="/shop" className="button-premium bg-white text-primary hover:bg-white/90">
          Shop the Collection
        </Link>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-[1px] h-16 bg-white/40 animate-pulse mx-auto" />
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="bg-secondary/50 border-b border-border py-4 overflow-hidden">
      <div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center px-4">
        {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-muted">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <div className="relative aspect-[3/4] bg-white overflow-hidden mb-6">
        <Link to={`/product/${product.id}`}>
          <img
            data-strk-img-id={`prod-main-${product.id}`}
            data-strk-img={`an editorial photo of ${product.name} jewelry on a neutral background`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-secondary/10 pointer-events-none">
             {/* Secondary image would go here if available */}
          </div>
        </Link>
        <button
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} added to bag`);
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/95 text-primary py-3 text-[10px] uppercase tracking-widest translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white"
        >
          Quick Add
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="text-center block">
        <h3 className="text-xs uppercase tracking-widest mb-2 font-semibold">{product.name}</h3>
        <p className="text-sm font-light text-muted">${product.price}</p>
      </Link>
    </div>
  );
};

const Bestsellers = () => {
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);
  
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-[0.15em] mb-4">The Bestsellers</h2>
          <p className="text-sm text-muted uppercase tracking-widest font-light">Most loved pieces from our current collection.</p>
        </div>
        <Link to="/shop" className="text-xs uppercase tracking-[0.2em] border-b border-primary pb-1 font-semibold hover:opacity-70 transition-opacity">
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
        {bestsellerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

const UGCGrid = () => {
  const reels = [
    { title: 'The Hoop Edit', caption: 'Everyday Essentials' },
    { title: 'Layering 101', caption: 'Curated Perfection' },
    { title: 'Velmora in Gold', caption: 'Quiet Luxury' },
    { title: 'Gift Guide', caption: 'For Someone Special' },
    { title: 'The Stack', caption: 'Make it Yours' },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-serif uppercase tracking-widest">Worn by You</h2>
        <span className="text-[10px] uppercase tracking-widest text-muted">@VelmoraFine</span>
      </div>
      
      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto pb-8 scrollbar-hide no-scrollbar -mx-6 md:mx-auto">
        {reels.map((reel, index) => (
          <div key={index} className="flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] relative overflow-hidden group">
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-bg-${index}`}
              data-strk-bg={`[ugc-title-${index}] [ugc-caption-${index}] jewelry jewelry model neck ear`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h4 id={`ugc-title-${index}`} className="text-white text-sm font-serif uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{reel.title}</h4>
              <p id={`ugc-caption-${index}`} className="text-white/80 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    { name: 'Earrings', id: 'ears', img: 'earrings jewelry on model' },
    { name: 'Necklaces', id: 'necks', img: 'necklace jewelry on model' },
    { name: 'Huggies', id: 'hugs', img: 'huggie earrings jewelry' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cats.map((cat) => (
          <Link key={cat.id} to="/shop" className="relative group overflow-hidden aspect-square">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id={`cat-bg-${cat.id}`}
              data-strk-bg={cat.img}
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-2xl font-serif uppercase tracking-[0.3em]">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const BrandStory = () => {
  return (
    <section className="py-24 grid grid-cols-1 md:grid-cols-2">
      <div className="aspect-square md:aspect-auto">
        <div
          className="w-full h-full"
          data-strk-bg-id="story-bg"
          data-strk-bg="premium jewelry workshop gold crafted editorial"
          data-strk-bg-ratio="1x1"
          data-strk-bg-width="1200"
        />
      </div>
      <div className="bg-secondary p-12 md:p-24 flex flex-col justify-center items-start text-left">
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 font-bold">The Velmora Ethos</span>
        <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest mb-8 leading-tight">Quiet Luxury, <br/>Defined.</h2>
        <p className="text-sm md:text-base text-muted max-w-md mb-12 leading-loose">
          Born from a desire for jewelry that balances timeless elegance with accessible luxury. We believe in the power of the small detail—the subtle sparkle, the polished gold, the piece you never want to take off.
        </p>
        <Link to="/about" className="button-outline">
          Our Story
        </Link>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Elena D.', text: 'The Golden Sphere Huggies are my new daily staple. Perfectly weighted and the polish is divine.' },
    { name: 'Sarah K.', text: 'Fast shipping and beautiful packaging. It felt like a true luxury experience from start to finish.' },
    { name: 'Michelle R.', text: 'The quality of the 18K gold plating is exceptional. No tarnishing after months of wear.' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <div className="flex justify-center gap-1 mb-12">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-8">
        {reviews.map((rev, i) => (
          <div key={i} className="flex-1">
            <p className="text-lg font-serif italic mb-6 leading-relaxed">"{rev.text}"</p>
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted">— {rev.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-primary text-white text-center flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-serif uppercase tracking-[0.2em] mb-4">The Journal</h2>
      <p className="text-white/60 text-xs uppercase tracking-widest mb-12">Join for 10% off your first order & exclusive access.</p>
      <form className="w-full max-w-md flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="bg-transparent border-b border-white/30 py-4 px-2 text-xs uppercase tracking-widest focus:outline-none focus:border-white transition-colors flex-grow"
        />
        <button type="submit" className="button-premium bg-white text-primary hover:bg-neutral-200">
          Subscribe
        </button>
      </form>
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <Categories />
      <UGCGrid />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
