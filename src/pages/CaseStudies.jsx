import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, CheckCircle } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const caseStudies = [
  {
    id: 'cs-led-lamps',
    industry: 'Consumer Electronics',
    client: 'European Retailer',
    country: 'Germany',
    title: 'Sourcing 50,000 LED Desk Lamps with Custom Branding',
    challenge: 'A German retailer needed a reliable supplier for private-label LED desk lamps meeting EU CE and RoHS standards, with a 90-day lead time and a target unit price 20% below their existing supplier.',
    approach: 'We identified 6 potential suppliers, conducted factory audits on the top 3, and negotiated pricing with 2 finalists. We coordinated CE and RoHS testing through an accredited lab and managed the full production cycle.',
    result: 'Delivered 50,000 units on time, 18% below the client\'s initial budget. All units passed CE and RoHS certification. The client has since placed 3 repeat orders.',
    metrics: [
      { label: 'Cost Reduction', value: '18%' },
      { label: 'Lead Time', value: '87 days' },
      { label: 'Defect Rate', value: '0.3%' },
    ],
  },
  {
    id: 'cs-bamboo-furniture',
    industry: 'Furniture',
    client: 'US E-commerce Brand',
    country: 'United States',
    title: 'Developing a New Line of Bamboo Office Furniture',
    challenge: 'A US e-commerce brand wanted to launch a bamboo office furniture line but had no existing supplier relationships in China. They required custom designs, CARB P2 compliance, and a 4-month development timeline.',
    approach: 'We sourced 2 specialized bamboo furniture factories in Zhejiang province, managed 3 rounds of sample development, coordinated CARB P2 testing, and oversaw production of the initial 500-unit run.',
    result: 'Product launched on schedule with full CARB P2 compliance. The client achieved a 22% lower unit cost than comparable US-made alternatives. The furniture line became their top-selling category within 6 months.',
    metrics: [
      { label: 'Cost vs. US-made', value: '−22%' },
      { label: 'Development Time', value: '4 months' },
      { label: 'Compliance', value: 'CARB P2' },
    ],
  },
  {
    id: 'cs-sportswear-qc',
    industry: 'Apparel',
    client: 'Australian Fashion Brand',
    country: 'Australia',
    title: 'Reducing Defect Rates on a 10,000-Unit Sportswear Order',
    challenge: 'An Australian sportswear brand had experienced an 8.2% defect rate on their previous order from a Chinese supplier — inconsistent sizing, stitching defects, and incorrect labeling. They needed a reliable QC process for their next order.',
    approach: 'We implemented a 3-stage inspection protocol: pre-production material check, mid-production DUPRO inspection, and pre-shipment inspection. We also introduced an AQL sampling standard and provided the factory with a detailed quality checklist.',
    result: 'Defect rate dropped from 8.2% to under 0.5%. The client received goods on time with no customs issues. They reordered within 60 days and have since expanded to 3 additional product lines.',
    metrics: [
      { label: 'Defect Rate', value: '0.5%' },
      { label: 'Previous Rate', value: '8.2%' },
      { label: 'Reorder Time', value: '60 days' },
    ],
  },
  {
    id: 'cs-hardware-tools',
    industry: 'Hardware',
    client: 'UK Distributor',
    country: 'United Kingdom',
    title: 'Building a Reliable Supply Chain for Hand Tools',
    challenge: 'A UK hardware distributor was sourcing hand tools from multiple unreliable suppliers, resulting in inconsistent quality and frequent stockouts. They needed a consolidated, reliable supply chain.',
    approach: 'We audited 8 factories across Zhejiang and Guangdong, selected 2 primary suppliers, and established a quarterly ordering schedule with buffer stock agreements. We implemented ongoing QC inspections for every shipment.',
    result: 'Consolidated from 6 suppliers to 2. Stockout incidents reduced by 90%. Average unit cost reduced by 14% through volume consolidation. The client now operates on a predictable quarterly import cycle.',
    metrics: [
      { label: 'Supplier Consolidation', value: '6 → 2' },
      { label: 'Cost Reduction', value: '14%' },
      { label: 'Stockout Reduction', value: '90%' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Results for Real Clients</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical examples of how we've helped global buyers source smarter, reduce costs, and improve quality.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-[#1a4f8a]/10 text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full">{cs.industry}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{cs.client}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{cs.country}</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-[#0d2340] mb-6">{cs.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Our Approach</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Result</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-[#f4f6f9] rounded-xl p-3 text-center">
                        <div className="text-[#1a4f8a] font-bold text-lg">{m.value}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Start Your Sourcing Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
