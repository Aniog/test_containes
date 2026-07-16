import { Link } from 'react-router-dom'

export default function HeroFresh() {
  return (
    <section className="velmora-hero relative min-h-[92vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        data-strk-bg-id="velmora-hero-bg-a43f91"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="velmora-hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:pb-24 lg:px-10">
        <div className="velmora-hero-copy max-w-3xl animate-fade-up">
          <p className="velmora-kicker mb-5 text-xs font-semibold uppercase tracking-[0.34em]" style={{ color: '#D6AF72' }}>Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="velmora-hero-title font-serif text-6xl font-medium leading-[0.92] tracking-tight sm:text-7xl md:text-8xl" style={{ color: '#F8F1E8', textShadow: '0 2px 22px rgb(0 0 0 / 0.45)' }}>
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="velmora-hero-subtitle mt-6 max-w-xl text-base leading-8 sm:text-lg" style={{ color: 'rgb(248 241 232 / 0.92)', textShadow: '0 1px 14px rgb(0 0 0 / 0.35)' }}>
            Warm, luminous pieces designed for self-purchase, modern gifting, and the quiet ceremony of everyday adornment.
          </p>
          <Link
            to="/shop"
            className="velmora-hero-cta mt-9 inline-flex h-14 items-center justify-center rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.26em] transition duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: '#C79B5A', color: '#211915' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
