import { processSteps } from '@/data/siteContent'
import SectionHeader from '@/components/site/SectionHeader'

const WorkflowSection = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-24 xl:px-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeader
          eyebrow="Simple path to purchase"
          title="Professional support without making the process complicated"
          description="We keep the buying journey clear and practical, so your team can move from product inquiry to production planning with confidence."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8 text-slate-900"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection
