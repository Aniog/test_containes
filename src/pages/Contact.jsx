import { contactDetails } from '@/content/siteContent'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import InquiryPanel from '@/components/shared/InquiryPanel'

const Contact = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="Contact"
        title="Start your China sourcing discussion with a clear brief"
        description="Tell us what you need to source, verify, inspect, or coordinate. We use practical inquiry details to understand whether there is a good working fit."
        titleId="contact-hero-title"
        descriptionId="contact-hero-description"
        visualId="contact-hero-bg-a70g83"
        visualBadge="Share your product, quantity, packaging, and shipping requirements"
        visualNote="Qualified sourcing inquiries usually start with clear product, quantity, packaging, and timing requirements."
        chips={contactDetails.map((item) => item.title)}
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact details"
              title="What buyers usually discuss first"
              description="A good first discussion is usually based on a specific product, clear buying requirements, and the sourcing stage you are currently in."
            />

            <div className="grid gap-4">
              {contactDetails.map((detail) => (
                <article
                  key={detail.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    {detail.title}
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-700">{detail.value}</p>
                </article>
              ))}
            </div>
          </div>

          <InquiryPanel />
        </div>
      </section>
    </div>
  )
}

export default Contact
