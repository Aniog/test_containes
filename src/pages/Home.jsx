import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Shield,
  Search,
  ClipboardCheck,
  Truck,
  Factory,
  Award,
  Clock,
  Users,
  ChevronRight,
  CheckCircle,
  Star,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    desc: 'We identify qualified manufacturers, verify business licenses, and conduct background checks to ensure you work with legitimate suppliers.',
    imgId: 'service-sourcing-8f2a9c',
    titleId: 'service-title-sourcing',
    descId: 'service-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Inspection',
    desc: 'On-site factory audits evaluating production capacity, quality management systems, and working conditions before you commit.',
    imgId: 'service-factory-a1b3c5',
    titleId: 'service-title-factory',
    descId: 'service-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'In-line and pre-shipment inspections to ensure your products meet specifications, safety standards, and quality requirements.',
    imgId: 'service-qc-d7e9f1',
    titleId: 'service-title-qc',
    descId: 'service-desc-qc',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end shipping coordination including freight forwarding, customs clearance, and delivery to your destination.',
    imgId: 'service-shipping-2b4d6e',
    titleId: 'service-title-shipping',
    descId: 'service-desc-shipping',
  },
];

const problems = [
  {
    icon: Shield,
    title: 'Unverified Suppliers',
    desc: 'Avoid scams and unqualified factories. We verify every supplier through on-site visits and document checks.',
  },
  {
    icon: Award,
    title: 'Inconsistent Quality',
    desc: 'Stop receiving substandard products. Our QC inspections catch defects before shipment.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'We monitor production schedules and resolve issues before they cause costly delays.',
  },
  {
    icon: Truck,
    title: 'Logistics Complexity',
    desc: 'We handle freight, customs, and documentation so you focus on your business.',
  },
];

const trustPoints = [
  { value: '12+', label: 'Years Experience' },
  { value: '800+', label: 'Factories Audited' },
  { value: '3,500+', label: 'Inspections Completed' },
  { value: '50+', label: 'Countries Served' },
];

const processSteps = [
  {
    step: '01',
    title: 'Tell Us Your Needs',
    desc: 'Share your product requirements, target price, and quantity. We assess feasibility and provide a sourcing plan.',
  },
  {
    step: '02',
    title: 'Supplier Identification',
    desc: 'We search our database and network to identify 3-5 qualified manufacturers matching your criteria.',
  },
  {
    step: '03',
    title: 'Factory Verification',
    desc: 'On-site audits verify licenses, production capacity, quality systems, and export experience.',
  },
  {
    step: '04',
    title: 'Sampling & Negotiation',
    desc: 'We coordinate samples, negotiate pricing and terms, and help you select the best supplier.',
  },
  {
    step: '05',
    title: 'Production & QC',
    desc: 'We monitor production progress, conduct in-line and pre-shipment inspections, and ensure quality.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We arrange freight, handle customs documentation, and track your shipment to destination.',
  },
];

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQ varies by product and factory. We help negotiate flexible MOQs based on your needs. Typically, we can arrange orders starting from 500-1,000 units for most consumer goods.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We offer flexible pricing models: a per-project fee, a percentage of order value (typically 3-8%), or a monthly retainer for ongoing sourcing. Contact us for a customized quote.',
  },
  {
    q: 'How do you ensure supplier reliability?',
    a: 'We conduct multi-step verification: business license checks, on-site factory audits, client reference checks, and production capability assessments. We never work with unverified suppliers.',
  },
  {
    q: 'Can you handle product design and customization?',
    a: 'Yes. We work with OEM/ODM factories that can produce according to your specifications, designs, and branding requirements. We also help with packaging design.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We cover electronics, machinery, textiles, home goods, hardware, packaging, automotive parts, and more. Our team has specialists for each major product category.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 1-2 weeks. Sampling and factory audits take 2-4 weeks. Production lead time depends on the product. Most projects are completed within 4-8 weeks.',
  },
];

const testimonials = [
  {
    name: 'Michael R.',
    company: 'HomeGoods Imports, USA',
    text: 'SSourcing China helped us cut sourcing costs by 18% while improving product quality. Their factory audit process gave us confidence in our supplier choices.',
    imgId: 'testimonial-michael-9a1b2c',
  },
  {
    name: 'Sarah K.',
    company: 'TechAccessories Ltd, UK',
    text: 'After two failed attempts finding suppliers on our own, SSourcing China connected us with three excellent factories. Their QC process has been flawless.',
    imgId: 'testimonial-sarah-3d4e5f',
  },
  {
    name: 'David L.',
    company: 'Precision Tools GmbH, Germany',
    text: 'Professional, thorough, and reliable. They understand European quality standards and ensure our suppliers meet them consistently.',
    imgId: 'testimonial-david-6g7h8i',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div
            data-strk-bg-id="home-hero-bg-4a7b1c"
            data-strk-bg="China factory production line manufacturing quality control"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Trusted by 50+ Countries Since 2012
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span id="hero-heading">China Sourcing Agent for Global Buyers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              <span id="hero-subtitle">
                We find reliable suppliers, verify factories, inspect quality, follow production, 
                and coordinate shipping — so you can source from China with confidence.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200 shadow-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-md transition-colors duration-200"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-b2b-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="text-center">
                <div className="text-3xl font-bold text-navy mb-1">{tp.value}</div>
                <div className="text-sm text-b2b-text-light">{tp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-b2b-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              <span id="problems-label">Problems We Solve</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
              <span id="problems-heading">Sourcing from China Shouldn't Be a Risk</span>
            </h2>
            <p className="text-lg text-b2b-text-medium max-w-2xl mx-auto">
              <span id="problems-subtitle">
                We eliminate the common challenges international buyers face when sourcing from China.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white rounded-lg p-6 shadow-sm border border-b2b-border">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-b2b-text mb-2">{problem.title}</h3>
                <p className="text-sm text-b2b-text-medium leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="mt-16">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                alt="Factory quality inspection"
                data-strk-img-id="problems-visual-7c3d1e"
                data-strk-img="[problems-subtitle] [problems-heading] [problems-label]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              <span id="services-label">Our Services</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
              <span id="services-heading">End-to-End Sourcing Solutions</span>
            </h2>
            <p className="text-lg text-b2b-text-medium max-w-2xl mx-auto">
              <span id="services-subtitle">
                From supplier discovery to final delivery, we manage every step of your sourcing journey.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="flex gap-6 p-6 rounded-lg border border-b2b-border hover:border-navy/30 hover:shadow-md transition-all duration-200">
                <div className="shrink-0">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-subtitle] [services-heading]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <service.icon className="w-5 h-5 text-accent" />
                    <h3 id={service.titleId} className="text-lg font-semibold text-b2b-text">{service.title}</h3>
                  </div>
                  <p id={service.descId} className="text-sm text-b2b-text-medium leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center text-navy font-semibold hover:text-navy-light transition-colors"
            >
              View All Services <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 md:py-24 bg-b2b-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              <span id="process-label">How It Works</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
              <span id="process-heading">Your Sourcing Journey in 6 Steps</span>
            </h2>
            <p className="text-lg text-b2b-text-medium max-w-2xl mx-auto">
              <span id="process-subtitle">
                A structured, transparent process from initial inquiry to final delivery.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative bg-white rounded-lg p-8 shadow-sm border border-b2b-border">
                <div className="text-5xl font-bold text-navy/10 mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold text-b2b-text mb-2">{step.title}</h3>
                <p className="text-sm text-b2b-text-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-navy font-semibold hover:text-navy-light transition-colors"
            >
              Learn More About Our Process <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              <span id="testimonials-label">Client Testimonials</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
              <span id="testimonials-heading">Trusted by Buyers Worldwide</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-b2b-light rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-b2b-text-medium leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    alt={t.name}
                    data-strk-img-id={t.imgId}
                    data-strk-img={`professional business person portrait`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="80"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-b2b-text">{t.name}</div>
                    <div className="text-xs text-b2b-text-light">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-b2b-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              <span id="cases-label">Case Studies</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
              <span id="cases-heading">Real Results for Real Clients</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-b2b-border">
              <img
                alt="Electronics sourcing case study"
                data-strk-img-id="case-electronics-5f8a2d"
                data-strk-img="[case-electronics-desc] [case-electronics-title] [cases-heading]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">ELECTRONICS</div>
                <h3 id="case-electronics-title" className="text-lg font-semibold text-b2b-text mb-2">
                  Consumer Electronics for European Retailer
                </h3>
                <p id="case-electronics-desc" className="text-sm text-b2b-text-medium mb-4">
                  Sourced Bluetooth speakers and smart home devices from 3 verified factories, achieving 22% cost reduction.
                </p>
                <Link to="/case-studies" className="text-sm font-semibold text-navy hover:text-navy-light">
                  Read Case Study <ChevronRight className="inline w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-b2b-border">
              <img
                alt="Machinery sourcing case study"
                data-strk-img-id="case-machinery-4e1b7c"
                data-strk-img="[case-machinery-desc] [case-machinery-title] [cases-heading]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">MACHINERY</div>
                <h3 id="case-machinery-title" className="text-lg font-semibold text-b2b-text mb-2">
                  CNC Machinery for US Manufacturer
                </h3>
                <p id="case-machinery-desc" className="text-sm text-b2b-text-medium mb-4">
                  Verified 5 factories, conducted on-site audits, and facilitated successful delivery of CNC equipment.
                </p>
                <Link to="/case-studies" className="text-sm font-semibold text-navy hover:text-navy-light">
                  Read Case Study <ChevronRight className="inline w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-navy font-semibold hover:text-navy-light transition-colors"
            >
              View All Case Studies <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              <span id="faq-label">FAQ</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
              <span id="faq-heading">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-b2b-border rounded-lg">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-b2b-text hover:text-navy transition-colors">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-b2b-text-light group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-b2b-text-medium text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span id="cta-heading">Ready to Start Sourcing from China?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <span id="cta-subtitle">
              Tell us what you need, and we'll find the right suppliers for your business. 
              Free consultation, no obligation.
            </span>
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200 shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}