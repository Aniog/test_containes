import React from "react"
import { ShieldCheck, Eye, Link2, FileCheck2, Languages, Lock } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import { trustPoints } from "@/data/site"

const iconMap = {
  "on-the-ground": ShieldCheck,
  "no-commission": Eye,
  "no-supplier-markup": Link2,
  "aql-reports": FileCheck2,
  "english-updates": Languages,
  "data-security": Lock,
}

const TrustPoints = () => {
  return (
    <section className="bg-warm-100">
      <div className="container-content py-20 md:py-24">
        <SectionHeader
          eyebrow="Why buyers stay with us"
          title="A sourcing partner measured on outcomes, not promises"
          description="These are the operational standards we hold ourselves to. They are also the questions you should ask any agent you are evaluating."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-300 border border-warm-300 rounded-[6px] overflow-hidden">
          {trustPoints.map((point) => {
            const Icon = iconMap[point.id] || ShieldCheck
            return (
              <div key={point.id} className="bg-white p-7 md:p-8">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-[4px] bg-teal-light text-teal">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TrustPoints
