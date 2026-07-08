export default function NewsletterSection() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="bg-dark-900 p-8 md:p-16 text-center max-w-4xl mx-auto">
        <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold-400 mb-4">
          Stay in the Circle
        </p>
        <h2 className="heading-md text-cream-50 mb-4">
          Join for 10% Off Your First Order
        </h2>
        <p className="body-sm text-cream-400 mb-8 max-w-md mx-auto">
          Be the first to know about new arrivals, exclusive offers, and styling tips.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 bg-dark-800 border border-dark-600 text-cream-100 placeholder-dark-500 font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
