import PageHero from '@/components/site/PageHero'
import InquiryForm from '@/components/site/InquiryForm'
import { companyDetails } from '@/content/siteContent'

const Contact = () => {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your sourcing project"
        description="If you need supplier search, factory verification, inspection support, production follow-up, or shipping coordination, send your brief and we will review it."
      />

      <section className="py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="rounded-[2rem] border border-brand-line bg-brand-surface p-6 shadow-card md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Contact details</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-ink">SSourcing China</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-brand-slate">
              <p>{companyDetails.location}</p>
              <p>{companyDetails.email}</p>
              <p>{companyDetails.phone}</p>
              <p>{companyDetails.hours}</p>
            </div>
            <div className="mt-8 rounded-3xl bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">Best fit</p>
              <p className="mt-3 text-base leading-7 text-brand-slate">
                Projects with clear product details, target markets, expected quantities, and a realistic timeline usually move fastest.
              </p>
            </div>
          </aside>

          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default Contact
