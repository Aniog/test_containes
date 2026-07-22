import { Link } from 'react-router-dom'

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-ivory">
    <img
      alt="Warm-lit gold jewelry on a model"
      className="absolute inset-0 h-full w-full object-cover opacity-75"
      data-strk-img-id="hero-gold-jewelry-closeup-model-vm10c"
      data-strk-img="[hero-image-context] [hero-subtitle] [hero-title]"
      data-strk-img-ratio="16x9"
      data-strk-img-width="1800"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-ink/30 to-velmora-ink/80" />
    <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <span id="hero-image-context" className="sr-only">Warm-lit close-up of gold earrings and necklaces worn by a model, editorial demi-fine jewelry campaign</span>
      <div className="max-w-3xl animate-fade-up">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-velmora-champagne">Demi-fine gold jewelry</p>
        <h1 id="hero-title" className="font-serif text-6xl leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-blush sm:text-lg">
          Warm, luminous pieces for everyday ceremony — designed for gifting, self-purchase, and the quiet confidence between.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-flex rounded-full bg-velmora-champagne px-8 py-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink shadow-soft transition hover:bg-velmora-gold"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  </section>
)

export default Hero
