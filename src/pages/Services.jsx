import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, BadgeCheck, Eye, BarChart3, FileCheck, Truck,
  ArrowRight, CheckCircle, Shield, Clock, Users, Globe,
  Package, Factory, Target, Phone, Mail
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Sourcing',
      description: 'We leverage our extensive network and market knowledge to find the best suppliers for your specific needs.',
      features: [
        'Custom supplier search based on your specifications',
        'Market research and competitive pricing analysis',
        'Supplier capability assessment',
        'Initial communication and negotiation',
        'Shortlist of qualified suppliers with detailed profiles'
      ],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: BadgeCheck,
      title: 'Factory Verification & Audits',
      description: 'Comprehensive on-site factory audits to verify legitimacy, capabilities, and compliance with international standards.',
      features: [
        'Business license and registration verification',
        'On-site facility inspection and assessment',
        'Production capacity evaluation',
        'Quality management system review',
        'Worker conditions and safety compliance check',
        'Financial stability assessment'
      ],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Eye,
      title: 'Quality Inspection Services',
      description: 'Multi-stage quality control to ensure products meet your specifications before they leave the factory.',
      features: [
        'Pre-production sample evaluation',
        'During production (DUPRO) inspections',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
        'Defect classification and reporting',
        'Corrective action follow-up'
      ],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Production Follow-up & Monitoring',
      description: 'Ongoing oversight of your orders to ensure they stay on track and any issues are addressed promptly.',
      features: [
        'Weekly production status reports',
        'Timeline tracking and milestone management',
        'Issue identification and resolution',
        'Direct communication with factory management',
        'Production schedule optimization',
        'Risk mitigation planning'
      ],
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: FileCheck,
      title: 'Sample Management & Development',
      description: 'Coordinating product samples from development through final approval to ensure specifications are met.',
      features: [
        'Sample request coordination',
        'Detailed sample evaluation reports',
        'Specification feedback and iteration',
        'Final sample approval documentation',
        'Pre-production sample confirmation',
        'Golden sample management'
      ],
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics Coordination',
      description: 'End-to-end logistics management to get your products from the factory floor to your doorstep.',
      features: [
        'Freight forwarding arrangement',
        'Customs clearance documentation',
        'Shipping mode optimization (sea/air/rail)',
        'Cargo insurance coordination',
        'Real-time shipment tracking',
        'Door-to-door delivery coordination'
      ],
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-200 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Comprehensive Sourcing Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From initial supplier discovery to final delivery, we provide end-to-end sourcing services 
              that eliminate risk and ensure quality at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Our Services Stand Out
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine local expertise with international standards to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Risk Mitigation',
                description: 'Our verification and inspection processes minimize the risk of quality issues and supplier fraud.'
              },
              {
                icon: Clock,
                title: 'Time Savings',
                description: 'We handle all supplier communication, negotiations, and logistics coordination for you.'
              },
              {
                icon: Users,
                title: 'Local Expertise',
                description: 'Our team in China understands the market, culture, and business practices.'
              },
              {
                icon: Globe,
                title: 'Global Standards',
                description: 'We apply international quality standards and best practices to every project.'
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-slate-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Service Delivery Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach to ensure consistent, high-quality service delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your needs' },
              { step: '02', title: 'Planning', desc: 'Develop sourcing strategy' },
              { step: '03', title: 'Execution', desc: 'Implement sourcing plan' },
              { step: '04', title: 'Monitoring', desc: 'Track progress & quality' },
              { step: '05', title: 'Delivery', desc: 'Complete handover' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-brand-500 mb-2">{item.step}</div>
                <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Sourcing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us handle the complexities of sourcing from China while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-white/30"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
