import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand/70 border border-gold/20 px-8 py-12 md:py-16 md:px-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Join Our Inner Circle</h2>
          <p className="mt-3 text-taupe text-sm md:text-base font-light max-w-md mx-auto">
            Subscribe for 10% off your first order, early access to new collections, and jewelry stories from our studio.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white border border-warm-border text-ink text-sm placeholder:text-taupe/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-hover text-white text-[11px] uppercase tracking-[0.2em] px-8 py-3.5 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="mt-4 text-[10px] text-taupe/60">
            Unsubscribe anytime. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}