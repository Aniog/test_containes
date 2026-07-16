import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-velmora-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        <p className="text-velmora-gold-light text-xs tracking-[0.25em] uppercase font-sans font-medium mb-3">
          Newsletter
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
          Join for 10% Off
        </h2>
        <p className="text-sm sm:text-base text-velmora-taupe-light mt-4 font-sans max-w-sm mx-auto">
          Be the first to know about new collections, exclusive drops, and
          behind-the-scenes stories.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border border-velmora-taupe/40 text-white placeholder:text-velmora-taupe-light/60 px-5 py-3.5 text-sm font-sans outline-none focus:border-velmora-gold transition-colors"
          />
          <button
            type="submit"
            className="group bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-3.5 text-sm tracking-widest uppercase font-sans font-medium flex items-center justify-center gap-2 transition-all duration-300"
          >
            Subscribe
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        <p className="text-xs text-velmora-taupe-light/60 mt-4 font-sans">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}