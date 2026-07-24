import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-brand-text">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-brand-accent mb-4">
            Join the Inner Circle
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="font-sans text-sm text-white/60 mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive drops, and members-only pricing.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/30 font-sans text-sm focus:outline-none focus:border-brand-accent transition-colors"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="font-sans text-[11px] text-white/30 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}