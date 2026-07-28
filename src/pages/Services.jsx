import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import InfoCard from '@/components/shared/InfoCard'
import InquiryForm from '@/components/shared/InquiryForm'
import Seo from '@/components/shared/Seo'
import { services, trustPoints } from '@/data/siteContent'

function Services() {
  return (
    <main>
      <Seo
        title="China Sourcing Services | Supplier Verification, QC & Production Support | SSourcing China"
        description="Explore sourcing services from SSourcing China including supplier search, supplier verification, factory audit support, quality inspection, production follow-up, and shipping coordination."
      />
      <PageHero
        eyebrow="Services"
        title="Sourcing services designed for overseas buyers working with China suppliers"
        description="Choose support across supplier search, factory verification, quality control, production follow-up, and shipping coordination based on your project stage."
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'How It Works', to: '/how-it-works' }}
        theme="light"
        idPrefix="services-hero"
        visualCue="factory floor supplier verification quality inspector clipboard manufacturing warehouse cartons"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Service scope"
            title="Support where remote buying usually becomes difficult"
            description="You can engage us for full sourcing support or for specific stages where your team needs local execution in China."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <InfoCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Why this matters"
              title="Better visibility before problems become expensive"
              description="Buyers usually need local support not because sourcing is impossible remotely, but because weak visibility creates risk in decision-making."
            />
            <div className="mt-8 grid gap-5">
              {trustPoints.map((item) => (
                <InfoCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Start here"
              title="Request the right support scope"
              description="Share your sourcing challenge and we will help define a practical service scope for your project."
            />
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
