import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/site/SectionHeading'

const visualCards = [
  {
    id: 'supplier-visit',
    title: 'Supplier verification on the ground',
    description:
      'Shortlist validation, factory background checks, and early risk review before deeper commitment.',
    ratio: '4x3',
  },
  {
    id: 'qc-check',
    title: 'Quality checks before shipment',
    description:
      'Inspection coordination and clear reporting to help reduce avoidable quality surprises.',
    ratio: '4x3',
  },
  {
    id: 'shipping-coordination',
    title: 'Shipping readiness and handoff support',
    description:
      'Packing, labels, carton information, and readiness coordination aligned with your delivery plan.',
    ratio: '4x3',
  },
]

export default function VisualProofSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-white py-16 md:py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What execution looks like"
          title="Real sourcing work across verification, QC, and shipping coordination"
          description="The focus is practical execution in China: validating suppliers, monitoring quality, and helping overseas buyers stay informed."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {visualCards.map((card) => {
            const titleId = `visual-${card.id}-title`
            const descId = `visual-${card.id}-desc`

            return (
              <article key={card.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
                <img
                  alt={card.title}
                  className="h-64 w-full object-cover"
                  data-strk-img-id={`visual-${card.id}-n4c7p2`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio={card.ratio}
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <h3 id={titleId} className="text-xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p id={descId} className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    {card.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
