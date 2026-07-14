const NewsletterBanner = () => (
  <section className="bg-velmora-gold text-velmora-ivory">
    <div className="container-shell grid gap-8 py-12 md:grid-cols-[1.1fr_auto] md:items-center">
      <div className="space-y-3">
        <p className="eyebrow-label text-velmora-ivory/75">Private notes</p>
        <h2 className="text-4xl leading-tight text-velmora-ivory md:text-5xl">Join for 10% off your first order</h2>
        <p className="max-w-xl text-sm leading-7 text-velmora-ivory/80">Receive first access to new drops, gifting edits, and the pieces our community keeps wearing on repeat.</p>
      </div>
      <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
        <input type="email" placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-velmora-ivory/25 bg-velmora-ivory/10 px-5 text-sm text-velmora-ivory placeholder:text-velmora-ivory/70 focus:outline-none focus:ring-2 focus:ring-velmora-ivory/60" />
        <button type="submit" className="inline-flex min-h-14 items-center justify-center rounded-full bg-velmora-ink px-6 text-sm font-medium uppercase tracking-[0.18em] text-velmora-ivory transition hover:bg-velmora-pearl hover:text-velmora-ink">Subscribe</button>
      </form>
    </div>
  </section>
)

export default NewsletterBanner
