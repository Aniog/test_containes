import * as Icons from 'lucide-react'
import { problems } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ProblemsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Problems We Solve"
          title="Common risks when buying from China — handled"
          subtitle="Importing from China has real pitfalls. Here is how we address the ones buyers run into most often."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => {
            const Icon = Icons[p.icon] || Icons.AlertCircle
            return (
              <div
                key={p.problem}
                className="rounded-xl border border-border-base bg-surface p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-action/10 text-action">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {p.problem}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">
                  <span className="font-medium text-primary-accent">
                    Our approach:
                  </span>{' '}
                  {p.solution}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
