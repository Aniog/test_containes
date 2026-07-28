import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Retailer Reduces Costs by 35%',
    industry: 'Home & Garden',
    description: 'A mid-size US retailer needed to source kitchenware from China but struggled with inconsistent quality. We verified 12 suppliers, conducted QC inspections, and delivered products that passed all US safety standards.',
    result: '35% cost reduction',
    resultIcon: DollarSign,
    imgId: 'case-study-1',
    titleId: 'case-study-1-title',
    descId: 'case-study-1-desc',
  },
  {
    title: 'European Brand Launches Product Line in 8 Weeks',
    industry: 'Electronics',
    description: 'A European electronics brand needed to launch a new product line quickly. We sourced certified suppliers, managed samples, monitored production, and coordinated air freight to meet their tight deadline.',
    result: '8-week turnaround',
    resultIcon: Clock,
    imgId: 'case-study-2',
    titleId: 'case-study-2-title',
    descId: 'case-study-2-desc',
  },
  {
    title: 'Australian Importer Scales to $2M Annual Orders',
    industry: 'Promotional Products',
    description: 'An Australian promotional products company wanted to scale their China sourcing operations. We built a supplier network, established QC processes, and now manage their ongoing production and logistics.',
    result: '$2M annual volume',
    resultIcon: TrendingUp,
    imgId: 'case-study-3',
    titleId: 'case-study-3-title',
    descId: 'case-study-3-desc',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 bg-brand-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Success Stories</span>
          <h2 id="cases-title" className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Real Results for Real Businesses
          </h2>
          <p id="cases-subtitle" className="mt-4 text-lg text-gray-600">
            See how we have helped companies around the world source products from China more efficiently and cost-effectively.
          </p>
        </div>
        
        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const ResultIcon = study.resultIcon
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[${study.descId}] [${study.titleId}] [cases-subtitle] [cases-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-brand-orange bg-orange-50 px-3 py-1 rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 id={study.titleId} className="text-lg font-semibold text-brand-navy mb-3">{study.title}</h3>
                  <p id={study.descId} className="text-sm text-gray-600 leading-relaxed mb-4">{study.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 rounded-lg px-3 py-2 w-fit">
                    <ResultIcon className="h-4 w-4" />
                    <span>{study.result}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium px-6">
            <Link to="/case-studies" className="flex items-center gap-2">
              View All Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
