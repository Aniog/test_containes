import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  FlaskConical, 
  FileSignature, 
  Factory, 
  CheckCircle, 
  Truck, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Shield,
  Users
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Tell us what you need. Provide product specifications, quantity requirements, target price range, desired quality standards, and delivery timeline.',
      details: [
        'Product description and specifications',
        'Quantity and packaging requirements',
        'Target price and payment terms',
        'Delivery destination and timeline',
        'Any specific certifications needed',
      ],
    },
    {
      number: '02',
      icon: Search,
      title: 'Supplier Matching',
      description: 'We identify and evaluate suitable suppliers from our extensive network of pre-vetted Chinese manufacturers.',
      details: [
        'Supplier identification from our database',
        'Background verification',
        'Production capacity assessment',
        'Quality capability evaluation',
        'Price comparison across suppliers',
      ],
    },
    {
      number: '03',
      icon: FlaskConical,
      title: 'Sample Evaluation',
      description: 'We arrange for samples from shortlisted suppliers and provide detailed evaluation with photos and videos.',
      details: [
        'Sample request coordination',
        'Quality assessment',
        'Specification compliance check',
        'Detailed photo/video documentation',
        'Sample report with recommendations',
      ],
    },
    {
      number: '04',
      icon: FileSignature,
      title: 'Order Placement',
      description: 'We help negotiate terms and finalize contracts, ensuring all details are clearly documented.',
      details: [
        'Price negotiation',
        'Contract preparation',
        'Payment term arrangement',
        'Quality specifications confirmation',
        'Timeline agreement',
      ],
    },
    {
      number: '05',
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Our team conducts regular factory visits to monitor production progress and ensure quality standards.',
      details: [
        'Production progress tracking',
        'Quality monitoring visits',
        'Issue identification and resolution',
        'Weekly progress reports',
        'Photo and video updates',
      ],
    },
    {
      number: '06',
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Professional inspection services ensure your products meet specifications before shipment.',
      details: [
        'Pre-production inspection',
        'During-production inspection',
        'Pre-shipment inspection',
        'Lab testing coordination',
        'Detailed inspection reports',
      ],
    },
    {
      number: '07',
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate all logistics from factory to your designated destination.',
      details: [
        'Freight forwarding',
        'Customs documentation',
        'Container loading supervision',
        'Shipment tracking',
        'Delivery to your warehouse',
      ],
    },
  ];

  const timeline = [
    { stage: 'Request & Consultation', duration: '1-2 days' },
    { stage: 'Supplier Matching', duration: '3-7 days' },
    { stage: 'Sample Evaluation', duration: '2-4 weeks' },
    { stage: 'Order & Production', duration: '4-12 weeks' },
    { stage: 'Quality Inspection', duration: '2-5 days' },
    { stage: 'Shipping', duration: '2-6 weeks' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Verified Suppliers',
      description: 'Every supplier we work with is thoroughly vetted through on-site visits and background checks.',
    },
    {
      icon: Clock,
      title: 'Time Efficient',
      description: 'Our on-ground presence in China saves you time on travel, communication, and coordination.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team has years of experience in Chinese manufacturing and cross-border trade.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our proven 7-step process ensures smooth, reliable sourcing from China. 
              From initial request to final delivery, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our 7-Step Sourcing Process</h2>
            <p className="section-subtitle mx-auto mt-4">
              A comprehensive approach to ensure successful China sourcing
            </p>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4">
                  <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0] h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-[#F97316]/20">{step.number}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{step.title}</h3>
                    <p className="text-[#64748B]">{step.description}</p>
                  </div>
                </div>
                
                <div className="lg:col-span-8">
                  <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] h-full">
                    <h4 className="text-sm font-semibold text-[#1E3A5F] mb-4 uppercase tracking-wide">What Happens in This Step</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#64748B]">
                          <CheckCircle className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Typical Timeline</h2>
            <p className="section-subtitle mx-auto mt-4">
              Expected timeframes for each stage of the sourcing process
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-[#E2E8F0]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F97316] text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1E3A5F]">{item.stage}</h4>
                    <p className="text-sm text-[#64748B]">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
              <p className="text-sm text-[#64748B] text-center">
                <strong>Note:</strong> Timelines are estimates and may vary based on product complexity, 
                supplier availability, and order size. We'll provide a more accurate timeline during consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Our Process Works</h2>
            <p className="section-subtitle mx-auto mt-4">
              The key advantages of our systematic approach to China sourcing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">{benefit.title}</h3>
                <p className="text-[#64748B]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Get in touch with our team to discuss your sourcing needs. We'll guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white/10">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;