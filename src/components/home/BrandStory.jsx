import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowUpRight } from 'lucide-react'

export default function BrandStory() {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div
              className="relative w-full aspect-[4/5] overflow-hidden bg-cream"
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="[brand-story-subtitle] [brand-story-title] gold jewelry editorial atelier warm light"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1200"
            />
          </div>

          <div className="md:col-span-6">
            <span className="eyebrow">Our atelier</span>
            <h2
              id="brand-story-title"
              className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
            >
              Made slowly,<br />
              <span className="italic font-light text-espresso-soft">
                worn forever.
              </span>
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-6 text-base md:text-lg text-espresso-soft font-light leading-relaxed max-w-md"
            >
              Every Velmora piece begins as a sketch in our Paris atelier. We
              work in small batches with family-run foundries in Arezzo,
              hand-finishing each casting in 18K gold plate. Nothing mass.
              Nothing hurried.
            </p>
            <p className="mt-4 text-sm text-taupe max-w-md leading-relaxed">
              We design for the everyday. The pieces that catch the morning
              light, that get packed without thinking, that become a quiet
              part of you.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 font-medium text-espresso border-b border-espresso hover:text-gold hover:border-gold pb-1 transition-colors"
            >
              Our story
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
