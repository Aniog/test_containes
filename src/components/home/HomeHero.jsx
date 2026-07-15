import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button.jsx'

export default function HomeHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-velmora-obsidian text-velmora-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-id="velmora-hero-bg-8f2a9c"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-obsidian/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-obsidian/20 via-velmora-obsidian/15 to-velmora-obsidian/80" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 sm:px-6 md:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
            Demi-fine gold jewelry for everyday rituals
          </p>
          <h1 id="hero-title" className="mt-6 font-serif text-6xl leading-[0.92] text-velmora-ivory sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-lg text-base leading-8 text-velmora-ivory/80 sm:text-lg">
            Warm-lit essentials in premium finishes — earrings, necklaces, and huggies designed to feel elevated from first wear.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button as={Link} to="/shop">
              Shop the Collection
            </Button>
            <Button as={Link} to="/about" variant="outline">
              Discover Velmora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
