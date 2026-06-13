import PageHero from '../components/shared/PageHero.jsx'
import ContentCard from '../components/shared/ContentCard.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import SectionShell from '../components/shared/SectionShell.jsx'
import { caseStudies } from '../siteContent.js'

const CaseStudies = () => {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Practical sourcing situations buyers ask us to support"
        description="These examples reflect the kinds of supplier evaluation, production visibility, inspection, and shipment preparation challenges that overseas buyers bring to SSourcing China."
        secondaryHref="/contact"
        secondaryLabel="Discuss a Similar Project"
      />

      <SectionShell>
        <SectionHeading
          eyebrow="Examples"
          title="Representative project situations"
          description="The focus is on how sourcing support reduced uncertainty, improved communication, or gave buyers better decision points before production and shipment."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <ContentCard key={item.title} className="h-full">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Case study {index + 1}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-brand-navy">{item.title}</h2>
              <p className="mt-3 text-sm font-medium text-brand-blue">{item.sector}</p>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <div>
                  <p className="font-semibold text-brand-navy">Challenge</p>
                  <p className="mt-2">{item.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">Support provided</p>
                  <p className="mt-2">{item.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">Result</p>
                  <p className="mt-2">{item.result}</p>
                </div>
              </div>
            </ContentCard>
          ))}
        </div>
      </SectionShell>
    </main>
  )
}

export default CaseStudies
