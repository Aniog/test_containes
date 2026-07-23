import { ButtonLink } from '../ui/Buttons.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-pearl">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75"
        data-strk-bg-id="velmora-hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/40 via-velmora-ink/30 to-velmora-ink/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-12 lg:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-velmora-sand">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] text-velmora-pearl md:text-8xl lg:text-9xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-sand md:text-lg">Warm, luminous pieces made for everyday rituals, milestone gifting, and the quiet confidence of gold against skin.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/shop">Shop the Collection</ButtonLink>
            <ButtonLink to="/product/golden-sphere-huggies" variant="outline" className="border-white/50 text-velmora-pearl hover:border-velmora-gold">Explore Huggies</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
