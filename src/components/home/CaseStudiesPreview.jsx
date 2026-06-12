import SectionHeading from '@/components/shared/SectionHeading'
import CTAButton from '@/components/shared/CTAButton'

const caseStudies = [
  {
    id: 'case-electronics',
    industry: 'Consumer Electronics',
    title: 'Bluetooth Speaker Sourcing for US Brand',
    result: 'Reduced unit cost by 22% while improving build quality. Delivered 10,000 units on time.',
    metrics: { savings: '22%', units: '10,000', timeline: '45 days' },
  },
  {
    id: 'case-furniture',
    industry: 'Home & Furniture',
    title: 'Custom Furniture Line for European Retailer',
    result: 'Identified 3 certified factories, passed all EU compliance tests on first attempt.',
    metrics: { savings: '18%', units: '2,500', timeline: '60 days' },
  },
  {
    id: 'case-packaging',
    industry: 'Packaging',
    title: 'Eco-Friendly Packaging for Australian Brand',
    result: 'Found FSC-certified supplier, achieved 30% cost reduction vs. previous vendor.',
    metrics: { savings: '30%', units: '50,000', timeline: '30 days' },
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Case Studies"
          title="Real Results for Real Buyers"
          subtitle="See how we've helped businesses like yours source successfully from China."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-navy-900/5 text-navy-800 mb-3">
                  {study.industry}
                </span>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{study.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{study.result}</p>
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                  <div className="text-center">
                    <p className="text-lg font-bold text-accent-500">{study.metrics.savings}</p>
                    <p className="text-xs text-slate-500">Cost Saved</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-accent-500">{study.metrics.units}</p>
                    <p className="text-xs text-slate-500">Units</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-accent-500">{study.metrics.timeline}</p>
                    <p className="text-xs text-slate-500">Lead Time</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CTAButton to="/case-studies" variant="secondary">
            View All Case Studies
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
