import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Truck,
  Package,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Phone,
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Start by telling us what you need. Provide details about the product you want to source, estimated quantities, target price range, quality requirements, and your timeline.',
      details: [
        'Product specifications and requirements',
        'Target pricing and order quantities',
        'Quality standards and certifications needed',
        'Production and delivery timeline',
        'Any special requirements or constraints',
      ],
      timeline: '5-10 minutes',
    },
    {
      number: '02',
      icon: Search,
      title: 'We Find Suppliers',
      description: 'Our team leverages extensive industry knowledge and a verified database of manufacturers to identify potential suppliers that match your requirements.',
      details: [
        'Research potential manufacturers',
        'Initial capability and capacity screening',
        'Price benchmarking analysis',
        'Export experience verification',
        'Prepare detailed supplier comparison',
      ],
      timeline: '5-10 business days',
    },
    {
      number: '03',
      icon: Building2,
      title: 'Factory Verification',
      description: 'Before you commit to any supplier, we conduct thorough on-site audits to verify legitimacy, assess capabilities, and ensure they can meet your requirements.',
      details: [
        'Business license verification',
        'Production facility inspection',
        'Quality management assessment',
        'Capacity and capability verification',
        'Photo and video documentation',
      ],
      timeline: '3-5 business days',
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: 'You Select & Negotiate',
      description: 'Review our detailed supplier profiles and select the manufacturers you want to work with. We facilitate negotiations to ensure favorable terms and pricing.',
      details: [
        'Detailed supplier profiles with ratings',
        'Side-by-side comparison reports',
        'Price negotiation support',
        'Terms and conditions review',
        'Sample ordering assistance',
      ],
      timeline: '3-7 business days',
    },
    {
      number: '05',
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Once production begins, we provide ongoing oversight including quality inspections at key stages, progress updates, and issue resolution.',
      details: [
        'Pre-production material inspection',
        'During production quality checks',
        'Weekly progress updates',
        'Sample approval coordination',
        'Issue identification and resolution',
      ],
      timeline: '2-8 weeks (varies by product)',
    },
    {
      number: '06',
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We handle all logistics aspects from factory to your door, including documentation, customs clearance, freight, and delivery tracking.',
      details: [
        'Documentation preparation',
        'Freight forwarding arrangement',
        'Customs clearance support',
        'Cargo tracking and monitoring',
        'Delivery confirmation',
      ],
      timeline: '1-4 weeks (varies by shipping method)',
    },
  ];

  const timelineFeatures = [
    {
      icon: Clock,
      title: 'Transparent Timelines',
      description: 'We provide clear estimated timelines for each phase of the sourcing process, so you always know what to expect.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Each project is assigned a dedicated account manager who serves as your primary point of contact throughout the process.',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Our multi-stage inspection process ensures quality issues are caught early and resolved before shipment.',
    },
    {
      icon: Phone,
      title: 'Clear Communication',
      description: 'Regular updates and prompt responses to your inquiries. We believe in keeping you informed at every step.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Your Path to Successful China Sourcing
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Our proven 6-step process takes you from initial inquiry to delivered products, with professional support at every stage. Here's what you can expect when you work with us.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center">
                      <step.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <span className="text-[#e67e22] font-bold text-sm">STEP {step.number}</span>
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f]">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-[#4a5568] text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="bg-[#f7fafc] rounded-lg px-4 py-2 inline-flex items-center gap-2">
                    <Clock size={16} className="text-[#e67e22]" />
                    <span className="text-sm text-[#4a5568]">Typical duration: </span>
                    <span className="text-sm font-semibold text-[#1e3a5f]">{step.timeline}</span>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#f7fafc] rounded-2xl p-8">
                    <h3 className="font-semibold text-[#1e3a5f] mb-6">What We Do:</h3>
                    <ul className="space-y-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[#27ae60] flex-shrink-0 mt-0.5" />
                          <span className="text-[#4a5568]">{detail}</span>
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

      {/* Key Features */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">What Sets Us Apart</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
              Our Commitment to Your Success
            </h2>
            <p className="text-[#4a5568] text-lg">
              We believe in transparency, communication, and delivering on our promises. Here's what you can expect when you work with SSourcing China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#fef7f0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-[#e67e22]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4a5568] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Typical Project Timeline
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#e67e22] mb-2">2-3</div>
                <div className="text-sm text-gray-300">weeks for supplier search & verification</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#e67e22] mb-2">2-8</div>
                <div className="text-sm text-gray-300">weeks for production (varies by product)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#e67e22] mb-2">1-4</div>
                <div className="text-sm text-gray-300">weeks for shipping & delivery</div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Total typical timeline:</strong> 5-13 weeks from inquiry to delivery, depending on product complexity and order size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Submit your requirements today and receive a customized sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            Get Started Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;