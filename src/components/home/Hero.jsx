import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-velmora-espresso">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(28,24,21,0.2), rgba(28,24,21,0.5)), url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 animate-fade-in text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
          New Arrivals
        </p>
        <h1 className="animate-slide-up font-serif text-5xl font-medium leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-md animate-slide-up text-sm leading-relaxed text-velmora-sand/90 sm:text-base">
          Demi-fine gold jewelry for everyday moments and forever keepsakes. Designed in limited batches.
        </p>
        <div className="mt-8 animate-slide-up">
          <Button asChild className="bg-velmora-accent px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-velmora-charcoal">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
