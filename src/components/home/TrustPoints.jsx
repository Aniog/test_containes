import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import { trustPoints } from "@/data/trust.js"

const iconById = {
  independent: "ShieldCheck",
  "on-the-ground": "Factory",
  english: "Globe2",
  transparency: "ClipboardCheck",
  quality: "BadgeDollarSign",
  compliance: "FileCheck2",
}

export default function TrustPoints() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why SSourcing"
        title="An independent partner — not a trading company"
        description="Six things we do (or deliberately don't do) that keep the relationship transparent and the outcomes predictable."
        align="center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {trustPoints.map((t, idx) => (
          <div
            key={t.id}
            className="card p-6 md:p-7"
          >
            <div className="flex items-center gap-3">
              <span className="text-brand-800 font-bold text-sm">
                0{idx + 1}
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <h3 className="h-card mt-4">{t.title}</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {t.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
