import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PROCESS_STEPS } from "@/data/site"
import SectionHeader from "@/components/ui/SectionHeader"

export default function Process({ limit }) {
  const steps = limit ? PROCESS_STEPS.slice(0, limit) : PROCESS_STEPS
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A clear process from request to delivery"
          description="No black boxes. You always know what's happening with your order and why."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.id}
                className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-100">{step.step}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              See the full process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
