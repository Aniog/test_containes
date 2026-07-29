import { Link } from 'react-router-dom'

const caseStudies = [
  {
    id: 'case-electronics',
    title: 'Custom Bluetooth Headphones for US Brand',
    category: 'Consumer Electronics',
    result: 'Reduced unit cost by 22% while improving build quality.',
    imgId: 'case-electronics-img-4a2b1c',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'case-furniture',
    title: 'Office Furniture Line for EU Distributor',
    category: 'Furniture',
    result: 'Delivered 3 container loads on time with zero defects.',
    imgId: 'case-furniture-img-5d3e2f',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'case-packaging',
    title: 'Eco-Friendly Packaging for Australian Retailer',
    category: 'Packaging',
    result: 'Found certified supplier meeting strict sustainability standards.',
    imgId: 'case-packaging-img-6f4g3h',
    titleId: 'case-packaging-title',
    descId: 'case-packaging-desc',
  },
]

const CaseStudiesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="cases-title" className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Case Studies
          </h2>
          <p id="cases-subtitle" className="mt-4 text-text-body text-lg">
            Real results from real sourcing projects we've managed for our clients.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
              <img
                data-strk-img-id={cs.imgId}
                data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cs.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-surface px-2 py-1 rounded">{cs.category}</span>
                <h3 id={cs.titleId} className="mt-3 font-semibold text-text-primary">{cs.title}</h3>
                <p id={cs.descId} className="mt-2 text-text-body text-sm">{cs.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors"
          >
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview
