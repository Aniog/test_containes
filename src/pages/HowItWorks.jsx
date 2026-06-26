import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, FileText, Search, MessageSquare, Package, Ship, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Tell Us What You Need',
    desc: 'Fill out our inquiry form or schedule a call. Share your product specs, target price, quantity, quality standards, and any certifications required.',
    details: [
      'Product description and specifications',
      'Target price range and budget',
      'Expected order volume and frequency',
      'Quality standards and certifications',
      'Preferred incoterms and destination',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'We Source & Verify',
    desc: 'Our team researches and shortlists 3-5 qualified suppliers. We then verify factory legitimacy through license checks, on-site or remote audits, and reference calls.',
    details: [
      'Market research and supplier identification',
      'Initial RFQ and quotation comparison',
      'Factory license and registration verification',
      'On-site or virtual factory audit',
      'Reference check with existing buyers',
    ],
  },
  {
    num: '03',
    icon: MessageSquare,
    title: 'Samples & Negotiation',
    desc: 'We coordinate sample production and shipping to you. Once samples are approved, we negotiate pricing, payment terms, lead time, and contract terms on your behalf.',
    details: [
      'Sample coordination and quality review',
      'Price negotiation for mass production',
      'Payment term optimization',
      'Contract and NDA review',
      'Purchase order preparation',
    ],
  },
  {
    num: '04',
    icon: Package,
    title: 'Order & Production',
    desc: 'After PO placement, we monitor production against milestones. Our inspectors conduct in-process and pre-shipment checks to ensure quality stays on track.',
    details: [
      'Deposit payment handling guidance',
      'Weekly production progress reports',
      'In-process quality inspections (DUPRO)',
      'Pre-shipment inspection (PSI) with photos',
      'Packing and labeling verification',
    ],
  },
  {
    num: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We arrange freight, prepare all export documents, and coordinate customs clearance. Your goods arrive at your warehouse or designated fulfillment center.',
    details: [
      'Freight forwarding arrangement (FCL / LCL / Air)',
      'Export documentation and customs support',
      'Container loading supervision',
      'Cargo tracking and status updates',
      'Final delivery to your door or 3PL',
    ],
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'After-Sales Support',
    desc: 'Our relationship does not end at delivery. We assist with warranty claims, reordering, supplier relationship management, and continuous improvement.',
    details: [
      'Delivery confirmation and feedback collection',
      'Defect analysis and corrective action',
      'Supplier performance scorecards',
      'Reorder facilitation and pricing review',
      'Ongoing sourcing strategy advice',
    ],
  },
]

const commitments = [
  'Transparent pricing with no hidden fees',
  'Bilingual project managers based in China',
  'Real-time reporting with photo and video evidence',
  'AQL-based inspection standards',
  'Flexible service packages for startups to enterprises',
]

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">How It Works</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              A proven six-step process that takes you from initial inquiry to delivered goods, with full visibility at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-12 md:space-y-16">
                {steps.map((step) => (
                  <div key={step.num} className="relative pl-16 md:pl-20">
                    <div className="absolute left-0 md:left-1 top-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-teal text-white flex items-center justify-center text-sm md:text-base font-bold shadow-sm z-10">
                      {step.num}
                    </div>
                    <div className="pt-1 md:pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="w-5 h-5 text-teal" />
                        <h2 className="text-xl md:text-2xl font-bold text-navy">{step.title}</h2>
                      </div>
                      <p className="text-text-muted leading-relaxed mb-4">{step.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-text-muted">
                            <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Commitment to You</h2>
              <p className="text-text-muted leading-relaxed mb-6">
                We treat your order as if it were our own. Our team is measured on outcomes, not activity, so you get results that matter.
              </p>
              <ul className="space-y-3">
                {commitments.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                className="aspect-[4/3] rounded-xl bg-white border border-border"
                data-strk-bg-id="howitworks-commitment-bg"
                data-strk-bg="[howitworks-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              >
                <span id="howitworks-title" className="sr-only">
                  Professional sourcing team in China factory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Share your product requirements and we will prepare a tailored sourcing plan for you within one business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-bold text-teal hover:bg-white/90 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
