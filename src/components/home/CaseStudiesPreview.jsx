import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const caseStudies = [
  {
    client: 'US Home Goods Retailer',
    industry: 'Home & Garden',
    challenge: 'Needed to source 50+ SKUs of kitchen utensils from certified factories with FDA-compliant materials.',
    result: 'Reduced per-unit cost by 22% while maintaining FDA compliance. Delivered first order in 45 days.',
    quote: 'SSourcing China found us three qualified suppliers within two weeks. Their QC process saved us from a costly defect issue.',
    author: 'Mark T., Procurement Director',
  },
  {
    client: 'European Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'Required CE-certified Bluetooth speaker manufacturer with minimum 10,000 units/month capacity.',
    result: 'Identified 4 verified factories, delivered samples in 10 days. Negotiated 18% cost reduction vs. previous supplier.',
    quote: 'Their factory audit report was more detailed than anything we had received from other agents.',
    author: 'Anna K., Supply Chain Manager',
  },
  {
    client: 'Australian Fitness Company',
    industry: 'Sports & Fitness',
    challenge: 'Sourcing custom-branded resistance bands and yoga mats with specific material requirements.',
    result: 'Private label production launched within 60 days. Zero defects in the first 5,000-unit shipment.',
    quote: 'We went from searching Alibaba to having a reliable supply chain in under two months.',
    author: 'James L., Founder',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Case Studies"
          title="Real Results for Real Businesses"
          description="See how we have helped companies across industries build reliable supply chains in China."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl p-6 md:p-7 border border-neutral-200 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">{study.industry}</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{study.client}</h3>
              <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                <span className="font-medium text-neutral-700">Challenge:</span> {study.challenge}
              </p>
              <p className="text-sm text-neutral-700 mb-5 leading-relaxed bg-green-50 p-3 rounded-lg">
                <span className="font-semibold text-green-700">Result:</span> {study.result}
              </p>
              <div className="mt-auto pt-4 border-t border-neutral-100">
                <div className="flex gap-2 text-neutral-400 mb-2">
                  <Quote className="w-4 h-4 shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-neutral-600 italic leading-relaxed">{study.quote}</p>
                <p className="text-xs text-neutral-400 mt-2 font-medium">- {study.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            View all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
