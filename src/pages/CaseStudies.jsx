import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle,
  Star
} from 'lucide-react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200'
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
  }
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Section = ({ children, className = '' }) => (
  <section className={`py-16 md:py-20 ${className}`}>
    {children}
  </section>
)

const SectionTitle = ({ subtitle, title, description, className = '' }) => (
  <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
    {subtitle && <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg">{description}</p>}
  </div>
)

const caseStudies = [
  {
    id: 1,
    company: 'TechStart Inc.',
    industry: 'Electronics',
    location: 'United States',
    year: '2024',
    challenge: 'TechStart Inc., a US-based startup, needed to source 50,000 smart home devices from China with strict quality requirements and a tight timeline. They had no prior sourcing experience and were concerned about supplier reliability.',
    approach: 'We conducted a comprehensive supplier verification process, visiting 15 factories over 3 weeks. We performed thorough due diligence including factory audits, certification verification, and production capacity assessment. We selected 3 qualified suppliers and coordinated sample production for evaluation.',
    result: 'We delivered 50,000 units with less than 1% defect rate. The client saved 25% compared to their original budget through our negotiation expertise. The entire process, from request to delivery, was completed in 4 months.',
    metrics: [
      { label: 'Order Quantity', value: '50,000 units' },
      { label: 'Defect Rate', value: '< 1%' },
      { label: 'Cost Savings', value: '25%' },
      { label: 'Timeline', value: '4 months' },
    ],
    testimonial: {
      text: "SSourcing China transformed our sourcing experience. Their expertise in supplier verification gave us confidence in our choice, and their QC team ensured we received exactly what we expected. Highly recommended for any company sourcing from China.",
      author: 'Michael Chen',
      role: 'CEO, TechStart Inc.',
    },
  },
  {
    id: 2,
    company: 'Fashion Forward',
    industry: 'Apparel',
    location: 'United Kingdom',
    year: '2024',
    challenge: 'Fashion Forward, a UK fashion retailer, needed to source sustainable textile products from China with organic certifications. They required manufacturers who could meet strict environmental standards and provide traceable supply chains.',
    approach: 'We leveraged our extensive network to identify certified sustainable textile manufacturers. We coordinated factory visits, verified organic certifications (GOTS, OCS), and arranged for third-party sustainability audits. We also negotiated favorable payment terms and minimum order quantities.',
    result: 'We identified 5 certified manufacturers and helped the client establish a long-term partnership with their preferred supplier. The client achieved 20% lower pricing than initially quoted and secured a reliable supply chain for sustainable products.',
    metrics: [
      { label: 'Suppliers Found', value: '5 certified' },
      { label: 'Price Reduction', value: '20%' },
      { label: 'Certifications', value: 'GOTS, OCS' },
      { label: 'Partnership', value: 'Ongoing' },
    ],
    testimonial: {
      text: "Finding certified sustainable manufacturers in China was challenging until we worked with SSourcing China. Their knowledge of certifications and supplier networks is exceptional. They've become our trusted sourcing partner.",
      author: 'Sarah Williams',
      role: 'Procurement Director, Fashion Forward',
    },
  },
  {
    id: 3,
    company: 'HomeGoods Plus',
    industry: 'Home & Garden',
    location: 'Germany',
    year: '2023',
    challenge: 'HomeGoods Plus, a German home improvement retailer, needed to source a complete furniture set with custom designs and packaging. The order required coordination of multiple factories and strict quality standards for the European market.',
    approach: 'We coordinated with 3 specialized factories to produce different components of the furniture set. We performed in-person inspections at each production stage, coordinated quality control across all suppliers, and managed the complex logistics of combining shipments from multiple sources.',
    result: 'The order was delivered on time with zero quality issues. The client was so satisfied that they expanded their order volume by 300% in the following year. We continue to support their sourcing needs today.',
    metrics: [
      { label: 'Factories Coordinated', value: '3' },
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Quality Issues', value: '0' },
      { label: 'Volume Increase', value: '300%' },
    ],
    testimonial: {
      text: "The level of coordination and quality control SSourcing China provided was outstanding. They managed complex logistics seamlessly and maintained consistent quality across multiple suppliers. A truly professional partner.",
      author: 'Hans Mueller',
      role: 'Managing Director, HomeGoods Plus',
    },
  },
  {
    id: 4,
    company: 'MediCare Supplies',
    industry: 'Healthcare',
    location: 'Australia',
    year: '2024',
    challenge: 'MediCare Supplies, an Australian healthcare company, needed to source medical-grade equipment from China with TGA certification requirements. They required a supplier with proper regulatory compliance and quality management systems.',
    approach: 'We conducted a specialized supplier verification focusing on medical device regulations. We verified TGA-relevant certifications, quality management systems (ISO 13485), and factory capabilities for medical-grade production. We coordinated sample testing with Australian regulatory requirements.',
    result: 'We identified a fully compliant manufacturer and facilitated the entire certification process. The client successfully imported medical equipment that met all Australian regulatory requirements.',
    metrics: [
      { label: 'Certification', value: 'TGA Compliant' },
      { label: 'Quality Standard', value: 'ISO 13485' },
      { label: 'Compliance', value: '100%' },
      { label: 'Time to Market', value: '6 months' },
    ],
    testimonial: {
      text: "Navigating medical device regulations in China seemed overwhelming until we engaged SSourcing China. Their expertise in regulatory requirements saved us months of potential delays and costly mistakes.",
      author: 'Dr. James Anderson',
      role: 'CEO, MediCare Supplies',
    },
  },
  {
    id: 5,
    company: 'PlayTime Toys',
    industry: 'Toys & Games',
    location: 'Canada',
    year: '2023',
    challenge: 'PlayTime Toys, a Canadian toy retailer, needed to source a new line of educational toys for the holiday season. They had strict safety requirements (CPSIA compliance) and needed to secure inventory quickly.',
    approach: 'We expedited the supplier identification process and focused on factories with proven safety compliance records. We coordinated CPSIA testing during production, performed pre-shipment inspections, and arranged expedited shipping to meet the holiday deadline.',
    result: 'The order arrived 2 weeks before the holiday season, allowing for timely store placement. All products passed CPSIA testing with zero recalls. The client reported strong holiday sales.',
    metrics: [
      { label: 'Compliance', value: '100% CPSIA' },
      { label: 'Delivery', value: '2 weeks early' },
      { label: 'Test Results', value: 'Zero recalls' },
      { label: 'Sales Impact', value: 'Strong' },
    ],
    testimonial: {
      text: "SSourcing China understood the urgency of our holiday season and delivered beyond expectations. Their attention to safety compliance and quick turnaround made them an invaluable partner.",
      author: 'Jennifer Brown',
      role: 'Founder, PlayTime Toys',
    },
  },
  {
    id: 6,
    company: 'GreenPack Solutions',
    industry: 'Packaging',
    location: 'Netherlands',
    year: '2024',
    challenge: 'GreenPack Solutions, a Dutch sustainable packaging company, needed to source eco-friendly packaging materials from China. They required suppliers using recyclable materials and sustainable manufacturing processes.',
    approach: 'We identified manufacturers specializing in eco-friendly packaging solutions. We verified material sourcing, manufacturing processes, and environmental certifications. We also arranged for samples to be tested for European market requirements.',
    result: 'We found suppliers offering innovative sustainable materials at competitive prices. The client successfully launched their eco-friendly product line in Europe with packaging that met all environmental standards.',
    metrics: [
      { label: 'Materials', value: '100% recyclable' },
      { label: 'Certifications', value: 'FSC, DIN' },
      { label: 'Price Advantage', value: '15% below market' },
      { label: 'Market Launch', value: 'Successful' },
    ],
    testimonial: {
      text: "Finding truly sustainable packaging suppliers in China was a challenge until we worked with SSourcing China. They understood our sustainability requirements and found suppliers who exceeded our expectations.",
      author: 'Emma van der Berg',
      role: 'CEO, GreenPack Solutions',
    },
  ],
]

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Success Stories | SSourcing China</title>
        <meta name="description" content="Read success stories from companies we've helped with China sourcing. Learn how we deliver results across electronics, apparel, healthcare, and more industries." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-slate-200">
              Real results from our sourcing partnerships. See how we've helped businesses worldwide source from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <Section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-red-600 font-medium">{study.industry}</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-sm text-slate-500">{study.location}</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-sm text-slate-500">{study.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{study.company}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-600" />
                          Challenge
                        </h4>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-red-600" />
                          Our Approach
                        </h4>
                        <p className="text-slate-600">{study.approach}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Result
                        </h4>
                        <p className="text-slate-600">{study.result}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-slate-50 rounded-lg p-6">
                        <h4 className="font-semibold text-slate-900 mb-4">Key Metrics</h4>
                        <div className="space-y-4">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <span className="text-slate-600 text-sm">{metric.label}</span>
                              <span className="font-semibold text-slate-900">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 bg-red-50 rounded-lg p-6">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="text-slate-700 text-sm italic mb-4">"{study.testimonial.text}"</p>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{study.testimonial.author}</p>
                          <p className="text-slate-500 text-xs">{study.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let us help you source from China with confidence.
          </p>
          <Link to="/contact">
            <Button className="text-lg px-10 py-4 bg-white text-red-600 hover:bg-slate-100">
              Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default CaseStudies