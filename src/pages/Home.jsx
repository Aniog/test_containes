import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import InquiryForm from '../components/InquiryForm';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && strkImgConfig) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);
  const services = [
    {
      title: 'Supplier Identification',
      desc: 'We identify and shortlist qualified manufacturers based on your product specifications, quality requirements, and volume needs.',
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits assess production capabilities, quality systems, financial stability, and compliance with international standards.',
    },
    {
      title: 'Quality Control',
      desc: 'Pre-shipment inspections, in-process checks, and lab testing ensure products meet your specifications before they leave the factory.',
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular factory visits and progress reporting keep your orders on schedule and flag issues before they become problems.',
    },
    {
      title: 'Shipping Coordination',
      desc: 'We manage freight booking, documentation, customs clearance support, and delivery tracking to your destination.',
    },
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Language and cultural barriers slowing down negotiations',
    'Uncertainty about factory capabilities and legitimacy',
    'Quality issues discovered only after products arrive',
    'Production delays with no visibility into progress',
    'Complex logistics and documentation requirements',
  ];

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We discuss your product needs, target price, quality standards, and timeline.' },
    { step: '02', title: 'Supplier Sourcing', desc: 'We identify and screen potential manufacturers matching your criteria.' },
    { step: '03', title: 'Verification & Sampling', desc: 'Factory audits and sample evaluation confirm supplier suitability.' },
    { step: '04', title: 'Order Management', desc: 'We oversee production, conduct inspections, and manage timelines.' },
    { step: '05', title: 'Logistics & Delivery', desc: 'Shipping coordination and documentation ensure smooth delivery.' },
  ];

  const products = [
    'Electronics & Components',
    'Mechanical Parts & Assemblies',
    'Consumer Goods',
    'Home & Garden Products',
    'Industrial Equipment',
    'Textiles & Apparel',
    'Packaging Materials',
    'Automotive Components',
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      product: 'LED Lighting Products',
      result: 'Identified 3 qualified suppliers, reduced unit cost by 18%, established ongoing QC program.',
    },
    {
      client: 'US Industrial Distributor',
      product: 'Precision Metal Components',
      result: 'Audited 12 factories, selected reliable partner, implemented monthly production monitoring.',
    },
    {
      client: 'Australian Importer',
      product: 'Outdoor Furniture',
      result: 'Managed full sourcing cycle from supplier search through first container delivery in 14 weeks.',
    },
  ];

  const faqs = [
    {
      q: 'How do you charge for your services?',
      a: 'We work on a combination of project fees and commission based on order value. We provide transparent quotes before any engagement.',
    },
    {
      q: 'Do you work with buyers of any size?',
      a: 'We work with businesses of various sizes. Minimum order values vary by product category; we can advise during initial consultation.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier identification typically takes 2-4 weeks. Full cycle from inquiry to first shipment depends on product complexity and ranges from 8-20 weeks.',
    },
    {
      q: 'Can you help with existing suppliers?',
      a: 'Yes. We can audit current suppliers, implement quality control programs, or help resolve production issues with factories you already work with.',
    },
    {
      q: 'What regions in China do you cover?',
      a: 'We have coverage across major manufacturing regions including the Yangtze River Delta, Pearl River Delta, and northern industrial areas.',
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-brand-navy/75" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 id="home-hero-title" className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="home-hero-subtitle" className="text-xl text-slate-200 max-w-3xl mx-auto mb-10">
            We help overseas companies find reliable Chinese suppliers, verify factories, 
            control quality, and manage production and shipping.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base px-8">Get a Free Sourcing Quote</Button>
          </Link>
          <p className="text-sm text-slate-300 mt-4">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      <section className="border-b border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-semibold text-brand-navy">12+</div>
              <div className="text-sm text-slate-600 mt-1">Years in Operation</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-brand-navy">850+</div>
              <div className="text-sm text-slate-600 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-brand-navy">40+</div>
              <div className="text-sm text-slate-600 mt-1">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-brand-navy">6</div>
              <div className="text-sm text-slate-600 mt-1">Regional Offices</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-brand-navy mb-4">Our Services</h2>
              <p className="text-slate-600 max-w-2xl">
                End-to-end support for sourcing from China, from initial supplier search through delivery.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                data-strk-img-id="home-services-factory"
                data-strk-img="[home-services-desc] [home-services-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China manufacturing facility"
                className="rounded-lg border border-slate-200 w-full h-auto"
              />
              <p id="home-services-desc" className="sr-only">Professional factory production and quality control environment</p>
              <h3 id="home-services-title" className="sr-only">Our Services</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-6 hover:border-brand-teal transition-colors">
                <h3 className="font-semibold text-lg text-brand-navy mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services"><Button variant="outline">View All Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-brand-navy mb-6">Problems We Solve</h2>
              <p className="text-slate-600 mb-6">
                Sourcing from China involves challenges that can derail projects and damage businesses. 
                We address the most common issues buyers face.
              </p>
              <Link to="/how-it-works"><Button variant="outline">Learn Our Process</Button></Link>
            </div>
            <div className="space-y-3">
              {problems.map((problem, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                  <div className="w-5 h-5 rounded-full bg-brand-teal flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-brand-navy mb-4">How We Work</h2>
            <p className="text-slate-600">A structured process that keeps you informed at every stage.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, i) => (
              <div key={i} className="relative">
                <div className="text-brand-teal font-mono text-sm mb-2">{item.step}</div>
                <h3 className="font-semibold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works"><Button variant="outline">See Detailed Process</Button></Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-brand-navy mb-4">Products We Source</h2>
            <p className="text-slate-600">We work across a wide range of product categories and industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-5 text-center text-sm font-medium text-slate-700">
                {product}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products"><Button variant="outline">Browse All Categories</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-brand-navy mb-2">Case Studies</h2>
              <p className="text-slate-600">Recent projects demonstrating our approach and results.</p>
            </div>
            <Link to="/case-studies" className="hidden md:block text-brand-teal hover:underline text-sm font-medium">View All →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="relative h-40 bg-slate-100">
                  <img
                    data-strk-img-id={`home-case-${i}-img`}
                    data-strk-img={`[home-case-${i}-product] [home-case-${i}-client] factory inspection`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.product}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div id={`home-case-${i}-client`} className="text-sm text-brand-teal font-medium mb-2">{study.client}</div>
                  <h3 id={`home-case-${i}-product`} className="font-semibold text-brand-navy mb-3">{study.product}</h3>
                  <p className="text-sm text-slate-600">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-brand-navy text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-lg p-5 group">
                <summary className="font-medium text-brand-navy cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact"><Button>Ask Us a Question</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-brand-navy mb-3">Start Your Sourcing Project</h2>
            <p className="text-slate-600">Tell us about your requirements and we will provide a preliminary assessment and quote.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
