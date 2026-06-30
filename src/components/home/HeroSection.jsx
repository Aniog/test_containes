import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,22,19,0.78)_0%,rgba(26,22,19,0.42)_45%,rgba(26,22,19,0.28)_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 sm:px-6 md:pb-24 lg:px-8">
        <div className="max-w-2xl">
          <p
            id="hero-subtitle"
            className="text-xs uppercase tracking-[0.4em] text-velmora-bronze-light"
          >
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-5xl leading-[0.92] text-velmora-ivory sm:text-6xl lg:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/78 sm:text-lg">
            Warm-lit demi-fine earrings, necklaces, and huggies designed to feel
            like a quiet luxury indulgence at an everyday-accessible price.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-velmora-bronze px-7 py-3.5 text-sm font-medium text-velmora-ivory transition duration-300 hover:bg-velmora-bronze-dark"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop?category=Gift%20Sets"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-velmora-ivory transition duration-300 hover:bg-white/10"
            >
              Explore Gift Sets
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
