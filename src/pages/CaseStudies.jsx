import { Link } from 'react-router-dom'
import { CheckCircle2, TrendingUp, Shield, Clock, ArrowRight } from 'lucide-react'
import CTABanner from '../components/CTABanner'

const caseStudies = [
  {
    id: 1,
    client: 'US Retail Company',
    industry: 'Home & Garden',
    challenge: 'A mid-size US retailer was experiencing inconsistent product quality and high defect rates (8%) from their existing Chinese supplier. Lead times were unpredictable, and they were paying above-market prices due to a lack of competitive sourcing.',
    solution: 'We conducted a comprehensive supplier audit of three alternative factories, comparing production capabilities, quality systems, and pricing. We then implemented a multi-stage QC process including pre-production material checks, during-production inspections, and pre-shipment final inspections.',
    results: [
      { metric: 'Cost Reduction', value: '32%' },
      { metric: 'Defect Rate', value: '<1.5%' },
      { metric: 'Delivery Improvement', value: '4 weeks faster' },
    ],
    timeline: '3 months',
    quote: 'SSourcing China did not just find us cheaper suppliers -- they fundamentally improved our quality process. The reduction in returns alone paid for their service many times over.',
    quoteName: 'David Chen, VP of Procurement',
  },
  {
    id: 2,
    client: 'European Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'A European electronics brand needed to scale production of a new Bluetooth speaker from prototype to 50,000 units within a tight 12-week window. They had no existing supplier relationships in China and needed end-to-end management.',
    solution: 'We sourced specialized audio manufacturers, managed tooling and mold development, coordinated three rounds of sample revisions, and oversaw the entire production process. Our QC team conducted inspections at each production milestone to ensure consistency.',
    results: [
      { metric: 'Units Delivered', value: '50,000' },
      { metric: 'On-Time Delivery', value: '100%' },
      { metric: 'Certification', value: 'FCC passed' },
    ],
    timeline: '12 weeks',
    quote: 'We went from a working prototype to 50,000 certified units in under three months. Their project management was outstanding -- every milestone was met on schedule.',
    quoteName: 'Thomas Muller, CEO',
  },
  {
    id: 3,
    client: 'Australian Importer',
    industry: 'Promotional Products',
    challenge: 'An Australian promotional products company needed a sourcing partner to manage 200+ SKUs with custom branding across multiple product categories. Their previous agent could not handle the complexity and volume.',
    solution: 'We established relationships with 15 specialized factories, each selected for specific product categories. We created standardized QC procedures, built a streamlined ordering system, and implemented batch inspection protocols to manage the high SKU count efficiently.',
    results: [
      { metric: 'Active SKUs', value: '200+' },
      { metric: 'Factory Partners', value: '15' },
      { metric: 'Order Accuracy', value: '99.2%' },
    ],
    timeline: '6 months',
    quote: 'They built us a sourcing infrastructure that scales. From 50 SKUs to over 200, the quality and reliability have remained consistently high.',
    quoteName: 'James Walker, Director of Operations',
  },
  {
    id: 4,
    client: 'Canadian Beauty Brand',
    industry: 'Beauty & Personal Care',
    challenge: 'A Canadian beauty brand was launching a new skincare line and needed custom packaging with specific material requirements, color matching, and regulatory compliance for North American and EU markets.',
    solution: 'We sourced packaging manufacturers experienced in cosmetics, managed color matching across three production batches, coordinated regulatory compliance documentation, and ensured all materials met FDA and EU standards.',
    results: [
      { metric: 'Color Match Accuracy', value: '99.8%' },
      { metric: 'Regulatory Compliance', value: 'FDA + EU' },
      { metric: 'Cost vs. Local', value: '45% savings' },
    ],
    timeline: '4 months',
    quote: 'The attention to detail on color matching and regulatory compliance was exactly what we needed. They understood our industry requirements from day one.',
    quoteName: 'Sarah Kim, Founder',
  },
  {
    id: 5,
    client: 'UK Hardware Distributor',
    industry: 'Industrial Equipment',
    challenge: 'A UK hardware distributor needed to source custom CNC-machined components with tight tolerances. Previous suppliers had quality consistency issues that caused assembly problems for their end customers.',
    solution: 'We identified factories with advanced CNC capabilities, conducted detailed technical audits including machine calibration verification, and implemented a rigorous first-article inspection process with ongoing statistical process control monitoring.',
    results: [
      { metric: 'Tolerance Achievement', value: '99.7%' },
      { metric: 'Customer Complaints', value: 'Reduced 90%' },
      { metric: 'Supplier Reliability', value: '3 verified sources' },
    ],
    timeline: '5 months',
    quote: 'For precision parts, you cannot afford to cut corners on supplier selection. SSourcing found us factories that consistently meet our tight tolerances.',
    quoteName: 'Robert Hughes, Technical Director',
  },
  {
    id: 6,
    client: 'Middle East Retail Chain',
    industry: 'Fashion & Apparel',
    challenge: 'A Middle East retail chain wanted to diversify their fashion supply chain away from a single supplier. They needed multiple verified alternatives for men casual wear with specific fabric requirements and competitive pricing.',
    solution: 'We audited 8 factories in the Guangzhou garment district, evaluated fabric sourcing capabilities, conducted sample comparisons, and helped the client establish relationships with 3 primary and 2 backup suppliers.',
    results: [
      { metric: 'Suppliers Verified', value: '8 audited, 5 selected' },
      { metric: 'Price Competitiveness', value: '18% lower avg.' },
      { metric: 'Supply Risk', value: 'Significantly reduced' },
    ],
    timeline: '2 months',
    quote: 'Having multiple verified suppliers gives us negotiating power and supply security. The factory audit reports were incredibly detailed and useful.',
    quoteName: 'Ahmed Al-Rashid, Procurement Head',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1B4D8E] py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-blue-200 font-medium mb-4">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Real Results from Real Projects</h1>
          <p className="text-lg text-gray-300 max-w-[600px] mx-auto">
            See how we have helped businesses across industries optimize their China sourcing operations.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-[#F8FAFC] rounded-2xl border border-gray-200 overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="text-xs font-semibold bg-[#1B4D8E]/10 text-[#1B4D8E] px-3 py-1.5 rounded-full">{cs.industry}</span>
                    <span className="text-xs font-medium text-gray-400">{cs.client}</span>
                    <span className="text-xs font-medium text-gray-400">Timeline: {cs.timeline}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#0F172A] mb-6">{cs.client} -- {cs.industry}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-2">Challenge</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1B4D8E] uppercase tracking-wide mb-2">Solution</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {cs.results.map(r => (
                      <div key={r.metric} className="bg-white rounded-lg p-4 border border-gray-100 text-center">
                        <div className="text-2xl font-extrabold text-[#1B4D8E] mb-1">{r.value}</div>
                        <div className="text-xs font-medium text-gray-500">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-[#F59E0B] pl-4 py-2">
                    <p className="text-sm text-gray-600 italic mb-2">"{cs.quote}"</p>
                    <cite className="text-xs font-semibold text-[#0F172A] not-italic">-- {cs.quoteName}, {cs.client}</cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Want Similar Results?" subtitle="Tell us about your sourcing challenge and we will put together a tailored solution." />
    </div>
  )
}
