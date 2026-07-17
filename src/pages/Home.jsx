import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowRight, Star } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Home() {
  const { addItem } = useCart();
  const bestsellers = products.filter(p => !!p.bestseller).slice(0, 5);

  const testimonials = [
    { text: "The quality is simply unmatched. I wear my Golden Sphere Huggies every single day.", author: "Sarah M.", stars: 5 },
    { text: "My collection has grown so much. Every piece feels incredibly premium without the crazy markup.", author: "Elena R.", stars: 5 },
    { text: "Stunning designs. The packaging alone makes it such a special unboxing experience.", author: "Chloe T.", stars: 5 },
  ];

  return (
    <div className="w-full">
      {/* 1. Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Model wearing gold jewelry" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/40" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-white mt-16 md:mt-24">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 font-light leading-tight tracking-wide">
            Crafted to be <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="text-base md:text-lg text-stone-200 mb-10 max-w-lg mx-auto font-light tracking-wide">
            Editorial demi-fine jewelry designed for the modern muse. Elevate your everyday with accessible luxury.
          </p>
          <Link 
            to="/collection" 
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-stone-50 border-b border-stone-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs tracking-widest uppercase text-stone-600 gap-y-4 gap-x-8 text-center font-medium">
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

      {/* 3. Bestsellers Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl text-stone-900 mb-3">Our Signatures</h2>
              <p className="text-stone-500 font-light">The pieces our community loves most.</p>
            </div>
            <Link to="/collection" className="hidden md:flex items-center text-xs tracking-widest uppercase font-semibold text-stone-900 hover:text-primary transition-colors gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map(product => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden mb-4 bg-stone-100">
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                  <img src={product.hoverImage || product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100" />
                  <button 
                    onClick={(e) => { e.preventDefault(); addItem(product, 1, { tone: 'gold' }); }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 py-3 text-xs uppercase tracking-widest font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white"
                  >
                    Quick Add
                  </button>
                </Link>
                <div className="flex-1 flex flex-col">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif tracking-widest uppercase text-sm mb-1 text-stone-900 group-hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-stone-500 text-sm mt-auto">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/collection" className="inline-flex items-center text-xs tracking-widest uppercase font-semibold text-stone-900 hover:text-primary transition-colors gap-2 border-b border-stone-900 pb-1">
              Shop All Bestsellers
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Brand Story Split */}
      <section className="bg-stone-100 py-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[600px] relative">
            <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Jewelry making process" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#EBE7E0]">
            <div className="max-w-md">
              <h2 className="font-serif text-4xl mb-6 text-stone-900">Quiet Luxury, <br/><span className="italic">Redefined.</span></h2>
              <p className="text-stone-700 font-light leading-relaxed mb-8">
                Velmora was born from a desire to bridge the gap between affordable fast-fashion and prohibitively expensive fine jewelry. 
                Our pieces are meticulously crafted using sustainable materials and heavy 18K gold plating over jewelers' brass and sterling silver.
              </p>
              <Link to="#" className="border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-colors inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl text-center mb-16 text-stone-900">Curated Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { title: "Necklaces", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { title: "Huggies", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((cat, i) => (
              <Link to="/collection" key={i} className="group relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-serif text-3xl tracking-widest uppercase drop-shadow-md">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Reel-style UGC row */}
      <section className="py-16 md:py-24 bg-stone-900 text-stone-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
          <h2 className="font-serif text-4xl text-white">How You Wear It</h2>
          <p className="text-xs uppercase tracking-widest text-stone-400 hidden md:block">@velmorajewelry</p>
        </div>
        <div className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-8 pb-8 snap-x snap-mandatory hide-scrollbar">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative w-64 md:w-80 aspect-[9/16] flex-shrink-0 snap-center bg-stone-800 overflow-hidden group">
              <img src={`https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&sig=${i}`} alt="UGC" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                 <p className="font-serif italic text-lg text-white drop-shadow-md">"Perfect everyday stack."</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-[#EBE7E0]">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-stone-900">Loved by Thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {testimonials.map((test, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {[...Array(test.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg text-stone-800 italic mb-6 leading-relaxed">"{test.text}"</p>
                <p className="text-xs uppercase tracking-widest font-semibold text-stone-500">{test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Capture */}
      <section className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-4 text-stone-900">Join the Collective</h2>
          <p className="text-stone-500 mb-8 font-light">Sign up for editorial musings, early access to new collections, and 10% off your first order.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-stone-50 border border-stone-200 px-6 py-4 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-all font-light"
              required
            />
            <button type="submit" className="bg-stone-900 text-white hover:bg-stone-800 px-8 py-4 uppercase tracking-[0.15em] text-xs font-bold transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
