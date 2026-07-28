import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Shield, DollarSign, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    title: 'US Retailer Saves 23% on Electronics Sourcing',
    category: 'Electronics',
    client: 'Mid-size US electronics retailer',
    challenge: 'A US retailer was struggling with inconsistent quality from their existing Chinese supplier and needed a reliable manufacturer for consumer electronics including Bluetooth speakers and phone accessories.',
    solution: 'We identified a verified factory in Shenzhen with strong quality management systems. We negotiated pricing, arranged samples, and managed the entire production process with regular quality inspections.',
    result: '23% cost reduction compared to previous supplier, zero defect rate on first shipment, and a long-term partnership established.',
    metrics: [
      { label: 'Cost Savings', value: '23%' },
      { label: 'Defect Rate', value: '0%' },
      { label: 'On-Time Delivery', value: '100%' },
    ],
  },
  {
    title: 'European Brand Launches Textile Line from China',
    category: 'Textiles',
    client: 'European fashion startup',
    challenge: 'A European fashion startup wanted to produce a clothing line in China but had no local contacts, did not speak the language, and was concerned about quality and compliance.',
    solution: 'We sourced three qualified factories in Guangzhou, arranged sample production, and oversaw the first production run with detailed quality inspections at every stage.',
    result: 'Successful product launch, on-time delivery, full compliance with European textile standards, and a foundation for future collections.',
    metrics: [
      { label: 'Products Launched', value: '45 SKUs' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Delivery On Time', value: 'Yes' },
    ],
  },
  {
    title: 'Australian Company Avoids $50K in Defective Goods',
    category: 'Quality Control',
    client: 'Australian home goods importer',
    challenge: 'An Australian company was about to receive a full container of ceramic tableware from a new supplier. They engaged us for a pre-shipment inspection.',
    solution: 'Our inspection team discovered critical quality issues including inconsistent glazing, incorrect dimensions, and packaging that would not survive international shipping. We worked with the factory to correct the issues before shipment.',
    result: 'Approximately $50,000 in potential losses prevented. The corrected shipment arrived in perfect condition.',
    metrics: [
      { label: 'Losses Prevented', value: '$50K' },
      { label: 'Issues Found', value: '3 critical' },
      { label: 'Final Quality', value: 'Passed' },
    ],
  },
  {
    title: 'Canadian Startup Sources Custom Packaging',
    category: 'Packaging',
    client: 'Canadian e-commerce startup',
    challenge: 'A Canadian startup needed custom branded packaging for their subscription box service but had no experience working with Chinese packaging manufacturers.',
    solution: 'We identified a packaging factory with experience in custom printing, coordinated design files, arranged samples, and managed production with color-matching quality checks.',
    result: 'High-quality custom packaging delivered on time and within budget, enabling a successful product launch.',
    metrics: [
      { label: 'Cost vs Local', value: '40% less' },
      { label: 'Quality Rating', value: 'Excellent' },
      { label: 'Lead Time', value: '3 weeks' },
    ],
  },
  {
    title: 'UK Distributor Finds Reliable Machinery Supplier',
    category: 'Machinery',
    client: 'UK industrial equipment distributor',
    challenge: 'A UK distributor needed a reliable manufacturer for CNC machine parts but had received poor quality products from previous suppliers.',
    solution: 'We conducted thorough factory audits, verified ISO certifications, and arranged third-party material testing. We also implemented a strict quality inspection protocol for every shipment.',
    result: 'Consistent quality across multiple orders, reduced return rate by 85%, and established a trusted long-term supply relationship.',
    metrics: [
      { label: 'Return Rate Reduction', value: '85%' },
      { label: 'Orders Completed', value: '24+' },
      { label: 'Quality Consistency', value: 'High' },
    ],
  },
  {
    title: 'US Brand Coordinates Full Supply Chain for Beauty Products',
    category: 'Beauty & Personal Care',
    client: 'US beauty brand',
    challenge: 'A US beauty brand wanted to manufacture skincare products in China but needed help with supplier verification, regulatory compliance, and international shipping.',
    solution: 'We verified factory certifications (GMP, ISO 22716), coordinated product testing, managed production, and handled all shipping and customs documentation for FDA-compliant import.',
    result: 'Successful product launch with full regulatory compliance, on-time delivery, and a streamlined supply chain for future orders.',
    metrics: [
      { label: 'Compliance', value: 'Full' },
      { label: 'Products Launched', value: '12 SKUs' },
      { label: 'Shipping Time', value: '18 days' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-4">Case Studies</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Real results from real buyers who trusted us with their China sourcing. See how we have helped businesses save costs, improve quality, and reduce risk.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((study, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={`lg:col-span-3 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">{study.category}</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <h2 className="heading-2 text-slate-900 mb-2">{study.title}</h2>
                  <p className="text-sm text-slate-500 mb-6">Client: {study.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-700" />
                        Challenge
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-700" />
                        Our Solution
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-blue-700" />
                        Results
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                    <h3 className="font-semibold text-slate-900 mb-4">Key Metrics</h3>
                    <div className="space-y-4">
                      {study.metrics.map((metric, j) => (
                        <div key={j} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-sm text-slate-600">{metric.label}</span>
                          <span className="font-bold text-blue-700">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Want Similar Results for Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help. Get started with a free consultation.
          </p>
          <Link to="/contact" className="btn-accent text-lg">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
