import PageHero from '@/components/shared/PageHero'
import InquiryForm from '@/components/forms/InquiryForm'
import { primaryCta } from '@/content/siteContent'

const contactCards = [
  {
    title: 'Best for',
    description: 'Buyers who want supplier search, verification, inspection, production follow-up, or shipping coordination support in China.',
  },
  {
    title: 'Helpful to include',
    description: 'Product type, specifications, target quantity, quality requirements, drawings or photos, and destination market.',
  },
  {
    title: 'Our approach',
    description: 'Clear communication, practical next steps, and realistic sourcing guidance based on your project details.',
  },
]

const Contact = () => {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Send your sourcing brief and get a practical first response"
        description="Tell us what you need to source, what support you need, and any product details you can share. We will review the request and respond with practical next steps."
        primaryAction={{ label: primaryCta, to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'View services', to: '/services' }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-5">
            {contactCards.map((card) => (
              <article key={card.title} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-site-ink">{card.title}</h2>
                <p className="mt-4 text-base leading-7 text-site-muted">{card.description}</p>
              </article>
            ))}

            <div className="overflow-hidden rounded-[2rem] border border-site-border bg-white shadow-sm">
              <img
                alt="Supplier meeting and sourcing coordination"
                className="h-72 w-full object-cover"
                data-strk-img-id="contact-image-01"
                data-strk-img="[contact-title] [contact-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div>
            <div className="mb-8 rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Inquiry form</p>
              <h2 id="contact-title" className="mt-4 text-3xl font-semibold tracking-tight text-site-ink">Get a free sourcing quote</h2>
              <p id="contact-desc" className="mt-4 text-base leading-7 text-site-muted">
                The more information you share, the more specific and useful our first reply can be.
              </p>
            </div>
            <InquiryForm title="Get a Free Sourcing Quote" description="Share your sourcing requirement below. We will review it and respond with relevant next steps based on your product and support needs." />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
