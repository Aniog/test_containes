import { ShieldCheck, TriangleAlert } from 'lucide-react'
import SectionHeading from '@/components/site/SectionHeading'

export default function ProblemSolutionSection({ items, trustPoints }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Problems we solve"
            title="Common sourcing issues that slow overseas buyers down"
            description="The goal is not to overcomplicate procurement. It is to reduce avoidable risk, improve follow-up, and keep decisions grounded in clearer information."
          />

          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <TriangleAlert className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-amber-900/80 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Why buyers work with SSourcing China
          </p>
          <div className="mt-6 space-y-4">
            {trustPoints.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
