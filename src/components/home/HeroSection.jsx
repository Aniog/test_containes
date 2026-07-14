import { Link } from 'react-router-dom'
import { imagePlaceholder } from '@/lib/imagePlaceholder'

const HeroSection = () => (
  <section className="relative min-h-[88vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
    <img
      className="absolute inset-0 h-full w-full object-cover opacity-75"
      alt="Model wearing gold jewelry in warm editorial light"
      data-strk-img-id="velmora-hero-model-jewelry-64f2bd"
      data-strk-img="[hero-image-context]"
      data-strk-img-ratio="16x9"
      data-strk-img-width="1800"
      src={imagePlaceholder}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/55 via-velmora-ink/45 to-velmora-ink/85" />
    <div className="absolute inset-y-0 left-0 hidden w-2/3 bg-gradient-to-r from-velmora-ink/70 via-velmora-ink/35 to-transparent lg:block" />
    <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28">
      <div className="max-w-2xl animate-fadeUp">
        <p id="hero-eyebrow" className="mb-5 text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-champagne">Demi-fine gold jewelry</p>
        <span id="hero-image-context" className="sr-only">Close up woman model wearing gold hoop earrings and layered gold necklace warm editorial jewelry portrait</span>
        <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-ivory/85 sm:text-lg">
          Warm, quietly luminous pieces for everyday rituals, unforgettable gifting, and the moments you keep close.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-flex bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-luxe text-velmora-ink shadow-editorial transition hover:-translate-y-0.5 hover:bg-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  </section>
)

export default HeroSection
