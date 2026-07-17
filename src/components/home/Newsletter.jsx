import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-clay-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-cream-50 font-light tracking-wide">
          Join for 10% Off
        </h2>
        <p className="mt-3 text-sm text-cream-300 font-sans leading-relaxed">
          Be the first to discover new collections, exclusive previews, and
          receive 10% off your first order.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 bg-cream-50/10 border border-cream-400/30 text-cream-50 placeholder:text-cream-400/50 font-sans text-sm rounded-none focus:outline-none focus:border-cream-300 transition-colors"
          />
          <button
            type="submit"
            className="btn-primary bg-cream-50 text-clay-800 hover:bg-cream-100 tracking-widest text-xs whitespace-nowrap flex items-center gap-2"
          >
            Subscribe
            <ArrowRight className="w-3 h-3" />
          </button>
        </form>
      </div>
    </section>
  );
}