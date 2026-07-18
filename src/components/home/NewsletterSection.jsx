export default function NewsletterSection() {
  return (
    <section className="py-16 md:py-20 bg-foreground text-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="serif-heading text-3xl md:text-4xl font-light mb-3">Join the Velmora World</h2>
        <p className="text-muted-foreground/60 mb-8">Subscribe for exclusive access, styling tips, and 10% off your first order</p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-background/10 border border-background/20 text-background placeholder:text-muted-foreground/40 px-5 py-3.5 text-sm focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-xs tracking-widest uppercase hover:bg-opacity-90 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-muted-foreground/40 mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
