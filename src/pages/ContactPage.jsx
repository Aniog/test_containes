import InquiryForm from '@/components/shared/InquiryForm'
import PageHero from '@/components/shared/PageHero'
import { companyFacts } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function ContactPage() {
  usePageMeta(
    'Contact | SSourcing China',
    'Contact SSourcing China to request sourcing support for supplier verification, quality inspection, production follow-up, or shipping coordination.'
  )

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Send your sourcing inquiry"
        description="Tell us about your product, current supplier situation, quality needs, and shipment timeline. We will review your request and respond with a practical next step."
      />
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                What to include
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <li>Product name or category</li>
                <li>Estimated quantity and target market</li>
                <li>Current supplier situation or sourcing stage</li>
                <li>Quality requirements or known issues</li>
                <li>Required delivery or shipment timing</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Company snapshot
              </p>
              <div className="mt-6 space-y-4">
                {companyFacts.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>
    </div>
  )
}
