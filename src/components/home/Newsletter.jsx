import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="bg-nav-dark p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            Join for 10% Off Your First Order
          </h2>
          <p className="text-text-secondary font-sans text-sm md:text-base mb-8 max-w-md mx-auto">
            Be the first to know about new collections, exclusive drops, and members-only perks.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-text-secondary font-sans text-sm focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gold text-white uppercase tracking-widest text-sm px-8 py-3 font-sans transition-all duration-300 hover:bg-gold-hover inline-flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
