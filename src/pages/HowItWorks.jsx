import CTASection from '../components/shared/CTASection'
import ImageLoadPage from '../components/shared/ImageLoadPage'
import PageHero from '../components/shared/PageHero'
import ProcessSection from '../components/shared/ProcessSection'
import SectionHeader from '../components/shared/SectionHeader'
import StockImage from '../components/shared/StockImage'
import { processSteps } from '../data/siteContent'

const HowItWorks = () => (
  <ImageLoadPage>
    <PageHero
      alt="Production follow-up and logistics planning in China"
      description="A step-by-step sourcing workflow that turns product requirements into supplier screening, quote comparison, QC checkpoints, production follow-up, and shipment coordination."
      eyebrow="How it works"
      imageId="how-it-works-hero-production-shipping-8e22bc"
      title="A clear process from sourcing brief to shipment handover"
    />
    <ProcessSection />
    <section className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Buyer communication"
            title="What you receive during the process"
            description="We keep the work practical: clear questions, supplier comparisons, production notes, inspection findings, and shipping handover details."
          />
          <div className="mt-8 grid gap-4">
            {processSteps.map((step) => (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5" key={step.step}>
                <p className="text-sm font-semibold text-blue-700">{step.step} · {step.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        <StockImage
          alt="Supplier communication and factory production planning"
          className="h-96 w-full rounded-3xl border border-slate-200 object-cover shadow-sm"
          id="how-it-works-communication-planning-ae7421"
          query="[page-hero-description] [page-hero-title]"
          ratio="3x4"
          width="900"
        />
      </div>
    </section>
    <CTASection />
  </ImageLoadPage>
)

export default HowItWorks
