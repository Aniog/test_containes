import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-28 lg:py-36 bg-am-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                alt="ARTITECT Machinery factory floor"
                className="w-full h-full object-cover"
                data-strk-img-id="about-factory-floor"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-am-bg/60 to-transparent" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel>About Us</SectionLabel>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-am-text mb-6"
            >
              Decades of Sheet Metal
              <span className="text-am-gold"> Expertise</span>
            </h2>
            <p
              id="about-subtitle"
              className="text-base md:text-lg text-am-muted leading-relaxed mb-6"
            >
              ARTITECT MACHINERY designs and manufactures world-class double
              folding machines, double folders, sheet metal folders, and metal
              folding machines for fabricators who demand reliability.
            </p>
            <p className="text-base text-am-muted leading-relaxed mb-8">
              Our engineers work closely with customers to refine every hinge,
              beam, and control interface. The result is machinery that feels
              intuitive from the first bend and stays accurate for years.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-extrabold text-am-gold">ISO</div>
                <div className="text-sm text-am-muted">9001 Certified</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-am-gold">CE</div>
                <div className="text-sm text-am-muted">Marked Machinery</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-am-gold">2Y</div>
                <div className="text-sm text-am-muted">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
