import AccentButton from '@/components/common/AccentButton'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function HeroSection() {
  const heroRef = useImageLoader([])

  return (
    <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden bg-velmora-bronze text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        data-strk-bg-id="velmora-hero-bg-f1c8a4"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/65 via-velmora-espresso/35 to-velmora-espresso/75" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] md:text-8xl lg:text-9xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-white/85 md:text-xl">Warm 18K gold plated essentials designed for modern rituals, meaningful gifts, and every softly lit moment in between.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <AccentButton to="/shop">Shop the Collection</AccentButton>
            <AccentButton to="/product/golden-sphere-huggies" variant="darkOutline">View bestsellers</AccentButton>
          </div>
        </div>
      </div>
    </section>
  )
}
