import { Link } from 'react-router-dom';
import { 
  FileText, Search, Users, Package, ClipboardCheck, Truck, 
  CheckCircle, Clock, Shield, ArrowRight, MessageSquare
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <FileText className="w-8 h-8" />,
      title: 'Submit Your Request',
      description: 'Fill out our inquiry form with details about your product requirements.',
      details: [
        'Product specifications and requirements',
        'Estimated quantity and budget',
        'Target delivery timeline',
        'Any certifications or standards needed',
      ],
      time: '5 minutes',
    },
    {
      number: '02',
      icon: <Search className="w-8 h-8" />,
      title: 'We Find & Verify Suppliers',
      description: 'Our team identifies suitable factories and verifies them in person.',
      details: [
        'Identify 3-5 matching suppliers',
        'On-site factory visits',
        'Business license verification',
        'Production capacity assessment',
      ],
      time: '3-7 days',
    },
    {
      number: '03',
      icon: <Users className="w-8 h-8" />,
      title: 'You Select & We Negotiate',
      description: 'Review supplier options and we handle all negotiations on your behalf.',
      details: [
        'Detailed supplier comparison reports',
        'Price and terms negotiation',
        'Sample arrangement',
        'Contract drafting assistance',
      ],
      time: '3-5 days',
    },
    {
      number: '04',
      icon: <Package className="w-8 h-8" />,
      title: 'Production Begins',
      description: 'We monitor production and keep you updated on progress.',
      details: [
        'Pre-production material inspection',
        'Regular production updates',
        'Quality monitoring',
        'Issue resolution',
      ],
      time: 'Ongoing',
    },
    {
      number: '05',
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quality Inspection',
      description: 'Professional QC inspection before shipment.',
      details: [
        'Pre-shipment inspection (PSI)',
        'AQL-based sampling',
        'Detailed inspection reports',
        'Defect documentation',
      ],
      time: '1-2 days',
    },
    {
      number: '06',
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics and ensure safe delivery.',
      details: [
        'Freight booking and coordination',
        'Customs documentation',
        'Loading supervision',
        'Tracking and delivery confirmation',
      ],
      time: 'Varies by destination',
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Mitigation',
      description: 'Factory verification and QC inspections reduce the risk of quality issues and fraud.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Savings',
      description: 'We handle supplier research, communication, and logistics, saving you weeks of work.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Clear Communication',
      description: 'Native English speakers bridge the language gap and ensure nothing gets lost in translation.',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Professional inspections catch issues before they become costly problems.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2d4a6f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-xl text-[#94a3b8]">
              Our streamlined 6-step process makes sourcing from China simple, transparent, and risk-free.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-12 top-24 w-0.5 h-16 bg-[#e2e8f0]" />
                )}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-[#1e3a5f] rounded-2xl flex flex-col items-center justify-center text-white relative">
                      <div className="text-3xl font-bold">{step.number}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-[#1e3a5f]">
                        {step.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#0f172a]">{step.title}</h2>
                        <p className="text-[#64748b]">{step.description}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#f8fafc] rounded-xl p-6">
                        <h3 className="font-semibold text-[#0f172a] mb-3">What Happens:</h3>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start text-sm text-[#475569]">
                              <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5 mr-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#1e3a5f]/5 rounded-xl p-6 flex items-center justify-center">
                        <div className="text-center">
                          <Clock className="w-8 h-8 text-[#1e3a5f] mx-auto mb-2" />
                          <p className="text-sm text-[#64748b]">Typical Duration</p>
                          <p className="text-lg font-semibold text-[#1e3a5f]">{step.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Our Process Works"
            subtitle="The benefits of working with SSourcing China"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-[#1e3a5f] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#64748b]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Typical Project Timeline"
            subtitle="How long does the complete sourcing process take?"
          />
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 text-white">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="font-medium">Supplier Verification</span>
                <span className="text-[#94a3b8]">3-7 days</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="font-medium">Negotiation & Samples</span>
                <span className="text-[#94a3b8]">1-3 weeks</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="font-medium">Production</span>
                <span className="text-[#94a3b8]">2-8 weeks (varies by product)</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span className="font-medium">QC Inspection</span>
                <span className="text-[#94a3b8]">1-3 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Shipping</span>
                <span className="text-[#94a3b8]">2-6 weeks (varies by destination)</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total Average Timeline</span>
                <span className="text-2xl font-bold text-accent-400">6-16 weeks</span>
              </div>
              <p className="text-sm text-[#94a3b8] mt-2">
                * Timeline varies based on product complexity, quantity, and destination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Get a free timeline estimate for your specific sourcing needs."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        features={[
          'Free timeline estimates',
          'No commitment required',
          'Personalized service',
        ]}
      />
    </div>
  );
};

export default HowItWorks;
