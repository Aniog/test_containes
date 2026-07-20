export default function Newsletter() {
  return (
    <section className="bg-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="serif-heading text-3xl md:text-4xl text-espresso mb-3">
            Join for 10% off your first order
          </h2>
          <p className="text-umber text-sm mb-8">
            Be the first to know about new collections, restocks, and exclusive offers.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-clay text-espresso placeholder:text-umber/60 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get 10% Off
            </button>
          </form>
          <p className="text-umber/60 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
