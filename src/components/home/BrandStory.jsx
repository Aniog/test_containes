export default function BrandStory() {
  return (
    <section className="bg-velmora-champagne py-16 text-velmora-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative min-h-[460px] overflow-hidden bg-velmora-espresso shadow-editorial">
          <div
            className="absolute inset-0 bg-velmora-espresso"
            data-strk-bg-id="brand-story-bg-2e7f16"
            data-strk-bg="[brand-story-copy] [brand-story-title]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
        </div>
        <div className="max-w-xl lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-bronze">Our point of view</p>
          <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink md:text-6xl">Fine feeling, everyday ease.</h2>
          <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-taupe">Velmora began with the belief that the pieces you reach for every morning should feel as considered as heirlooms. We design demi-fine gold jewelry with warm finishes, thoughtful proportions, and gift-worthy details — without the traditional retail markup.</p>
          <a href="#" className="mt-8 inline-flex border-b border-velmora-gold pb-2 text-sm font-bold uppercase tracking-luxe text-velmora-ink transition hover:text-velmora-bronze">Our Story</a>
        </div>
      </div>
    </section>
  )
}
