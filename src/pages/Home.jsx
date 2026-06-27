import { PRODUCTS, CATEGORIES } from '../data/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useCartStore } from '../store/useCart';
import { toast } from 'sonner';

const Home = () => {
  const { addItem } = useCartStore();
  const bestsellers = PRODUCTS.slice(0, 5);

  const handleQuickAdd = (product) => {
    addItem(product, 1, product.colors[0]);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="flex flex-col bg-background min-h-screen">
      
      {/* 2. Full-bleed Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599643478524-fb66f7f6a6c1?q=80&w=2000&auto=format&fit=crop" 
            alt="Velmora Fine Jewelry Hero" 
            className="w-full h-full object-cover object-center brightness-75 transition-transform duration-10000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center flex-1 justify-center mt-16 md:mt-0">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide drop-shadow-sm font-light">
            CRAFTED TO BE TREASURED
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide mb-10 max-w-2xl mx-auto">
            Quiet luxury demi-fine jewelry. Premium essentials for your everyday collection.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-100 h-14 px-10 uppercase tracking-widest text-sm font-medium border-0 rounded-none shadow-sm">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <div className="bg-primary text-primary-foreground py-3 border-b border-white/10">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-widest uppercase font-medium">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">·</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">·</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">·</span>
          <span>Hypoallergenic</span>
        </div>
      </div>

      {/* 4. Bestsellers */}
      <section className="py-24 px-4 md:px-8 container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-4xl uppercase tracking-[0.1em] mb-4">Bestsellers</h2>
          <p className="text-muted-foreground max-w-lg">Our most loved demi-fine pieces, designed to be worn every day and cherished forever.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.slug}`} className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0"
                />
                <img 
                  src={product.imageHover} 
                  alt={`${product.name} worn`} 
                  className="w-full h-full object-cover transition-transform duration-700 absolute inset-0 z-0 group-hover:scale-105"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-20">
                  <Button 
                    className="w-full uppercase tracking-wider text-xs h-12 bg-white/95 text-black hover:bg-white border-0 shadow-lg backdrop-blur-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleQuickAdd(product);
                    }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              
              <div className="flex flex-col flex-1">
                <Link to={`/product/${product.slug}`} className="hover:text-primary/70 transition-colors">
                  <h3 className="font-serif uppercase tracking-wider text-base mb-2">{product.name}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-3 font-medium">${product.price}</p>
                <div className="flex items-center gap-1 mt-auto">
                  <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                  <span className="text-xs font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary uppercase tracking-widest text-sm px-10 h-14 rounded-none hover:bg-primary hover:text-primary-foreground transition-colors">
            <Link to="/shop">View All Pieces</Link>
          </Button>
        </div>
      </section>

      {/* 5. UGC / Editorial Reel */}
      <section className="bg-primary/5 py-24 overflow-hidden overflow-x-auto hide-scrollbar">
        <div className="container mx-auto px-4 md:px-8 mb-12 flex items-end justify-between">
          <div>
             <h2 className="font-serif text-3xl uppercase tracking-[0.1em]">Worn By You</h2>
             <p className="text-muted-foreground mt-2">@velmorajewelry</p>
          </div>
        </div>
        
        <div className="flex gap-4 md:gap-6 px-4 md:px-8 max-w-[100vw] mx-auto w-max min-w-full">
          {[
            { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&h=700&fit=crop", text: "Everyday essentials." },
            { img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&h=700&fit=crop", text: "Golden hour." },
            { img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=400&h=700&fit=crop", text: "Layered perfectly." },
            { img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400&h=700&fit=crop", text: "The statement piece." },
            { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&h=700&fit=crop", text: "Quiet luxury." },
          ].map((item, i) => (
            <div key={i} className="relative w-64 md:w-80 shrink-0 aspect-[9/16] overflow-hidden group">
              <img 
                src={item.img} 
                alt="Editorial" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif italic text-xl tracking-wide">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Shop by Category */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: "Earrings", img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=800&aspect=1:1&fit=crop" },
            { name: "Necklaces", img: "https://images.unsplash.com/photo-1599643478524-fb66f7f6a6c1?q=80&w=800&aspect=1:1&fit=crop" },
            { name: "Huggies", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&aspect=1:1&fit=crop" }
          ].map(cat => (
            <Link key={cat.name} to={`/shop?category=${cat.name}`} className="group relative aspect-square overflow-hidden block">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-serif uppercase tracking-[0.2em] text-2xl md:text-3xl font-light opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Brand Story */}
      <section className="border-t border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto h-full min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1200&fit=crop" 
              alt="Velmora Craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center p-12 md:p-24 bg-primary text-primary-foreground">
            <div className="max-w-md">
              <h2 className="font-serif text-4xl lg:text-5xl uppercase tracking-[0.1em] mb-8 font-light">Crafted With Intention</h2>
              <p className="text-primary-foreground/80 mb-6 text-lg leading-relaxed font-serif">
                Velmora was founded on the belief that fine jewelry shouldn't be reserved for special occasions. We create premium Demi-Fine pieces designed to live with you, every day.
              </p>
              <p className="text-primary-foreground/80 mb-10 leading-relaxed">
                Working with conflict-free 18K gold and sustainable practices, each piece is an heirloom in the making.
              </p>
              <Link to="/about" className="uppercase tracking-widest text-sm font-medium border-b border-primary-foreground/30 pb-1 hover:border-primary-foreground transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-background px-4">
        <div className="container mx-auto">
          <h2 className="font-serif text-center text-3xl uppercase tracking-[0.1em] mb-16">The Velmora Review</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {[
              {
                text: "The quality is simply unmatched. I've worn my Golden Sphere Huggies every day for months, and they still look pristine.",
                name: "Sarah M.",
              },
              {
                text: "A truly quiet luxury piece. The packaging made the unboxing experience feel so special. Will absolutely be back for more.",
                name: "Elena C.",
              },
              {
                text: "Finally, jewelry that doesn't irritate my skin and looks incredibly high-end without the massive markup.",
                name: "Jessica T.",
              }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6 italic text-foreground/90">"{review.text}"</p>
                <p className="uppercase tracking-widest text-sm text-muted-foreground">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Newsletter */}
      <section className="py-24 border-t border-border/30 bg-primary/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-4xl uppercase tracking-[0.1em] mb-4">Join The Club</h2>
          <p className="text-muted-foreground mb-10">Subscribe to receive 10% off your first order, plus early access to new collections.</p>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border border-border px-6 py-4 focus:outline-none focus:border-primary transition-colors text-foreground h-14"
              required
            />
            <Button type="submit" className="uppercase tracking-widest h-14 px-8 rounded-none shrink-0" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
