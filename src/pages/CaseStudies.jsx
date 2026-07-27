import Container from '../components/site/Container.jsx'
import SectionHeader from '../components/site/SectionHeader.jsx'

const studies = [
  {
    title: 'Packaging supplier shortlist for an e-commerce brand',
    sector: 'Packaging and print',
    challenge: 'The buyer needed custom packaging with consistent print quality and export-ready cartons.',
    support: 'SSourcing China compared supplier capabilities, clarified material details, coordinated samples, and prepared questions for final negotiation.',
    imgId: 'case-page-packaging-print-qc-d7a12f',
    titleId: 'case-page-packaging-title',
    descId: 'case-page-packaging-desc',
  },
  {
    title: 'Factory verification for electrical accessories',
    sector: 'Electronics accessories',
    challenge: 'The buyer was unsure whether the supplier had suitable production experience and document readiness.',
    support: 'We reviewed supplier information, requested documents, checked sample consistency, and summarized verification findings for the buyer.',
    imgId: 'case-page-electronics-accessories-189fce',
    titleId: 'case-page-electronics-title',
    descId: 'case-page-electronics-desc',
  },
  {
    title: 'Final inspection for home goods before shipment',
    sector: 'Consumer goods',
    challenge: 'The order required packaging, labeling, and visible finish checks before goods were released.',
    support: 'Inspection coordination found packaging defects and label mismatches, allowing supplier correction before loading.',
    imgId: 'case-page-homegoods-inspection-60bc43',
    titleId: 'case-page-homegoods-title',
    descId: 'case-page-homegoods-desc',
  },
]

const CaseStudies = () => (
  <>
    <section className="bg-slate-50 py-20 text-slate-900 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Case studies"
          title="Practical examples of sourcing support"
          description="These examples show common project situations where structured China-side coordination helps overseas buyers reduce uncertainty."
          align="center"
        />
      </Container>
    </section>

    <section className="bg-white py-16 text-slate-900 md:py-24">
      <Container>
        <div className="space-y-8">
          {studies.map((study, index) => (
            <article key={study.title} className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
              <img
                alt={study.title}
                className="h-72 w-full object-cover lg:h-full"
                data-strk-img-id={study.imgId}
                data-strk-img={`[${study.descId}] [${study.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6 md:p-8">
                <p className="text-sm font-semibold text-brand-blue">{study.sector}</p>
                <h2 id={study.titleId} className="mt-2 text-2xl font-semibold text-brand-navy">{study.title}</h2>
                <p id={study.descId} className="mt-4 text-sm leading-6 text-slate-600">{study.challenge}</p>
                <div className="mt-6 rounded-2xl bg-brand-sky p-5 text-slate-900">
                  <p className="text-sm font-semibold text-brand-navy">SSourcing China support</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{study.support}</p>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Project example {String(index + 1).padStart(2, '0')}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  </>
)

export default CaseStudies
