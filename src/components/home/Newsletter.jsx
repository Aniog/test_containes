const Newsletter = () => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--velmora-dark)] text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="velmora-serif text-3xl sm:text-4xl mb-3">Join for 10% Off</h2>
        <p className="text-white/60 text-sm mb-8">
          Subscribe to receive exclusive access to new collections, styling tips, and 10% off your first order.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--velmora-accent)]"
          />
          <button className="velmora-btn-accent whitespace-nowrap">
            Subscribe
          </button>
        </div>
        <p className="text-white/30 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
