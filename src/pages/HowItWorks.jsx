import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Building2, 
  ClipboardCheck,
  Package,
  Truck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    step: 1,
    title: 'Submit Your Inquiry',
    icon: FileText,
    duration: 'Day 1',
    description: 'Fill out our inquiry form with your product requirements, specifications, quantity, target price, and timeline.',
    details: [
      'Product description and specifications',
      'Target quantity and price range',
      'Required delivery timeline',
      'Any existing supplier references',
      'Quality standards and certifications needed',
    ],
    imageId: 'submit-inquiry',
  },
  {
    step: 2,
    title: 'Supplier Matching',
    icon: Search,
    duration: 'Days 1-5',
    description: 'We identify suitable manufacturers from our verified network and present you with options that match your criteria.',
    details: [
      'Database search of 500+ verified suppliers',
      'Initial capability screening',
      'Price comparison analysis',
      'Communication with potential suppliers',
      'Shortlist presentation to you',
    ],
    imageId: 'supplier-matching',
  },
  {
    step: 3,
    title: 'Factory Verification',
    icon: Building2,
    duration: 'Days 3-10',
    description: 'Before any commitment, we conduct thorough verification of shortlisted factories to ensure legitimacy and capability.',
    details: [
      'On-site factory visit',
      'Business license verification',
      'Production capacity assessment',
      'Quality system review',
      'Reference checks with existing clients',
    ],
    imageId: 'factory-verification',
  },
  {
    step: 4,
    title: 'Sampling & Negotiation',
    icon: ClipboardCheck,
    duration: 'Days 10-30',
    description: 'We coordinate sample requests, facilitate negotiations, and help finalize terms with your chosen supplier.',
    details: [
      'Sample order coordination',
      'Sample quality assessment',
      'Price negotiation',
      'Payment terms agreement',
      'Contract preparation support',
    ],
    imageId: 'sampling-negotiation',
  },
  {
    step: 5,
    title: 'Production Monitoring',
    icon: Package,
    duration: 'Ongoing',
    description: 'Throughout manufacturing, we provide regular updates, conduct quality checks, and address any issues that arise.',
    details: [
      'Weekly progress reports',
      'During-production inspections',
      'Photo and video documentation',
      'Issue identification and resolution',
      'Timeline tracking',
    ],
    imageId: 'production-monitoring',
  },
  {
    step: 6,
    title: 'Inspection & Shipping',
    icon: Truck,
    duration: 'Final Phase',
    description: 'Final quality inspection before shipment, followed by coordinated logistics to deliver products to your location.',
    details: [
      'Pre-shipment inspection (PSI)',
      'Quality certification',
      'Freight forwarding coordination',
      'Customs clearance support',
      'Delivery confirmation',
    ],
    imageId: 'inspection-shipping',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'We identify and address risks before they become costly problems.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Our local presence and expertise accelerate every step of the process.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated account managers with bilingual communication skills.',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A clear, transparent process designed to minimize risk and maximize efficiency 
              in your China sourcing operations.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Start Your Sourcing Request</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our 6-Step Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From initial inquiry to final delivery, we guide you through every step with 
              transparency and professional expertise.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200" />
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex-row gap-8 items-center`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-blue-600 font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      {/* Circle on timeline */}
                      <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />
                      
                      <div className="bg-slate-100 rounded-xl p-6">
                        <img
                          alt={step.title}
                          data-strk-img-id={`process-${step.imageId}`}
                          data-strk-img={`[process-${step.step}-title] [process-${step.step}-desc]`}
                          data-strk-img-ratio="16x10"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full rounded-lg shadow-lg"
                        />
                        <h3 id={`process-${step.step}-title`} className="sr-only">{step.title}</h3>
                        <p id={`process-${step.step}-desc`} className="sr-only">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our systematic approach delivers consistent results while minimizing risks for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-8 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Typical Timeline Overview
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <div className="w-24 text-sm font-medium text-blue-600">Days 1-5</div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Inquiry & Supplier Matching</div>
                  <div className="text-sm text-slate-600">Initial research and supplier identification</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <div className="w-24 text-sm font-medium text-blue-600">Days 3-10</div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Factory Verification</div>
                  <div className="text-sm text-slate-600">On-site audits and capability assessments</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <div className="w-24 text-sm font-medium text-blue-600">Days 10-30</div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Sampling & Negotiation</div>
                  <div className="text-sm text-slate-600">Sample approval and contract finalization</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <div className="w-24 text-sm font-medium text-blue-600">Weeks 4-12</div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Production & Monitoring</div>
                  <div className="text-sm text-slate-600">Ongoing production follow-up and quality checks</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <div className="w-24 text-sm font-medium text-blue-600">Final</div>
                <div className="flex-1">
                  <div className="font-medium text-slate-900">Inspection & Shipping</div>
                  <div className="text-sm text-slate-600">Quality verification and coordinated delivery</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-6 text-center">
              * Timeline varies based on product complexity, supplier availability, and order requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Submit your requirements today and let our team create a customized sourcing plan for you.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
