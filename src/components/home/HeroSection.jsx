import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { ArrowRight } from "lucide-react"
import { ButtonLink } from "@/components/ui/Buttons.jsx"
import strkImgConfig from "@/strk-img-config.json"

export default function HeroSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-cream">
      <div
        className="absolute inset-0 opacity-75"
        data-strk-bg-id="hero-gold-jewelry-model-b41c9d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-espresso/35 to-velmora-ink/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">
        <div className="max-w-3xl animate-fadeUp">
          <p className="mb-5 text-xs font-bold uppercase tracking-widerLuxe text-velmora-champagne">
            Demi-fine gold jewelry, made luminous
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] tracking-tight text-velmora-cream sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-linen sm:text-lg">
            Quietly radiant earrings, necklaces, and huggies for everyday rituals, modern gifting, and golden hours that linger.
          </p>
          <ButtonLink to="/shop" className="mt-9">
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
