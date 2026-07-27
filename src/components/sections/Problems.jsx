import { PROBLEMS } from "@/data/site"
import SectionHeader from "@/components/ui/SectionHeader"

export default function Problems() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems we solve"
          title="The risks of sourcing from China — handled"
          description="Importing from China rewards preparation. Here are the common pitfalls we help you avoid."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white text-accent-600 ring-1 ring-slate-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{problem.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
