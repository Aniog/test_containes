import { useRef } from 'react'
import { Link } from 'react-router-dom'
import EditorialImage from '@/components/common/EditorialImage'
import { useImageLoader } from '@/hooks/useImageLoader'

const HeroSection = () => {
  const sectionRef = useRef(null)
  useImageLoader(sectionRef, [])

  return (
    <section ref={sectionRef} className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold earrings and necklaces worn on a model with soft skin tones and editorial jewelry styling</p>
      <EditorialImage
        asBackground
        id="velmora-hero-model-bg-91d7a4"
        query="[hero-image-context] [hero-subtitle] [hero-title]"
        ratio="16x9"
        width="1800"
        alt="Warm-lit close-up of gold jewelry on a model"
        className="absolute inset-0 bg-cover bg-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/25 via-velmora-espresso/45 to-velmora-espresso/85" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-28 md:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine gold essentials</p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-velmora-ivory md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl font-sans text-base leading-8 text-velmora-champagne md:text-lg">
            Warm, luminous jewelry for gifting, self-purchase, and the everyday rituals that deserve a little gold.
          </p>
          <Link to="/shop" className="mt-9 inline-flex rounded-full bg-velmora-gold px-8 py-4 font-sans text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-glow transition hover:bg-velmora-champagne">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
