import CtaSection from '@/components/sections/CtaSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import PageHero from '@/components/sections/PageHero'

export default function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="Practical examples of sourcing support"
        text="See how overseas buyers can use China-side support to compare suppliers, control quality, and coordinate order details."
      />
      <CaseStudiesSection showLink={false} />
      <section className="bg-white py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">What these cases have in common</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Each project required clear supplier communication, realistic comparison, documented checks, and practical follow-up. SSourcing China does not replace buyer decision-making; we help buyers make those decisions with better information from the China side.
            </p>
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  )
}
