import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-velmora-ink text-velmora-pearl">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-4fh28k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-ink/45" />
      <div className="relative page-shell flex min-h-[100svh] items-end py-24 md:py-32">
        <div className="max-w-2xl space-y-8 pb-10 md:pb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
            Premium Demi-Fine Jewelry
          </p>
          <div className="space-y-6">
            <h1 id="hero-title" className="font-heading text-6xl leading-[0.92] md:text-8xl">
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="max-w-xl text-base leading-8 text-velmora-pearl/85 md:text-lg"
            >
              Quietly luminous gold jewelry for everyday rituals, meaningful gifting,
              and the art of dressing with intention.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/shop" className="button-primary">
              Shop the Collection
            </Link>
            <p className="text-sm uppercase tracking-[0.24em] text-velmora-pearl/75">
              Bestsellers from $38
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
