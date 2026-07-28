import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

const caseStudies = [
  {
    company: 'EuroHome GmbH',
    industry: 'Home & Furniture',
    country: 'Germany',
    challenge: 'Needed reliable supplier for custom furniture line after multiple quality issues with previous partner.',
    result: 'Found a certified manufacturer, established QC protocols, reduced defect rate from 12% to under 1%.',
    rating: 5,
  },
  {
    company: 'TechSphere Inc.',
    industry: 'Consumer Electronics',
    country: 'USA',
    challenge: 'Required mass production of Bluetooth accessories with strict quality standards.',
    result: 'Vetted 15 suppliers, selected top 3, implemented production monitoring, delivered on time within budget.',
    rating: 5,
  },
  {
    company: 'ModaViva',
    industry: 'Apparel & Fashion',
    country: 'Italy',
    challenge: 'Seasonal apparel line with tight deadlines and complex fabric specifications.',
    result: 'Coordinated with 4 fabric mills and 2 garment factories, met all seasonal deadlines, 100% on-time delivery.',
    rating: 5,
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">
          Real results for real clients. See how we have helped businesses source successfully from China.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {caseStudies.map((cs, index) => (
            <div key={index} className="card flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(cs.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span className="bg-gray-100 px-2 py-0.5 rounded">{cs.industry}</span>
                <span>{cs.country}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cs.company}</h3>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Challenge:</span> {cs.challenge}
              </p>
              <p className="text-sm text-gray-500 mb-4 flex-1">
                <span className="font-medium text-gray-700">Result:</span> {cs.result}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-primary inline-flex items-center gap-2">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}