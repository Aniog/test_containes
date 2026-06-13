import InquiryForm from '../components/contact/InquiryForm.jsx'
import ImagePageShell from '../components/common/ImagePageShell.jsx'
import PageHero from '../components/common/PageHero.jsx'

function Contact() {
  return (
    <ImagePageShell>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Start your China sourcing conversation"
          description="Tell us what you need to source, verify, inspect, or ship. We will review your request and reply with the next practical step."
        />

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What to include in your inquiry</h2>
              <div className="grid gap-4 text-base leading-7 text-slate-600">
                <p>Product category or description</p>
                <p>Current sourcing or production stage</p>
                <p>Target market and quality expectations</p>
                <p>Expected quantity, budget, or shipment timing if known</p>
                <p>Main support needed: sourcing, factory verification, QC, production follow-up, or shipping coordination</p>
              </div>
              <img
                alt="Contact SSourcing China"
                className="h-[280px] w-full rounded-[1.5rem] object-cover"
                data-strk-img-id="contact-page-img-b61d33"
                data-strk-img="[contact-page-desc] [contact-page-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <h3 id="contact-page-title" className="sr-only">SSourcing China inquiry support</h3>
              <p id="contact-page-desc" className="sr-only">Business inquiry about supplier sourcing factory verification quality inspection and shipping coordination in China.</p>
            </div>
            <InquiryForm sourcePage="contact" title="Get a Free Sourcing Quote" subtitle="Share your sourcing requirement and business details. We will review your inquiry and get back to you with the next practical step." />
          </div>
        </section>
      </main>
    </ImagePageShell>
  )
}

export default Contact
