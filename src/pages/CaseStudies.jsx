import PageIntro from '../components/common/PageIntro'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import CTASection from '../components/sections/CTASection'

export default function CaseStudies() {
  return (
    <>
      <PageIntro eyebrow="Case studies" title="Sourcing support examples with practical outcomes" text="These examples show common situations where buyers need clearer supplier information, better production follow-up, or more organized inspection and shipping coordination." />
      <CaseStudiesSection showHeader={false} />
      <section className="bg-white py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900">What these projects have in common</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {['Clear requirements before supplier outreach', 'Documented checkpoints before production decisions', 'Practical coordination between buyer, factory, inspector, and forwarder'].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-6 text-sm font-semibold leading-6 text-slate-900 shadow-xl">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
