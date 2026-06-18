import { Link } from 'react-router-dom'
import { ArrowRight, Factory, TrendingUp, Clock, Shield, CheckCircle, Globe, Package, Users } from 'lucide-react'

const caseStudies = [
  {
    id: 'home-textiles',
    client: 'European Retail Chain',
    location: 'Germany',
    industry: 'Home & Textiles',
    year: '2024',
    challenge: 'A major European retail chain needed to source 50,000+ home textile products (bedding, curtains, cushions) from China with strict quality requirements and tight delivery schedule for holiday season.',
    approach: [
      'Identified 3 verified factories with appropriate certifications',
      'Conducted on-site factory audits to verify production capacity',
      'Implemented weekly QC visits during production',
      'Coordinated sea freight with consolidated shipping',
    ],
    results: [
      { label: 'Quality Pass Rate', value: '99.2%' },
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Cost Savings', value: '23%' },
      { label: 'Repeat Orders', value: '4' },
    ],
    testimonial: {
      text: 'SSourcing China transformed our sourcing process. Their verification and QC services gave us confidence in our suppliers, and the quality exceeded our expectations.',
      author: 'Procurement Director',
      company: 'European Retail Chain',
    },
  },
  {
    id: 'electronics-startup',
    client: 'US Tech Startup',
    location: 'United States',
    industry: 'Electronics',
    year: '2024',
    challenge: 'A US-based tech startup was launching their first consumer electronics product. Being first-time buyers from China, they were concerned about IP theft, supplier reliability, and quality control.',
    approach: [
      'Conducted comprehensive factory verification including IP protection assessment',
      'Implemented strict NDA requirements with all suppliers',
      'Established multi-stage QC protocol with detailed specifications',
      'Provided secure sample handling and tracking',
    ],
    results: [
      { label: 'IP Protection', value: '100%' },
      { label: 'Quality Pass Rate', value: '98.5%' },
      { label: 'Time to Market', value: '4 months' },
      { label: 'Production Runs', value: '3 successful' },
    ],
    testimonial: {
      text: 'As a startup, we couldn\'t afford to make mistakes. SSourcing China guided us through every step and protected our interests. Highly recommended for any tech company sourcing from China.',
      author: 'CEO',
      company: 'US Tech Startup',
    },
  },
  {
    id: 'packaging-distributor',
    client: 'Australian Distributor',
    location: 'Australia',
    industry: 'Packaging',
    year: '2023',
    challenge: 'An Australian packaging distributor needed custom-printed packaging boxes for a major retail client with a tight 6-week timeline for holiday season delivery.',
    approach: [
      'Identified specialized packaging factory with printing capabilities',
      'Expedited sample production for quick approval',
      'Managed production timeline with daily updates',
      'Arranged air freight to meet deadline',
    ],
    results: [
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Client Satisfaction', value: 'Very High' },
      { label: 'Timeline', value: '5 weeks' },
      { label: 'Follow-up Orders', value: '6+' },
    ],
    testimonial: {
      text: 'They delivered when others said it was impossible. The quality was excellent and our client was thrilled. SSourcing China is now our go-to partner for China sourcing.',
      author: 'Managing Director',
      company: 'Australian Packaging Distributor',
    },
  },
  {
    id: 'furniture-retailer',
    client: 'Canadian Furniture Retailer',
    location: 'Canada',
    industry: 'Furniture',
    year: '2023',
    challenge: 'A Canadian furniture retailer wanted to expand their product line with modern furniture from China but had concerns about quality consistency and shipping damage.',
    approach: [
      'Sourced multiple factories specializing in different furniture categories',
      'Implemented rigorous pre-shipment inspection protocol',
      'Coordinated custom packaging to prevent shipping damage',
      'Established long-term partnerships with quality factories',
    ],
    results: [
      { label: 'Damage Rate', value: '<0.5%' },
      { label: 'Quality Consistency', value: '97%' },
      { label: 'Product Range', value: '12 new items' },
      { label: 'Revenue Growth', value: '35%' },
    ],
    testimonial: {
      text: 'The attention to detail was impressive. They even helped us improve our packaging to reduce shipping damage. Our customers love the products.',
      author: 'Owner',
      company: 'Canadian Furniture Retailer',
    },
  },
  {
    id: 'beauty-brand',
    client: 'UK Beauty Brand',
    location: 'United Kingdom',
    industry: 'Health & Beauty',
    year: '2024',
    challenge: 'A UK beauty brand needed to source private-label cosmetics and skincare products with specific formulations and sustainable packaging requirements.',
    approach: [
      'Identified factories with cosmetic manufacturing certifications',
      'Coordinated product development and formulation',
      'Sourced sustainable packaging materials',
      'Ensured compliance with EU regulations',
    ],
    results: [
      { label: 'Products Launched', value: '24 SKUs' },
      { label: 'Compliance', value: '100%' },
      { label: 'Time to Market', value: '5 months' },
      { label: 'Customer Satisfaction', value: '4.8/5' },
    ],
    testimonial: {
      text: 'They understood our brand requirements and found factories that could meet our exact specifications. The product quality is outstanding.',
      author: 'Founder',
      company: 'UK Beauty Brand',
    },
  },
  {
    id: 'machinery-company',
    client: 'Mexican Industrial Company',
    location: 'Mexico',
    industry: 'Industrial Machinery',
    year: '2023',
    challenge: 'A Mexican industrial company needed to source specialized machinery parts with precise specifications and technical drawings.',
    approach: [
      'Matched with factories specializing in precision engineering',
      'Facilitated technical discussions between engineering teams',
      'Implemented strict quality control for each production batch',
      'Coordinated logistics including customs clearance',
    ],
    results: [
      { label: 'Parts Accuracy', value: '99.8%' },
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Delivery', value: 'On schedule' },
      { label: 'Partnership', value: 'Ongoing' },
    ],
    testimonial: {
      text: 'The technical expertise was crucial for our project. They bridged the language gap and ensured our specifications were met exactly. Exceptional service.',
      author: 'Engineering Manager',
      company: 'Mexican Industrial Company',
    },
  },
]

const stats = [
  { icon: Users, value: '500+', label: 'Clients Worldwide' },
  { icon: Factory, value: '2000+', label: 'Factories Verified' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-300">
              Real success stories from businesses who trusted us with their China sourcing. 
              See how we've helped companies worldwide achieve their sourcing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500">{study.location}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{study.client}</h2>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Our Approach:</h3>
                    <ul className="space-y-2">
                      {study.approach.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Results:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-blue-900">{result.value}</div>
                          <div className="text-sm text-gray-600">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 mb-6">
                    <Factory className="w-20 h-20 text-blue-900 mx-auto" />
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-gray-600">"</span>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">{study.testimonial.text}</p>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="font-medium text-gray-900">{study.testimonial.author}</div>
                      <div className="text-sm text-gray-500">{study.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join hundreds of satisfied clients who have transformed their China sourcing with us.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}