import InquiryForm from '../components/forms/InquiryForm.jsx'
import PageHero from '../components/shared/PageHero.jsx'
import ContentCard from '../components/shared/ContentCard.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import SectionShell from '../components/shared/SectionShell.jsx'
import { contactHighlights } from '../siteContent.js'

const Contact = () => {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Speak with a China sourcing agent about your requirement"
        description="Use the inquiry form to share your sourcing brief, supplier concerns, quality needs, or shipping questions. We will review the requirement and respond with practical next steps."
        secondaryHref="/services"
        secondaryLabel="Review Our Services"
      />

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Start the conversation"
              title="What to include in your inquiry"
              description="The more specific the brief, the easier it is to evaluate which sourcing, verification, quality, or shipment support steps are most relevant."
            />
            <div className="mt-8 space-y-4">
              {contactHighlights.map((item) => (
                <ContentCard key={item} className="text-sm leading-7 text-slate-700">
                  {item}
                </ContentCard>
              ))}
            </div>
          </div>

          <InquiryForm compact />
        </div>
      </SectionShell>
    </main>
  )
}

export default Contact
