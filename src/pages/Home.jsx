import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { products, ugcImages } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero */}
      <section className="relative h-[80vh] w-full flex items-center justify-center -mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop" 
          alt="Woman wearing elegant gold jewelry" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-3xl flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl mb-4 leading-tight">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto opacity-90 tracking-wide font-light">
            Demi-fine jewelry designed for everyday elegance. Discover pieces that celebrate the beauty of simplicity.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground tracking-widest uppercase rounded-sm px-8">
            <Link to="/collections">Shop the Collection</Link>
          </Button>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <div className="bg-muted/50 py-4 border-b">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-xs md:text-sm tracking-wide uppercase text-muted-foreground gap-4 md:gap-0">
          <span className="flex-1 text-center md:text-left">Free Worldwide Shipping</span>
          <span className="hidden md:inline-block">·</span>
          <span className="flex-1 text-center">30-Day Returns</span>
          <span className="hidden md:inline-block">·</span>
          <span className="flex-1 text-center">18K Gold Plated</span>
          <span className="hidden md:inline-block">·</span>
          <span className="flex-1 text-center md:text-right">Hypoallergenic</span>
        </div>
      </div>

      {/* 3. Bestsellers */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-12">Bestsellers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.slice(0, 5).map(product => (
            <div key={product.id} className="group flex flex-col text-left">
              <Link to={`/collections/${product.id}`} className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden rounded-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  src={product.hoverImage} 
                  alt={`${product.name} worn`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({ ...product, variant: product.variants[0] }, 1);
                    }}
                    className="w-full bg-background/90 text-foreground hover:bg-background uppercase tracking-widest text-xs h-10 backdrop-blur-sm"
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <h3 className="font-heading uppercase tracking-wide text-sm mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-muted-foreground text-sm">${product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <Button variant="outline" asChild className="tracking-widest uppercase rounded-sm border-foreground/20 hover:border-foreground transition-colors">
            <Link to="/collections">View All Jewelry</Link>
          </Button>
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 flex justify-between items-end">
          <h2 className="font-heading text-3xl">Styled by You</h2>
          <span className="text-sm tracking-widest uppercase text-muted-foreground">@velmorajewelry</span>
        </div>
        
        {/* Horizontal scroll native + hidden scrollbar */}
        <div className="flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 md:mx-auto md:px-0">
          <div className="w-4 flex-shrink-0 md:hidden"></div>
          {ugcImages.map((ugc) => (
            <div key={ugc.id} className="relative w-64 h-[28rem] flex-shrink-0 snap-center rounded-sm overflow-hidden group">
              <img src={ugc.image} alt={ugc.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-6 left-6 text-white font-heading text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                {ugc.caption}
              </p>
            </div>
          ))}
          <div className="w-4 flex-shrink-0 md:hidden"></div>
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" },
            { name: "Necklaces", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
            { name: "Huggies", image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop" }
          ].map((cat) => (
            <Link key={cat.name} to={`/collections?category=${cat.name.toLowerCase()}`} className="group relative aspect-square overflow-hidden rounded-sm bg-muted text-center cursor-pointer">
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-3xl text-white tracking-wide mix-blend-overlay">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop" 
                alt="Velmora Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h2 className="font-heading text-4xl mb-4">Redefining Everyday Luxury</h2>
              <p className="opacity-90 font-light leading-relaxed">
                At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. We craft high-quality, responsibly sourced pieces designed to live with you.
              </p>
              <p className="opacity-90 font-light leading-relaxed mb-8">
                By designing in-house and selling directly to you, we bypass traditional markups to offer premium materials—like 18k solid gold vermeil and ethically sourced stones—at accessible prices.
              </p>
              <Button asChild variant="link" className="text-primary-foreground hover:text-white p-0 h-auto font-heading tracking-widest uppercase text-lg group">
                <Link to="#">
                  Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl mb-16">Loved by Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {[
            { name: "Sarah K.", review: "The quality is simply unmatched for the price. I haven't taken these huggies off since they arrived." },
            { name: "Elena M.", review: "Beautiful packaging and stunning jewelry. The Amber Lace earrings get me compliments every time." },
            { name: "Jessica T.", review: "Finally found a brand that doesn't irritate my sensitive ears. The gold plating is incredibly durable." }
          ].map((testimonial, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="flex space-x-1 text-primary">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="italic font-heading text-lg max-w-sm">"{testimonial.review}"</p>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 bg-muted text-center flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-heading text-3xl mb-4">Join the Velmora Inner Circle</h2>
          <p className="text-muted-foreground mb-8">Enjoy 10% off your first order, early access to new collections, and exclusive editorial content.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-sm border focus:outline-none focus:ring-1 focus:ring-primary bg-background"
              required
            />
            <Button type="submit" className="h-auto py-3 px-8 rounded-sm tracking-widest uppercase shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
}
