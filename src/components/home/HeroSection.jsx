import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a91c2"
        data-strk-bg="[hero-subhead] [hero-heading]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-hero-fade" />

      <div className="page-shell relative flex min-h-screen items-end pb-20 pt-36 md:pb-24 md:pt-44">
        <div className="max-w-2xl">
          <p className="eyebrow text-white/70">Velmora Fine Jewelry</p>
          <h1 id="hero-heading" className="mt-6 font-display text-5xl leading-[0.9] text-white md:text-7xl">
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg"
          >
            Premium demi-fine jewelry designed for self-purchase, soft gifting,
            and the rituals that make getting dressed feel quietly elevated.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/shop" className="luxe-button">
              Shop the Collection
            </Link>
            <Link
              to="/#story"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 ease-luxe hover:-translate-y-0.5 hover:bg-white/10"
            >
              Discover the Brand
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
