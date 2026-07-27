import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  Factory,
  ClipboardCheck,
  Truck,
  Search,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  FileText,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'verification',
    icon: Shield,
    title: 'Supplier Verification',
    shortDescription:
      'Verify supplier legitimacy and ensure you work with genuine, reliable partners.',
    fullDescription:
      'Our comprehensive supplier verification service helps you avoid fraud and work only with legitimate businesses. We conduct thorough background checks to ensure supplier authenticity.',
    features: [
      'Business license verification',
      'Company registration check',
      'Production capacity assessment',
      'Financial stability evaluation',
      'Reference verification',
      'Export/import license validation',
    ],
    process: [
      'Submit supplier information',
      'We conduct background research',
      'On-site verification visit',
      'Detailed report delivery',
    ],
    timeline: '5-7 business days',
    image: 'supplier verification documents',
  },
  {
    id: 'audit',
    icon: Factory,
    title: 'Factory Audit',
    shortDescription:
      'Comprehensive on-site audits to assess production capabilities and compliance.',
    fullDescription:
      'Our factory audit services provide deep insights into supplier capabilities, quality management systems, and compliance standards. Make informed decisions before committing to orders.',
    features: [
      'Production capacity assessment',
      'Quality management system review',
      'Workforce evaluation',
      'Equipment and machinery check',
      'Compliance and certification verification',
      'Health and safety assessment',
    ],
    process: [
      'Define audit scope and criteria',
      'Schedule on-site inspection',
      'Conduct comprehensive audit',
      'Receive detailed audit report',
    ],
    timeline: '3-5 business days on-site',
    image: 'factory audit inspection',
  },
  {
    id: 'qc',
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    shortDescription:
      'Pre-shipment inspections to ensure products meet your specifications.',
    fullDescription:
      'Our quality control inspection services identify defects and issues before shipment, saving you from costly returns and customer complaints. We inspect at key production stages.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DPI)',
      'Initial production inspection (IPI)',
      'Loading supervision',
      'Defect classification and reporting',
      'AQL-based sampling',
    ],
    process: [
      'Define inspection criteria',
      'Schedule inspection date',
      'Conduct on-site inspection',
      'Receive detailed report with photos',
    ],
    timeline: '1-2 business days',
    image: 'quality control inspection',
  },
  {
    id: 'sourcing',
    icon: Search,
    title: 'Sourcing & Negotiation',
    shortDescription:
      'Find the right suppliers and negotiate favorable terms on your behalf.',
    fullDescription:
      'We leverage our extensive network and expertise to find suppliers that match your requirements. Our negotiation skills ensure you get the best prices and terms.',
    features: [
      'Supplier identification and matching',
      'Price negotiation',
      'Payment term negotiation',
      'MOQ (Minimum Order Quantity) negotiation',
      'Custom specification development',
      'Sample coordination',
    ],
    process: [
      'Define product requirements',
      'We identify suitable suppliers',
      'Request and evaluate quotes',
      'Negotiate terms',
      'Facilitate sample requests',
    ],
    timeline: '1-2 weeks for initial matches',
    image: 'sourcing negotiation meeting',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    shortDescription:
      'End-to-end logistics coordination from factory to your door.',
    fullDescription:
      'Our logistics team handles all aspects of shipping, from freight forwarding to customs clearance. We ensure your products arrive safely and on time.',
    features: [
      'Freight forwarding (air, sea, land)',
      'Customs clearance',
      'Documentation handling',
      'Door-to-door delivery',
      'Cargo insurance',
      'Shipping consolidation',
    ],
    process: [
      'Confirm shipping requirements',
      'Get freight quotes',
      'Book cargo space',
      'Track shipment',
      'Coordinate delivery',
    ],
    timeline: 'Varies by shipping method',
    image: 'shipping container logistics',
  },
  {
    id: 'production',
    icon: CheckCircle,
    title: 'Production Follow-up',
    shortDescription:
      'Regular progress updates and quality checks during production.',
    fullDescription:
      'Stay informed about your order status with our production follow-up services. We conduct regular checks to ensure production stays on track and within specifications.',
    features: [
      'Production progress updates',
      'Quality checkpoints',
      'Timeline monitoring',
      'Issue identification and resolution',
      'Photo and video reports',
      'Weekly status reports',
    ],
    process: [
      'Establish production schedule',
      'Regular factory visits',
      'Progress reporting',
      'Issue resolution',
      'Final inspection coordination',
    ],
    timeline: 'Ongoing throughout production',
    image: 'production follow up factory',
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description:
      'Negotiate better prices and reduce risks of fraud and quality issues.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description:
      'Skip the travel and language barriers. We handle everything on your behalf.',
  },
  {
    icon: Shield,
    title: 'Risk Reduction',
    description:
      'Verify suppliers and inspect products before committing to large orders.',
  },
  {
    icon: FileText,
    title: 'Professional Documentation',
    description:
      'All processes documented with detailed reports and photographic evidence.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description:
      'Native Mandarin speakers with deep understanding of Chinese business culture.',
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: 'How much do your services cost?',
      answer:
        'Our service fees vary based on the specific services you need and the complexity of your project. We offer transparent pricing with no hidden costs. Contact us for a customized quote.',
    },
    {
      question: 'Do you work with small orders?',
      answer:
        'Yes, we work with businesses of all sizes, from startups to large enterprises. Our minimum order requirements are flexible and can be discussed based on your specific needs.',
    },
    {
      question: 'How quickly can you start a project?',
      answer:
        'Most projects can be initiated within 1-2 business days. The timeline for completion depends on the specific services required and the complexity of your project.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We have experience across multiple industries including electronics, furniture, textiles, machinery, packaging, and consumer goods. Our team has diverse expertise to handle various product categories.',
    },
    {
      question: 'How do you communicate progress?',
      answer:
        'We provide regular updates through email, and you can also reach us via phone or video call. All inspections include detailed written reports with photos.',
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-plus text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Sourcing Services
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive solutions to ensure your China sourcing is safe,
              efficient, and profitable. From supplier verification to final
              delivery.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-plus text-3xl font-bold text-[#1E293B] mb-4">
              Why Work With Us
            </h2>
            <p className="font-inter text-lg text-[#64748B]">
              The advantages of partnering with SSourcing China
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-[#E2E8F0]"
              >
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[#1E3A5F]" />
                </div>
                <h3 className="font-plus font-semibold text-[#1E293B] mb-2">
                  {benefit.title}
                </h3>
                <p className="font-inter text-sm text-[#64748B]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={cn(
                  'grid lg:grid-cols-2 gap-12 items-start',
                  index % 2 === 1 && 'lg:flex-row-reverse'
                )}
              >
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E67E22] rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-plus text-2xl sm:text-3xl font-bold text-[#1E293B]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="font-inter text-lg text-[#64748B] mb-6">
                    {service.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-plus font-semibold text-[#1E293B] mb-3">
                      What's Included
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 font-inter text-sm text-[#64748B]"
                        >
                          <CheckCircle className="w-4 h-4 text-[#27AE60] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 text-sm font-inter text-[#64748B]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: {service.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      data-strk-img-id={`service-${service.id}-8f2a9c`}
                      data-strk-img={`[service-title-${service.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p
                        id={`service-title-${service.id}`}
                        className="font-plus text-white font-semibold text-lg"
                      >
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              How It Works
            </h2>
            <p className="font-inter text-lg text-[#64748B] max-w-2xl mx-auto">
              Our straightforward process ensures a smooth sourcing experience
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your requirements' },
              { step: '2', title: 'Matching', desc: 'We find suitable suppliers' },
              { step: '3', title: 'Verification', desc: 'We verify and audit' },
              { step: '4', title: 'Inspection', desc: 'Quality checks during production' },
              { step: '5', title: 'Delivery', desc: 'Shipping and follow-up' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-plus text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-plus font-semibold text-[#1E293B] mb-1">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-plus text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-[#64748B]">
              Common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E2E8F0] rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8FAFC] transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-plus font-semibold text-[#1E293B]">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#64748B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748B]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="font-inter text-[#64748B]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-plus text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-inter text-lg text-white/80 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] text-white font-inter font-semibold text-lg rounded-lg hover:bg-[#D35400] transition-all hover:scale-105"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}