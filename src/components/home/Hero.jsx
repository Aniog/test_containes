import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
      <div
        className="absolute inset-0 bg-velmora-espresso"
        data-strk-bg-id="velmora-hero-bg-64ab21"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-ink/25 to-velmora-ink/75" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:pb-24 lg:px-10">
        <div className="max-w-3xl animate-fadeUp">
          <p className="mb-5 text-xs font-bold uppercase tracking-widerluxe text-velmora-gold">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">Warm, refined pieces in 18K gold plating designed for the everyday ritual of feeling beautifully put together.</p>
          <Link to="/shop" className="mt-9 inline-flex bg-velmora-gold px-8 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-ivory">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
