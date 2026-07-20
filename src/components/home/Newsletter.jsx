import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="py-16 lg:py-24 bg-dark-900">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-xs tracking-widest uppercase text-gold-400 font-medium">Stay Connected</span>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mt-3 leading-tight">
          Join for 10% Off<br />Your First Order
        </h2>
        <p className="text-dark-400 text-sm mt-4 mb-8 max-w-sm mx-auto leading-relaxed">
          Be the first to discover new collections, exclusive previews, and jewelry stories — delivered to your inbox.
        </p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-dark-800 border border-dark-700 px-5 py-3.5 text-sm text-cream-50 placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors"
          />
          <button className="bg-gold-500 text-dark-900 px-6 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-gold-400 transition-colors flex items-center gap-2 whitespace-nowrap">
            Subscribe
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  )
}