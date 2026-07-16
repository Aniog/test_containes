import { ArrowRight } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Newsletter() {
  const [sectionRef, visible] = useScrollAnimation();

  return (
    <section className="bg-velmora-text text-velmora-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className={`max-w-2xl mx-auto text-center reveal ${visible ? "visible" : ""}`}>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-bg font-light">
            Join for{" "}
            <span className="text-velmora-gold font-semibold">10% off</span>{" "}
            your first order
          </h2>
          <p className="font-sans text-sm md:text-base text-velmora-border/70 mt-4 leading-relaxed">
            Be the first to know about new collections, exclusive launches, and
            special offers. Plus, enjoy 10% off your first purchase.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 bg-velmora-bg/10 border border-velmora-border/30 text-velmora-bg font-sans text-sm placeholder:text-velmora-border/50 focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-velmora-gold text-white px-8 py-3 font-sans text-xs uppercase tracking-widest hover:bg-velmora-gold-hover transition-all duration-300 shrink-0"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="font-sans text-[11px] text-velmora-border/50 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any
            time.
          </p>
        </div>
      </div>
    </section>
  );
}