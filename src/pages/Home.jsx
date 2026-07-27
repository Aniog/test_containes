import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory,
  Award, Users, Globe, ArrowRight, CheckCircle, Star,
  Clock, HeadphonesIcon, Package, BarChart3, ChevronDown, ChevronUp
} from 'lucide-react';
import { useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="relative bg-navy-600 overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 opacity-15">
        <div
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="modern Chinese factory production line quality control"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="w-full h-full"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-gold-300 text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Trusted by 500+ Global Buyers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            We help businesses worldwide find reliable Chinese suppliers, verify factories, 
            inspect quality, follow production, and coordinate shipping — so you can source 
            with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-lg transition-colors"
            >
              How It Works
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Verified Suppliers
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Factory Audits
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Quality Inspections
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Shipping Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '12+', label: 'Years Experience' },
            { value: '500+', label: 'Clients Worldwide' },
            { value: '3,000+', label: 'Factory Audits' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-navy-600">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and shortlist qualified manufacturers that match your product specifications, budget, and quality requirements.',
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site factory audits covering production capacity, certifications, quality management systems, and export experience.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during production, and pre-shipment inspections to ensure your products meet specifications.',
    },
    {
      icon: BarChart3,
      title: 'Production Follow-up',
      description: 'Regular production monitoring with progress reports, timeline tracking, and issue resolution throughout manufacturing.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'Dedicated account manager providing continuous communication and support throughout your sourcing journey.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive sourcing solutions from supplier identification to final delivery
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-600 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-navy-600 font-semibold hover:text-gold-500 transition-colors"
          >
            View All Services <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { step: '01', title: 'Tell Us Your Needs', description: 'Share your product requirements, specifications, target price, and order volume with our team.' },
    { step: '02', title: 'Supplier Identification', description: 'We search our network and industry channels to identify qualified manufacturers for your product.' },
    { step: '03', title: 'Factory Evaluation', description: 'We conduct on-site audits, verify certifications, and assess production capabilities of shortlisted factories.' },
    { step: '04', title: 'Sampling & Negotiation', description: 'We arrange samples, facilitate price negotiations, and help you select the best supplier.' },
    { step: '05', title: 'Production & QC', description: 'We monitor production progress, conduct quality inspections, and keep you updated at every stage.' },
    { step: '06', title: 'Shipping & Delivery', description: 'We coordinate logistics, handle documentation, and ensure your goods arrive on time.' },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven six-step process to source products from China with confidence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="relative pl-14">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-navy-600 text-white flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-navy-600 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-navy-600 font-semibold hover:text-gold-500 transition-colors"
          >
            Learn More About Our Process <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  const problems = [
    {
      icon: ShieldCheck,
      title: 'Supplier Reliability',
      problem: 'Difficulty identifying trustworthy suppliers',
      solution: 'We verify factories through on-site audits, check business licenses, and validate export history.',
    },
    {
      icon: Award,
      title: 'Quality Concerns',
      problem: 'Inconsistent product quality and specifications',
      solution: 'Multi-stage quality inspections from pre-production through pre-shipment to ensure standards.',
    },
    {
      icon: Clock,
      title: 'Communication Barriers',
      problem: 'Language gaps and cultural differences slowing progress',
      solution: 'Bilingual team bridging communication between you and Chinese manufacturers.',
    },
    {
      icon: Package,
      title: 'Logistics Complexity',
      problem: 'Navigating shipping, customs, and documentation',
      solution: 'End-to-end logistics coordination including freight, customs clearance, and delivery.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common challenges when sourcing from China — and how we address them
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-600 mb-1">{item.title}</h3>
                  <p className="text-sm text-red-500 font-medium mb-2">Problem: {item.problem}</p>
                  <p className="text-sm text-green-600 font-medium">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    Solution: {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const trustPoints = [
    {
      icon: Award,
      title: 'Verified Expertise',
      description: '12+ years of sourcing experience across 20+ industries with a team of professional sourcing specialists.',
    },
    {
      icon: ShieldCheck,
      title: 'Rigorous Audits',
      description: 'Every factory undergoes on-site evaluation covering capacity, certifications, quality systems, and compliance.',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'A bilingual team of sourcing managers, QC inspectors, and logistics coordinators based in China.',
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      description: '500+ satisfied clients from 30+ countries with a 98% client retention rate year over year.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Deep understanding of international market requirements, compliance standards, and cultural expectations.',
    },
    {
      icon: ClipboardCheck,
      title: 'Transparent Process',
      description: 'Clear pricing, regular updates, detailed reports, and no hidden fees throughout the engagement.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            Why Buyers Trust Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built our reputation on reliability, transparency, and results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-navy-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-600 mb-2">{point.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: 'electronics',
      imgId: 'case-electronics-8f2a9c',
      title: 'Consumer Electronics',
      result: 'Reduced sourcing costs by 23% while improving quality consistency',
    },
    {
      id: 'furniture',
      imgId: 'case-furniture-b3c4d5',
      title: 'Furniture Manufacturing',
      result: 'Established a reliable supply chain delivering 50+ containers annually',
    },
    {
      id: 'packaging',
      imgId: 'case-packaging-e6f7g8',
      title: 'Custom Packaging',
      result: 'Found 3 qualified suppliers and reduced lead time by 40%',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-gray-200">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-${c.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 id={`case-${c.id}-title`} className="text-lg font-semibold text-navy-600 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{c.result}</p>
                <Link
                  to="/case-studies"
                  className="text-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors inline-flex items-center"
                >
                  Read Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-navy-600 font-semibold hover:text-gold-500 transition-colors"
          >
            View All Case Studies <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: 'How much do your sourcing services cost?',
      a: 'Our fees depend on the scope of work. We offer flexible models including a percentage of order value, fixed project fees, or retainer arrangements. Contact us for a free quote tailored to your needs.',
    },
    {
      q: 'How do you find and verify suppliers?',
      a: 'We combine industry databases, trade show networks, and our existing supplier relationships to identify candidates. Each factory undergoes an on-site audit covering production capacity, quality systems, certifications, and export experience.',
    },
    {
      q: 'Do you handle small orders or only large volumes?',
      a: 'We work with orders of all sizes. Whether you need a trial order of 100 units or a full container, we have suppliers that can accommodate your volume requirements.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We cover a wide range of industries including electronics, machinery, textiles, home goods, packaging, automotive parts, and more. Our team has specialists for different product categories.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier identification typically takes 1-2 weeks. Factory audits, sampling, and negotiation usually add 2-4 weeks. Production timelines depend on product complexity and order volume.',
    },
    {
      q: 'Can you help with product design and development?',
      a: 'Yes. We can connect you with OEM/ODM manufacturers who offer design and development services, and our team can help communicate your specifications clearly.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about working with a China sourcing agent
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-navy-600 pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InquiryFormSection() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', product: '', quantity: '', message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <section className="py-16 md:py-20 bg-navy-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h2>
          <p className="text-lg text-gray-300">
            Tell us about your product and we'll get back to you within 24 hours
          </p>
        </div>

        {status === 'submitted' ? (
          <div className="bg-white rounded-xl p-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-navy-600 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  id="company" name="company" type="text"
                  value={form.company} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product You're Sourcing *</label>
                <input
                  id="product" name="product" type="text" required
                  value={form.product} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                  placeholder="e.g., LED light fixtures"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Estimated Order Quantity</label>
                <input
                  id="quantity" name="quantity" type="text"
                  value={form.quantity} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                  placeholder="e.g., 1,000 units"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                <textarea
                  id="message" name="message" rows={4}
                  value={form.message} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none resize-none"
                  placeholder="Tell us about your requirements, specifications, target price, timeline..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryFormSection />
    </>
  );
}