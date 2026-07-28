import { processSteps } from '@/lib/siteData'
import PageHero from '@/components/shared/PageHero'
import InquirySection from '@/components/home/InquirySection'

const HowItWorks = () => (
  <main>
    <PageHero
      eyebrow="How it works"
      title="A sourcing process built for clear decisions"
      description="From the first product brief to shipment handover, each step is designed to improve visibility and reduce avoidable sourcing risk."
    >
      <p className="text-lg font-semibold text-white">Best results start with details</p>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Product drawings, photos, target quantity, packaging needs, and certification requirements help us screen suppliers more accurately.
      </p>
    </PageHero>
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {processSteps.map((step) => (
            <article key={step.step} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[120px_1fr] md:p-8">
              <span className="text-5xl font-semibold text-blue-100">{step.step}</span>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">{step.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <InquirySection />
  </main>
)

export default HowItWorks
