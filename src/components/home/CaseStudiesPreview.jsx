import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp } from 'lucide-react'

const cases = [
  {
    client: 'European Retail Chain',
    title: 'Sourcing $2M in Private Label Kitchenware',
    result: '32% cost reduction, zero defect rate on first shipment',
    desc: 'We sourced 12 new suppliers, conducted factory audits, and managed QC for a 40-SKU kitchenware rollout across 200+ stores.',
    imgId: 'case-kitchenware',
    titleId: 'case-title-1',
    descId: 'case-desc-1',
  },
  {
    client: 'US E-commerce Brand',
    title: 'Scaling Electronics Accessories from 0 to $500K/month',
    result: '4-month launch timeline, 15% below target cost',
    desc: 'Starting from a product idea, we found manufacturers, verified compliance, and scaled production from prototype to full run.',
    imgId: 'case-electronics',
    titleId: 'case-title-2',
    descId: 'case-desc-2',
  },
  {
    client: 'Australian Distributor',
    title: 'Industrial Equipment Sourcing for Mining Sector',
    result: '3 suppliers verified, $1.2M annual contract secured',
    desc: 'Our team audited heavy machinery parts factories and negotiated contract terms that included warranty protections.',
    imgId: 'case-industrial',
    titleId: 'case-title-3',
    descId: 'case-desc-3',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a2b4a] mb-4">
            Client Success Stories
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            Real results for real businesses. See how we have helped buyers like you succeed in China.
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col lg:flex-row gap-0 lg:gap-0 rounded-xl overflow-hidden border border-[#e2e8f0] bg-white transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="lg:w-2/5 overflow-hidden shrink-0">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-56 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#c4951a] uppercase tracking-wide">
                    {c.client}
                  </span>
                </div>
                <h3
                  id={c.titleId}
                  className="text-lg md:text-xl font-bold text-[#1a2b4a] mb-2"
                >
                  {c.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-[#16a34a]" />
                  <span className="text-sm font-semibold text-[#16a34a]">
                    {c.result}
                  </span>
                </div>
                <p
                  id={c.descId}
                  className="text-sm text-[#64748b] leading-relaxed mb-5"
                >
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
