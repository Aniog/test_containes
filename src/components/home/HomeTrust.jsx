import { MapPin, Users2, FileCheck2, Languages, BadgeDollarSign, Lock } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const TRUST = [
  {
    icon: MapPin,
    title: 'On the ground in China',
    desc: 'Offices in Yiwu and Shenzhen with travel coverage of all major manufacturing clusters across the Yangtze and Pearl River deltas.',
  },
  {
    icon: Users2,
    title: 'Dedicated bilingual PM',
    desc: 'One project manager owns your account end-to-end and gives you written weekly updates in clear English.',
  },
  {
    icon: FileCheck2,
    title: 'Documented audit & QC',
    desc: 'Structured audit reports, AQL-based QC reports, and photo evidence for every milestone — not just verbal updates.',
  },
  {
    icon: Languages,
    title: 'Local-language negotiation',
    desc: 'Real Mandarin-speaking buyers negotiating with factories on your behalf, with clear escalation when something is off.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent fees',
    desc: 'Service fee or commission is agreed up front. We do not take hidden margins on factory invoices.',
  },
  {
    icon: Lock,
    title: 'NDA & IP-aware',
    desc: 'NDAs available on request. We work with factories that respect tooling ownership, molds and brand confidentiality.',
  },
]

export default function HomeTrust() {
  return (
    <section className="py-16 lg:py-24 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold uppercase tracking-wider">
            Why buyers work with us
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
            A practical partner — not just a contact in China
          </h2>
          <p className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed">
            Sourcing risk comes from missing visibility. We replace assumptions with documents, photos and on-site verification at every stage.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST.map((t) => (
            <div
              key={t.title}
              className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent/20 text-accent-2">
                <t.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-white text-lg">{t.title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
