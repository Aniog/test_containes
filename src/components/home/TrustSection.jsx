import { Section, SectionHeader } from "@/components/ui/Section"
import { trustPoints } from "@/data/content"
import { Award, Globe2, ClipboardCheck, Clock } from "lucide-react"

const icons = [Award, Globe2, ClipboardCheck, Clock]

export function TrustSection() {
  return (
    <Section bg="white" id="trust">
      <SectionHeader
        eyebrow="Why buyers trust us"
        title="A track record you can verify"
        subtitle="Conservative numbers from real client projects over the past several years. We are happy to share case studies and references on request."
        align="center"
      />
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {trustPoints.map((t, i) => {
          const Icon = icons[i] || Award
          return (
            <div
              key={i}
              className="rounded-xl bg-slate-50 border border-slate-200 p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white border border-slate-200 text-navy-900">
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
                {t.stat}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-slate-700">
                {t.label}
              </p>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                {t.desc}
              </p>
            </div>
          )
        })}
      </div>

      {/* Trust badges row */}
      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 text-center">
          Practical compliance and quality references
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {[
            "AQL-based inspections (ANSI/ASQ Z1.4)",
            "BSCI / SEDEX social audits on request",
            "ISO 9001 / ISO 22716 supplier partners",
            "CE / UKCA / FCC / FDA coordination",
            "FBA prep per Amazon standards",
            "C-TPAT / AEO documentation support",
          ].map((b) => (
            <li
              key={b}
              className="px-3.5 py-2 rounded-md bg-white border border-slate-200 text-xs md:text-sm text-slate-700"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default TrustSection
