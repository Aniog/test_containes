import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, FileCheck, Package, ClipboardCheck, Truck, ArrowRight,
  CheckCircle, MessageSquare, Phone, Clock, Users, Shield
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Submit Your Sourcing Request',
      description: 'Tell us what products you need, including specifications, quantities, target prices, and quality requirements. The more details you provide, the better we can match you with suitable suppliers.',
      details: [
        'Product specifications and requirements',
        'Target quantity and MOQ needs',
        'Budget and pricing expectations',
        'Quality standards and certifications',
        'Timeline requirements',
        'Any existing supplier references',
      ],
      image: 'sourcing-request',
    },
    {
      number: '02',
      title: 'We Identify & Verify Suppliers',
      description: 'Our team leverages our extensive network and database to identify potential manufacturers. Each candidate undergoes a thorough verification process before being presented to you.',
      details: [
        'Supplier database matching',
        'Initial capability screening',
        'Factory visit and verification',
        'Business legitimacy check',
        'Capacity assessment',
        'Reference verification',
      ],
      image: 'supplier-verification',
    },
    {
      number: '03',
      title: 'Sample Review & Approval',
      description: 'Before mass production, you receive samples to evaluate quality, functionality, and design. We manage the sample process, including requests, shipping, and feedback.',
      details: [
        'Sample request management',
        'Quality evaluation support',
        'Modification requests',
        'Shipping coordination',
        'Approval documentation',
        'Final specifications locked',
      ],
      image: 'sample-approval',
    },
    {
      number: '04',
      title: 'Production & Quality Control',
      description: 'During production, we monitor progress, conduct inspections, and address any issues. Regular updates keep you informed every step of the way.',
      details: [
        'Production schedule monitoring',
        'In-process inspections',
        'Issue identification and resolution',
        'Progress photo updates',
        'Timeline management',
        'Quality documentation',
      ],
      image: 'production-monitoring',
    },
    {
      number: '05',
      title: 'Pre-Shipment Inspection',
      description: 'Before your goods leave the factory, our QC team performs a comprehensive inspection to verify quantity, quality, and packaging compliance.',
      details: [
        'AQL-based sampling inspection',
        'Quantity verification',
        'Quality assessment',
        'Packaging inspection',
        'Photo documentation',
        'Final approval',
      ],
      image: 'pre-shipment-inspection',
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      description: 'We coordinate all logistics, from factory to port to your warehouse. Our team handles documentation, customs, and tracking until your goods arrive.',
      details: [
        'Freight booking and coordination',
        'Documentation preparation',
        'Customs clearance support',
        'Tracking and updates',
        'Delivery coordination',
        'Delivery confirmation',
      ],
      image: 'shipping-delivery',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Factory verification and quality inspections protect you from fraud and substandard products.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Skip the travel and translation challenges. We handle everything on the ground in China.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Bilingual professionals with deep knowledge of Chinese manufacturing and international trade.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Rigorous QC protocols ensure your products meet specifications every time.',
    },
  ];

  const timeline = [
    { stage: 'Supplier Identification', duration: '1-2 weeks' },
    { stage: 'Sample Production & Approval', duration: '2-4 weeks' },
    { stage: 'Mass Production', duration: '3-8 weeks' },
    { stage: 'Inspection & Shipping', duration: '2-4 weeks' },
    { stage: 'Total (Sea Freight)', duration: '8-18 weeks' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Our streamlined process makes China sourcing simple, transparent, and risk-free. Here's how we turn your product ideas into delivered goods.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[47px] top-full h-20 w-0.5 bg-slate-200" />
                )}
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 bg-primary-600 rounded-xl flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                      <h2 className="heading-2">{step.title}</h2>
                    </div>
                    <p className="text-body mb-6">{step.description}</p>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <h3 className="font-semibold mb-4">What We Do:</h3>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-slate-50 rounded-2xl p-4">
                      <img
                        alt={step.title}
                        data-strk-img-id={`howitworks-${step.number}-001`}
                        data-strk-img={`${step.title} [howitworks-${step.number}-title] sourcing process`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full rounded-xl"
                      />
                      <p id={`howitworks-${step.number}-title`} className="sr-only">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Typical Timeline</h2>
            <p className="text-body">
              While timelines vary based on product complexity and quantity, here's a general overview of what to expect.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {timeline.map((item, index) => (
                <div 
                  key={item.stage} 
                  className={`flex items-center justify-between p-6 ${index < timeline.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="font-medium text-slate-900">{item.stage}</span>
                  </div>
                  <span className="text-slate-500">{item.duration}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              Air freight available for urgent orders (5-10 days transit time)
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Why Our Process Works</h2>
            <p className="text-body">
              Our systematic approach combines local expertise with professional standards to deliver results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Sourcing Journey?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a free consultation and timeline estimate for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="mailto:info@ssourcingchina.com" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-all border border-primary-400">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
