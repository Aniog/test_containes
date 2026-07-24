export default function Newsletter() {
  return (
    <section className="bg-velmora-accent-light">
      <div className="max-w-7xl mx-auto section-padding py-20 md:py-28 text-center">
        <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-accent-deep mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-dark tracking-wide mb-4">
          Join for 10% off your first order
        </h2>
        <p className="font-sans text-sm text-velmora-body mb-10 max-w-md mx-auto leading-relaxed">
          New collections, restocks, and stories from our atelier — delivered to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 bg-white border border-velmora-border text-sm font-sans text-velmora-dark placeholder:text-velmora-subtle focus:outline-none focus:border-velmora-accent transition-colors"
          />
          <button type="submit" className="btn-accent text-xs tracking-widest uppercase whitespace-nowrap">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
