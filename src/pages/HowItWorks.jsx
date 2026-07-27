import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Search, FileCheck, ClipboardCheck, Factory, Ship,
  CheckCircle, ArrowRight, Clock, Users, Shield, MessageSquare
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
      phase: 'Discovery',
      title: 'Share Your Requirements',
      description: 'Tell us what you need. We\'ll gather details about your product specifications, quality standards, quantity requirements, target pricing, and timeline.',
      details: [
        'Product specifications and technical requirements',
        'Quality standards and certifications needed',
        'Target price range and budget',
        'Order quantity and delivery timeline',
        'Any special requirements or constraints'
      ],
      icon: FileText,
      timeline: 'Day 1'
    },
    {
      number: '02',
      phase: 'Sourcing',
      title: 'Supplier Identification & Verification',
      description: 'We identify suitable factories from our verified network and conduct thorough background checks on each potential supplier.',
      details: [
        'Identify 3-5 matching factories',
        'Business license verification',
        'On-site facility visits',
        'Production capacity assessment',
        'Reference checks with existing clients'
      ],
      icon: Search,
      timeline: 'Week 1-2'
    },
    {
      number: '03',
      phase: 'Selection',
      title: 'Supplier Comparison & Sample Approval',
      description: 'We present detailed supplier profiles, facilitate sample requests, and help you select the best fit for your needs.',
      details: [
        'Side-by-side supplier comparison',
        'Sample request and management',
        'Quality assessment of samples',
        'Price negotiation',
        'Terms and conditions finalization'
      ],
      icon: FileCheck,
      timeline: 'Week 2-4'
    },
    {
      number: '04',
      phase: 'Production',
      title: 'Production Monitoring & Quality Control',
      description: 'Regular production updates and quality inspections at key stages to ensure everything stays on track.',
      details: [
        'Pre-production inspection',
        'Weekly production progress updates',
        'During-production inspections',
        'Issue identification and resolution',
        'Timeline and quality tracking'
      ],
      icon: ClipboardCheck,
      timeline: 'Week 4-12'
    },
    {
      number: '05',
      phase: 'Delivery',
      title: 'Shipping & Final Delivery',
      description: 'We coordinate all logistics from factory to your door, handling documentation and customs clearance.',
      details: [
        'Production completion verification',
        'Pre-shipment inspection',
        'Freight forwarding arrangements',
        'Customs documentation',
        'Door-to-door delivery coordination'
      ],
      icon: Ship,
      timeline: 'Week 12-16'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Skip months of research and travel. Our established processes get you from requirements to delivery faster.'
    },
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Factory verification and quality inspections significantly reduce the risk of problems with your order.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to bilingual professionals who understand both Western business practices and Chinese manufacturing.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Regular updates and responsive communication keep you informed throughout the entire process.'
    }
  ];

  const timeline = [
    { stage: 'Typical timeline', timeframe: '12-16 weeks' },
    { stage: 'Supplier identification', timeframe: '1-2 weeks' },
    { stage: 'Sample approval', timeframe: '2-4 weeks' },
    { stage: 'Production', timeframe: '4-12 weeks' },
    { stage: 'Shipping', timeframe: '2-4 weeks' }
  ];
  return (
    <div ref={containerRef}>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A transparent, structured approach to China sourcing. From initial inquiry to final delivery, we guide you through every step.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              Start Your Sourcing Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our 5-Step Process
            </h2>
            <p className="text-lg text-gray-600">
              A clear roadmap from requirements to delivery.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="hidden lg:flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center px-4">
                    <div className="text-xs text-gray-500 mb-1">{item.stage}</div>
                    <div className="text-sm font-medium text-blue-600">{item.timeframe}</div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-8 h-px bg-gray-300 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{step.phase}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-600 font-medium">
                      <Clock className="w-4 h-4" />
                      {step.timeline}
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gray-200 border-2 border-dashed rounded-2xl h-64 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">{step.title}</span>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full h-8 w-px bg-gray-200 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our Process
            </h2>
            <p className="text-lg text-gray-600">
              Why a structured sourcing approach makes a difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Sourcing Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and timeline estimate for your project.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
