import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Shield, Eye, TrendingUp, Truck, FileCheck, Package, Users,
  ArrowRight, CheckCircle, Globe, Award, Clock, Phone
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { cn } from '@/lib/utils'

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Selection',
    desc: 'We identify and evaluate the best manufacturers for your specific product requirements across China\'s major industrial regions.',
    details: [
      'Product requirement analysis and specification review',
      'Multi-source supplier identification from our verified network',
      'Comparative pricing analysis across 5-10 qualified suppliers',
      'Capability assessment: equipment, capacity, and specialization',
      'Reference checks with existing export clients',
      'Shortlisted supplier presentation with detailed profiles',
    ],
    image: 'factory worker operating machinery',
  },
  {
    id: 'verification',
    icon: Shield,
    title: 'Factory Verification & Audits',
    desc: 'On-site factory visits to verify business legitimacy, production capabilities, certifications, and workplace standards.',
    details: [
      'Business license and registration verification',
      'On-site production facility walkthrough',
      'Quality management system assessment (ISO 9001)',
      'Equipment and machinery condition evaluation',
      'Worker skill level and capacity assessment',
      'Export history and client reference verification',
      'Environmental and social compliance check',
    ],
    image: 'quality inspector checking products',
  },
  {
    id: 'inspection',
    icon: Eye,
    title: 'Quality Inspection Services',
    desc: 'Comprehensive inspection at every production stage to catch defects early and ensure products meet your specifications.',
    details: [
      'Pre-production inspection (raw materials and components)',
      'During production inspection (in-process quality check)',
      'Pre-shipment inspection (AQL-based random sampling)',
      'Container loading supervision',
      'Detailed photo and video documentation',
      'Measurement and function testing',
      'Packaging and labeling verification',
    ],
    image: 'quality control inspection of electronics',
  },
  {
    id: 'production',
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Ongoing monitoring and coordination throughout the manufacturing process to keep your orders on track.',
    details: [
      'Production schedule creation and tracking',
      'Weekly progress reports with photos',
      'Milestone-based payment coordination',
      'Issue identification and resolution',
      'Raw material and component sourcing oversight',
      'Timeline management and deadline enforcement',
      'Direct factory communication on your behalf',
    ],
    image: 'production line manufacturing',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination from factory floor to your warehouse door, including customs and documentation.',
    details: [
      'Freight rate comparison (ocean, air, rail)',
      'Customs documentation preparation',
      'Container booking and loading supervision',
      'Shipment tracking and status updates',
      'Import/export compliance management',
      'Warehousing and consolidation services',
      'Door-to-door delivery coordination',
    ],
    image: 'shipping container port logistics',
  },
  {
    id: 'compliance',
    icon: FileCheck,
    title: 'Compliance & Testing',
    desc: 'Product testing and regulatory compliance assistance to ensure your goods meet destination market requirements.',
    details: [
      'CE, FCC, FDA, UL certification guidance',
      'Third-party lab testing coordination',
      'Product safety assessment',
      'Labeling and documentation compliance',
      'Country-specific regulatory review',
      'Material safety data sheet preparation',
      'Intellectual property protection advice',
    ],
    image: 'product testing laboratory',
  },
]

const advantages = [
  { icon: Users, title: 'Local Team', desc: 'Bilingual sourcing professionals on the ground in China\'s manufacturing hubs.' },
  { icon: Globe, title: 'Global Experience', desc: 'We serve clients in 40+ countries and understand diverse market requirements.' },
  { icon: Award, title: 'Verified Network', desc: '1,200+ pre-vetted factories across all major product categories.' },
  { icon: Clock, title: 'Fast Response', desc: 'Initial sourcing proposals delivered within 48 hours of inquiry.' },
]

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Complete Sourcing Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From the first supplier search to the final delivery, we provide every service you need to source products from China with confidence.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={cn(
                  'grid lg:grid-cols-2 gap-12 items-center',
                  idx % 2 === 1 && 'lg:[direction:rtl]'
                )}
              >
                <div className={cn(idx % 2 === 1 && 'lg:[direction:ltr]')}>
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-navy-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">{service.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={cn(
                  'rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-navy-100 to-navy-200',
                  idx % 2 === 1 && 'lg:[direction:ltr]'
                )}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <service.icon className="w-16 h-16 text-navy-300 mx-auto mb-4" />
                      <p className="text-navy-400 text-sm font-medium">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Us"
            title="The SSourcing Advantage"
            subtitle="What sets us apart from other sourcing agents and trading companies."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-14 h-14 mx-auto bg-navy-100 rounded-2xl flex items-center justify-center mb-4">
                  <adv.icon className="w-7 h-7 text-navy-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-500">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need a Custom Sourcing Solution?</h2>
            <p className="text-gray-400">Tell us about your project and we will build a tailored service plan.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
