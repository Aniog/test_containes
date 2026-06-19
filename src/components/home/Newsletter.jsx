import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 md:py-28 bg-gold relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-white" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-white/80 text-xs tracking-[0.2em] uppercase font-medium mb-3">
          Join the Circle
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
          Join for <span className="italic">10% Off</span>
        </h2>
        <p className="text-white/80 text-sm md:text-base mt-4 max-w-md mx-auto">
          Be the first to discover new collections, exclusive previews, and receive 10% off your first order.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-white/10 border border-white/30 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-white text-gold hover:bg-white/90 text-sm tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300"
          >
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <p className="text-white/50 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}