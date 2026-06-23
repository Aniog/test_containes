import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'
import { CalendarDays, FileText, Camera, ShieldCheck, ClipboardCheck, Ship, MessageSquare } from 'lucide-react'

const STEPS = [
  {
    n: '01',
    title: 'Discovery call & brief',
    duration: 'Day 0–2',
    desc: 'We start with a 30-minute discovery call to align on product, target price, MOQ, target market and timeline. We sign a mutual NDA if required, then confirm scope, deliverables and fees in writing.',
    deliverables: ['Signed NDA (optional)', 'Scope & fees in writing', 'Project brief document'],
    imgId: 'how-step1-discovery-aa11bb',
  },
  {
    n: '02',
    title: 'Supplier search & shortlist',
    duration: 'Day 2–10',
    desc: 'We use a combination of long-standing factory relationships, on-site sourcing in trade markets, and verified directories to identify candidates. We compare 5–10 suppliers and shortlist 3–5 that match your spec.',
    deliverables: ['Supplier shortlist (3–5)', 'Normalized quotation table', 'Initial benchmark price'],
    imgId: 'how-step2-search-bb22cc',
  },
  {
    n: '03',
    title: 'Factory verification',
    duration: 'Day 7–14',
    desc: 'For shortlisted suppliers, we conduct a structured audit: business license, factory address, workshop, equipment, real production capacity and existing export references. You receive a written report with photos.',
    deliverables: ['On-site audit report', 'Photo evidence', 'Risk and capacity summary'],
    imgId: 'how-step3-audit-cc33dd',
  },
  {
    n: '04',
    title: 'Samples & negotiation',
    duration: 'Day 10–25',
    desc: 'We coordinate samples from selected suppliers and ship them to you in one consolidated parcel. In parallel, we negotiate price, MOQ, tooling, packaging, payment terms and lead times in Mandarin.',
    deliverables: ['Consolidated samples', 'Sample comparison sheet', 'Final supplier and contract terms'],
    imgId: 'how-step4-samples-dd44ee',
  },
  {
    n: '05',
    title: 'Production follow-up',
    duration: 'Production lead time',
    desc: 'Once the deposit is paid, we follow production with weekly written updates and on-site visits at critical milestones. Risks like raw material shortages, holidays or capacity conflicts are flagged early.',
    deliverables: ['Weekly status report', 'Milestone photos', 'Risk log and change orders'],
    imgId: 'how-step5-production-ee55ff',
  },
  {
    n: '06',
    title: 'Quality inspection',
    duration: 'Last 3–7 days of production',
    desc: 'We perform DUPRO during production and PSI before shipment using AQL 2.5 / 4.0 sampling. The QC team checks specs, packaging and function. The full inspection report is shared before final payment is released.',
    deliverables: ['DUPRO report', 'PSI report at AQL', 'Function / safety test photos'],
    imgId: 'how-step6-qc-ff66aa',
  },
  {
    n: '07',
    title: 'Shipping & delivery',
    duration: 'Booking + transit',
    desc: 'We arrange the booking, container loading supervision, customs documents and freight (sea, air, rail, express). For DDP, we coordinate import customs and last-mile delivery to your warehouse.',
    deliverables: ['Booking confirmation', 'Loading photos', 'Tracking + delivery handoff'],
    imgId: 'how-step7-shipping-aa77bb',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A 7-step process built around documentation, photos and on-site verification"
        description="Each step has a written deliverable. You always know where the project stands and what is coming next."
        breadcrumbs={[{ label: 'How It Works' }]}
      />

      <section ref={containerRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 lg:space-y-14">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-surface-2 rounded-2xl overflow-hidden border border-line">
                    <img
                      alt={s.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={s.imgId}
                      data-strk-img={`[how-${s.n}-title] sourcing process china factory`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand text-white font-bold">{s.n}</span>
                    <span className="inline-flex items-center gap-1.5 text-ink-soft">
                      <CalendarDays className="w-4 h-4" /> {s.duration}
                    </span>
                  </div>
                  <h2 id={`how-${s.n}-title`} className="mt-3 text-2xl sm:text-3xl font-bold text-brand leading-snug">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-ink-soft leading-relaxed">{s.desc}</p>

                  <div className="mt-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand mb-2">Deliverables</div>
                    <div className="flex flex-wrap gap-2">
                      {s.deliverables.map((d) => (
                        <span key={d} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface rounded-lg text-sm text-ink border border-line">
                          <FileText className="w-3.5 h-3.5 text-accent" /> {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: MessageSquare, label: 'Weekly written updates' },
              { icon: Camera, label: '100+ photos per QC' },
              { icon: ShieldCheck, label: 'AQL-based inspection' },
              { icon: Ship, label: 'Multi-incoterm shipping' },
            ].map((b) => (
              <div key={b.label} className="bg-surface rounded-xl p-5 flex items-center gap-3 border border-line">
                <b.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-brand">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold">
              Start your project — Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </section>

      <InquiryForm />
    </>
  )
}
