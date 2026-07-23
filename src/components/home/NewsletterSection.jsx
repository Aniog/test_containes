export default function NewsletterSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--velmora-dark)' }}>
      <div className="velmora-container mx-auto px-4 text-center">
        <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          Join for 10% Off
        </h2>
        <p className="text-sm md:text-base mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Your first order, on us. Plus early access to new collections and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3.5 text-sm bg-transparent border outline-none placeholder:text-white/40"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
          />
          <button className="velmora-btn-accent whitespace-nowrap">
            Get 10% Off
          </button>
        </div>
        <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
