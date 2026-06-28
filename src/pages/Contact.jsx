import InquiryForm from '@/components/forms/InquiryForm'
import PageHero from '@/components/PageHero'

const contactPoints = [
  'Share product details, quantity targets, and target market.',
  'Tell us if you need supplier sourcing, verification, inspection, or shipping coordination.',
  'Include timing, packaging, compliance, or current supplier concerns where relevant.',
]

const Contact = () => {
  return (
    <main>
      <PageHero
        slug="contact"
        eyebrow="Contact"
        title="Tell us about your sourcing requirement"
        description="Use the inquiry form below to share your product needs, service scope, and timeline. We will review the request and respond with practical next steps."
        secondaryTo="/services"
        secondaryLabel="Review services"
        imageAlt="Contact a China sourcing agent for supplier verification and QC support"
        imageCaption="A clear sourcing brief helps us understand the product, buying stage, and type of support you need."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr,1.15fr] lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What to include</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Help us understand the project clearly
            </h2>
            <div className="mt-8 grid gap-4">
              {contactPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm leading-7 text-amber-900">
                We keep the tone practical and professional. If your inquiry is suitable for our sourcing scope, we will reply with the next recommended steps.
              </p>
            </div>
          </div>

          <InquiryForm pageContext="contact" />
        </div>
      </section>
    </main>
  )
}

export default Contact
