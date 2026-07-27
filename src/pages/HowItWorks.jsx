import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Handshake, 
  Factory, 
  ClipboardCheck, 
  Truck,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Calendar,
  BarChart3
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Tell us what you need. Provide product specifications, quantity, target price, quality requirements, and timeline.',
      details: [
        'Product specifications and technical drawings',
        'Target price range',
        'Order quantity',
        'Quality standards required',
        'Delivery timeline',
      ],
      timeline: '1-2 days',
    },
    {
      number: '02',
      icon: Search,
      title: 'We Find Suppliers',
      description: 'We identify and verify suitable manufacturers from our extensive network and conduct thorough background checks.',
      details: [
        'Supplier identification from verified database',
        'Business license verification',
        'Factory capability assessment',
        'Reference checks',
        'Shortlist presentation (2-4 suppliers)',
      ],
      timeline: '1-2 weeks',
    },
    {
      number: '03',
      icon: Handshake,
      title: 'Negotiate & Agree',
      description: 'We negotiate prices, payment terms, and contract conditions on your behalf to secure the best deal.',
      details: [
        'Price negotiation',
        'Payment term optimization',
        'Contract drafting and review',
        'Sample ordering and evaluation',
        'Terms finalization',
      ],
      timeline: '2-4 weeks',
    },
    {
      number: '04',
      icon: Factory,
      title: 'Production & Monitoring',
      description: 'We monitor production progress with regular updates and on-site visits to ensure everything stays on track.',
      details: [
        'Production schedule setup',
        'Weekly progress updates',
        'On-site monitoring visits',
        'Issue identification and resolution',
        'Quality milestone tracking',
      ],
      timeline: 'Varies by order size',
    },
    {
      number: '05',
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC team conducts thorough inspections to ensure products meet your specifications before shipping.',
      details: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'AQL-based sampling',
        'Lab testing coordination',
        'Detailed inspection reports',
      ],
      timeline: '2-5 days',
    },
    {
      number: '06',
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle customs documentation, and ensure safe delivery to your specified location.',
      details: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Multi-modal transport options',
        'Door-to-door delivery',
      ],
      timeline: 'Varies by destination',
    },
  ];

  const timeline = [
    { phase: 'Request & Research', duration: '1-2 weeks' },
    { phase: 'Negotiation', duration: '2-4 weeks' },
    { phase: 'Production', duration: '2-12 weeks' },
    { phase: 'Inspection & Shipping', duration: '2-6 weeks' },
  ];

  const whatYouGet = [
    {
      icon: Search,
      title: 'Verified Suppliers',
      description: 'Access to our network of 2,500+ verified manufacturers',
    },
    {
      icon: MessageCircle,
      title: 'Bilingual Support',
      description: 'Native English and Mandarin speakers for clear communication',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Assurance',
      description: 'Professional QC inspections at every critical stage',
    },
    {
      icon: BarChart3,
      title: 'Transparent Pricing',
      description: 'No hidden fees, detailed cost breakdowns',
    },
    {
      icon: Calendar,
      title: 'Timeline Management',
      description: 'Regular updates and proactive issue resolution',
    },
    {
      icon: CheckCircle,
      title: 'Risk Mitigation',
      description: 'Comprehensive due diligence and compliance checks',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-lg text-gray-200">
              Our proven 6-step process ensures you find reliable suppliers, maintain quality, and get your products delivered smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#F5A623] text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="ml-6">
                      <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-4">
                        <step.icon className="w-6 h-6 text-[#1E3A5F]" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                        {step.title}
                      </h2>
                      <p className="text-[#6B7280] mb-4">
                        {step.description}
                      </p>
                      <div className="flex items-center text-[#F5A623] text-sm font-medium">
                        <Clock className="w-4 h-4 mr-1" />
                        Timeline: {step.timeline}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-lg p-6 border border-[#E5E7EB]">
                    <h3 className="font-semibold text-[#1E3A5F] mb-4">What happens:</h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#4CAF50] mr-2 flex-shrink-0 mt-1" />
                          <span className="text-sm text-[#6B7280]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-16 bg-[#E5E7EB]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              While timelines vary based on product complexity and order size, here's what to expect.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute top-4 left-0 right-0 h-1 bg-[#E5E7EB] hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-lg p-4 text-center border border-[#E5E7EB] shadow-sm">
                      <div className="w-8 h-8 bg-[#F5A623] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3 relative z-10">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-[#1E3A5F] mb-1">{item.phase}</h3>
                      <p className="text-sm text-[#6B7280]">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              What You Get
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Benefits of working with SSourcing China as your sourcing partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B7280]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Submit your sourcing request today and let us help you find the right suppliers in China.
          </p>
          <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-4">
            Submit Your Request
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;