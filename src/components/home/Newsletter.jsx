import { Mail, ArrowRight } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-16 lg:py-20 bg-midnight-900">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Mail size={24} className="text-gold-400 mx-auto mb-4" />
        <h2 className="font-serif text-3xl lg:text-4xl text-white mb-2">
          Join Our Inner Circle
        </h2>
        <p className="text-sm text-velvet-300 mb-6 max-w-md mx-auto">
          Be the first to discover new arrivals, exclusive drops, and enjoy
          <span className="text-gold-300 font-medium"> 10% off</span> your first
          order.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/10 border border-velvet-700 text-white text-sm placeholder:text-velvet-500 focus:outline-none focus:border-gold-400 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gold-500 text-white text-xs tracking-widest uppercase hover:bg-gold-600 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Subscribe
            <ArrowRight size={14} />
          </button>
        </form>
        <p className="text-[10px] text-velvet-500 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}