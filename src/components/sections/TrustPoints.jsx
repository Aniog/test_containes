import { ShieldCheck, Users, MapPin, FileCheck2, Clock, ScrollText } from 'lucide-react'

const POINTS = [
  {
    icon: MapPin,
    title: 'Based in China, not remote',
    desc: 'Our team is on the ground in Yiwu, Shenzhen and Ningbo — close to the factories we work with.',
  },
  {
    icon: ShieldCheck,
    title: 'Independent and buyer-side',
    desc: 'We earn a transparent sourcing fee from you. We do not take hidden commissions from suppliers.',
  },
  {
    icon: Users,
    title: 'Bilingual project managers',
    desc: 'You get one English-speaking point of contact who owns your project end-to-end.',
  },
  {
    icon: FileCheck2,
    title: 'Documented verification & QC',
    desc: 'Every factory check and inspection comes as a written report with photos, video and a clear pass/fail.',
  },
  {
    icon: Clock,
    title: 'Fast response',
    desc: 'Replies within one business day on email and WhatsApp. Weekly updates during production.',
  },
  {
    icon: ScrollText,
    title: 'NDA & IP awareness',
    desc: 'We sign NDAs on request and work carefully with confidential designs and unique product ideas.',
  },
]

export default function TrustPoints() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
            Why buyers work with us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Practical, transparent, and on the ground
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
