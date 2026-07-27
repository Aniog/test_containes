import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { problems } from '@/data/siteContent'
import strkImgConfig from '@/strk-img-config.json'

export default function ProblemsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 text-brand-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Problems we solve"
            title="Reduce uncertainty when buying from China"
            description="Sourcing is rarely about price alone. Buyers need supplier clarity, specification control, timely updates, and shipment readiness."
          />
          <div
            className="mt-8 min-h-[320px] rounded-3xl bg-cover bg-center shadow-soft"
            data-strk-bg-id="problems-factory-inspection-visual-1d82bc"
            data-strk-bg="[problems-visual-desc] [problems-visual-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
          <h3 id="problems-visual-title" className="sr-only">Factory inspection and production follow-up</h3>
          <p id="problems-visual-desc" className="sr-only">Quality control staff checking products, cartons, factory production line, and export shipment preparation</p>
        </div>
        <div className="rounded-3xl border border-brand-line bg-brand-mist p-6 text-brand-ink md:p-8">
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-white p-4 text-brand-ink shadow-sm">
            <AlertTriangle className="h-6 w-6 text-brand-amber" />
            <p className="font-semibold text-brand-navy">Common sourcing risks we help manage</p>
          </div>
          <div className="grid gap-4">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl bg-white p-4 text-brand-ink shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-blue" />
                <span className="text-sm leading-6 text-brand-muted">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
