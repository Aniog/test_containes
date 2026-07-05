function AboutPage() {
  return (
    <section className="page-shell pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center lg:gap-16">
        <div className="overflow-hidden rounded-panel bg-velmora-espresso shadow-soft">
          <div className="aspect-[4/5]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="About Velmora"
              className="h-full w-full object-cover"
              data-strk-img-id="about-hero-image"
              data-strk-img="[about-kicker] [about-title] [about-copy]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
            />
          </div>
        </div>
        <div>
          <p id="about-kicker" className="text-xs uppercase tracking-overline text-velmora-taupe">About Velmora</p>
          <h1 id="about-title" className="mt-4 font-display text-5xl leading-none text-velmora-espresso sm:text-6xl">
            Premium feeling, intentionally accessible
          </h1>
          <p id="about-copy" className="mt-6 text-base leading-8 text-velmora-taupe">
            Velmora Fine Jewelry was created for women who want pieces that feel editorial, giftable, and quietly luxurious without needing a special occasion. Our collections balance sculptural shapes, warm plated finishes, and thoughtful packaging so each order arrives ready to be worn or shared.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-panel border border-velmora-line bg-white p-5 shadow-card">
              <p className="text-xs uppercase tracking-overline text-velmora-taupe">Materials</p>
              <p className="mt-3 text-sm leading-7 text-velmora-ink">
                18K gold plated finishes, hypoallergenic touches, and curated crystal details.
              </p>
            </div>
            <div className="rounded-panel border border-velmora-line bg-white p-5 shadow-card">
              <p className="text-xs uppercase tracking-overline text-velmora-taupe">Packaging</p>
              <p className="mt-3 text-sm leading-7 text-velmora-ink">
                Signature keepsake boxes and pouches designed for gifting from the moment they arrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
