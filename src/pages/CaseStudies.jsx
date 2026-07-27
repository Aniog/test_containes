import React from 'react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, DollarSign, Clock, ArrowRight, 
  Phone, Mail, CheckCircle, Quote 
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'LED Lighting Manufacturer',
    client: 'US Retail Chain',
    category: 'Electronics',
    imageId: 'case-studies-led-lighting-main',
    imageRatio: '16x9',
    challenge: 'The client needed a reliable supplier for 50,000 LED panels with specific certifications and competitive pricing for the US market.',
    solution: 'We identified 3 qualified manufacturers, conducted factory audits, and negotiated pricing. We implemented strict quality control with pre-production samples and during-production inspections.',
    results: [
      { icon: DollarSign, value: '35%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '99%', label: 'Quality Pass Rate' },
      { icon: Clock, value: '15 days', label: 'Faster Delivery' },
    ],
    testimonial: {
      quote: 'SSourcing China helped us find a reliable supplier and saved us 35% on our lighting order. Their quality control process gave us confidence in the product.',
      author: 'John Smith',
      position: 'Procurement Director',
    },
    details: [
      'Supplier identification and verification',
      'Factory audit and capability assessment',
      'Price negotiation and cost optimization',
      'Quality control implementation',
      'Shipping coordination and documentation',
    ],
  },
  {
    id: 2,
    title: 'Home Furniture Collection',
    client: 'European E-commerce',
    category: 'Furniture',
    imageId: 'case-studies-furniture-main',
    imageRatio: '16x9',
    challenge: 'The client wanted to develop a custom furniture line with specific designs and materials for the European market.',
    solution: 'We worked with the client to refine designs, sourced manufacturers with the right capabilities, and managed the entire production process with regular quality checks.',
    results: [
      { icon: DollarSign, value: '40%', label: 'Cost Savings' },
      { icon: TrendingUp, value: '100%', label: 'On-time Delivery' },
      { icon: Clock, value: '30 days', label: 'Production Time' },
    ],
    testimonial: {
      quote: 'The team at SSourcing China understood our design requirements perfectly. They found manufacturers who could produce high-quality furniture at competitive prices.',
      author: 'Maria Schmidt',
      position: 'Product Manager',
    },
    details: [
      'Design consultation and refinement',
      'Material sourcing and selection',
      'Manufacturer identification and verification',
      'Prototype development and approval',
      'Production management and quality control',
    ],
  },
  {
    id: 3,
    title: 'Custom Packaging Solutions',
    client: 'Australian Brand',
    category: 'Packaging',
    imageId: 'case-studies-packaging-main',
    imageRatio: '16x9',
    challenge: 'The client needed custom packaging with eco-friendly materials and specific printing requirements for their skincare products.',
    solution: 'We sourced packaging manufacturers specializing in eco-friendly materials, managed the design-to-production process, and ensured all printing met brand standards.',
    results: [
      { icon: DollarSign, value: '25%', label: 'Cost Reduction' },
      { icon: TrendingUp, value: '98%', label: 'Quality Rate' },
      { icon: Clock, value: '10 days', label: 'Sampling Time' },
    ],
    testimonial: {
      quote: 'SSourcing China delivered excellent custom packaging that aligned with our brand values. Their attention to detail and quality control was impressive.',
      author: 'Sarah Johnson',
      position: 'Brand Director',
    },
    details: [
      'Eco-friendly material sourcing',
      'Design consultation and prototyping',
      'Manufacturer verification and selection',
      'Quality control and testing',
      'Production monitoring and delivery',
    ],
  },
  {
    id: 4,
    title: 'Industrial Components',
    client: 'German Manufacturer',
    category: 'Industrial',
    imageId: 'case-studies-industrial-main',
    imageRatio: '16x9',
    challenge: 'The client needed precision industrial components with strict tolerances and certifications for their manufacturing process.',
    solution: 'We identified manufacturers with precision machining capabilities, conducted thorough quality audits, and implemented strict inspection protocols.',
    results: [
      { icon: DollarSign, value: '30%', label: 'Cost Savings' },
      { icon: TrendingUp, value: '99.5%', label: 'Quality Rate' },
      { icon: Clock, value: '20 days', label: 'Lead Time' },
    ],
    testimonial: {
      quote: 'The precision components we sourced through SSourcing China met our exact specifications. Their quality control process is among the best we\'ve experienced.',
      author: 'Thomas Mueller',
      position: 'Engineering Manager',
    },
    details: [
      'Precision manufacturer identification',
      'Technical specification review',
      'Quality management system audit',
      'Sample testing and approval',
      'Production monitoring and inspection',
    ],
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Success Stories
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Real results from our sourcing partnerships. See how we've helped 
              businesses source products from China successfully.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Start Your Success Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-white" id="case-studies">
        <div className="container">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div 
                    className="aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-gray-100 to-gray-200"
                    data-strk-bg-id={study.imageId}
                    data-strk-bg={`[case-studies-title] [case-study-${study.id}-main-title]`}
                    data-strk-bg-ratio={study.imageRatio}
                    data-strk-bg-width="800"
                  >
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-8">
                        <span className="bg-primary text-white text-sm px-4 py-2 rounded-full">
                          {study.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <span className="text-sm text-primary font-medium">
                      {study.client}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4" id={`case-study-${study.id}-main-title`}>
                      {study.title}
                    </h2>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <div className="flex items-center justify-center gap-1 text-primary mb-1">
                            <result.icon className="w-5 h-5" />
                            <span className="font-bold text-lg">{result.value}</span>
                          </div>
                          <span className="text-sm text-gray-500">{result.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-8">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <Quote className="w-8 h-8 text-primary mb-4" />
                      <p className="text-gray-600 italic mb-4">
                        "{study.testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {study.testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {study.testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden element for interpolation */}
      <h1 id="case-studies-title" className="sr-only">Our Success Stories</h1>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have successfully sourced products from China with our help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center justify-center gap-6">
              <a href="tel:+8612345678900" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
