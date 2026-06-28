import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, collections } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  const ugcImages = [
    { id: 1, image: "https://images.unsplash.com/photo-1596944924616-7fb60f994cc5?q=80&w=600&auto=format&fit=crop", caption: "Everyday Elegance" },
    { id: 2, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop", caption: "Golden Hour" },
    { id: 3, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop", caption: "Layered Perfection" },
    { id: 4, image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop", caption: "Subtle Statement" },
    { id: 5, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=600&auto=format&fit=crop", caption: "Curated Ear" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2000&auto=format&fit=crop" 
            alt="Model wearing Velmora gold jewelry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide">
            Crafted to be Treasured
          </h1>
          <p className="text-lg md:text-xl text-sand-50 mb-10 font-light max-w-2xl mx-auto">
            Demi-fine jewelry designed for the modern woman. Everyday luxury that elevates every moment.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-white text-stone-950 px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-sand-100 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-stone-900 text-sand-50 py-4 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm tracking-widest uppercase text-center space-y-2 md:space-y-0 opacity-80">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">&middot;</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">&middot;</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">&middot;</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-stone-950">Curated Favorites</h2>
            <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-gold-600 transition-colors border-b border-stone-950 pb-1 hover:border-gold-600">
              Shop All Bestsellers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {bestsellers.map((product) => (
              <div key={product.id} className="group flex flex-col relative">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4 inline-block">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0"
                  />
                  <img 
                    src={product.hoverImage} 
                    alt={`${product.name} alternate view`} 
                    className="w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
                  />
                  
                  {/* Quick Add Button Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product, 1, 'Gold');
                      }}
                      className="w-full bg-white/90 backdrop-blur-sm text-stone-950 py-3 uppercase tracking-widest text-xs font-medium hover:bg-stone-950 hover:text-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-stone-950 mb-1">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-stone-500 text-sm mt-auto">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center text-sm uppercase tracking-widest hover:text-gold-600 transition-colors border-b border-stone-950 pb-1">
              Shop All Bestsellers <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC / Reels Row */}
      <section className="py-20 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="text-3xl font-serif text-stone-950 text-center">Spotted in Velmora</h2>
          <p className="text-center text-stone-500 mt-2 text-sm uppercase tracking-widest">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll container with hiding scrollbar */}
        <div className="flex overflow-x-auto pb-8 -mb-8 snap-x snap-mandatory px-4 md:px-8 space-x-4 md:space-x-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcImages.map((item) => (
            <div key={item.id} className="relative w-64 md:w-80 h-[28rem] md:h-[32rem] flex-none snap-center group overflow-hidden touch-pan-x">
              <img 
                src={item.image} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-white text-xl md:text-2xl drop-shadow-md">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((category) => (
              <Link key={category.id} to={`/collections/${category.id}`} className="group relative aspect-square overflow-hidden block">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-widest pointer-events-none drop-shadow-md pb-1 border-b border-transparent group-hover:border-white transition-all duration-300">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-0 bg-sand-100">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[50vh] md:h-auto min-h-[500px] relative">
            <img 
              src="https://images.unsplash.com/photo-1573408301145-b98c46544662?q=80&w=1200&auto=format&fit=crop" 
              alt="Jewelry making process" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-stone-50">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-950 mb-6">Designed for the Modern Heirloom</h2>
              <p className="text-stone-600 mb-8 font-light leading-relaxed">
                At Velmora, we believe fine jewelry shouldn't be reserved for special occasions. We craft high-quality, 18k gold vermeil pieces designed to be worn everyday, layered effortlessly, and cherished for years to come.
              </p>
              <Link to="/about" className="inline-block border border-stone-950 text-stone-950 px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-stone-950 hover:text-white transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-100 -z-10 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-center text-sm uppercase tracking-widest text-stone-500 mb-16">Loved by Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center bg-white">
            {[
              { text: "Absolutely stunning quality. These huggies haven't left my ears since I bought them. The gold is the perfect shade.", author: "Sarah M.", stars: 5 },
              { text: "The unboxing experience was beautiful and the necklace is even more gorgeous in person. It looks like it cost ten times as much.", author: "Elena R.", stars: 5 },
              { text: "Finding jewelry that doesn't irritate my sensitive skin is tough, but Velmora pieces are perfect. So elegant and lightweight.", author: "Jessica T.", stars: 5 }
            ].map((review, idx) => (
              <div key={idx} className="px-6 bg-white">
                <div className="flex justify-center space-x-1 mb-6 text-gold-500">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-lg text-stone-800 mb-6 italic leading-relaxed">"{review.text}"</p>
                <p className="text-sm uppercase tracking-widest text-stone-500 font-medium">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-stone-900 border-b border-stone-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-sand-50 mb-4">Join the Inner Circle</h2>
          <p className="text-stone-400 mb-10 font-light">
            Sign up to receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-transparent border border-stone-700 text-white px-6 py-4 placeholder-stone-500 focus:outline-none focus:border-gold-500 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-stone-950 px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-sand-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
