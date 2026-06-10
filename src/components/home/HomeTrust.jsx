import { MapPin, ShieldCheck, UserCheck, FileText, Scale, Lock } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading.jsx'
import { TRUST_POINTS, STATS } from '@/data/content.js'

const ICONS = {
  'map-pin': MapPin,
  'shield-check': ShieldCheck,
  'user-check': UserCheck,
  'file-text': FileText,
  scale: Scale,
  lock: Lock,
}

export default function HomeTrust() {
  return (
    <section className="section-pad bg-white" id="trust">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why buyers work with us"
          title="Six reasons overseas buyers choose SSourcing"
          description="A few of the practical things that make working with us different from working with the factory directly."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((t) => {
            const Icon = ICONS[t.icon] || ShieldCheck
            return (
              <div
                key={t.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-ink text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl bg-brand-ink px-6 py-8 text-white md:grid-cols-4 md:px-10 md:py-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-300 md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
