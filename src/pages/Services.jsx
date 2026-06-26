import PageHero from '../components/sections/PageHero'
import CtaBanner from '../components/sections/CtaBanner'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, PackageCheck, Ship, FileText, MessageSquare
} from 'lucide-react'

const detailedServices = [
  {
    icon: Search,
    title: 'Supplier sourcing',
    desc: 'We research factories from our verified network, B2B platforms (Alibaba, Global Sources, Made-in-China) and offline trade shows. We deliver a shortlist with capabilities, certifications, prices and a recommendation.',
    deliverables: [
      'Supplier shortlist (3–5 verified candidates)',
      'Capability and certification overview',
      'Initial quotation comparison',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory verification & audit',
    desc: 'We visit the factory in person, verify business license and registered scope, check production lines, equipment, workforce and quality system. Optional full social or technical audit.',
    deliverables: [
      'On-site audit with photos and video',
      'Business license & certification check',
      'Capacity and risk assessment',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Sample management',
    desc: 'We manage sample requests, technical specs, color and material approvals, and ship the samples to your office. We document every change to keep bulk production aligned with the approved sample.',
    deliverables: [
      'Sample sourcing and shipping',
      'Spec sheet and approval form',
      'Sample evaluation report',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Price negotiation',
    desc: 'We negotiate with factory owners in Chinese, push back on price, MOQ and payment terms, and structure the deal in your favor. We do not accept supplier kickbacks.',
    deliverables: [
      'Negotiated price and terms',
      'Recommended Incoterms (FOB/CIF/DDP)',
      'Payment milestone structure',
    ],
  },
  {
    icon: Factory,
    title: 'Production follow-up',
    desc: 'We follow the production schedule on the ground — raw material readiness, mass production start, packaging, labeling. You get a written status update every week.',
    deliverables: [
      'Weekly written status reports',
      'Production timeline tracking',
      'Issue escalation and resolution',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Quality inspection (QC)',
    desc: 'AQL-based inspections at three stages: initial production check (IPC), during-production (DUPRO) and pre-shipment (PSI). Photo and video reports with measurements and defect lists.',
    deliverables: [
      'IPC / DUPRO / PSI reports',
      'AQL 2.5 / 4.0 based sampling',
      'Pass / fail recommendation',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & logistics',
    desc: 'We coordinate sea (FCL/LCL), air and rail shipping, consolidation from multiple suppliers, export customs, and door-to-door delivery. You receive itemized freight quotes from multiple forwarders.',
    deliverables: [
      'Multi-forwarder quote comparison',
      'Booking, export and customs documents',
      'Tracking until destination',
    ],
  },
  {
    icon: FileText,
    title: 'Compliance & documentation',
    desc: 'We help arrange product testing, certifications and required export documents — CE, FCC, RoHS, FDA, CO and others — through accredited third-party labs.',
    deliverables: [
      'Testing & certification coordination',
      'Commercial invoice and packing list',
      'Certificate of origin if needed',
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end sourcing services in China"
        description="From the first supplier search to the final delivered shipment, you can use us for the entire journey or only for the stages where you need a local team."
        bgQuery="[services-page-title] manufacturing factory China"
        bgId="services-page-bg-3f4a12"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <h2 id="services-page-title" className="sr-only">Sourcing services in detail</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {detailedServices.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{s.desc}</p>
                <div className="mt-5 rounded-md bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Typical deliverables</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
