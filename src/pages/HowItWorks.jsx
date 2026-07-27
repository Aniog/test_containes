import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Package, ClipboardCheck, Truck, CheckCircle, ArrowRight, Clock, Users, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const steps = [
    {
      number: '01',
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Initial Consultation',
      description: 'We start by understanding your product requirements, quality standards, budget, and timeline. This helps us identify the best suppliers for your needs.',
      details: [
        'Product specifications review',
        'Quality requirements discussion',
        'Budget and pricing parameters',
        'Timeline and milestones',
        'Shipping destination确认'
      ],
      image: 'business meeting consultation discussion'
    },
    {
      number: '02',
      icon: <Search className="w-8 h-8" />,
      title: 'Supplier Search & Verification',
      description: 'We identify potential suppliers from our network and conduct thorough verification to ensure they are legitimate and capable.',
      details: [
        'Supplier identification from database',
        'Business license verification',
        'Factory capability assessment',
        'Financial stability check',
        'Reference verification'
      ],
      image: 'supplier verification factory documentation'
    },
    {
      number: '03',
      icon: <Users className="w-8 h-8" />,
      title: 'Factory Audit',
      description: 'For serious candidates, we conduct on-site factory audits to verify actual conditions, equipment, and production capacity.',
      details: [
        'Physical factory inspection',
        'Production line observation',
        'Equipment verification',
        'Worker conditions assessment',
        'Management interview'
      ],
      image: 'factory audit inspection manufacturing'
    },
    {
      number: '04',
      icon: <FileText className="w-8 h-8" />,
      title: 'Sample & Pricing',
      description: 'We request samples and negotiate pricing with shortlisted suppliers, presenting you with options and recommendations.',
      details: [
        'Sample request coordination',
        'Quality evaluation',
        'Price negotiation',
        'MOQ discussion',
        'Supplier comparison report'
      ],
      image: 'product samples quality inspection'
    },
    {
      number: '05',
      icon: <Package className="w-8 h-8" />,
      title: 'Production & Monitoring',
      description: 'Once you approve a supplier, we monitor production closely, providing regular updates and handling any issues that arise.',
      details: [
        'Production schedule tracking',
        'Weekly progress reports',
        'Sample approval at key stages',
        'Raw material verification',
        'Issue resolution'
      ],
      image: 'factory production monitoring'
    },
    {
      number: '06',
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quality Inspection',
      description: 'We conduct rigorous quality inspections at agreed stages to ensure products meet your specifications.',
      details: [
        'Pre-shipment inspection',
        'During-production checks',
        'AQL sampling',
        'Defect classification',
        'Detailed inspection report'
      ],
      image: 'quality control inspection check'
    },
    {
      number: '07',
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping & Delivery',
      description: 'We coordinate all logistics, from factory to port to your door, handling documentation and customs.',
      details: [
        'Freight coordination',
        'Customs documentation',
        'Container loading supervision',
        'Shipment tracking',
        'Delivery confirmation'
      ],
      image: 'container shipping logistics freight'
    },
    {
      number: '08',
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Project Completion',
      description: 'After successful delivery, we follow up to ensure satisfaction and gather feedback for continuous improvement.',
      details: [
        'Delivery confirmation',
        'Quality follow-up',
        'Issue resolution',
        'Feedback collection',
        'Future project planning'
      ],
      image: 'successful delivery celebration team'
    }
  ];

  const timeline = [
    { stage: 'Inquiry to Supplier Shortlist', duration: '1-2 weeks' },
    { stage: 'Sample Approval', duration: '2-4 weeks' },
    { stage: 'Production', duration: '4-12 weeks' },
    { stage: 'Inspection & Shipping', duration: '1-3 weeks' },
    { stage: 'Total (typical)', duration: '8-20 weeks' }
  ];

  const faqs = [
    {
      question: 'How long does the entire sourcing process take?',
      answer: 'The timeline varies based on product complexity and your requirements. A typical project takes 8-20 weeks from initial inquiry to delivery. Simple products may be faster, while complex products requiring tooling or custom manufacturing will take longer.'
    },
    {
      question: 'What information do you need to start?',
      answer: 'To begin, we need: 1) Product description or technical specifications, 2) Target quantity (MOQ and desired order size), 3) Quality requirements and standards, 4) Budget parameters, 5) Timeline expectations, 6) Destination country for shipping.'
    },
    {
      question: 'Do you work with small businesses or only large companies?',
      answer: 'We work with businesses of all sizes, from startups to established enterprises. Our minimum order quantities vary by product category, and we can help negotiate favorable terms even for smaller initial orders.'
    },
    {
      question: 'What if a supplier fails the quality inspection?',
      answer: 'If products fail inspection, we work with the supplier to identify issues and implement corrective actions. Depending on the severity, this may involve rework, replacement, or in extreme cases, switching to an alternative supplier.'
    },
    {
      question: 'How do you handle communication with suppliers?',
      answer: 'Our team in China handles all direct communication with suppliers in Mandarin. We provide you with regular updates in English and facilitate discussions through us to avoid language barriers and cultural misunderstandings.'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A7B] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge badge-accent mb-4">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-white/80 mb-8">
              A transparent, step-by-step approach to finding the right suppliers 
              and ensuring successful China sourcing from start to finish.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-primary mb-4">Step by Step</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our 8-Step Sourcing Process
            </h2>
            <p className="text-lg text-[#6B7280]">
              From initial inquiry to final delivery, we guide you through each stage 
              with transparency and professional support.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-bold text-[#CBD5E1]">{step.number}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-[#6B7280] mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#059669]" />
                        <span className="text-[#1F2937]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-[#EFF3F8]">
                    <img
                      alt={step.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`how-${step.number}`}
                      data-strk-img={`[how-${step.number}-title] manufacturing sourcing`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <h3 id={`how-${step.number}-title`} className="sr-only">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[#EFF3F8]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge badge-accent mb-4">Timeline</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Typical Project Timeline
              </h2>
              <p className="text-lg text-[#6B7280]">
                While timelines vary by project, here's a general overview of what to expect.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{item.stage}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#E67E22]">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6B7280] mt-6 text-center">
                * These are estimates. Actual timelines depend on product complexity, supplier availability, and shipping method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge badge-primary mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Common Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#F8FAFC] rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-[#6B7280]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-[#1E3A5F] inline-flex items-center justify-center">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
