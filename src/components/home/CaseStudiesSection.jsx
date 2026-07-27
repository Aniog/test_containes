import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import SectionHeader from '../site/SectionHeader'

function CaseStudiesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, sectionRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-brand-bg py-16 text-brand-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title="Typical sourcing situations we support"
          description="These examples show the kind of practical supplier, quality, production, and logistics work overseas buyers often need in China."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Homeware importer improved supplier screening case study" className="h-52 w-full object-cover" data-strk-img-id="case-homeware-relaunch-7c2f18" data-strk-img="[case-homeware-relaunch-desc] [case-homeware-relaunch-title] [case-studies-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="case-homeware-relaunch-title" className="text-xl font-semibold text-brand-navy">Homeware importer improved supplier screening</h3>
              <p id="case-homeware-relaunch-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">A European buyer needed a reliable factory for a new storage product line after inconsistent sample quality.</p>
              <div className="mt-5 rounded-2xl bg-brand-softBlue p-4 text-sm leading-6 text-brand-ink">
                <span className="font-semibold text-brand-navy">Support provided: </span>Shortlisted audited suppliers, compared tooling options, and set inspection checkpoints before shipment.
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Industrial parts buyer reduced production surprises case study" className="h-52 w-full object-cover" data-strk-img-id="case-industrial-component-4ea0b7" data-strk-img="[case-industrial-component-desc] [case-industrial-component-title] [case-studies-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="case-industrial-component-title" className="text-xl font-semibold text-brand-navy">Industrial parts buyer reduced production surprises</h3>
              <p id="case-industrial-component-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">An overseas distributor wanted closer follow-up during machining, surface treatment, and final packing.</p>
              <div className="mt-5 rounded-2xl bg-brand-softBlue p-4 text-sm leading-6 text-brand-ink">
                <span className="font-semibold text-brand-navy">Support provided: </span>Added production milestone checks and pre-shipment inspection with photo-based defect tracking.
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Retail packaging project aligned suppliers and freight case study" className="h-52 w-full object-cover" data-strk-img-id="case-retail-packaging-1d9f5a" data-strk-img="[case-retail-packaging-desc] [case-retail-packaging-title] [case-studies-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="800" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="case-retail-packaging-title" className="text-xl font-semibold text-brand-navy">Retail packaging project aligned suppliers and freight</h3>
              <p id="case-retail-packaging-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">A growing brand needed coordinated printing, carton labeling, and shipment handover for mixed SKUs.</p>
              <div className="mt-5 rounded-2xl bg-brand-softBlue p-4 text-sm leading-6 text-brand-ink">
                <span className="font-semibold text-brand-navy">Support provided: </span>Confirmed packaging specs, carton marks, document details, and pickup timing with the supplier team.
              </div>
            </div>
          </article>
        </div>
        <h2 id="case-studies-section-title" className="sr-only">Case Studies for China sourcing and quality control support</h2>
      </div>
    </section>
  )
}

export default CaseStudiesSection
