import { Link } from 'react-router-dom'
import BackgroundSlot from '@/components/common/BackgroundSlot.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry worn on a model with quiet luxury styling</p>
      <BackgroundSlot id="velmora-hero-model-bg" query="[hero-image-context] [hero-subhead] [hero-title]" ratio="16x9" width="1800" className="absolute inset-0 opacity-85" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/95 via-velmora-espresso/78 to-velmora-espresso/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/88 via-velmora-espresso/24 to-velmora-espresso/35" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:pb-24 lg:px-8">
        <div className="max-w-3xl animate-fade-up rounded-sm bg-velmora-espresso/70 p-5 text-velmora-ivory backdrop-blur-[2px] sm:p-7 md:bg-transparent md:p-0 md:backdrop-blur-0">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] !text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.92] !text-velmora-ivory sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
          <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 !text-velmora-ivory/90 sm:text-lg">Warm gold, luminous crystals, and sculptural essentials made for self-purchase, gifting, and every quiet ritual in between.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop" className="inline-flex items-center justify-center bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-gold">Shop the Collection</Link>
            <a href="#story" className="inline-flex items-center justify-center border border-velmora-ivory/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] !text-velmora-ivory transition hover:border-velmora-champagne hover:!text-velmora-champagne">Discover Velmora</a>
          </div>
        </div>
      </div>
    </section>
  )
}
