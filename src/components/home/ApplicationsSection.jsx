import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/ui/SectionHeading'

const applications = [
  {
    id: 'hvac',
    title: 'HVAC & Ductwork',
    description: 'Produce clean, consistent duct folds and flanges at high volume.',
    imgId: 'app-hvac-9a8b7c',
    titleId: 'app-hvac-title',
    descId: 'app-hvac-desc',
  },
  {
    id: 'construction',
    title: 'Construction & Roofing',
    description: 'Fold structural panels, flashing, and cladding with confidence.',
    imgId: 'app-construction-6d5e4f',
    titleId: 'app-construction-title',
    descId: 'app-construction-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive & Transport',
    description: 'Shape brackets, enclosures, and body components to tight tolerances.',
    imgId: 'app-automotive-3g2h1i',
    titleId: 'app-automotive-title',
    descId: 'app-automotive-desc',
  },
  {
    id: 'metalwork',
    title: 'Custom Metalwork',
    description: 'From prototypes to production runs, adapt quickly to any job.',
    imgId: 'app-metalwork-0j9k8l',
    titleId: 'app-metalwork-title',
    descId: 'app-metalwork-desc',
  },
]

export default function ApplicationsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="applications" ref={containerRef} className="py-20 md:py-28 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Applications"
          title="Trusted across industries"
          description="Our folding machines serve workshops, factories, and fabrication specialists around the world."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <article
              key={app.id}
              className="group relative rounded-lg overflow-hidden aspect-[3/4]"
            >
              <img
                alt={app.title}
                data-strk-img-id={app.imgId}
                data-strk-img={`[${app.descId}] [${app.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={app.titleId} className="text-xl font-bold text-white mb-2">
                  {app.title}
                </h3>
                <p id={app.descId} className="text-white/80 text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
