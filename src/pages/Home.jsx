import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, Award, Clock, Shield, Truck, Search, FileCheck, Package, Ship } from 'lucide-react';
import InquiryForm from '../components/ui/InquiryForm';
import CTAButton from '../components/ui/CTAButton';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Identify and qualify suppliers that match your product requirements and quality standards.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to confirm supplier legitimacy, production capacity, and compliance.',
    },
    {
      icon: FileCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment and in-process inspections to ensure products meet your specifications.',
    },
    {
      icon: Package,
      title: 'Production Monitoring',
      description: 'Regular updates and oversight throughout the manufacturing process.',
    },
    {
      icon: Ship,
      title: 'Logistics Coordination',
      description: 'Manage shipping arrangements, documentation, and customs clearance support.',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Requirement Analysis', desc: 'We review your product specifications, target price, and timeline.' },
    { number: '02', title: 'Supplier Identification', desc: 'We source and screen potential suppliers based on your criteria.' },
    { number: '03', title: 'Verification & Sampling', desc: 'Factory audits and sample evaluation before production begins.' },
    { number: '04', title: 'Production Oversight', desc: 'Quality checks and progress monitoring during manufacturing.' },
    { number: '05', title: 'Inspection & Shipping', desc: 'Final inspection, documentation, and logistics coordination.' },
  ];

  const productCategories = [
    'Electronics & Components',
    'Home & Garden Products',
    'Apparel & Textiles',
    'Industrial Machinery',
    'Consumer Goods',
    'Automotive Parts',
    'Medical Supplies',
    'Packaging Materials',
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
    'Lack of visibility into production progress',
  ];

  const trustPoints = [
    { icon: Users, label: '500+', sublabel: 'Clients Served' },
    { icon: Award, label: '1,200+', sublabel: 'Factories Audited' },
    { icon: Clock, label: '12+', sublabel: 'Years Experience' },
    { icon: Truck, label: '8,500+', sublabel: 'Shipments Managed' },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      category: 'Home Textiles',
      result: 'Reduced defect rate from 8% to under 1%',
      detail: 'Established quality protocols and ongoing inspection program for 40+ SKUs.',
    },
    {
      client: 'North American Distributor',
      category: 'Industrial Components',
      result: 'Sourced 3 qualified suppliers in 6 weeks',
      detail: 'Verified production capacity and negotiated favorable terms for annual volume.',
    },
    {
      client: 'Australian Importer',
      category: 'Consumer Electronics',
      result: 'Cut lead time by 3 weeks',
      detail: 'Streamlined production monitoring and consolidated shipping logistics.',
    },
  ];

  const faqs = [
    {
      q: 'How much does your sourcing service cost?',
      a: 'Our fees are structured based on project scope. We offer transparent pricing with no hidden costs. Contact us for a detailed quote based on your requirements.',
    },
    {
      q: 'Do you charge suppliers or only buyers?',
      a: 'We work exclusively for buyers. Our compensation comes from our clients, ensuring our recommendations remain unbiased.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier identification typically takes 2-4 weeks. Full verification, sampling, and production timelines vary by product complexity.',
    },
    {
      q: 'Can you help with existing suppliers?',
      a: 'Yes. We can audit current suppliers, implement quality controls, or help transition to alternative sources if needed.',
    },
    {
      q: 'What regions in China do you cover?',
      a: 'We work with suppliers across all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, Shandong, and Shanghai.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Professional support for supplier identification, factory verification, quality control, and shipping coordination. We help overseas buyers source reliably from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border border-white/30 rounded-md hover:bg-white/5 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">No obligation. Response within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F9FAFB] flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-[#1E40AF]" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0A2540]">{point.label}</div>
                  <div className="text-sm text-[#6B7280]">{point.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0A2540] mb-4">Our Services</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto">
              End-to-end support for sourcing from China, from initial supplier search through delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-[#1E40AF]/30 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-[#1E40AF]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">{service.title}</h3>
                <p className="text-sm text-[#4B5563]">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-[#1E40AF] font-medium text-sm hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0A2540] mb-4">Sourcing Process</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto">
              A structured approach to reduce risk and improve outcomes when sourcing from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-[#1E40AF] text-sm font-semibold mb-2">{step.number}</div>
                <h3 className="font-semibold text-[#0A2540] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4B5563]">{step.desc}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-3 -right-3 w-6 h-px bg-gray-300" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-[#1E40AF] font-medium text-sm hover:underline">
              See detailed process →
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#0A2540] mb-4">Products We Source</h2>
              <p className="text-[#4B5563] mb-6">
                We work across a wide range of product categories, with particular experience in these areas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {productCategories.map((cat, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-[#1F2937]">
                    <Check className="w-4 h-4 text-[#059669] flex-shrink-0" />
                    {cat}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/products" className="text-[#1E40AF] font-medium text-sm hover:underline">
                  Browse all categories →
                </Link>
              </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-8">
              <h3 className="font-semibold text-[#0A2540] mb-4">Common Sourcing Requests</h3>
              <ul className="space-y-3 text-sm text-[#4B5563]">
                <li>• Custom manufactured components with specific technical specifications</li>
                <li>• Private label consumer products for retail distribution</li>
                <li>• OEM production for established product lines</li>
                <li>• One-time bulk orders and recurring supply arrangements</li>
                <li>• Product development support from prototype to production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-[#0A2540] mb-4">Problems We Solve</h2>
            <p className="text-[#4B5563]">Common challenges when sourcing from China without local support.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-3 bg-white p-5 rounded-lg border border-gray-200">
                <div className="mt-0.5">
                  <Check className="w-5 h-5 text-[#059669]" />
                </div>
                <p className="text-sm text-[#1F2937]">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-[#0A2540] mb-4">Why Buyers Work With Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#0A2540] mb-3">Local Presence</h3>
              <p className="text-sm text-[#4B5563]">
                Our team is based in China with direct access to factories across major manufacturing regions. We conduct audits and inspections in person.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#0A2540] mb-3">Buyer-Focused</h3>
              <p className="text-sm text-[#4B5563]">
                We represent your interests exclusively. Our recommendations are based on your requirements, not supplier relationships.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#0A2540] mb-3">Practical Experience</h3>
              <p className="text-sm text-[#4B5563]">
                Over a decade working with international buyers across retail, distribution, and manufacturing sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-[#0A2540] mb-2">Recent Projects</h2>
              <p className="text-[#4B5563]">Examples of sourcing work completed for our clients.</p>
            </div>
            <Link to="/case-studies" className="hidden md:block text-[#1E40AF] font-medium text-sm hover:underline">
              View all case studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-xs uppercase tracking-wider text-[#6B7280] mb-2">{study.category}</div>
                <h3 className="font-semibold text-[#0A2540] mb-1">{study.client}</h3>
                <p className="text-sm font-medium text-[#059669] mb-3">{study.result}</p>
                <p className="text-sm text-[#4B5563]">{study.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 md:hidden">
            <Link to="/case-studies" className="text-[#1E40AF] font-medium text-sm hover:underline">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#0A2540] text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-[#0A2540] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#4B5563]">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-[#4B5563] mb-3">Still have questions?</p>
            <Link to="/contact" className="text-[#1E40AF] font-medium text-sm hover:underline">
              Contact our team →
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-[#0A2540] mb-3">Start Your Sourcing Project</h2>
            <p className="text-[#4B5563]">Tell us about your requirements and we'll provide a preliminary assessment.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
