import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Search,
  Shield,
  FileCheck,
  Package,
  Truck,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  MessageSquare,
  ClipboardList,
  Factory,
  Ship,
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Submit Your Inquiry',
      description: 'Tell us what you need to source. Provide details about your product requirements, target price, quality standards, and timeline.',
      details: [
        'Product specifications and requirements',
        'Target price range and order volume',
        'Quality standards and certifications needed',
        'Preferred timeline and shipping destination',
      ],
      timeline: '1-2 days',
    },
    {
      step: '2',
      icon: <Search className="h-8 w-8" />,
      title: 'Supplier Identification',
      description: 'We research and identify potential suppliers that match your requirements from our network of verified manufacturers.',
      details: [
        'Search our database of 500+ verified suppliers',
        'Identify new suppliers if needed',
        'Initial capability assessment',
        'Shortlist 3-5 qualified candidates',
      ],
      timeline: '3-5 days',
    },
    {
      step: '3',
      icon: <Shield className="h-8 w-8" />,
      title: 'Factory Verification',
      description: 'We conduct on-site factory audits to verify capabilities, certifications, and business legitimacy.',
      details: [
        'On-site factory visits and audits',
        'Business license and certification verification',
        'Production capacity assessment',
        'Quality system evaluation',
        'Reference checks',
      ],
      timeline: '5-7 days',
    },
    {
      step: '4',
      icon: <ClipboardList className="h-8 w-8" />,
      title: 'Quotation & Negotiation',
      description: 'We obtain detailed quotations and negotiate terms on your behalf to get the best value.',
      details: [
        'Detailed price quotations from shortlisted suppliers',
        'Terms and conditions review',
        'Price negotiation',
        'Sample arrangement and evaluation',
      ],
      timeline: '3-5 days',
    },
    {
      step: '5',
      icon: <Factory className="h-8 w-8" />,
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections to ensure products meet your specifications.',
      details: [
        'Pre-production inspection',
        'During-production monitoring',
        'Pre-shipment inspection',
        'Detailed inspection reports with photos',
        'Defect management and rework supervision',
      ],
      timeline: 'Varies by product',
    },
    {
      step: '6',
      icon: <Ship className="h-8 w-8" />,
      title: 'Shipping & Delivery',
      description: 'We coordinate end-to-end logistics from factory to your warehouse, including customs clearance.',
      details: [
        'Freight forwarding arrangement',
        'Customs documentation and clearance',
        'Insurance coordination',
        'Final delivery to your location',
        'Post-delivery support',
      ],
      timeline: 'Varies by destination',
    },
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Save Time',
      description: 'We handle the time-consuming tasks of supplier research, verification, and negotiation.',
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Reduce Costs',
      description: 'Our local expertise and negotiation skills help you get better prices and avoid costly mistakes.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Minimize Risk',
      description: 'Factory verification and quality inspections protect you from unreliable suppliers and defective products.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Dedicated Support',
      description: 'A single point of contact who understands your business and is available when you need them.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              A simple, transparent 6-step process to help you source quality products from China with confidence. From initial inquiry to final delivery, we're with you every step of the way.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Start Your Sourcing Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                    <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm text-slate-700">
                    <Clock className="h-4 w-4" />
                    Typical timeline: {step.timeline}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-slate-100 relative">
                      <img
                        data-strk-img-id={`step-${index}-img-${index}`}
                        data-strk-img={`[step-${index}-title] [step-${index}-desc]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 id={`step-${index}-title`} className="text-xl font-bold">{step.title}</h3>
                        <p id={`step-${index}-desc`} className="text-sm opacity-90">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Working With Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Why thousands of global buyers trust SSourcing China for their sourcing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We'll discuss your sourcing needs and provide a customized solution.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
