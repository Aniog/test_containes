import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#221c1f] text-[#f6f0ea]">
      <div
        className="absolute inset-0 opacity-70"
        data-strk-bg-id="velmora-hero-bg-1a2b3c"
        data-strk-bg="[hero-image-brief] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,28,31,0.86)_0%,rgba(34,28,31,0.52)_50%,rgba(34,28,31,0.18)_100%)]" />
      <div className="relative mx-auto grid min-h-[88svh] max-w-7xl items-end px-5 pb-16 pt-28 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-20 lg:pt-32">
        <div className="max-w-2xl">
          <p id="hero-image-brief" className="sr-only">
            Warm-lit editorial close-up portrait of a woman wearing demi-fine gold earrings and a gold necklace in a luxury studio setting.
          </p>
          <p id="hero-kicker" className="mb-5 text-xs uppercase tracking-[0.34em] text-[#ddc6bb]">
            Demi-fine jewelry for gifting and self purchase
          </p>
          <h1
            id="hero-title"
            className="max-w-xl font-['Cormorant_Garamond'] text-5xl leading-none text-[#f6f0ea] md:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-lg text-base leading-7 text-[#efe3d6] md:text-lg"
          >
            Quietly luminous pieces in warm gold tones, designed to feel elevated every day and meaningful when given.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="rounded-full bg-[#b78b54] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.34em] text-[#221c1f] transition hover:bg-[#c99a5f]"
            >
              Shop the Collection
            </Link>
            <Link
              to="/product/golden-sphere-huggies"
              className="rounded-full border border-[#d9c7b7]/60 px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.34em] text-[#f6f0ea] transition hover:border-[#b78b54] hover:text-[#b78b54]"
            >
              Explore Bestsellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
