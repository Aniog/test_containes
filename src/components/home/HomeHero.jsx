import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStockImages } from '@/hooks/useStockImages'

export default function HomeHero() {
  const containerRef = useStockImages([])

  return (
    <section ref={containerRef} className="relative isolate min-h-[78vh] overflow-hidden bg-obsidian pt-20 text-porcelain sm:pt-24">
      <div
        className="absolute inset-0 opacity-70"
        data-strk-bg-id="hero-bg-velmora-a1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-obsidian/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />

      <div className="container-shell relative flex min-h-[78vh] items-end pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl space-y-6">
          <p className="eyebrow text-champagne">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="max-w-2xl font-serif text-5xl leading-none text-porcelain sm:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="max-w-xl text-base leading-7 text-porcelain/80 sm:text-lg">
            Quietly luminous demi-fine gold jewelry designed for gifting, self-purchase, and the rituals that stay with you.
          </p>
          <Link to="/shop" className="premium-button gap-2">
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
