import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-black/30"
        aria-hidden="true"
      >
        <img 
          src="https://images.unsplash.com/photo-1599643477873-1ef99464e86e?q=80&w=2070&auto=format&fit=crop"
          alt="Warm-lit close-up of gold jewelry on a model"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <h1 className="font-heading text-5xl md:text-7xl font-light mb-6 tracking-wide drop-shadow-sm max-w-3xl mx-auto leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto text-white/90">
          Demi-fine gold jewelry for your everyday edit. Quiet luxury designed to turn heads and capture hearts.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-sm tracking-widest uppercase font-medium rounded-none border border-transparent transition-all">
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>

    </section>
  );
}