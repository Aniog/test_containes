import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Package, Globe } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

const caseStudies = [
  {
    title: 'US Retail Chain Sources Home Goods',
    category: 'Home & Garden',
    description: 'A major US retailer partnered with us to source furniture and home decor from multiple Chinese manufacturers, reducing costs by 35%.',
    results: [
      { label: 'Cost Savings', value: '35%' },
      { label: 'Lead Time', value: '8 weeks' },
      { label: 'Quality Pass Rate', value: '98%' },
    ],
  },
  {
    title: 'European Tech Startup Electronics',
    category: 'Electronics',
    description: 'A Berlin-based startup needed consumer electronics manufactured with strict quality controls. We delivered on time with zero defects.',
    results: [
      { label: 'Defect Rate', value: '0%' },
      { label: 'Time Saved', value: '3 months' },
      { label: 'Suppliers Found', value: '5' },
    ],
  },
  {
    title: 'Australian Distributor Apparel',
    category: 'Textiles',
    description: 'An Australian fashion distributor needed fast production and shipping. Our QC and logistics coordination achieved 6-week turnaround.',
    results: [
      { label: 'Turnaround', value: '6 weeks' },
      { label: 'Shipments', value: '12/month' },
      { label: 'On-Time Rate', value: '100%' },
    ],
  },
]

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-slate-50" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Success Stories"
          subtitle="Real results for global buyers who trust our sourcing expertise"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.title} hover className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-secondary bg-secondary-50 px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{study.title}</h3>
              <p className="text-slate-600 mb-6 flex-1">{study.description}</p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <div className="text-2xl font-bold text-secondary">{result.value}</div>
                    <div className="text-xs text-slate-500">{result.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <button className="inline-flex items-center text-secondary font-semibold hover:text-secondary-600 transition-colors">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection