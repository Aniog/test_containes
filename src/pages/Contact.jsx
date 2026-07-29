import InquiryForm from '@/components/forms/InquiryForm.jsx'
import BulletList from '@/components/common/BulletList.jsx'
import PageHero from '@/components/common/PageHero.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import { usePageSEO } from '@/hooks/usePageSEO.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { contactHighlights, trustPoints } from '@/data/site-content.js'

const Contact = () => {
  usePageSEO(
    'Contact | Get a Free Sourcing Quote | SSourcing China',
    'Contact SSourcing China to discuss supplier search, factory verification, quality inspection, production follow-up, or shipping coordination in China.',
  )

  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote based on your actual buying needs"
        description="Send your sourcing brief and we will review the product scope, supplier verification needs, quality priorities, and shipping considerations."
        titleId="contact-hero-title"
        descriptionId="contact-hero-desc"
        backgroundId="contact-hero-bg-91dc14"
      />

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <SectionHeading
                eyebrow="Why contact us"
                title="Start with a clear sourcing brief"
                description="The more specific your inquiry, the easier it is to review supplier fit, risk, and the right support scope."
                titleId="contact-side-title"
                descriptionId="contact-side-desc"
              />
              <div className="mt-8 space-y-4">
                {contactHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">What buyers value</p>
              <div className="mt-6">
                <BulletList
                  items={trustPoints}
                  itemClassName="text-slate-200"
                  dotClassName="bg-sky-300"
                />
              </div>
            </div>
          </div>

          <InquiryForm sourcePage="contact" title="Tell us about your product, sourcing priorities, and timeline" />
        </div>
      </section>
    </main>
  )
}

export default Contact
