import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Clock,
  Award,
  Factory,
  ShoppingBag,
  Cpu,
  Home
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'How We Helped an Electronics Retailer Reduce Sourcing Costs by 22%',
    client: 'US-based Electronics Retailer',
    industry: 'Electronics',
    challenge: 'The client was struggling with inconsistent product quality and high costs from their existing suppliers. They needed a reliable sourcing partner to help them find better suppliers and improve quality control.',
    solution: 'We identified 5 new verified suppliers, conducted factory audits, negotiated better pricing, and implemented a quality inspection process. We also helped them consolidate orders to achieve better MOQs.',
    results: [
      'Reduced sourcing costs by 22%',
      'Improved product quality from 85% to 98% pass rate',
      'Reduced defect-related returns by 65%',
      'Established relationships with 3 long-term suppliers',
    ],
    metrics: [
      { label: 'Cost Reduction', value: '22%', icon: DollarSign },
      { label: 'Quality Improvement', value: '13%', icon: Award },
      { label: 'Return Reduction', value: '65%', icon: TrendingUp },
    ],
  },
  {
    id: 2,
    title: 'Launching 12 New Products in 6 Months for a Home Goods Brand',
    client: 'European Home Goods Brand',
    industry: 'Home & Garden',
    challenge: 'The client wanted to expand their product line but lacked the local presence and expertise to find reliable suppliers in China. They needed help with the entire sourcing process.',
    solution: 'We conducted comprehensive supplier searches, verified factories, coordinated samples, and managed the production process for 12 different product categories. We also handled quality inspections and shipping coordination.',
    results: [
      'Successfully launched 12 new products',
      'On-time delivery for all product launches',
      'Average cost savings of 18% compared to previous suppliers',
      'Zero major quality issues post-launch',
    ],
    metrics: [
      { label: 'Products Launched', value: '12', icon: Factory },
      { label: 'On-Time Delivery', value: '100%', icon: Clock },
      { label: 'Cost Savings', value: '18%', icon: DollarSign },
    ],
  },
  {
    id: 3,
    title: 'Reducing Defect Rate from 8% to 1.5% for an Apparel Company',
    client: 'Australian Apparel Brand',
    industry: 'Apparel & Textiles',
    challenge: 'The client was experiencing high defect rates (8%) with their existing suppliers, leading to customer complaints and returns. They needed a robust quality control system.',
    solution: 'We implemented a multi-stage inspection process including pre-production, during production, and pre-shipment inspections. We also worked with suppliers to improve their quality management systems.',
    results: [
      'Reduced defect rate from 8% to 1.5%',
      'Decreased customer returns by 70%',
      'Improved supplier quality systems',
      'Established long-term quality partnerships',
    ],
    metrics: [
      { label: 'Defect Reduction', value: '81%', icon: Award },
      { label: 'Return Reduction', value: '70%', icon: TrendingUp },
      { label: 'Client Satisfaction', value: '98%', icon: CheckCircle2 },
    ],
  },
  {
    id: 4,
    title: 'Helping a Startup Source Custom Electronics at Competitive Prices',
    client: 'US Tech Startup',
    industry: 'Electronics',
    challenge: 'A startup needed to source custom electronic products with specific requirements but had limited budget and no existing supplier network in China.',
    solution: 'We found specialized manufacturers capable of producing custom products, negotiated favorable terms for a startup, and managed the entire production and shipping process.',
    results: [
      'Found 2 capable custom manufacturers',
      'Negotiated startup-friendly payment terms',
      'Successfully launched first production run',
      'Established foundation for scaling production',
    ],
    metrics: [
      { label: 'Budget Efficiency', value: '95%', icon: DollarSign },
      { label: 'Time to Market', value: '4 months', icon: Clock },
      { label: 'Quality Score', value: 'A+', icon: Award },
    ],
  },
  {
    id: 5,
    title: 'Streamlining Supply Chain for a Multi-Category Retailer',
    client: 'Canadian Retail Chain',
    industry: 'Multi-Category',
    challenge: 'The client was sourcing from multiple suppliers across different categories with no centralized management, leading to inconsistent quality and logistics issues.',
    solution: 'We consolidated their supplier base, implemented standardized quality processes, and created a unified logistics solution for all product categories.',
    results: [
      'Consolidated 15 suppliers to 8 trusted partners',
      'Standardized quality processes across all categories',
      'Reduced logistics costs by 15%',
      'Improved delivery reliability to 98%',
    ],
    metrics: [
      { label: 'Supplier Consolidation', value: '47%', icon: Factory },
      { label: 'Logistics Savings', value: '15%', icon: DollarSign },
      { label: 'Delivery Reliability', value: '98%', icon: Clock },
    ],
  },
  {
    id: 6,
    title: 'Navigating Trade Compliance for Medical Device Components',
    client: 'German Medical Device Manufacturer',
    industry: 'Industrial / Medical',
    challenge: 'The client needed to source medical-grade components with strict compliance requirements and certifications.',
    solution: 'We identified suppliers with ISO 13485 certification, conducted detailed compliance audits, and managed the documentation required for medical device components.',
    results: [
      'Identified 3 ISO 13485 certified suppliers',
      'Passed all compliance audits',
      'Established traceability documentation',
      'Successful first production run',
    ],
    metrics: [
      { label: 'Compliance Rate', value: '100%', icon: Award },
      { label: 'Audit Pass Rate', value: '100%', icon: CheckCircle2 },
      { label: 'Traceability', value: 'Full', icon: Factory },
    ],
  },
]

const industries = [
  { name: 'Electronics', icon: Cpu, count: 45 },
  { name: 'Home & Garden', icon: Home, count: 38 },
  { name: 'Apparel & Textiles', icon: ShoppingBag, count: 32 },
  { name: 'Industrial Equipment', icon: Factory, count: 28 },
]

function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Real results from real clients. See how we've helped businesses like yours source products from China successfully.
            </p>
            <Link to="/contact">
              <Button size="lg">Start Your Success Story</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200">
                <industry.icon className="w-8 h-8 text-slate-600" />
                <div>
                  <div className="font-medium text-slate-900">{industry.name}</div>
                  <div className="text-sm text-slate-500">{industry.count} case studies</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-sm text-slate-500 mb-2">{study.industry} • {study.client}</div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Solution</h3>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline">
                      Discuss Your Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-6">Key Metrics</h3>
                    <div className="grid grid-cols-3 gap-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                            <metric.icon className="w-6 h-6 text-slate-700" />
                          </div>
                          <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                          <div className="text-xs text-slate-500">{metric.label}</div>
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

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200">
            <div className="text-4xl text-slate-300 mb-6">"</div>
            <blockquote className="text-xl lg:text-2xl text-slate-700 mb-8 leading-relaxed">
              SSourcing China has been an invaluable partner for our business. Their attention to detail, transparent communication, and commitment to quality has helped us scale our product line while maintaining high standards.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-600 font-medium">JD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">John Davis</div>
                <div className="text-sm text-slate-500">Procurement Director, TechRetail Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Every successful partnership starts with a conversation. Contact us to discuss your sourcing needs and learn how we can help you achieve similar results.
          </p>
          <Link to="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
