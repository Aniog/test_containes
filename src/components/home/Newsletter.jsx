export default function Newsletter() {
  return (
    <section className="py-16 md:py-20 bg-ink-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-gold-400 mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-light">
          Join for <span className="text-gold-400">10% Off</span> Your First Order
        </h2>
        <p className="mt-4 text-ink-400 text-sm font-sans max-w-sm mx-auto">
          Be the first to know about new collections, exclusive drops, and behind-the-scenes stories.
        </p>

        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-ink-800 border border-ink-700 text-cream-50 placeholder:text-ink-500 text-sm font-sans focus:outline-none focus:border-gold-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-gold-500 text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-gold-600 transition-all font-sans whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-[11px] text-ink-500 font-sans">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}