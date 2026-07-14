import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button.jsx'

const HeroSection = () => (
  <section className="velmora-hero-surface relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-porcelain">
    <div
      className="absolute inset-0 opacity-75"
      data-strk-bg-id="hero-jewelry-model-9c4a2f"
      data-strk-bg="[hero-image-context] [hero-subhead] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1800"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/25 via-velmora-ink/35 to-velmora-ink/75" />
    <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28">
      <div className="max-w-3xl animate-fade-up">
        <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry on a model</p>
        <p className="velmora-hero-kicker mb-5 text-xs font-bold uppercase tracking-velmora text-velmora-champagne">Demi-fine gold jewelry</p>
        <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.94] text-velmora-porcelain sm:text-7xl lg:text-8xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subhead" className="velmora-hero-subtext mt-6 max-w-xl text-base leading-8 text-velmora-linen sm:text-lg">
          Warm gold essentials, sculptural huggies, and luminous accents designed for everyday rituals and unforgettable gifts.
        </p>
        <Button as={Link} to="/shop" variant="gold" className="velmora-hero-cta mt-9">
          Shop the Collection
        </Button>
      </div>
    </div>
  </section>
)

export default HeroSection
