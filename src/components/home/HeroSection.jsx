import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso text-velmora-pearl">
      <div
        id="hero-image-brief"
        aria-hidden="true"
        className="pointer-events-none absolute h-px w-px overflow-hidden whitespace-nowrap opacity-0"
      >
        Luxury fine jewelry campaign close-up of a woman model wearing gold earrings and a delicate gold necklace in warm moody light on neutral silk with no packaging or printed cards.
      </div>
      <div
        className="absolute inset-0 opacity-90"
        data-strk-bg-id="velmora-hero-bg-f94a72"
        data-strk-bg="[hero-image-brief] [hero-subtitle] [hero-title] [hero-kicker]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/95 via-velmora-espresso/75 to-velmora-espresso/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-velmora-espresso/25" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl animate-fadeUp">
          <p id="hero-kicker" className="text-xs font-bold uppercase tracking-nav text-velmora-champagne">Warm gold jewelry, worn close</p>
          <h1 id="hero-title" className="mt-5 font-serif text-6xl font-semibold leading-[0.92] text-velmora-pearl sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory sm:text-lg">
            Warm, luminous pieces made for everyday rituals, meaningful gifts, and the quiet confidence of self-purchase.
          </p>
          <Link to="/shop" className="mt-9 inline-flex rounded-full bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-nav text-velmora-espresso shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-pearl">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
