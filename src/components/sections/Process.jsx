import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import { processSteps } from "@/data/site"

const Process = () => {
  return (
    <section className="bg-warm-200 border-y border-warm-300">
      <div className="container-content py-20 md:py-24">
        <SectionHeader
          eyebrow="How it works"
          title="From brief to delivered goods in six clear steps"
          description="A predictable process you can plan around. One dedicated project manager, one source of truth, one weekly update."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-300 border border-warm-300 rounded-[6px] overflow-hidden">
          {processSteps.map((step) => (
            <div key={step.id} className="bg-warm-100 p-7 md:p-8 flex flex-col gap-3">
              <div className="text-[12px] font-semibold tracking-eyebrow text-teal">
                STEP {step.id}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-ink leading-snug">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-teal hover:text-teal-hover"
          >
            Read the full process and timeline
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Process
