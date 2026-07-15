const Newsletter = () => {
  return (
    <section className="section-padding bg-velvet-base">
      <div className="container-wide text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-3">
          Join for 10% Off
        </h2>
        <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
          Your first order, plus early access to new collections and restocks.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white/5 border border-white/20 px-5 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-velvet-accent transition-colors"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Sign Up
          </button>
        </form>

        <p className="text-white/25 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
