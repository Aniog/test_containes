import { Link } from 'react-router-dom'
import { ArrowRight, Search, Shield, FileCheck, Factory, Truck, Users, Package, Clock, CheckCircle, ChevronRight } from 'lucide-react'

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Find the right manufacturers in China who match your exact requirements.',
    fullDescription: 'Our supplier sourcing service connects you with verified manufacturers tailored to your specific needs. We conduct thorough research to identify suppliers with the right production capacity, quality standards, certifications, and competitive pricing.',
    features: [
      'Comprehensive supplier research and shortlisting',
      'Verification of business licenses and company status',
      'Assessment of production capacity and capabilities',
      'Comparison of pricing and terms',
      'Background checks on supplier history',
    ],
    process: [
      'We discuss your product requirements and specifications',
      'Our team researches potential suppliers in China',
      'We create a shortlist of 3-5 qualified suppliers',
      'You review profiles and select candidates for verification',
    ],
  },
  {
    id: 'verification',
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy and capabilities.',
    fullDescription: 'Our factory verification service ensures you work with legitimate, capable manufacturers. We conduct in-person audits to verify factory existence, assess production capacity, check certifications, and evaluate overall business practices.',
    features: [
      'On-site factory visits with detailed photo/video reports',
      'Verification of business licenses and registration',
      'Assessment of production capacity and equipment',
      'Worker conditions and safety evaluation',
      'Certification verification (ISO, CE, etc.)',
    ],
    process: [
      'You provide supplier shortlist for verification',
      'Our team schedules on-site factory visits',
      'We conduct comprehensive audits',
      'You receive detailed verification reports',
    ],
  },
  {
    id: 'qc',
    icon: FileCheck,
    title: 'Quality Inspection',
    description: 'Professional quality control at every stage of production.',
    fullDescription: 'Our quality inspection service protects your investment by ensuring products meet your specifications. We perform inspections at pre-production, during production, and pre-shipment stages to catch issues early.',
    features: [
      'Pre-production inspection of raw materials',
      'In-process production inspections',
      'Pre-shipment final inspections',
      'AQL-based sampling and testing',
      'Detailed inspection reports with photos',
    ],
    process: [
      'We define inspection criteria based on your specifications',
      'Our QC team schedules inspections at key stages',
      'Inspections are conducted using standardized protocols',
      'You receive detailed reports with findings and recommendations',
    ],
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular monitoring to keep your order on track.',
    fullDescription: 'Our production follow-up service ensures your order stays on schedule and meets quality standards. We provide regular updates and on-site monitoring throughout the manufacturing process.',
    features: [
      'Weekly production progress updates',
      'On-site monitoring during critical production stages',
      'Issue identification and resolution',
      'Timeline management and reporting',
      'Coordination with factory management',
    ],
    process: [
      'We establish production timeline and milestones',
      'Our team conducts regular factory visits',
      'You receive periodic progress reports',
      'Any issues are immediately communicated and resolved',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory to your doorstep.',
    fullDescription: 'Our shipping and logistics service handles all aspects of getting your products from China to your location. We coordinate freight, manage documentation, and ensure smooth customs clearance.',
    features: [
      'Freight forwarding (air, sea, land)',
      'Customs clearance assistance',
      'Complete documentation handling',
      'Cargo tracking and updates',
      'Insurance coordination',
    ],
    process: [
      'We discuss shipping requirements and preferences',
      'We obtain quotes from reliable carriers',
      'Documentation is prepared and submitted',
      'We track shipment until delivery',
    ],
  },
  {
    id: 'samples',
    icon: Package,
    title: 'Sample Management',
    description: 'Sourcing and evaluating product samples on your behalf.',
    fullDescription: 'Our sample management service streamlines the sample evaluation process. We help source samples, coordinate shipping, and provide detailed assessments to help you make informed decisions.',
    features: [
      'Sample sourcing from multiple suppliers',
      'Sample shipping and customs handling',
      'Detailed sample evaluation reports',
      'Comparison analysis of samples',
      'Sample storage and management',
    ],
    process: [
      'You provide sample specifications',
      'We source samples from relevant suppliers',
      'Samples are shipped to your location or our office',
      'We provide detailed evaluation reports',
    ],
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Skip the research and verification work. We handle everything so you can focus on your business.',
  },
  {
    icon: Shield,
    title: 'Reduce Risk',
    description: 'Avoid supplier scams and quality issues with our verification and QC processes.',
  },
  {
    icon: CheckCircle,
    title: 'Ensure Quality',
    description: 'Professional inspections at every stage ensure your products meet specifications.',
  },
  {
    icon: Truck,
    title: 'Smooth Delivery',
    description: 'End-to-end logistics support ensures your products arrive safely and on time.',
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-gray-300">
              Comprehensive China sourcing solutions designed to protect your interests 
              and ensure successful outcomes for every order.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.fullDescription}</p>
                  
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-gray-900 mb-3">Our Process:</h3>
                  <ol className="space-y-3">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-900 text-white text-sm rounded-full flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className={`bg-gray-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-blue-900" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Your Sourcing?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today to discuss your sourcing needs. We'll help you find the right solution.
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