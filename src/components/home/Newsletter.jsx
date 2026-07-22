import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-velmora-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
            Join for <span className="font-semibold italic">10% off</span> your first order
          </h2>
          <p className="mt-3 text-sm text-velmora-400 font-sans">
            Be the first to know about new collections, exclusive drops, and early access.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-velmora-600 text-white placeholder:text-velmora-500 px-5 py-3.5 text-sm font-sans focus:outline-none focus:border-gold transition-colors rounded-sm"
              required
            />
            <button
              type="submit"
              className="bg-gold text-white px-6 py-3.5 text-sm font-sans font-medium tracking-wider uppercase hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 rounded-sm"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-4 text-xs text-velmora-500 font-sans">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}