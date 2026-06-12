import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText,
  Boxes, Banknote, Plane, Container, FileSearch, ArrowRight, Check,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    summary: 'Find vetted manufacturers that match your specs, MOQ and budget.',
    bullets: [
      'Targeted supplier search across 50+ industrial clusters',
      'Shortlist of 3-5 candidates with comparable quotations',
      'Background and credit check on shortlisted factories',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    summary: 'On-site audit to confirm capacity, equipment and certifications.',
    bullets: [
      'Physical visit with photos, video walk-through and audit report',
      'Verification of business license, tax registration and export rights',
      'Capacity, workforce, machinery and quality system review',
    ],
  },
  {
    icon: FileSearch,
    title: 'Sample Management',
    summary: 'Centralized sampling, comparison and consolidated shipment.',
    bullets: [
      'Request and receive samples from multiple factories',
      'Photo and video review before international shipping',
      'Consolidate samples to reduce courier cost',
    ],
  },
  {
    icon: Banknote,
    title: 'Price Negotiation',
    summary: 'Transparent line-item negotiation in your name.',
    bullets: [
      'Detailed quotation breakdown: unit, packaging, tooling, MOQ',
      'Negotiate price, payment terms (T/T, L/C) and Incoterms',
      'Bilingual contract drafting and review',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    summary: 'AQL 2.5 inspections at every critical stage of production.',
    bullets: [
      'Pre-Production Inspection (PPI) of materials and components',
      'During Production Inspection (DUPRO) at 30-50% completion',
      'Pre-Shipment Inspection (PSI) with photo / video report',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    summary: 'Weekly milestone tracking from raw material to finished goods.',
    bullets: [
      'Weekly production updates with photos and video',
      'Risk flagging on delays, material shortages and quality drift',
      'Coordination of mid-production design or color changes',
    ],
  },
  {
    icon: Container,
    title: 'Shipping & Logistics',
    summary: 'Door-to-door coordination by sea, air, rail and express.',
    bullets: [
      'Quotations from audited freight forwarders',
      'Consolidation of multiple suppliers into one shipment',
      'Tracking from factory pickup to destination port',
    ],
  },
  {
    icon: FileText,
    title: 'Contracts & Documents',
    summary: 'Clean export documentation for smooth customs clearance.',
    bullets: [
      'Commercial Invoice, Packing List, Bill of Lading',
      'Certificate of Origin (CO), Form A, Form E, FTA documents',
      'Bilingual sales contracts and NDA',
    ],
  },
  {
    icon: Boxes,
    title: 'Warehousing & Consolidation',
    summary: 'Short-term storage and consolidation in our partner warehouse.',
    bullets: [
      'Free first 14 days, low daily fee after',
      'Repackaging, labeling and barcoding',
      'Consolidated FCL/LCL loading plan',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const cfg = await import('../strk-img-config.json')
        if (sdk?.ImageHelper?.loadImages && containerRef.current) {
          cleanup = sdk.ImageHelper.loadImages(cfg.default || cfg, containerRef.current)
        }
      } catch (e) { /* ignore */ }
    })()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for serious B2B importers"
        description="A modular service catalog. Pick the steps you need, or hand us the entire project from supplier search to final delivery."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDark text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Request a Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="bg-white border border-slate-200 rounded-lg p-7 hover:border-brand-blue hover:shadow-md transition flex flex-col"
                >
                  <div className="w-11 h-11 bg-blue-50 text-brand-blue rounded-md flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.summary}</p>
                  <ul className="space-y-2 text-sm text-slate-700 mt-auto">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-xl p-8 md:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Not sure which services you need?
              </h3>
              <p className="mt-2 text-slate-300">
                Tell us about your project and we will recommend the right scope.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDark text-white px-6 py-3 rounded-md font-semibold whitespace-nowrap"
            >
              Talk to a sourcing specialist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
