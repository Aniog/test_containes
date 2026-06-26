import { Link } from 'react-router-dom';

const cases = [
  {
    title: 'Electronics Sourcing for European Distributor',
    client: 'Consumer Electronics Distributor, Germany',
    challenge: 'Needed to find reliable PCB and LED lighting suppliers with consistent quality for EU market compliance.',
    result: 'Identified 3 verified factories, reduced defect rate from 8% to under 1%, and achieved CE certification compliance.',
    tag: 'Electronics',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
    imgId: 'case-electronics-v1w2x3',
  },
  {
    title: 'Home Textile Quality Improvement',
    client: 'Home Goods Retailer, USA',
    challenge: 'Experienced inconsistent fabric quality and color matching issues with previous suppliers.',
    result: 'Implemented multi-stage QC process, established color standards, and reduced customer returns by 65%.',
    tag: 'Home & Garden',
    titleId: 'case-textile-title',
    descId: 'case-textile-desc',
    imgId: 'case-textile-y4z5a6',
  },
  {
    title: 'Custom Machinery Parts for Australian Buyer',
    client: 'Industrial Equipment Company, Australia',
    challenge: 'Required precision-machined components with tight tolerances and full material traceability.',
    result: 'Sourced certified machining shops, implemented incoming material inspection, and delivered 100% on-spec parts.',
    tag: 'Industrial',
    titleId: 'case-machinery-title',
    descId: 'case-machinery-desc',
    imgId: 'case-machinery-b7c8d9',
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Real results from real sourcing projects. See how we've helped buyers overcome challenges and improve their supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((cs) => (
            <div
              key={cs.title}
              className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/9] bg-surface relative overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-white text-xs font-medium rounded">
                  {cs.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 id={cs.titleId} className="font-semibold text-text-primary mb-1">
                  {cs.title}
                </h3>
                <p id={cs.descId} className="text-text-secondary text-xs mb-3">{cs.client}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-text-primary">Challenge: </span>
                    <span className="text-text-secondary">{cs.challenge}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Result: </span>
                    <span className="text-text-secondary">{cs.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors"
          >
            Read More Case Studies
            <span className="ml-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
