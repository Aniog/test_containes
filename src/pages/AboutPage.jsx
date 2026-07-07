export default function AboutPage() {
  return (
    <div className="container-shell pb-16 pt-28 md:pb-24 md:pt-36">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="section-eyebrow">About Velmora</p>
          <h1 id="about-title" className="font-serif text-5xl leading-none text-velmora-noir md:text-7xl">
            Premium details. Everyday wearability.
          </h1>
          <p id="about-copy" className="max-w-xl text-base leading-8 text-velmora-espresso/78 md:text-lg">
            Velmora Fine Jewelry was imagined for women who move through full lives yet still want the ritual of putting on something beautiful. Our demi-fine pieces are designed to feel elevated, giftable, and unmistakably polished without becoming precious or unreachable.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['18K Gold Plated', 'Warm tone and lasting shine'],
              ['Hypoallergenic', 'Made for all-day comfort'],
              ['Gift-Ready', 'Signature packaging included'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.75rem] border border-velmora-espresso/10 bg-white/70 p-5 shadow-card">
                <h2 className="text-xs font-semibold uppercase tracking-luxe text-velmora-noir">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-velmora-espresso/75">{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-noir shadow-velvet">
          <img
            alt="About Velmora"
            className="min-h-[24rem] w-full object-cover"
            data-strk-img-id="about-page-image"
            data-strk-img="[about-copy] [about-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1673285743108-75abe80e7bc1"
          />
        </div>
      </section>
    </div>
  )
}
