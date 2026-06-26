import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, Factory, FileCheck, Users, Truck, Package, 
  ClipboardCheck, CheckCircle, ArrowRight, Building2, 
  Globe, Search, BarChart3
} from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import Button from '@/components/common/Button'

const services = [
  {
    id: 'verification',
    icon: <Shield className="w-10 h-10" />,
    title: 'Supplier Verification',
    description: 'Comprehensive background checks and factory audits to ensure you work with legitimate, capable partners.',
    features: [
      'Business license verification',
      'Factory site visits and audits',
      'Production capacity assessment',
      'Equipment and technology review',
      'Financial stability check',
      'Reference verification',
      'Compliance certification review',
      'Anti-counterfeit screening'
    ],
    benefits: [
      'Eliminate fraud risk',
      'Verify production capabilities',
      'Ensure legal compliance',
      'Make informed decisions'
    ]
  },
  {
    id: 'quality',
    icon: <ClipboardCheck className="w-10 h-10" />,
    title: 'Quality Control & Inspection',
    description: 'Professional QC inspections at every production stage to maintain your quality standards.',
    features: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Loading supervision (LS)',
      'AQL sampling according to ISO 2859',
      'Product specification compliance',
      'Packaging and labeling check',
      'Detailed inspection reports with photos'
    ],
    benefits: [
      'Catch issues early',
      'Reduce returns and complaints',
      'Document quality records',
      'Protect your brand reputation'
    ]
  },
  {
    id: 'production',
    icon: <Users className="w-10 h-10" />,
    title: 'Production Follow-up',
    description: 'Hands-on monitoring and coordination throughout your production run.',
    features: [
      'Sample approval management',
      'Progress status updates',
      'Production schedule tracking',
      'Issue identification and resolution',
      'Material quality monitoring',
      'Process optimization suggestions',
      'Client communication bridge',
      'Timeline management'
    ],
    benefits: [
      'Stay on schedule',
      'Prevent production delays',
      'Maintain quality consistency',
      'Reduce management time'
    ]
  },
  {
    id: 'shipping',
    icon: <Truck className="w-10 h-10" />,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory to your doorstep.',
    features: [
      'Sea freight (FCL/LCL)',
      'Air freight',
      'Express courier (DHL, FedEx, UPS)',
      'Rail freight (China-Europe)',
      'Customs clearance',
      'Documentation preparation',
      'Cargo insurance',
      'Door-to-door delivery'
    ],
    benefits: [
      'Simplified logistics',
      'Cost optimization',
      'Reduced transit time',
      'Complete documentation trail'
    ]
  },
  {
    id: 'sourcing',
    icon: <Search className="w-10 h-10" />,
    title: 'Product Sourcing',
    description: 'Finding the right suppliers and products to meet your business needs.',
    features: [
      'Supplier identification and matching',
      'Price negotiation',
      'MOQ optimization',
      'Product development support',
      'Material sourcing',
      'Cost breakdown analysis',
      'Competitive benchmarking',
      'Prototype development'
    ],
    benefits: [
      'Access to verified suppliers',
      'Better pricing',
      'Reduced sourcing time',
      'Quality matches specifications'
    ]
  },
  {
    id: 'consulting',
    icon: <BarChart3 className="w-10 h-10" />,
    title: 'Sourcing Consulting',
    description: 'Expert guidance to optimize your China sourcing strategy.',
    features: [
      'Sourcing strategy development',
      'Supplier network analysis',
      'Cost optimization review',
      'Risk assessment',
      'Process improvement recommendations',
      'Training and education',
      'Market intelligence',
      'Due diligence support'
    ],
    benefits: [
      'Strategic approach',
      'Cost savings opportunities',
      'Risk mitigation',
      'Industry best practices'
    ]
  }
]

const ServicesPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-primary] to-[--color-primary-light] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive China sourcing solutions covering every step of your supply chain — from supplier verification to final delivery.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Offer"
            title="End-to-End Sourcing Solutions"
            subtitle="From initial supplier search to final delivery, we handle every aspect of your China sourcing needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <div key={service.id} className="bg-[--color-bg-light] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[--color-primary] rounded-xl flex items-center justify-center text-white mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[--color-text-dark] mb-3">{service.title}</h3>
                <p className="text-[--color-text-muted] text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[--color-text-muted]">
                      <CheckCircle className="w-4 h-4 text-[--color-success]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-[--color-primary] rounded-xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-[--color-text-dark] mb-4">{service.title}</h2>
                  <p className="text-lg text-[--color-text-muted] mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[--color-text-dark] mb-3">What's Included:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-[--color-text-muted]">
                          <CheckCircle className="w-4 h-4 text-[--color-success]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[--color-text-dark] mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[--color-bg-navy-light] text-[--color-primary] text-sm rounded-full">
                          <CheckCircle className="w-3.5 h-3.5" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`bg-white rounded-2xl p-8 shadow-sm ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-[--color-bg-light] rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-[--color-primary]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {service.icon}
                      </div>
                      <p className="text-[--color-text-muted] text-sm">{service.title}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[--color-accent] text-white font-semibold rounded-lg hover:bg-[--color-accent-dark] transition-colors"
                    >
                      Get a Quote for This Service
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Advantages"
            title="Why Work With Us"
            subtitle="Practical benefits that make a real difference to your sourcing operations."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Local Expertise',
                description: 'Our team is based in China with deep understanding of local business practices and culture.'
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Verified Network',
                description: 'Access to our network of 500+ pre-verified suppliers across multiple industries.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Dedicated Support',
                description: 'Your own account manager who understands your business and communicates in your time zone.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Risk Mitigation',
                description: 'Comprehensive checks and inspections to protect your business from common sourcing risks.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[--color-bg-navy-light] rounded-full flex items-center justify-center text-[--color-primary] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[--color-text-dark] mb-2">{item.title}</h3>
                <p className="text-[--color-text-muted] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[--color-primary]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us today for a free consultation and customized quote for your sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
