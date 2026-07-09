export default function NewsletterRow() {
  return (
    <section className="py-24 bg-accent text-accent-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Velmora Community</h2>
        <p className="mb-8 font-serif text-lg opacity-90">
          Sign up to receive 10% off your first order, plus exclusive access to new launches.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
            required
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-white text-accent uppercase tracking-widest text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
