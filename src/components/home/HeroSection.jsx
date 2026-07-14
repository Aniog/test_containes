import LuxuryButton from '@/components/common/LuxuryButton.jsx'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-cream">
      <div
        className="absolute inset-0 scale-105 bg-velmora-espresso"
        data-strk-bg-id="velmora-hero-bg-a9f3c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/65 via-velmora-ink/45 to-velmora-ink/90" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-velmora-ink/85 via-velmora-ink/45 to-transparent" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-2xl animate-fade-up rounded-sm bg-velmora-ink/20 p-1 text-velmora-cream backdrop-blur-[1px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-luxury text-velmora-champagne">
            Demi-fine gold jewelry for luminous everyday rituals
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-velmora-cream sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-parchment sm:text-lg">
            Warm, enduring pieces in 18K gold plate—made to layer, gift, and keep close long after the moment passes.
          </p>
          <LuxuryButton to="/shop" className="mt-8 border-velmora-champagne bg-velmora-champagne text-velmora-ink hover:bg-velmora-cream">
            Shop the Collection
          </LuxuryButton>
        </div>
      </div>
    </section>
  )
}
