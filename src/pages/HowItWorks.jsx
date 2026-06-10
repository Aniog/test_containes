import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  Factory,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Clock,
  Users,
} from 'lucide-react';

const HowItWorks = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Submit Your Inquiry',
      description: 'Share your product requirements, target price, quantity, and timeline. Our team reviews your request within 24 hours.',
      icon: MessageSquare,
      details: [
        'Product specifications and requirements',
        'Target price range and quantity',
        'Preferred shipping method and timeline',
        'Any specific quality or compliance needs',
      ],
    },
    {
      step: '02',
      title: 'Supplier Matching',
      description: 'We source 3-5 qualified suppliers from our verified network and share detailed profiles with you.',
      icon: Search,
      details: [
        'Factory capability assessment',
        'Production capacity verification',
        'Price comparison and negotiation',
        'Sample arrangement for evaluation',
      ],
    },
    {
      step: '03',
      title: 'Verification & Sampling',
      description: 'We conduct on-site factory audits and arrange product samples for your approval.',
      icon: ShieldCheck,
      details: [
        'Business license and registration check',
        'Factory floor inspection',
        'Quality system review',
        'Sample production and shipping',
      ],
    },
    {
      step: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections, and provide detailed reports with photos.',
      icon: ClipboardCheck,
      details: [
        'Pre-production inspection',
        'During-production monitoring',
        'Pre-shipment final inspection',
        'Detailed inspection reports',
      ],
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle documentation, and track your shipment until delivery.',
      icon: Truck,
      details: [
        'Freight forwarding arrangement',
        'Customs documentation',
        'Insurance and tracking',
        'Delivery confirmation',
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'We handle supplier research, verification, and coordination so you can focus on your business.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Native English-speaking project managers with deep knowledge of Chinese manufacturing.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Multiple inspection stages ensure products meet your specifications before shipment.',
    },
    {
      icon: ShieldCheck,
      title: 'Risk Reduction',
      description: 'Factory verification and ongoing monitoring reduce the risk of fraud, delays, and quality issues.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              A simple, transparent 5-step process designed to make your China sourcing experience smooth, reliable, and risk-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">The SSourcing China Process</h2>
            <p className="section-subtitle mx-auto">
              Each step is designed to ensure quality, transparency, and successful outcomes for your sourcing project.
            </p>
          </div>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                      <div className="flex items-center mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                          {step.step}
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600">
                          <step.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-slate-700">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-4">
                          <step.icon className="h-10 w-10 text-blue-600" />
                        </div>
                        <p className="text-slate-600 font-medium">Step {step.step}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Our Process</h2>
            <p className="section-subtitle mx-auto">
              Our proven methodology has helped 500+ international businesses source successfully from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-blue-600 mb-4">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Typical Timeline</h2>
            <p className="section-subtitle mx-auto">
              Here's what you can expect at each stage of your sourcing project.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-6">
                  <span className="text-sm font-medium text-blue-600">Day 1-2</span>
                </div>
                <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">Initial Consultation</h4>
                  <p className="text-sm text-slate-600">We review your requirements and provide initial feedback.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-6">
                  <span className="text-sm font-medium text-blue-600">Day 3-5</span>
                </div>
                <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">Supplier Matching</h4>
                  <p className="text-sm text-slate-600">We present 3-5 qualified suppliers with detailed profiles.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-6">
                  <span className="text-sm font-medium text-blue-600">Week 2-3</span>
                </div>
                <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">Verification & Sampling</h4>
                  <p className="text-sm text-slate-600">Factory audits and sample production for your approval.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-6">
                  <span className="text-sm font-medium text-blue-600">Week 4-8</span>
                </div>
                <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">Production & QC</h4>
                  <p className="text-sm text-slate-600">Production monitoring and quality inspections.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-6">
                  <span className="text-sm font-medium text-blue-600">Week 8+</span>
                </div>
                <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">Shipping & Delivery</h4>
                  <p className="text-sm text-slate-600">Logistics coordination and delivery to your location.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Sourcing Project?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and learn how we can help you source better from China. Our team responds within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="mailto:info@ssourcingchina.com">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
