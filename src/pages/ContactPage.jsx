import InquiryForm from '@/components/shared/InquiryForm.jsx'
import PageHero from '@/components/shared/PageHero.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'

const contactPoints = [
  'Share your product details, target quantity, and destination market.',
  'Tell us whether you need supplier search, verification, inspection, production follow-up, or shipping coordination.',
  'Include your timeline, packaging requirements, or any quality concerns that matter for supplier evaluation.',
]

function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Start your sourcing inquiry with SSourcing China"
        titleId="contact-hero-title"
        description="If you are looking for supplier search, verification, quality inspection, production follow-up, or shipment coordination in China, tell us what you need."
        descriptionId="contact-hero-desc"
        primaryAction={{ label: 'Get a Free Sourcing Quote', to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'See Services', to: '/services' }}
        imageId="contact-hero-bg-e7c3a2"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Before You Submit"
              title="What helps us review your inquiry faster"
              description="A more complete sourcing brief makes it easier to understand your project and the kind of support you need."
            />
            <div className="space-y-4">
              {contactPoints.map((item) => (
                <div key={item} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default ContactPage
