import React from 'react';
import { seedProducts, ugcData } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export function Home() {
  const { addToCart } = useCart();
  const bestsellers = seedProducts.filter(p => p.isBestseller).slice(0, 5);

  return (
    <div>
      {/* Search Bar / Trust Bar space could go here, but let's do Hero first */}
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center -mt-20 z-0">
        <div className="absolute inset-0 w-full h-full">
           <div 
             className="w-full h-full bg-cover bg-center"
             style={{ 
               // Default placeholder if the dynamic strk-bg isn't swapped yet
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")`, 
               backgroundColor: '#292524' // Very dark base
             }}
             data-strk-bg="[hero-subtitle] [hero-headline] warm-lit close-up of gold jewelry on a model"
             data-strk-bg-id="home-hero-bg"
             data-strk-bg-ratio="16x9"
             data-strk-bg-width="1600"
            />
           <div className="absolute inset-0 bg-stone-900/60" /> {/* Dark overlay for text legibility */}
        </div>
        
        <div className="relative z-10 text-center text-stone-50 px-4 max-w-3xl pt-20">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl mb-6 font-medium leading-tight">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="text-lg md:text-xl font-sans font-light tracking-wide mb-10 text-stone-200">
            Demi-fine gold jewelry for everyday elegance.
          </p>
          <Button asChild variant="solid" size="lg">
             <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-stone-50 border-b border-border py-4 text-xs font-medium tracking-widest uppercase text-center overflow-hidden">
         <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 px-4 whitespace-nowrap">
            <span>Free Worldwide Shipping</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>30-Day Returns</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>18K Gold Plated</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Hypoallergenic</span>
         </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <Link to="/shop" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors underline underline-offset-4">
            Shop All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4">
                <img 
                  data-strk-img={product.images.primary}
                  data-strk-img-id={`bestseller-primary-${product.id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                 <img 
                  data-strk-img={product.images.hover}
                  data-strk-img-id={`bestseller-hover-${product.id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
                
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <div className="pointer-events-auto">
                    <Button 
                      variant="solid" 
                      className="w-full bg-stone-900 text-stone-50 hover:bg-accent"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
              </Link>
              
              <div className="text-center">
                <h3 className="font-serif uppercase tracking-wider text-sm mb-1">
                  <Link to={`/product/${product.slug}`} className="hover:text-accent transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Tiles */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Earrings', 'Necklaces', 'Huggies'].map((cat, idx) => (
              <Link 
                key={cat} 
                to={`/shop?category=${cat}`}
                className="relative aspect-[3/4] overflow-hidden group block bg-stone-200"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")` }}
                  data-strk-bg={`velmora fine gold jewelry ${cat} category lifestyle model warm tone`}
                  data-strk-bg-id={`cat-${idx}`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="600"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-3xl text-stone-50">{cat}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Reel Row */}
      <section className="py-24 max-w-[1600px] mx-auto overflow-hidden">
        <div className="flex justify-center mb-12 px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center">Spotted in Velmora</h2>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory hide-scrollbar">
          {ugcData.map((ugc) => (
            <div key={ugc.id} className="relative flex-none w-64 md:w-80 aspect-[9/16] snap-center group rounded-md overflow-hidden bg-stone-100">
               <img 
                  data-strk-img={ugc.image}
                  data-strk-img-id={ugc.imgIdBase}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`UGC content ${ugc.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-6 left-6 right-6 text-stone-50 font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {ugc.caption}
                </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="bg-stone-900 text-stone-50">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[600px] relative bg-stone-800">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")` }}
              data-strk-bg="editorial close up of jewelry designer hands working with gold vintage warmly lit"
              data-strk-bg-id="story-bg"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24">
            <div className="max-w-md">
              <h2 className="font-serif text-3xl md:text-5xl mb-6">Purity & Purpose</h2>
              <p className="font-sans font-light leading-relaxed text-stone-300 mb-8">
                Born from a desire to bridge the gap between costume trinkets and unapproachable fine jewelry. Velmora pieces are crafted with 18k gold vermeil and hypoallergenic materials, designed to be the foundational pieces of your daily wardrobe.
              </p>
              <Button asChild variant="outline" className="border-stone-50 text-stone-50 hover:bg-stone-50 hover:text-stone-900">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16">Loved by Many</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { text: "The weight and shine of the Golden Sphere Huggies is incredible. They look like solid gold pieces.", name: "Sarah L." },
            { text: "My go-to store for gifts. The Royal Heirloom Set came beautifully packaged and made my sister's day.", name: "Elena M." },
            { text: "Finally found earrings that don't irritate my ears but still look elevated and stylish.", name: "Rachel P." }
          ].map((review, i) => (
             <div key={i} className="flex flex-col items-center">
               <div className="flex text-accent mb-6">
                 {[...Array(5)].map((_, j) => (
                   <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
               <p className="font-serif text-lg lg:text-xl italic mb-6 leading-relaxed">"{review.text}"</p>
               <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">{review.name}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-stone-200 py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl mb-4 text-foreground">Join the Inner Circle</h2>
          <p className="text-muted-foreground mb-8">Sign up for early access to new collections and 10% off your first order.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 h-11 px-4 bg-transparent border-b border-stone-400 focus:border-stone-900 outline-none transition-colors rounded-none placeholder:text-stone-500"
              required
            />
            <Button type="submit" variant="solid">Subscribe</Button>
          </form>
        </div>
      </section>
      
    </div>
  );
}
