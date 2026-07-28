import PageHeader from '@/components/shared/PageHeader'
import SectionHeading from '@/components/shared/SectionHeading'
import { sourcingSteps } from '@/data/siteData'
import CTASection from '@/components/home/CTASection'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function HowItWorks() {
  const containerRef = useImageLoader()

  return (
    <>
      <PageHeader
        title="How It Works"
        description="A transparent, six-step process that keeps your sourcing project organized from start to finish."
        badge="Our Process"
        pageId="how-it-works"
      />

      <section ref={containerRef} className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="From Requirements to Delivery"
            description="We handle the details at every stage so you can make decisions with confidence."
            className="mb-12"
          />

          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gray-200 lg:block" />

            <div className="space-y-12">
              {sourcingSteps.map((step, index) => (
                <div key={step.step} className="relative grid gap-6 lg:grid-cols-[80px_1fr] lg:gap-12">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white lg:mx-auto">
                    {step.step}
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
                      <div>
                        <h3 id={`process-title-${index}`} className="mb-3 text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <p id={`process-desc-${index}`} className="leading-relaxed text-gray-600">
                          {step.description}
                        </p>
                      </div>
                      <div className="relative h-44 overflow-hidden rounded-lg bg-gray-200 lg:h-auto">
                        <div
                          className="absolute inset-0"
                          data-strk-bg-id={`process-bg-${index}-b2`}
                          data-strk-bg={`[process-title-${index}] [process-desc-${index}]`}
                          data-strk-bg-ratio="4x3"
                          data-strk-bg-width="600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
