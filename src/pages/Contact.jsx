import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import InquiryForm from '@/components/shared/InquiryForm'
import Seo from '@/components/shared/Seo'

function Contact() {
  return (
    <main>
      <Seo
        title="Contact a China Sourcing Agent | Get a Free Sourcing Quote | SSourcing China"
        description="Contact SSourcing China to share your sourcing requirement and request a free sourcing quote for supplier search, verification, quality inspection, production follow-up, or shipping support."
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need sourced from China"
        description="Share your product details, target market, order quantity, and sourcing priorities. We will review the requirement and suggest the most relevant support scope."
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
        theme="light"
        idPrefix="contact-hero"
        visualCue="quality control inspector checklist packaged cartons warehouse logistics coordination"
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact details"
              title="Start with a practical inquiry"
              description="We work with overseas buyers who want clearer supplier visibility, better quality control, and more reliable production coordination."
            />
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-5 text-base leading-7 text-slate-700">
                <p>
                  <span className="font-semibold text-slate-950">Email:</span> inquiry@ssourcingchina.com
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Focus:</span> sourcing support for global buyers purchasing from China
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Typical support:</span> supplier search, verification, factory audit support, QC, production follow-up, shipping coordination
                </p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Inquiry form"
              title="Get a Free Sourcing Quote"
              description="Send your project brief and use the form as the main lead-generation area of the site."
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

export default Contact
