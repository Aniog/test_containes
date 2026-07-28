import ImageLoader from '@/components/site/ImageLoader.jsx'
import PageHero from '@/components/site/PageHero.jsx'
import SectionHeader from '@/components/site/SectionHeader.jsx'
import InquirySection from '@/components/home/InquirySection.jsx'
import StockImage from '@/components/site/StockImage.jsx'
import { caseStudies } from '@/content.js'

const CaseStudies = () => (
  <ImageLoader>
    <main>
      <PageHero eyebrow="Case studies" title="Sourcing scenarios based on common buyer needs" description="These examples show practical ways buyers use supplier screening, factory checks, quality inspection, production follow-up, and shipping coordination." imageId="case-studies-qc-report-factory-z49v2" imageAlt="Quality control report and factory product review" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Representative project examples" description="The goal is not to overpromise. It is to show how structured local support can make the sourcing process more visible and manageable." />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article key={study.title} className="rounded-2xl border border-brand-border bg-white p-4 shadow-sm">
                <StockImage imgId={`${study.imageId}-page`} query={`[case-page-result-${index}] [case-page-title-${index}]`} ratio="4x3" width="800" alt={study.title} className="h-56 w-full rounded-xl object-cover" />
                <div className="p-3 pt-6">
                  <p className="mb-3 inline-flex rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-blue">{study.tag}</p>
                  <h2 id={`case-page-title-${index}`} className="text-xl font-semibold text-brand-navy">{study.title}</h2>
                  <p id={`case-page-result-${index}`} className="mt-3 text-sm leading-7 text-brand-muted">{study.result}</p>
                  <ul className="mt-5 space-y-2 text-sm text-brand-slate">
                    <li>• Supplier options reviewed against buyer requirements</li>
                    <li>• Communication and document details organized</li>
                    <li>• Practical next steps shared before order decisions</li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InquirySection />
    </main>
  </ImageLoader>
)

export default CaseStudies
