import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import SectionHeader from '@/components/shared/SectionHeader'
import CTAButton from '@/components/shared/CTAButton'
import { caseStudies } from '@/data/siteContent'
import strkImgConfig from '@/strk-img-config.json'

export default function CaseStudiesSection({ showCta = true }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 text-brand-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title="Examples of buyer-side sourcing coordination"
          description="These scenarios show how a China-based sourcing agent can reduce uncertainty during supplier selection, production, and shipment preparation."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
              <img
                className="h-48 w-full object-cover"
                alt={`${item.title} case study`}
                data-strk-img-id={`case-study-${index + 1}-factory-qc-shipping-4a73`}
                data-strk-img={`[case-outcome-${index + 1}] [case-challenge-${index + 1}] [case-title-${index + 1}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">{item.region}</p>
                <h3 id={`case-title-${index + 1}`} className="mt-2 text-xl font-semibold text-brand-navy">{item.title}</h3>
                <p id={`case-challenge-${index + 1}`} className="mt-4 text-sm leading-6 text-brand-muted"><strong className="text-brand-ink">Challenge:</strong> {item.challenge}</p>
                <p id={`case-outcome-${index + 1}`} className="mt-3 text-sm leading-6 text-brand-muted"><strong className="text-brand-ink">Support:</strong> {item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
        {showCta && (
          <div className="mt-10">
            <CTAButton href="/case-studies" variant="secondary">View Case Studies</CTAButton>
          </div>
        )}
      </div>
    </section>
  )
}
