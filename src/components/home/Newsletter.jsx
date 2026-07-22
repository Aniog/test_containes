export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-velmora-dark/60 text-xs tracking-widest uppercase mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide">
            Join for{" "}
            <span className="italic">10% Off</span> Your First Order
          </h2>
          <p className="text-velmora-dark/70 text-sm mt-4 leading-relaxed">
            Be the first to know about new collections, exclusive previews, and
            jewelry care tips. Plus, enjoy 10% off your first purchase.
          </p>

          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-white/90 text-velmora-dark placeholder:text-velmora-muted/60 text-sm border-0 outline-none focus:ring-2 focus:ring-velmora-dark/20 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-velmora-dark text-velmora-light text-sm uppercase tracking-wider px-8 py-3 font-medium hover:bg-velmora-dark/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}