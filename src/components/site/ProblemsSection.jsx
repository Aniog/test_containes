import { CircleAlert, ShieldCheck } from 'lucide-react'
import { problemsWeSolve, trustPoints } from '@/data/siteContent'
import SectionHeading from '@/components/site/SectionHeading'

const ProblemsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Problems we solve"
            title="Challenges many overseas buyers face when sourcing from China"
            description="The main issues are often not only price. They are reliability, verification, quality consistency, communication, and visibility during execution."
          />

          <div className="mt-8 grid gap-4">
            {problemsWeSolve.map((problem) => (
              <div
                className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900"
                key={problem}>
                <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                <p className="text-base leading-7 text-slate-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            Why buyers work with us
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Practical sourcing support with clearer checks and follow-up
          </h3>

          <div className="mt-8 grid gap-4">
            {trustPoints.map((point) => (
              <div
                className="rounded-3xl border border-slate-800 bg-slate-900 p-5"
                key={point.title}>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{point.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
