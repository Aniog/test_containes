import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { placeholderSvg } from '@/data/products'
import PremiumButton from '@/components/common/PremiumButton'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory lg:min-h-hero">
      <img
        alt="Gold jewelry worn in warm editorial light"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        data-strk-img-id="velmora-hero-jewelry-model-a41fd2"
        data-strk-img="[hero-subtitle] [hero-title]"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1800"
        src={placeholderSvg}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-ink/25 to-velmora-ink/70" />
      <div className="velmora-container relative flex min-h-[92vh] items-end pb-16 pt-32 lg:min-h-hero lg:pb-24">
        <div className="max-w-2xl animate-rise">
          <p className="mb-5 text-xs font-semibold uppercase tracking-nav text-velmora-linen">Demi-fine gold jewelry for the everyday heirloom</p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-linen sm:text-lg">
            Warm gold, luminous crystals, and quietly sculptural shapes designed for gifting, self-purchase, and every day in between.
          </p>
          <Link to="/shop" className="mt-8 inline-flex">
            <PremiumButton className="gap-3 px-7 py-4">Shop the Collection <ArrowRight className="h-4 w-4" /></PremiumButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
