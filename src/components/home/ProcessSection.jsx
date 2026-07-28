import SectionHeading from '@/components/shared/SectionHeading'
import { sourcingSteps } from '@/data/siteData'

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={{ text: 'How It Works' }}
          title="A Clear Sourcing Process"
          description="Our six-step process keeps your project transparent, on schedule, and aligned with your quality standards."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sourcingSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="mb-4 block text-4xl font-bold text-primary/20">{step.step}</span>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
