import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Factory, Search, Truck, Package, CreditCard, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description: 'Share your product requirements, specifications, quantity, and target price with us.',
    details: [
      'Product description and specifications',
      'Target quantity and MOQ requirements',
      'Budget range',
      'Quality standards and certifications',
      'Timeline and delivery requirements',
    ],
    icon: FileText,
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We identify and evaluate qualified factories that match your criteria.',
    details: [
      'Database of 500+ verified suppliers',
      'Capability and capacity assessment',
      'Price comparison and negotiation',
      'Sample evaluation and testing',
      'Shortlist of 3-5 best matches',
    ],
    icon: Search,
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'We conduct thorough audits to ensure the selected factory is legitimate and capable.',
    details: [
      'Business license verification',
      'On-site factory inspection',
      'Production capacity assessment',
      'Quality management evaluation',
      'Reference and history check',
    ],
    icon: Factory,
  },
  {
    number: '04',
    title: 'Production & Quality Control',
    description: 'We monitor production and perform inspections to ensure quality standards are met.',
    details: [
      'Regular production progress updates',
      'Inline and pre-shipment inspections',
      'Sample approval coordination',
      'Issue identification and resolution',
      'Detailed inspection reports',
    ],
    icon: Shield,
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics to ensure your products arrive safely and on time.',
    details: [
      'Freight forwarding services',
      'Customs documentation',
      'Loading supervision',
      'Shipment tracking',
      'Door-to-door delivery option',
    ],
    icon: Truck,
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Skip months of research and verification. We streamline the entire process.',
  },
  {
    icon: Shield,
    title: 'Reduce Risk',
    description: 'Our verification and QC services protect you from fraud and quality issues.',
  },
  {
    icon: CreditCard,
    title: 'Save Money',
    description: 'Negotiate better prices and avoid costly mistakes with expert guidance.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our team guides you through every step with professional advice.',
  },
];

const timeline = [
  { stage: 'Request Submission', time: 'Day 1' },
  { stage: 'Supplier Shortlisting', time: 'Days 2-7' },
  { stage: 'Sample Evaluation', time: 'Days 8-21' },
  { stage: 'Order Confirmation', time: 'Days 22-28' },
  { stage: 'Production', time: 'Weeks 5-12' },
  { stage: 'Inspection & Shipping', time: 'Weeks 13-14' },
  { stage: 'Delivery', time: 'Week 14-16' },
];

const HowItWorksPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our proven 5-step process ensures successful sourcing from China, 
            from supplier verification to on-time delivery.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-[#F7931E]/20">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 bg-[#1E3A5F] rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-3">
                      {step.title}
                    </h2>
                    <p className="text-[#64748B] mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#64748B]">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-[#F8FAFC] rounded-2xl p-8">
                      <div className="text-center">
                        <step.icon className="w-16 h-16 text-[#1E3A5F] mx-auto mb-4 opacity-50" />
                        <p className="text-[#64748B] text-sm">
                          Step {index + 1} of 5
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -bottom-8 transform -translate-x-1/2">
                    <ArrowRight className="w-8 h-8 text-[#E2E8F0] rotate-90 lg:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Typical Timeline
            </h2>
            <p className="text-[#64748B]">
              From request to delivery, here's what to expect
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex justify-between items-start mb-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-3 h-3 bg-[#F7931E] rounded-full mb-4"></div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-[#1E3A5F] mb-1">{item.stage}</p>
                      <p className="text-xs text-[#64748B]">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-[#E2E8F0] rounded-full relative">
                <div className="absolute top-0 left-0 h-full w-3/4 bg-[#F7931E] rounded-full"></div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-[#64748B] mt-8">
            * Timeline varies based on product complexity, quantity, and factory availability
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Why Our Process Works
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Our systematic approach ensures reliability, quality, and peace of mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-[#1E3A5F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#64748B]">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-white/70 mb-8">
            Get in touch for a free consultation. We'll help you find the right suppliers 
            and guide you through every step.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#F7931E] hover:bg-[#E0850D]">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;