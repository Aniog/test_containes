import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start with a free consultation to understand your product requirements, budget, timeline, and quality expectations. This helps us create a tailored sourcing strategy.',
      icon: <MessageSquare className="w-8 h-8" />,
      details: [
        'Free 30-minute consultation',
        'Product requirement analysis',
        'Budget and timeline discussion',
        'Quality standards alignment'
      ]
    },
    {
      number: '02',
      title: 'Supplier Search & Matching',
      description: 'Our team searches our network of 500+ verified suppliers and presents you with 3-5 qualified manufacturers that match your criteria.',
      icon: <Search className="w-8 h-8" />,
      details: [
        'Extensive supplier database',
        'Capability matching',
        'Multiple options presented',
        'Transparent comparison'
      ]
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We verify each supplier through business license checks, factory audits, and reference verification to ensure they are legitimate and capable.',
      icon: <ShieldCheck className="w-8 h-8" />,
      details: [
        'Business license verification',
        'Factory on-site audit',
        'Production capacity check',
        'Quality system assessment'
      ]
    },
    {
      number: '04',
      title: 'Negotiation & Sampling',
      description: 'We negotiate pricing, terms, and quality standards on your behalf. We also coordinate sample production and evaluation.',
      icon: <ClipboardCheck className="w-8 h-8" />,
      details: [
        'Price negotiation',
        'Contract terms review',
        'Sample coordination',
        'Quality standard agreement'
      ]
    },
    {
      number: '05',
      title: 'Production Monitoring',
      description: 'During production, we monitor progress, conduct inspections, and provide you with regular updates and photos to ensure everything is on track.',
      icon: <ClipboardCheck className="w-8 h-8" />,
      details: [
        'Production timeline tracking',
        'Quality inspections',
        'Progress photo updates',
        'Issue resolution'
      ]
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle all documentation, and ensure safe delivery to your warehouse or distribution center.',
      icon: <Ship className="w-8 h-8" />,
      details: [
        'Freight arrangement',
        'Customs documentation',
        'Insurance coordination',
        'Door-to-door delivery'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Save Time',
      description: 'We handle the entire sourcing process, saving you weeks of research, communication, and coordination.'
    },
    {
      title: 'Reduce Risk',
      description: 'Our verification and inspection processes minimize the risk of fraud, quality issues, and delivery problems.'
    },
    {
      title: 'Better Prices',
      description: 'Our local presence and negotiation expertise help you get competitive pricing from reliable suppliers.'
    },
    {
      title: 'Peace of Mind',
      description: 'With a dedicated agent managing your orders, you can focus on growing your business while we handle the details.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A simple, transparent process that takes the complexity out of China sourcing. From your first inquiry to final delivery, we are with you every step of the way.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Sourcing Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our 6-Step Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven process refined over 10+ years and hundreds of successful sourcing projects.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-blue-600">{step.number}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-slate-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here is what you gain by partnering with SSourcing China for your sourcing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-slate-600">
              While timelines vary by project complexity, here is what you can typically expect.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-24 text-right">
                <span className="text-lg font-semibold text-blue-600">Week 1-2</span>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">Initial Consultation & Supplier Search</h3>
                <p className="text-slate-600">We understand your needs and present qualified suppliers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-24 text-right">
                <span className="text-lg font-semibold text-blue-600">Week 2-3</span>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">Verification & Sampling</h3>
                <p className="text-slate-600">Factory audits, negotiations, and sample production.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-24 text-right">
                <span className="text-lg font-semibold text-blue-600">Week 3-4</span>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">Production & Inspection</h3>
                <p className="text-slate-600">Production monitoring and quality inspections.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-24 text-right">
                <span className="text-lg font-semibold text-blue-600">Week 4-6</span>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">Shipping & Delivery</h3>
                <p className="text-slate-600">Logistics coordination and final delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Contact us today for a free consultation and let us help you source better from China.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
