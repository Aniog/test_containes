import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    id: 'industrial-pump',
    title: 'Industrial Pump Components',
    industry: 'Industrial Machinery',
    challenge: 'A German manufacturer needed precision cast iron pump housings with tight tolerances and consistent quality.',
    result: 'Identified 3 ISO-certified foundries. Implemented in-process QC. Reduced defect rate from 12% to under 2%.',
    imgId: 'case-pump-q5r6s7',
  },
  {
    id: 'led-lighting',
    title: 'LED Lighting Products',
    industry: 'Electronics',
    challenge: 'A US retailer needed reliable LED panel suppliers with UL certification and competitive pricing for large-volume orders.',
    result: 'Vetted 5 factories, negotiated 18% cost reduction, established ongoing QC protocol. Delivered 50,000 units on time.',
    imgId: 'case-led-t8u9v0',
  },
  {
    id: 'furniture-hardware',
    title: 'Furniture Hardware',
    industry: 'Home & Furniture',
    challenge: 'A Scandinavian furniture brand needed zinc alloy handles and hinges matching their exact design specifications.',
    result: 'Sourced 2 qualified factories. Managed tooling development and sampling. Consistent quality over 3+ years of production.',
    imgId: 'case-furniture-w1x2y3',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">
          Real examples of how we helped buyers source successfully from China.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {cases.map((c) => (
            <div key={c.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-neutral-100 relative overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-${c.id}-industry] [case-${c.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full" id={`case-${c.id}-industry`}>
                  {c.industry}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 mt-3 mb-2" id={`case-${c.id}-title`}>
                  {c.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3 leading-relaxed">
                  <span className="font-medium text-neutral-700">Challenge: </span>
                  {c.challenge}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  <span className="font-medium text-neutral-700">Result: </span>
                  {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary flex items-center gap-2 mx-auto w-fit">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}