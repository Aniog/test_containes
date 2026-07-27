import { Section, SectionHeader } from "@/components/ui/Section"
import { process } from "@/data/content"

export function ProcessOverview() {
  return (
    <Section bg="slate" id="process">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="How it works"
            title="A clear six-step process, from inquiry to delivery"
            subtitle="A predictable workflow that keeps you informed at every step, with one English-speaking coordinator responsible end-to-end."
            align="left"
            className="!max-w-none"
          />
          <div className="mt-6 hidden lg:block p-5 rounded-lg border border-slate-200 bg-white">
            <p className="text-sm text-slate-700 leading-relaxed">
              Most projects move from first inquiry to supplier shortlist in
              3–5 business days, and to a signed purchase order within 2–3
              weeks — depending on sampling and how fast decisions are made
              on your side.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol className="relative border-l-2 border-slate-200 ml-2 md:ml-3 space-y-8">
            {process.map((p) => (
              <li key={p.step} className="pl-6 md:pl-8 relative">
                <span className="absolute -left-[11px] top-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent-500 text-white text-[11px] font-bold ring-4 ring-slate-50">
                  {p.step.slice(-1)}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

export default ProcessOverview
