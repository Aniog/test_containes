import InquiryForm from '@/components/InquiryForm.jsx'
import PageHero from '@/components/PageHero.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import { contactHighlights } from '@/data/siteContent.js'

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Send your sourcing brief for review"
        description="Tell us what product you need, what support you want, and where your project stands today."
      >
        <div className="space-y-4 text-sm leading-7 text-ink">
          <p>
            The more specific your inquiry, the easier it is to evaluate supplier fit, sourcing complexity, and the right support scope.
          </p>
          <p className="text-muted">
            A good first message includes product details, quantity, target price, quality expectations, and timing.
          </p>
        </div>
      </PageHero>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Before you send"
              title="What helps us review your request faster"
              description="Sharing the points below makes the first sourcing review more practical and relevant."
            />
            <div className="grid gap-4">
              {contactHighlights.map((item) => (
                <article key={item.title} className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <InquiryForm title="Get a Free Sourcing Quote" />
        </div>
      </section>
    </main>
  )
}

export default ContactPage
