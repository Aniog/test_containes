import React from 'react';
import { Link } from 'react-router-dom';
import { getBestsellers } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';
import { useCart } from '../components/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-muted">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />
        <img 
          src={product.images[1]} 
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 left-0 right-0 flex justify-center">
             <button 
                onClick={(e) => { e.preventDefault(); addToCart(product); }}
                className="w-[90%] py-3 bg-white/90 backdrop-blur-sm text-foreground uppercase tracking-widest text-xs hover:bg-white transition-colors"
                aria-label={`Add ${product?.name} to cart`}
              >
                Quick Add
              </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <h3 className="font-serif text-lg tracking-wide"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
        <p className="text-muted-foreground mt-1">${product.price}</p>
      </div>
    </div>
  );
};


const Home = () => {
  const bestsellers = getBestsellers();

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           {/* Darker overlay to make text pop */}
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2500&auto=format&fit=crop"
            alt="Model wearing Velmora fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4">Demi-Fine Jewelry</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6">Crafted to be Treasured</h1>
          <Link 
            to="/shop" 
            className="inline-block px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary/5 border-y border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground uppercase tracking-widest text-center">
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

      {/* Bestsellers Section */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
          <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors">
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-foreground pb-1">
                Shop All <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </section>

      {/* UGC / Editorial Row */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-center">Spotted in Velmora</h2>
        </div>
        {/* Horizontal scroll container */}
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-8 snap-x snap-mandatory">
          {[1,2,3,4,5,6].map((i) => {
            const urls = [
                "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=600&auto=format&fit=crop"
            ];
            return (
            <div key={i} className="flex-shrink-0 w-[280px] h-[500px] relative snap-center group">
               <img 
                 src={urls[i-1]} 
                 alt={`Editorial user ${i}`}
                 className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
               />
               {/* Just need *some* images to look nice, unsplash fallback */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <p className="absolute bottom-6 left-6 font-serif text-white text-lg">@user_name</p>
            </div>
            );
          })}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 container mx-auto px-4 md:px-8">
         <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Shop by Category</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => {
                const imgUrls = [
                    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop"
                ];
                return (
                <Link key={cat} to={`/shop?category=${cat}`} className="group relative block aspect-square overflow-hidden bg-muted">
                    <img 
                        src={imgUrls[idx]} 
                        alt={cat}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-3xl text-white tracking-widest uppercase">{cat}</span>
                    </div>
                </Link>
            )})}
         </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="flex-1 w-full aspect-[3/4] md:aspect-square bg-muted/20 relative">
                     <img 
                        src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop" 
                        alt="Jewelry making process"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 md:pr-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">The Velmora Promise</h2>
                    <p className="text-muted-foreground/80 leading-relaxed mb-8 text-lg">
                        We believe that fine jewelry shouldn't be reserved for special occasions. 
                        Velmora was born from a desire to create accessible, demi-fine pieces that you can live in.
                        Every piece is crafted in 18k gold vermeil over sterling silver, ensuring lasting quality
                        and a brilliant finish that won't tarnish.
                    </p>
                    <Link to="/#about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#B4935F] hover:text-[#B4935F]/80 transition-colors border-b border-[#B4935F] pb-1">
                        Read Our Story <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-16">Loved by You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { text: "The quality is simply stunning. I've been wearing the Golden Sphere Huggies every day and they still look brand new.", name: "Sarah M." },
                    { text: "Exactly what I was looking for. Beautiful, heavy feeling without being too heavy on the ears. Perfect subtle elegance.", name: "Elena R." },
                    { text: "Shipped quickly and the packaging was beautiful. The Majestic Flora necklace gets me compliments everywhere I go.", name: "Jessica T." }
                ].map((review, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="flex gap-1 mb-6 text-primary">
                            {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="font-serif text-xl italic leading-relaxed mb-6">"{review.text}"</p>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground">{review.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container mx-auto px-4 md:px-8 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Club</h2>
              <p className="text-muted-foreground mb-8">Sign up for early access to new collections and 10% off your first order.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 bg-transparent border border-foreground/20 px-6 py-4 outline-none focus:border-primary transition-colors"
                  />
                  <button type="submit" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 uppercase tracking-widest text-sm transition-colors">
                      Subscribe
                  </button>
              </form>
          </div>
      </section>
    </div>
  );
};

export default Home;
