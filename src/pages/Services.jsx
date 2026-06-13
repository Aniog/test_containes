import CTASection from '@/components/site/CTASection'
import ServiceGrid from '@/components/site/ServiceGrid'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import { services } from '@/data/siteContent'

const serviceHighlights = [
  {
    title: 'Scope before action',
    description:
      'We start by understanding what support is needed instead of pushing every buyer into the same process.',
  },
  {
    title: 'Reporting that is usable',
    description:
      'Outputs are practical: supplier comparisons, verification notes, inspection findings, and action points.',
  },
  {
    title: 'Flexible support model',
    description:
      'Buyers can request full sourcing support or only the specific step they need help with.',
  },
]

const Services = () => {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for overseas buyers working with China"
        description="SSourcing China supports supplier sourcing, factory verification, quality inspection, production follow-up, and shipping coordination with practical B2B communication."
        points={['Supplier sourcing', 'Factory verification', 'QC and follow-up']}
        imageId="services-hero-2f941a"
        titleId="services-hero-title"
        descriptionId="services-hero-description"
        imagePrompt="professional sourcing manager reviewing supplier certificates product samples and packaging specifications"
        imagePromptId="services-hero-image-prompt"
        imageQuery="[services-hero-image-prompt]"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceGrid services={services} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Working style"
            title="Practical support matched to the stage of your buying process"
            description="Some buyers need help from supplier search to shipment. Others only need factory verification, inspection, or production follow-up."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need help on one sourcing step or the full workflow?"
        description="Share your product and current challenge. We can scope the right level of supplier sourcing, verification, QC, or shipping support."
      />
    </div>
  )
}

export default Services
