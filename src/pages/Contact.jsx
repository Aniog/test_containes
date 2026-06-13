import CTASection from '@/components/site/CTASection'
import InquiryForm from '@/components/site/InquiryForm'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import { contactDetails } from '@/data/siteContent'

const Contact = () => {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Send your sourcing brief to SSourcing China"
        description="Share the product details, market, quantity, and sourcing support you need. We review qualified inquiries and reply with practical next steps."
        points={['Qualified inquiries', 'Practical review', 'Clear next steps']}
        imageId="contact-hero-8ad203"
        titleId="contact-hero-title"
        descriptionId="contact-hero-description"
        imagePrompt="professional sourcing consultation with product brief supplier notes and export shipment plan"
        imagePromptId="contact-hero-image-prompt"
        imageQuery="[contact-hero-image-prompt]"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact details"
            title="A stronger brief helps us evaluate the inquiry faster"
            description="Buyers usually get the best response when they include product details, quantity, market, timing, and the main sourcing challenge."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactDetails.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {item.label}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">{item.value}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <InquiryForm sourcePage="contact-page" />
          </div>
        </div>
      </section>

      <CTASection
        title="Need support on supplier sourcing, QC, or shipment coordination?"
        description="Use the inquiry form above to send the details. We will review the brief and come back with a practical response."
      />
    </div>
  )
}

export default Contact
