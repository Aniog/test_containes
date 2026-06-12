import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Eyebrow from '@/components/Eyebrow'

const HomeAbout = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] overflow-hidden bg-mist">
            <img
              alt="Workshop"
              data-strk-img-id="home-about-workshop-3a8b1c"
              data-strk-img="[home-about-desc] [home-about-title] precision metal workshop machinist craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-ink text-bone p-8 max-w-xs">
            <div className="font-serif text-5xl font-light leading-none mb-2">1978</div>
            <div className="text-xs tracking-[0.25em] uppercase text-bone/70">
              Founded in Stuttgart by master toolmaker H. Reinhardt
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow className="mb-6">Our Heritage</Eyebrow>
          <h2
            id="home-about-title"
            className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight mb-6"
          >
            Three generations of
            <span className="italic text-brass"> folded steel.</span>
          </h2>
          <p
            id="home-about-desc"
            className="text-steel leading-relaxed mb-5"
          >
            ARTITECT was born in a small Stuttgart workshop where Heinrich Reinhardt
            built the first folding machines for architectural sheet-metal work. Nearly
            half a century later, the same families still hand-fit our cast iron beams.
          </p>
          <p className="text-steel leading-relaxed mb-10">
            Every machine that leaves our floor carries the initials of the engineer who
            assembled it. It is, quite literally, a signature on your craft.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-ink border-b border-ink pb-1 hover:text-brass hover:border-brass transition-colors"
          >
            Read Our Story
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
