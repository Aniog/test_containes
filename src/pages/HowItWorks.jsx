import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, Search, FileCheck, CheckCircle, Truck, 
  ArrowRight, Phone, Mail, Clock, Shield, Globe, Users
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    subtitle: 'Understanding Your Needs',
    description: 'We start with a detailed discussion about your product requirements, target pricing, order quantities, and timeline expectations.',
    details: [
      'Free initial consultation call or meeting',
      'Detailed requirements gathering',
      'Target price and budget discussion',
      'Timeline and milestone planning',
      'Sourcing strategy recommendation',
    ],
    duration: '1-2 days',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    subtitle: 'Finding the Right Match',
    description: 'We search our verified supplier network and present you with qualified options, complete with factory profiles and competitive pricing.',
    details: [
      'Database search and shortlisting',
      'Initial supplier outreach and qualification',
      'Price comparison and negotiation',
      'Factory profile compilation',
      'Recommendation presentation',
    ],
    duration: '3-5 days',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Verification & Sampling',
    subtitle: 'Confirming Quality Standards',
    description: 'We conduct thorough factory audits and coordinate sample production to ensure the supplier can meet your exact specifications.',
    details: [
      'On-site factory audit and verification',
      'Sample production coordination',
      'Specification review and confirmation',
      'Quality standard alignment',
      'Final supplier selection',
    ],
    duration: '1-2 weeks',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Production & Quality Control',
    subtitle: 'Monitoring Every Step',
    description: 'We oversee the entire production process with regular quality inspections and progress updates to ensure everything stays on track.',
    details: [
      'Production kickoff and planning',
      'In-line quality inspections',
      'Weekly progress reports',
      'Issue identification and resolution',
      'Pre-shipment final inspection',
    ],
    duration: '2-8 weeks',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    subtitle: 'Getting Goods to You',
    description: 'We coordinate all logistics, handle customs documentation, and ensure your goods arrive safely at your specified destination.',
    details: [
      'Shipping method selection',
      'Customs documentation preparation',
      'Freight forwarding coordination',
      'Container loading supervision',
      'Shipment tracking and updates',
    ],
    duration: '2-6 weeks',
  },
];

const benefits = [
  { icon: Clock, title: 'Save Time', description: 'We handle the entire sourcing process so you can focus on your core business.' },
  { icon: Shield, title: 'Reduce Risk', description: 'Our verification and QC processes minimize the risk of quality issues and supplier fraud.' },
  { icon: Globe, title: 'Local Expertise', description: 'Our China-based team provides on-ground support and cultural understanding.' },
  { icon: Users, title: 'Dedicated Support', description: 'Each client gets a dedicated account manager for personalized service.' },
];

const HowItWorksPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            How Our Sourcing Process Works
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A systematic, transparent approach to sourcing from China. We guide you through every step from initial inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-24 bottom-0 w-0.5 bg-border-light" />
                )}
                
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Step indicator */}
                  <div className="lg:col-span-2 flex flex-col items-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      {step.number}
                    </div>
                    <div className="mt-3 text-sm font-semibold text-accent">{step.duration}</div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10 bg-bg-light rounded-xl p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">{step.title}</h3>
                        <p className="text-accent font-medium">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-6 text-lg">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why Our Process Works</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our structured approach ensures quality, transparency, and efficiency at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 text-center shadow-sm border border-border-light">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Get in touch for a free consultation and see how we can help streamline your supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8613800000000"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
