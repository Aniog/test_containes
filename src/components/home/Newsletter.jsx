export default function Newsletter() {
  return (
    <section className="py-20 md:py-28 bg-vel-deep">
      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
        <p className="font-serif italic text-vel-gold text-sm tracking-wider mb-3">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-4">
          Receive 10% Off Your First Order
        </h2>
        <p className="text-white/45 text-sm leading-relaxed max-w-md mx-auto mb-8">
          Early access to new collections, styling notes from our atelier, and
          members-only offers — delivered with the same care we put into every piece.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-vel-gold transition-colors"
          />
          <button className="bg-vel-gold hover:bg-vel-gold-hover text-white px-8 py-3 text-sm font-medium tracking-[0.1em] uppercase rounded-sm transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
