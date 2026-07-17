import { Link } from 'react-router-dom'
import Button from '@/components/common/Button.jsx'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-porcelain">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        data-strk-bg-id="home-hero-bg-7c41de"
        data-strk-bg="[hero-subhead] [hero-title] [hero-kicker]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/95 via-velmora-ink/76 to-velmora-ink/36" />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/54 via-transparent to-velmora-ink/90" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <p id="hero-kicker" className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">
            Demi-fine gold jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-6xl font-semibold leading-[0.92] tracking-tight text-velmora-porcelain sm:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-porcelain sm:text-lg">
            Warm, luminous pieces designed for the rituals of everyday dressing and the moments worth remembering.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop">
              <Button>Shop the Collection</Button>
            </Link>
            <a
              href="#bestsellers"
              className="inline-flex items-center justify-center rounded-full border border-velmora-porcelain/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-porcelain transition hover:border-velmora-champagne hover:text-velmora-champagne"
            >
              View Bestsellers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
