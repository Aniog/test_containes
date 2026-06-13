import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Consumer Electronics',
    title: 'Bluetooth Speaker Manufacturing for US Retailer',
    challenge: 'A US-based electronics retailer needed a reliable factory to manufacture custom Bluetooth speakers. They had previously experienced quality issues with a supplier found on a B2B platform, including inconsistent sound quality and delayed deliveries.',
    solution: 'We audited 8 factories in Shenzhen and Dongguan, evaluating production lines, quality control processes, and previous client references. We selected a factory with ISO 9001 certification and a dedicated QC team. We negotiated pricing 12% below the client\'s previous supplier and established a weekly production reporting system.',
    actions: [
      'Audited 8 factories across 2 cities',
      'Selected ISO 9001 certified manufacturer',
      'Negotiated 12% cost reduction',
      'Implemented weekly production reports',
      'Conducted pre-shipment inspection on 50,000 units',
    ],
    result: 'Delivered 50,000 units on schedule with a 98.5% pass rate on pre-shipment inspection. The client has since placed 3 repeat orders.',
    metrics: [
      { label: 'Units Delivered', value: '50,000' },
      { label: 'QC Pass Rate', value: '98.5%' },
      { label: 'Cost Savings', value: '12%' },
    ],
  },
  {
    industry: 'Textiles & Apparel',
    title: 'Apparel Production for European Fashion Brand',
    challenge: 'A German fashion brand wanted to move production from Turkey to China to reduce costs but had no local contacts or experience with Chinese garment manufacturers. They were concerned about quality consistency and communication barriers.',
    solution: 'We identified 3 suitable garment factories in Guangzhou with experience serving European brands. We arranged video factory tours, coordinated sample production, and provided bilingual support throughout negotiations. We established a production monitoring system with photo updates at each stage.',
    actions: [
      'Identified 3 experienced garment factories',
      'Arranged virtual factory tours',
      'Coordinated sample production for 4 collections',
      'Provided bilingual negotiation support',
      'Implemented photo-based production monitoring',
    ],
    result: 'Reduced unit cost by 35% while maintaining quality standards across 4 seasonal collections. The client now sources 80% of their production through us.',
    metrics: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Collections Managed', value: '4' },
      { label: 'Production Shifted', value: '80%' },
    ],
  },
  {
    industry: 'Machinery',
    title: 'Custom Hydraulic Components for Australian Construction Company',
    challenge: 'An Australian construction equipment company needed custom hydraulic cylinders with specific ISO certifications. They required a manufacturer capable of precision machining and willing to produce custom designs in medium batch sizes.',
    solution: 'We sourced 5 certified hydraulic component manufacturers, arranged third-party testing of samples, and coordinated a factory visit for the client\'s engineering team. We managed the entire order from specification confirmation through final inspection and shipping.',
    actions: [
      'Sourced 5 certified manufacturers',
      'Arranged third-party sample testing',
      'Coordinated client factory visit',
      'Managed specification confirmation',
      'Conducted final inspection and shipping coordination',
    ],
    result: 'Successfully delivered ISO-certified hydraulic components 2 weeks ahead of schedule. All units passed the client\'s incoming quality inspection.',
    metrics: [
      { label: 'Delivery', value: '2 weeks early' },
      { label: 'Incoming QC', value: '100% pass' },
      { label: 'Certifications', value: 'ISO 9001' },
    ],
  },
  {
    industry: 'Home & Garden',
    title: 'Furniture Sourcing for UK Online Retailer',
    challenge: 'A UK-based online furniture retailer wanted to expand their product range with mid-range dining tables and chairs. They needed a factory capable of consistent quality, FSC-certified wood sourcing, and flat-pack packaging for efficient shipping.',
    solution: 'We found a furniture manufacturer in Foshan with FSC certification and experience exporting to the UK market. We coordinated sample production, arranged drop testing for packaging, and managed a trial order of 500 units before scaling to regular monthly orders.',
    actions: [
      'Found FSC-certified furniture manufacturer',
      'Coordinated sample production and evaluation',
      'Arranged packaging drop testing',
      'Managed trial order of 500 units',
      'Scaled to regular monthly orders',
    ],
    result: 'Successfully launched 6 new furniture SKUs with consistent quality. Monthly order volume grew from 500 to 2,000 units within 6 months.',
    metrics: [
      { label: 'New SKUs', value: '6' },
      { label: 'Monthly Volume', value: '2,000 units' },
      { label: 'Growth Period', value: '6 months' },
    ],
  },
  {
    industry: 'Packaging',
    title: 'Custom Packaging for US Cosmetics Brand',
    challenge: 'A US cosmetics startup needed custom printed boxes and bottles for their product launch. They required a supplier that could handle small initial orders (5,000 units) with high-quality printing and the ability to scale quickly.',
    solution: 'We identified a packaging manufacturer in Yiwu specializing in cosmetics packaging with low minimum order quantities. We coordinated print proofs, color matching, and material samples. We managed the initial order and set up a framework for rapid reorders.',
    actions: [
      'Found low-MOQ packaging specialist',
      'Coordinated print proofs and color matching',
      'Managed material sample approval',
      'Handled initial 5,000 unit order',
      'Set up rapid reorder framework',
    ],
    result: 'Delivered packaging on time for product launch. Client scaled to 20,000 units per month within 3 months with consistent print quality.',
    metrics: [
      { label: 'Initial Order', value: '5,000 units' },
      { label: 'Scaled To', value: '20,000/mo' },
      { label: 'Print Quality', value: 'Consistent' },
    ],
  },
  {
    industry: 'Auto Parts',
    title: 'Aftermarket Car Parts for European Distributor',
    challenge: 'A European auto parts distributor needed a reliable source for aftermarket brake pads and filters. They required a manufacturer with IATF 16949 certification and the ability to produce parts matching OEM specifications.',
    solution: 'We sourced 4 IATF 16949 certified manufacturers, arranged sample testing against OEM specifications, and negotiated pricing for a multi-SKU order. We implemented batch-level quality tracking for ongoing orders.',
    actions: [
      'Sourced 4 IATF 16949 certified factories',
      'Arranged OEM specification testing',
      'Negotiated multi-SKU pricing',
      'Implemented batch-level quality tracking',
      'Coordinated consolidated shipping',
    ],
    result: 'Established a reliable supply chain for 15 SKUs with consistent quality. Return rate dropped from 8% to under 1% compared to previous supplier.',
    metrics: [
      { label: 'SKUs Sourced', value: '15' },
      { label: 'Return Rate', value: '< 1%' },
      { label: 'Previous Rate', value: '8%' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Case Studies</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Real examples of how we have helped buyers source successfully from China. Each case shows the challenge, our approach, and the results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12`}>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full mb-4">
                    {cs.industry}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{cs.title}</h2>

                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                    <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Our Approach</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{cs.solution}</p>
                    <ul className="space-y-2">
                      {cs.actions.map((action, ai) => (
                        <li key={ai} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-slate-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-1">Result</h3>
                    <p className="text-sm text-green-800 leading-relaxed">{cs.result}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {cs.metrics.map((metric, mi) => (
                      <div key={mi} className="p-4 bg-slate-50 rounded-lg text-center border border-slate-200">
                        <div className="text-2xl font-bold text-blue-700">{metric.value}</div>
                        <div className="text-xs text-slate-500 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="aspect-video bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Project photo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Want Similar Results?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
