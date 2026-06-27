import { Link } from 'react-router-dom';
import { getBestsellers } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const bestsellers = getBestsellers();
  const { addToCart } = useCart();

  const handleQuickAdd = (e, product) => {
    e.preventDefault(); // Prevent link click
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-brand-charcoal overflow-hidden group">
        <div 
          className="absolute inset-0 opacity-80"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="gold jewelry worn on model warm lighting editorial close up"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl text-brand-sand mb-6 tracking-wide drop-shadow-md">
            Crafted to be Treasured
          </h1>
          <p className="text-brand-sand/90 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto drop-shadow">
            Demi-fine jewelry designed for the everyday. Modern heirlooms that elevate your every moment.
          </p>
          <Link 
            to="/shop" 
            className="bg-brand-gold text-brand-charcoal px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-sand transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brand-taupe/30 border-y border-brand-charcoal/5 py-4">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="flex justify-between items-center whitespace-nowrap overflow-x-auto hide-scrollbar text-xs uppercase tracking-widest opacity-80 gap-8 md:gap-4 px-2">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </div>

      {/* Bestsellers */}
      <section className="py-24 px-4 md:px-8 container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">Best Sellers</h2>
          <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-brand-gold transition-colors">
            Shop All <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {bestsellers.slice(0, 4).map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="group block">
              <div className="relative aspect-[4/5] bg-brand-taupe/20 mb-4 overflow-hidden">
                <img 
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={product.imgSearch}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-full bg-brand-sand/90 backdrop-blur-sm text-brand-charcoal py-3 text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-sand transition-colors"
                  >
                    Quick Add - ${product.price}
                  </button>
                </div>
              </div>
              <h3 className="font-serif uppercase tracking-wider text-sm mb-1">{product.name}</h3>
              <p className="opacity-70 text-sm">${product.price}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link to="/shop" className="inline-flex items-center border-b border-brand-charcoal pb-1 text-sm uppercase tracking-widest hover:text-brand-gold hover:border-brand-gold transition-colors">
            Shop All <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* UGC / Editorial Reel */}
      <section className="bg-brand-taupe/20 py-24 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="font-serif text-3xl text-center mb-4 text-brand-charcoal">Styled by You</h2>
          <p className="text-center opacity-70 text-sm uppercase tracking-widest">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 px-4 md:px-8 pb-8 hide-scrollbar snap-x">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative w-64 md:w-80 flex-none aspect-[9/16] bg-brand-taupe snap-center overflow-hidden group">
              <img 
                alt="Editorial jewelry shot"
                data-strk-img-id={`ugc-img-${i}`}
                data-strk-img="vertical aesthetic editorial shot gold jewelry worn lifestyle"
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <p className="absolute bottom-6 left-6 right-6 font-serif text-brand-sand opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-lg">
                "The perfect everyday stack."
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Earrings', query: 'gold earrings close up aesthetic' },
            { title: 'Necklaces', query: 'gold necklace pendant aesthetic worn' },
            { title: 'Huggies', query: 'gold hoop huggie earrings small thick' }
          ].map((cat, i) => (
            <Link to={`/shop?category=${cat.title}`} key={i} className="group relative aspect-[3/4] overflow-hidden bg-brand-taupe/20">
              <img 
                alt={cat.title}
                data-strk-img-id={`cat-img-${i}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-10 flex justify-center">
                <span className="bg-brand-sand text-brand-charcoal px-8 py-3 uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-sand transition-colors">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-brand-charcoal text-brand-sand">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto">
            <div 
              className="w-full h-full min-h-[400px]"
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="jewelry design process sketch gold raw editorial"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-brand-charcoal">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">Elevating<br/>The Everyday</h2>
            <p className="text-brand-taupe/80 font-light leading-relaxed mb-8 max-w-md">
              Velmora was born from a simple belief: fine jewelry shouldn't be saved for special occasions. We craft intentional, design-led pieces that transition seamlessly from morning coffee to evening events. 
            </p>
            <div>
              <Link to="/about" className="inline-flex items-center uppercase tracking-widest text-sm font-medium hover:text-brand-gold transition-colors border-b border-brand-taupe/30 hover:border-brand-gold pb-1">
                Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="font-serif text-3xl text-center mb-16 text-brand-charcoal">A Few Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { quote: "I haven't taken the Celestial Chain off since it arrived. The quality is exceptional for the price point. Packaging was beautiful too.", author: "Sarah M." },
            { quote: "Finally found huggies that don't irritate my sensitive ears. They have a brilliant weight and shine to them. Highly recommend.", author: "Elena R." },
            { quote: "Purchased the Heirloom Set as a gift for myself. The attention to detail is noticeable instantly. Customer service was lovely.", author: "Jessica T." }
          ].map((test, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="flex text-brand-gold mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-lg md:text-xl leading-relaxed mb-6 flex-1">"{test.quote}"</p>
              <p className="text-xs uppercase tracking-widest opacity-60">— {test.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-taupe/20 py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl mb-4 text-brand-charcoal">Join The Club</h2>
          <p className="opacity-70 mb-8 font-light">Subscribe to receive 10% off your first order, plus early access to new collections and exclusive events.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border-b border-brand-charcoal/20 pb-3 focus:outline-none focus:border-brand-charcoal transition-colors placeholder:text-brand-charcoal/40 font-light"
              required
            />
            <button 
              type="submit" 
              className="uppercase tracking-widest text-sm font-medium hover:text-brand-gold transition-colors sm:whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
