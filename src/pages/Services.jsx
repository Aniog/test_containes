import PageHeader from '../components/PageHeader.jsx'
import ServicesSection from '../components/home/Services.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Boxes, Ship,
  FileSearch, Mail, Tag, PackageCheck,
} from 'lucide-react'

const DETAILS = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We build a competitive shortlist of 5-10 qualified Chinese manufacturers for your product. We compare them on price, MOQ, certifications, capacity, and export experience, and present you a written supplier matrix.',
    deliverables: ['Supplier shortlist matrix', 'Indicative FOB quotes', 'Capability summary per factory'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site visit to confirm the supplier is real. We check business license, ownership, workshop size, machinery, staff count and export history, and document everything with date-stamped photos.',
    deliverables: ['Audit checklist & risk score', 'Workshop photo report', 'Business license verification'],
  },
  {
    icon: Boxes,
    title: 'Sample Management',
    desc: 'We collect and consolidate samples from multiple factories, compare them side-by-side against your spec, and ship them safely to your office. We negotiate sample revisions until you sign off.',
    deliverables: ['Consolidated sample shipment', 'Comparison sheet vs. spec', 'Sample approval workflow'],
  },
  {
    icon: Tag,
    title: 'Price Negotiation',
    desc: 'We negotiate in Chinese on your behalf based on real cost drivers: raw material, mould, labour, packaging and freight. Our goal is a fair price that still keeps the supplier motivated to deliver well.',
    deliverables: ['Negotiated FOB price', 'Cost breakdown', 'Written quotation and terms'],
  },
  {
    icon: FileSearch,
    title: 'Contract & PO Support',
    desc: 'We help you sign a clear bilingual contract and purchase order with the supplier, covering specifications, MOQ, payment terms, lead time, packaging, and remedies if quality fails.',
    deliverables: ['Bilingual contract draft', 'PO with specs annex', 'Payment milestones'],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly progress reports from raw materials to packing. We attend critical milestones on-site, photograph WIP, and alert you to delays or material substitutions before they affect your shipment.',
    deliverables: ['Weekly status report', 'WIP photos / video', 'Delay alerts & mitigation plan'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'AQL pre-shipment inspection (or during production) by trained inspectors. We test function, dimensions, packaging, labelling and barcodes, and only release shipment when results meet the agreed AQL.',
    deliverables: ['AQL inspection report', 'Photo and video evidence', 'Pass / Hold / Fail decision'],
  },
  {
    icon: PackageCheck,
    title: 'Private Label / OEM',
    desc: 'For private-label projects, we manage tooling, packaging design, certifications (CE, FCC, UL when applicable) and brand-protection details so your product looks and feels truly yours.',
    deliverables: ['Tooling & mould coordination', 'Custom packaging files', 'Certification handling'],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'We book sea, air or rail freight via trusted forwarders, consolidate multiple suppliers into one container, and handle export customs. We can quote FOB, CIF or DDP to suit your accounting.',
    deliverables: ['Freight quotes (FOB/CIF/DDP)', 'Consolidation & loading photos', 'Tracking and ETA updates'],
  },
  {
    icon: Mail,
    title: 'Ongoing Account Management',
    desc: 'For repeat buyers, we maintain a private supplier database, document your specs and bills of materials, and run reorders with minimal back-and-forth. Lead times get shorter with each cycle.',
    deliverables: ['Supplier & spec library', 'Reorder automation', 'Quarterly performance review'],
  },
]

export default function ServicesPage() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for serious buyers"
        subtitle="From the first supplier search to the final container, every step is owned by one English-speaking project manager and documented in writing."
        crumbs={[{ label: 'Services' }]}
      />

      <ServicesSection />

      <section ref={ref} className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p id="svc-detail-eyebrow" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">Service Details</p>
            <h2 id="svc-detail-title" className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
              What's included in each service
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Buy individual services or combine them into a full end-to-end engagement. Every project starts
              with a clear scope and a fixed fee.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:gap-8 md:grid-cols-2">
            {DETAILS.map((d) => {
              const Icon = d.icon
              return (
                <article key={d.title} className="rounded-xl border border-slate-200 bg-white p-6 lg:p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#0B2545] text-white shrink-0">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#0B2545]">{d.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d.desc}</p>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Deliverables</p>
                        <ul className="mt-2 grid gap-1.5">
                          {d.deliverables.map((dlv) => (
                            <li key={dlv} className="text-sm text-slate-700 flex items-start gap-2">
                              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#E63946] shrink-0" />
                              {dlv}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
