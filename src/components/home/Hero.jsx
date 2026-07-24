import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-black/40 z-10" 
          aria-hidden="true" 
        />
        <div 
          className="w-full h-full bg-cover bg-center"
          data-strk-bg-id="hero-bg-9a8b7c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center mt-16 md:mt-24">
        <h1 
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide drop-shadow-sm max-w-4xl mx-auto"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subtitle"
          className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-lg mx-auto font-light tracking-wide drop-shadow-sm"
        >
          Discover demi-fine jewelry designed for the modern woman. 
          Elegant, everyday pieces meant to last.
        </p>
        <Button 
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 rounded-none text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  );
}
