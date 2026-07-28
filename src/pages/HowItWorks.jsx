import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Search, Factory, ClipboardCheck, Package, Truck,
  CheckCircle, ArrowRight, Phone, Mail, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  React.useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      icon: FileText,
      description: 'Start by telling us what you need. Fill out our inquiry form with details about your products, quantities, target prices, and timeline.',
      details: [
        'Product specifications and requirements',
        'Target quantity and frequency',
        'Budget range',
        'Delivery timeline',
        'Quality standards and certifications needed',
      ],
    },
    {
      number: '02',
      title: 'We Research Suppliers',
      icon: Search,
      description: 'Our team leverages our extensive manufacturer network and conducts thorough research to identify qualified suppliers matching your criteria.',
      details: [
        'Match suppliers to your product requirements',
        'Verify business licenses and registrations',
        'Assess production capacity and capabilities',
        'Check industry experience and client references',
        'Shortlist the best options for your review',
      ],
    },
    {
      number: '03',
      title: 'Factory Verification',
      icon: Factory,
      description: 'We visit shortlisted factories personally to verify their facilities, equipment, workforce, and production processes.',
      details: [
        'On-site factory visits with photo/video documentation',
        'Business license and legal entity verification',
        'Production line and equipment assessment',
        'Quality management system evaluation',
        'Capacity and lead time verification',
      ],
    },
    {
      number: '04',
      title: 'You Select',
      icon: ClipboardCheck,
      description: 'We present detailed supplier profiles including our assessment findings. You choose the factory that best fits your needs. We can arrange video calls or visits if needed.',
      details: [
        'Detailed supplier reports with photos',
        'Comparison of pricing and terms',
        'Factory tour coordination (in-person or virtual)',
        'Negotiation support',
        'Contract review assistance',
      ],
    },
    {
      number: '05',
      title: 'Production Monitoring',
      icon: Package,
      description: 'Once production begins, we provide regular updates and conduct quality inspections at key stages to ensure everything stays on track.',
      details: [
        'Sample approval coordination',
        'During-production inspections',
        'Progress reports at agreed intervals',
        'Issue identification and resolution',
        'Timeline and delivery tracking',
      ],
    },
    {
      number: '06',
      title: 'Quality Inspection',
      icon: CheckCircle,
      description: 'Before shipment, we perform comprehensive quality inspections using international standards (AQL) to verify your products meet specifications.',
      details: [
        'Pre-shipment inspection',
        'AQL sampling and defect classification',
        'Detailed inspection reports',
        'Photo and video documentation',
        'Correction recommendations if needed',
      ],
    },
    {
      number: '07',
      title: 'Shipping & Delivery',
      icon: Truck,
      description: 'We coordinate all logistics, from factory pickup to final delivery, handling customs documentation and freight arrangements.',
      details: [
        'Factory pickup coordination',
        'Consolidation services',
        'Customs documentation handling',
        'Freight booking (sea/air/express)',
        'Shipment tracking to destination',
      ],
    },
  ];

  const timelineOptions = [
    { label: 'New Product Development', time: '2-4 weeks' },
    { label: 'Factory Search & Verification', time: '1-2 weeks' },
    { label: 'Sample Production & Approval', time: '2-4 weeks' },
    { label: 'Bulk Production', time: '4-12 weeks' },
    { label: 'Inspection & Shipping', time: '1-3 weeks' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-blue-100">
              A transparent, step-by-step process to help you source products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
                )}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center relative z-10">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-5xl font-bold text-blue-100 mb-2">{step.number}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">What we do:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, dIndex) => (
                          <li key={dIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Typical Timeline</h2>
              <p className="text-gray-600">
                While timelines vary based on product complexity and quantities, here's a general overview.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {timelineOptions.map((item, index) => (
                <div key={index} className={`flex items-center justify-between p-5 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <span className="font-medium text-gray-900">{item.label}</span>
                  <span className="text-blue-600 font-semibold">{item.time}</span>
                </div>
              ))}
              <div className="bg-blue-600 text-white p-5 flex items-center justify-between">
                <span className="font-semibold">Total Estimated Time</span>
                <span className="font-bold">8-20 weeks</span>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              * Timeline depends on product complexity, order quantity, and factory availability
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Sourcing Journey</h2>
            <p className="text-blue-100 text-lg mb-8">
              The first step is reaching out. Tell us about your product needs and we'll provide a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:contact@ssourcingchina.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
