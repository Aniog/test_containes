import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-velvet-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold-400 mb-4">
          Join Our Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 leading-tight mb-4">
          Join for <span className="text-gold-400">10% Off</span> Your First Order
        </h2>
        <p className="text-sm text-velvet-300 mb-8 max-w-md mx-auto">
          Be the first to know about new collections, exclusive drops, and early access — plus 10% off your first purchase.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-velvet-900 border border-velvet-700 text-cream-50 placeholder:text-velvet-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
            required
          />
          <button
            type="submit"
            className="btn-primary px-8 py-3 whitespace-nowrap flex items-center justify-center gap-2"
          >
            Subscribe <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}