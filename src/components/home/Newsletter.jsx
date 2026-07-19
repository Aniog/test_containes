const Newsletter = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-brand-ink px-6 py-12 md:px-12 md:py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-white">Join for 10% off your first order</h2>
        <p className="mt-3 text-sm text-white/70">Be the first to know about new releases, stories, and exclusive offers.</p>
        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full sm:w-80 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-accentLight"
          />
          <button type="submit" className="w-full sm:w-auto rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold tracking-wide text-white hover:bg-brand-accentLight transition-colors">
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-[11px] text-white/50">By subscribing, you agree to our Privacy Policy.</p>
      </div>
    </section>
  );
};

export default Newsletter;
