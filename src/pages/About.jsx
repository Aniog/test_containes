import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  useEffect(() => {
    document.title = 'About Velmora Fine Jewelry'
  }, [])

  return (
    <div ref={containerRef} className="section-frame py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-3xl border border-line bg-sand">
          <img
            alt="About Velmora"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id="vel-about-hero-f74"
            data-strk-img="[about-copy] [about-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="About Velmora"
            title="A considered approach to modern demi-fine jewelry"
            description="We design with warmth, wearability, and gifting in mind — balancing an elevated point of view with a price that still feels like yes."
          />
          <p id="about-title" hidden aria-hidden="true">
            A considered approach to modern demi-fine jewelry.
          </p>
          <p id="about-copy" className="mt-8 text-base leading-8 text-taupe sm:text-lg">
            Every Velmora piece is imagined as part of a daily ritual: the earring you reach for without thinking, the necklace that softly catches candlelight, the set that makes gifting feel deeply personal. We focus on flattering proportions, warm finishes, and premium presentation so the full experience feels calm, polished, and quietly luxurious.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-button text-ink transition duration-300 hover:text-gold">
            Shop the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
