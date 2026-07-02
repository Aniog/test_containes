import StockImage from '../common/StockImage.jsx'

const HeroSection = () => (
  <section id="home" className="relative min-h-[92vh] overflow-hidden bg-velmora-forest text-velmora-cream">
    <StockImage
      as="div"
      id="hero-bg-gold-jewelry-model-a9f3kx"
      query="[hero-image-context] [hero-subtitle] [hero-title]"
      ratio="16x9"
      width="1800"
      className="absolute inset-0 bg-cover bg-center opacity-75 animate-slow-drift"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/75 via-velmora-forest/35 to-velmora-ink/85" />
    <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/80 via-velmora-ink/35 to-transparent" />
    <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:pb-20 lg:px-10 lg:pb-24">
      <div className="max-w-3xl animate-fade-up">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine gold jewelry</p>
        <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.92] text-velmora-cream sm:text-7xl lg:text-8xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-2xl text-base leading-8 text-velmora-ivory/90 sm:text-lg">
          Warm gold essentials, sculptural huggies, and luminous gift pieces designed for the rituals you keep close.
        </p>
        <p id="hero-image-context" className="sr-only" aria-hidden="true">Warm-lit editorial close-up of a woman model wearing delicate gold earrings and necklace quiet luxury jewelry</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#bestsellers" className="inline-flex items-center justify-center rounded-full bg-velmora-gold px-8 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:bg-velmora-champagne">
            Shop the Collection
          </a>
          <a href="#story" className="inline-flex items-center justify-center rounded-full border border-velmora-champagne/70 px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-cream transition hover:border-velmora-gold hover:bg-velmora-cream/10">
            Our Story
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
