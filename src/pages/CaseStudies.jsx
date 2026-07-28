import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import Seo from '@/components/shared/Seo'
import { caseStudies } from '@/data/siteContent'

function CaseStudies() {
  return (
    <main>
      <Seo
        title="China Sourcing Case Studies | Supplier Verification, QC & Shipping Support | SSourcing China"
        description="Review representative case studies showing how SSourcing China supports overseas buyers with supplier comparison, verification, quality control, and shipping preparation."
      />
      <PageHero
        eyebrow="Case Studies"
        title="Short case examples showing how sourcing support improves visibility and execution"
        description="These examples reflect the type of buyer-side support we provide across supplier comparison, verification, quality control, and shipping preparation."
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'Products We Source', to: '/products-we-source' }}
        theme="dark"
        idPrefix="case-studies-hero"
        visualCue="factory visit quality inspection report warehouse manufacturing packaging export support"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Examples"
            title="Representative sourcing support scenarios"
            description="Each project is different, but these examples show how overseas buyers use local sourcing support in China."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.slug} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">Case</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{study.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{study.summary}</p>
                <div className="mt-6 rounded-2xl bg-white p-5">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Outcome</p>
                  <p className="mt-2 text-base leading-7 text-slate-700">{study.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudies
