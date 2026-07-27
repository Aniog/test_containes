import React from "react"
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  FileWarning,
  Languages,
  UserX,
} from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import IconBox from "@/components/ui/IconBox"
import { problems } from "@/data/site"

const iconMap = {
  "fake-factories": UserX,
  "quality-drift": TrendingDown,
  "missed-deadlines": Clock,
  "shipping-chaos": FileWarning,
  "language-distance": Languages,
  "no-accountability": AlertTriangle,
}

const ProblemsSolved = () => {
  return (
    <section className="bg-navy text-ink-onDark">
      <div className="container-content py-20 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow text-teal-light">Problems we solve</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-[1.15] tracking-[-0.015em] text-ink-onDark">
            The real reasons China sourcing goes wrong — and what we do about it
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-onDarkMuted">
            We have seen every failure mode: factories that don't exist, samples
            that don't match production, paperwork that arrives late. Here is
            what we focus on preventing.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem) => {
            const Icon = iconMap[problem.id] || AlertTriangle
            return (
              <div
                key={problem.id}
                className="rounded-[6px] border border-navy-800 bg-navy-800/40 p-6 md:p-7"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-[4px] bg-teal/15 text-teal-light">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-onDark leading-snug">
                  {problem.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-onDarkMuted">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSolved
