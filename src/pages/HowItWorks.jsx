import CTASection from '@/components/site/CTASection'
import ProcessTimeline from '@/components/site/ProcessTimeline'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import { processSteps } from '@/data/siteContent'

const checkpoints = [
  'Requirement review before supplier search starts',
  'Factory-side screening before moving too far on price alone',
  'Sample and quotation comparison with context, not only spreadsheets',
  'Inspection and production checkpoints matched to the order stage',
  'Packing and shipment readiness follow-up before dispatch',
]

const HowItWorks = () => {
  return (
    <div>
      <PageHero
        eyebrow="How it works"
        title="A structured sourcing process with clear checkpoints"
        description="We keep the sourcing flow simple and transparent so overseas buyers know what is being checked, when decisions are needed, and where risks may sit."
        points={['Brief', 'Verification', 'QC', 'Shipment support']}
        imageId="how-hero-55bd82"
        titleId="how-hero-title"
        descriptionId="how-hero-description"
        imagePrompt="quality control inspector checking finished goods on a China production line before export shipment"
        imagePromptId="how-hero-image-prompt"
        imageQuery="[how-hero-image-prompt]"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Workflow"
            title="From first brief to shipment handoff"
            description="The process is designed to improve decision quality and reduce blind spots during supplier selection and execution."
          />
          <div className="mt-12">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <SectionHeader
              eyebrow="Control points"
              title="What buyers usually want visibility on"
              description="These are the moments where local coordination typically matters most in a China sourcing workflow."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {checkpoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to review your sourcing process before placing the order?"
        description="We can help assess where verification, inspection, or follow-up would add the most control to your current buying workflow."
      />
    </div>
  )
}

export default HowItWorks
