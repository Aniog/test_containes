import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="bg-velmora-light">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=2000" 
            alt="Model wearing gold jewelry" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 font-medium tracking-wide">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl font-light mb-10 tracking-wide max-w-lg mx-auto">
            Demi-fine jewelry for the modern romantic. Effortless elegance for your everyday.
          </p>
          <Link 
            to="/shop" 
            className="bg-velmora-gold hover:bg-velmora-gold-hover text-white px-10 py-4 font-semibold tracking-widest uppercase text-sm transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-velmora-border bg-velmora-muted/50 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs tracking-widest uppercase font-semibold text-velmora-gray gap-4">
          <span className="w-1/2 sm:w-auto text-center sm:text-left">Free Worldwide Shipping</span>
          <span className="hidden sm:inline text-velmora-gold">•</span>
          <span className="w-1/2 sm:w-auto text-center sm:text-left">30-Day Returns</span>
          <span className="hidden sm:inline text-velmora-gold">•</span>
          <span className="w-1/2 sm:w-auto text-center sm:text-left">18K Gold Plated</span>
          <span className="hidden sm:inline text-velmora-gold">•</span>
          <span className="w-1/2 sm:w-auto text-center sm:text-left">Hypoallergenic</span>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          <Link to="/shop" className="text-sm font-semibold tracking-wider uppercase border-b border-velmora-dark pb-1 hidden md:inline-block">Shop All</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-velmora-muted mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                />
                <img 
                  src={product.image_hover} 
                  alt={`${product.name} alternate view`} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-velmora-dark font-semibold text-xs tracking-widest uppercase py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-velmora-dark hover:text-white"
                >
                  Quick Add
                </button>
              </Link>
              <Link to={`/product/${product.id}`} className="mt-auto">
                <h3 className="uppercase tracking-widest text-[11px] font-bold mb-1 text-velmora-dark">{product.name}</h3>
                <p className="text-velmora-gray font-medium text-sm">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link to="/shop" className="text-sm font-semibold tracking-wider uppercase border-b border-velmora-dark pb-1">Shop All</Link>
        </div>
      </section>

      {/* category Tiles */}
      <section className="py-24 px-4 md:px-8 bg-velmora-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/shop?category=earrings" className="group relative aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535632787350-4e68eef064cb?auto=format&fit=crop&q=80&w=800" alt="Earrings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-serif text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Earrings</h3>
              </div>
            </Link>
            <Link to="/shop?category=necklaces" className="group relative aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=800" alt="Necklaces" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-serif text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Necklaces</h3>
              </div>
            </Link>
            <Link to="/shop?category=huggies" className="group relative aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=800" alt="Huggies" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-serif text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Huggies</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reel-style UGC row */}
      <section className="py-24 bg-velmora-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-serif">As Seen On You</h2>
          <span className="text-velmora-gray text-sm tracking-widest uppercase font-semibold">@velmorajewelry</span>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { img: "https://images.unsplash.com/photo-1549449830-10dd84c7ebbb?auto=format&fit=crop&q=80&w=600", text: "Everyday gold essentials" },
            { img: "https://images.unsplash.com/photo-1610488970034-3118fe58032b?auto=format&fit=crop&q=80&w=600", text: "Layered to perfection" },
            { img: "https://images.unsplash.com/photo-1596944924765-a8cd1b87b7a2?auto=format&fit=crop&q=80&w=600", text: "The chunky huggie" },
            { img: "https://images.unsplash.com/photo-1506422744044-f187aebb0ee4?auto=format&fit=crop&q=80&w=600", text: "Evening details" },
            { img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600", text: "A pop of crystal" }
          ].map((item, i) => (
            <div key={i} className="relative flex-none w-[70vw] md:w-[280px] aspect-[9/16] snap-center rounded-sm overflow-hidden">
              <img src={item.img} alt={`UGC ${i}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-serif text-xl">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-velmora-muted overflow-hidden">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000" alt="Jewelry making" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-velmora-dark leading-tight">Quiet luxury meets conscious craft.</h2>
            <p className="text-velmora-gray text-lg mb-6 leading-relaxed">
              At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. We craft approachable, premium gold pieces designed to be lived in, loved, and layered.
            </p>
            <p className="text-velmora-gray text-lg mb-10 leading-relaxed">
              Combining 18k gold plating with modern silhouettes, each piece is an invitation to celebrate your own unique aesthetic.
            </p>
            <Link to="#" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase border-b border-velmora-dark pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-velmora-muted/50 border-t border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-velmora-dark">Loved by You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { text: "The quality is absolutely stunning. I haven't taken the huggies off since they arrived.", name: "Sophia M." },
              { text: "Finally found the perfect gold tone that doesn't look cheap. Extremely impressed.", name: "Elena. R." },
              { text: "Beautiful packaging and the necklace is incredibly elegant. My new everyday piece.", name: "Claire T." }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex text-velmora-gold mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="font-serif text-xl italic text-velmora-dark mb-6">"{review.text}"</p>
                <p className="text-xs uppercase tracking-widest font-bold text-velmora-gray">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 md:px-8 bg-velmora-dark text-velmora-light text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Join the Insider List</h2>
          <p className="text-velmora-light/80 mb-10 text-lg">Sign up for 10% off your first order, plus exclusive access to new drops.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent border-b border-velmora-light/30 px-4 py-3 text-white placeholder:text-velmora-light/50 focus:outline-none focus:border-velmora-light rounded-none transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-velmora-gold hover:bg-velmora-gold-hover text-white px-8 py-3 font-semibold tracking-widest uppercase text-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}