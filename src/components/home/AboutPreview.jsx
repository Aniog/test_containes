import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutPreview = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <p
            id="about-preview-eyebrow"
            className="text-xs uppercase tracking-[0.3em] text-bronze"
          >
            Our Workshop
          </p>
          <h2
            id="about-preview-title"
            className="mt-5 font-serif text-3xl md:text-5xl leading-tight text-ink"
          >
            Four decades of folding steel — quietly, accurately, beautifully.
          </h2>
          <p
            id="about-preview-desc"
            className="mt-6 text-base md:text-lg text-steel leading-relaxed"
          >
            ARTITECT MACHINERY was founded in 1986 in a small workshop in
            Modena, where a team of engineers and architects set out to build
            folding machines that earned their place in a workshop the same
            way a fine instrument earns its place on a stage.
          </p>
          <p className="mt-4 text-base md:text-lg text-steel leading-relaxed">
            Today, our double folders, sheet metal folders, and metal folding
            machines work on architectural façades, automotive prototypes, and
            quietly perfect kitchens in 42 countries.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-white transition-colors px-6 py-3 text-sm font-medium tracking-wide"
          >
            More about us
          </Link>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="aspect-[3/4] bg-mist overflow-hidden">
            <img
              alt="Artitect workshop"
              data-strk-img-id="about-preview-img-2f9a13"
              data-strk-img="[about-preview-desc] [about-preview-title] machinist workshop precision metal craftsmanship workshop interior"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
