import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, CheckCircle, Star } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Importer Saves 30% on Component Costs',
    category: 'Electronics',
    client: 'US-based electronics distributor',
    challenge: 'A US-based electronics company was struggling with rising component costs from their existing supplier. They needed to find alternative PCB manufacturers without compromising quality.',
    solution: 'We identified 3 qualified PCB manufacturers in Shenzhen and Dongguan, conducted thorough factory audits, and arranged sample production. After quality verification, we negotiated pricing that reduced their per-unit cost by 30%.',
    result: '30% cost reduction, 2-week faster delivery, consistent quality across 50,000+ units',
    metrics: [
      { label: 'Cost Savings', value: '30%' },
      { label: 'Delivery Improvement', value: '2 weeks' },
      { label: 'Units Produced', value: '50,000+' }
    ],
    icon: TrendingUp
  },
  {
    id: 2,
    title: 'Fashion Brand Avoids $50K Quality Disaster',
    category: 'Apparel',
    client: 'European fashion brand',
    challenge: 'A European fashion brand placed a large order for a seasonal clothing line. During our pre-shipment inspection, we discovered significant quality issues including color inconsistencies and stitching defects.',
    solution: 'We immediately halted the shipment, documented all issues with photos, and worked with the factory to implement corrective actions. The factory reworked the defective items before a second inspection confirmed quality standards were met.',
    result: '$50K in potential losses avoided, on-time delivery after rework, improved factory processes',
    metrics: [
      { label: 'Losses Avoided', value: '$50K' },
      { label: 'Defect Rate', value: '< 1%' },
      { label: 'Client Retention', value: '100%' }
    ],
    icon: Shield
  },
  {
    id: 3,
    title: 'Startup Launches Private Label Product Line',
    category: 'Consumer Goods',
    client: 'European e-commerce startup',
    challenge: 'A startup wanted to launch a private label home goods line but had no experience with Chinese manufacturing. They needed end-to-end support from supplier selection to delivery.',
    solution: 'We handled the entire process: identified suitable manufacturers, arranged product development and prototyping, managed production with regular QC checks, and coordinated shipping to their European warehouse.',
    result: 'Successful product launch, 15% profit margin, ongoing partnership for new product lines',
    metrics: [
      { label: 'Profit Margin', value: '15%' },
      { label: 'Time to Market', value: '8 weeks' },
      { label: 'Product Lines', value: '12 SKUs' }
    ],
    icon: Star
  },
  {
    id: 4,
    title: 'Automotive Parts Buyer Secures Reliable Supply Chain',
    category: 'Automotive',
    client: 'Australian automotive parts distributor',
    challenge: 'An Australian distributor needed a reliable source for aftermarket automotive parts. Previous suppliers had inconsistent quality and unreliable delivery schedules.',
    solution: 'We conducted extensive supplier verification, including factory audits and production capacity assessments. We established a quality control protocol with pre-shipment inspections for every order.',
    result: '99.5% on-time delivery rate, zero quality complaints in 12 months, 40% order volume increase',
    metrics: [
      { label: 'On-Time Delivery', value: '99.5%' },
      { label: 'Quality Complaints', value: '0' },
      { label: 'Volume Growth', value: '40%' }
    ],
    icon: CheckCircle
  },
  {
    id: 5,
    title: 'Retailer Consolidates Shipping from 8 Suppliers',
    category: 'Retail',
    client: 'UK-based home goods retailer',
    challenge: 'A UK retailer was sourcing from 8 different Chinese suppliers, managing separate shipments for each. This resulted in high shipping costs and complex logistics.',
    solution: 'We coordinated consolidation of all orders at our warehouse in Shenzhen. We optimized packaging, combined shipments, and handled all customs documentation for a single consolidated container.',
    result: '45% shipping cost reduction, simplified logistics, single point of contact for all suppliers',
    metrics: [
      { label: 'Shipping Savings', value: '45%' },
      { label: 'Suppliers Consolidated', value: '8' },
      { label: 'Containers Saved', value: '3/month' }
    ],
    icon: TrendingUp
  },
  {
    id: 6,
    title: 'Medical Device Company Achieves ISO Compliance',
    category: 'Medical',
    client: 'Canadian medical device company',
    challenge: 'A Canadian company needed a Chinese manufacturer for medical device components that met strict ISO 13485 standards. Finding a compliant supplier was critical.',
    solution: 'We identified manufacturers with proper medical device certifications, conducted specialized audits focusing on quality management systems, and facilitated the certification verification process.',
    result: 'ISO 13485 certified supplier secured, successful regulatory approval, ongoing production partnership',
    metrics: [
      { label: 'Certification', value: 'ISO 13485' },
      { label: 'Audit Score', value: '95/100' },
      { label: 'Partnership', value: '3+ years' }
    ],
    icon: Shield
  }
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Case Studies</h1>
            <p className="text-lg text-slate-300">Real results from real clients. See how we have helped businesses like yours source successfully from China.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">{study.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{study.title}</h2>
                  <p className="text-sm text-slate-500 mb-6">Client: {study.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Our Solution</h3>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <h3 className="font-semibold text-green-800 mb-1">Result</h3>
                      <p className="text-green-700">{study.result}</p>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-slate-50 rounded-2xl p-6 sticky top-24">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-200 rounded-xl flex items-center justify-center mb-6">
                      <study.icon className="w-20 h-20 text-blue-300" />
                    </div>
                    <div className="space-y-4">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="text-center p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                          <div className="text-sm text-slate-600">{metric.label}</div>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-blue-100 text-lg mb-8">Contact us today and let us help you achieve your sourcing goals.</p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
