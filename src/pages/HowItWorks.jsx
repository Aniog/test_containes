import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, Package, ClipboardCheck, Truck, CheckCircle, ArrowRight, Phone, MessageCircle, FileText, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Submit Your Inquiry',
      duration: 'Day 1',
      description: 'Fill out our inquiry form with details about your product requirements, quantities, target prices, and any specific needs.',
      details: [
        'Product specifications and requirements',
        'Target quantity and pricing',
        'Required certifications or standards',
        'Shipping destination and timeline'
      ]
    },
    {
      number: 2,
      icon: Search,
      title: 'Supplier Research & Matching',
      duration: 'Days 2-7',
      description: 'We identify 3-5 verified factories that match your criteria and prepare detailed supplier profiles for your review.',
      details: [
        'Background checks on each supplier',
        'Production capacity verification',
        'Certification and compliance review',
        'Initial pricing quotes'
      ]
    },
    {
      number: 3,
      icon: Building2,
      title: 'Factory Verification',
      duration: 'As needed',
      description: 'We conduct on-site audits to verify factory existence, assess capabilities, and ensure they meet your standards.',
      details: [
        'Business license verification',
        'Factory tour and photo documentation',
        'Equipment and workforce assessment',
        'Quality systems evaluation'
      ]
    },
    {
      number: 4,
      icon: Package,
      title: 'Sample Evaluation',
      duration: '1-3 weeks',
      description: 'We coordinate samples, conduct quality assessments, and facilitate your approval process before mass production.',
      details: [
        'Sample request coordination',
        'Quality inspection and reporting',
        'Modification requests if needed',
        'Final sample approval'
      ]
    },
    {
      number: 5,
      icon: ClipboardCheck,
      title: 'Production & Quality Control',
      duration: 'Production period',
      description: 'Regular factory visits and quality inspections ensure your products are manufactured to specification.',
      details: [
        'Pre-production inspection',
        'During production checks',
        'Pre-shipment inspection',
        'Weekly progress updates'
      ]
    },
    {
      number: 6,
      icon: Truck,
      title: 'Shipping & Delivery',
      duration: '2-6 weeks',
      description: 'We handle all logistics, documentation, and coordinate door-to-door delivery to your location.',
      details: [
        'Freight booking and container loading',
        'Customs documentation',
        'Shipment tracking',
        'Final delivery coordination'
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Dedicated Project Manager',
      description: 'One point of contact throughout your entire sourcing journey, fluent in English and Mandarin.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Multiple inspection stages ensure products meet your specifications before leaving China.'
    },
    {
      icon: MessageCircle,
      title: 'Transparent Communication',
      description: 'Regular updates and photo documentation keep you informed at every stage.'
    },
    {
      icon: Building2,
      title: 'Risk Mitigation',
      description: 'Factory verification and escrow-style payment protection reduce your exposure to risk.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            How Our Sourcing Process Works
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            A clear, transparent workflow designed to minimize risk and maximize efficiency. From initial inquiry to final delivery, we guide you through every step.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="bg-white rounded-xl p-8 shadow-sm border border-[#E2E8F0]">
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-2 flex flex-col items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-[#1E3A5F] rounded-2xl flex items-center justify-center mb-2">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#C9A227] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{step.number}</span>
                      </div>
                    </div>
                    <span className="text-sm text-[#64748B] font-medium bg-[#F1F5F9] px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <h3 className="text-2xl font-bold text-[#1E293B] mb-3">{step.title}</h3>
                    <p className="text-[#64748B] mb-6">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                          <span className="text-sm text-[#64748B]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-8">
                    <div className="w-0.5 h-8 bg-[#E2E8F0]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">
              Benefits of Working With SSourcing China
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              We provide the expertise, network, and hands-on support you need to source from China with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#1E3A5F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#64748B]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              While timelines vary based on product complexity and requirements, here's a general overview.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E2E8F0]">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">1-2 Days</div>
                <div className="text-sm text-[#64748B]">Initial Response</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">1-2 Weeks</div>
                <div className="text-sm text-[#64748B]">Supplier Matching</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">2-8 Weeks</div>
                <div className="text-sm text-[#64748B]">Samples & Approval</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">2-6 Weeks</div>
                <div className="text-sm text-[#64748B]">Production & Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Submit your inquiry today and receive a personalized response within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B8922A] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+862012345678"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
