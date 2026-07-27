import { TRUST_POINTS } from "@/data/site"
import SectionHeader from "@/components/ui/SectionHeader"

export default function TrustPoints() {
  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300 mb-3">
            Why buyers trust us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            An on-the-ground team you can rely on
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            We're based in China, we visit factories in person, and we report to
            you in plain language. No commissions hidden from you, no surprises
            at the port.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.id}
                className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8"
              >
                <Icon className="w-7 h-7 text-brand-300" />
                <p className="mt-4 text-3xl font-bold text-white">{point.stat}</p>
                <p className="mt-1 text-sm text-slate-300">{point.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
