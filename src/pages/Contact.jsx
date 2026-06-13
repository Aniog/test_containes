import InquiryForm from '../components/common/InquiryForm.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { usePageMeta } from '../lib/usePageMeta.js'

const Contact = () => {
  usePageMeta(
    'Contact | SSourcing China',
    'Contact SSourcing China to request supplier sourcing, verification, quality inspection, production follow-up, or shipping coordination support.',
  )

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send your sourcing inquiry"
        description="Use the form below to share your product, sourcing goals, and the support you need. We review inquiries to understand supplier fit, verification needs, and the next step."
        secondaryLink="/how-it-works"
        secondaryLabel="Review the process"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Talk to SSourcing China"
              title="Share a clear brief and we can review the request"
              description="The more detail you provide, the easier it is to understand supplier type, verification scope, quality concerns, and shipping requirements."
            />
            <div className="rounded-[32px] bg-slate-900 p-6 text-white md:p-8">
              <h2 className="text-2xl font-semibold">Useful details to include</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
                <li>Product name or category</li>
                <li>Target quantity or MOQ expectation</li>
                <li>Main market and compliance concerns</li>
                <li>Current supplier status, if any</li>
                <li>Support needed: sourcing, verification, QC, production follow-up, or shipping</li>
              </ul>
            </div>
          </div>
          <div>
            <InquiryForm compact />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
