import React from 'react';
import { Link } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';

const services = [
  {
    title: 'Supplier Identification & Sourcing',
    desc: 'We identify and qualify manufacturers that match your product specifications, quality standards, and commercial requirements.',
  },
  {
    title: 'Factory Verification & Audits',
    desc: 'On-site and remote verification of supplier legitimacy, production capability, quality systems, and compliance.',
  },
  {
    title: 'Quality Control & Inspection',
    desc: 'Pre-production, in-line, and final inspections. We verify product quality before goods leave the factory.',
  },
  {
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, communicate daily with factories, and flag issues before they become problems.',
  },
  {
    title: 'Shipping & Logistics Coordination',
    desc: 'We coordinate with freight forwarders, manage documentation, and ensure your goods are shipped correctly and on time.',
  },
];

const processSteps = [
  { num: '01', title: 'Requirement Review', desc: 'We analyze your product specs, target price, volume, and timeline.' },
  { num: '02', title: 'Supplier Shortlisting', desc: 'We identify 3–5 qualified factories and provide detailed profiles.' },
  { num: '03', title: 'Verification & Sampling', desc: 'We audit factories and coordinate samples for your approval.' },
  { num: '04', title: 'Order Management', desc: 'We oversee production, quality checks, and timeline adherence.' },
  { num: '05', title: 'Inspection & Shipping', desc: 'Final inspection, documentation, and coordination with your forwarder.' },
  { num: '06', title: 'After-Sales Support', desc: 'We assist with any post-shipment issues and future orders.' },
];

const productCategories = [
  'Electronics & Components',
  'Home & Kitchen',
  'Apparel & Textiles',
  'Industrial & Machinery',
  'Beauty & Personal Care',
  'Sports & Outdoors',
  'Furniture & Home Decor',
  'Automotive Parts',
  'Packaging & Materials',
];

const problems = [
  'Suppliers who overpromise and underdeliver on quality',
  'Difficulty verifying if a factory is real or a trading company',
  'Language and communication barriers causing costly mistakes',
  'No visibility into production status until it is too late',
  'Quality issues discovered only after goods arrive',
  'Complex logistics, documentation, and customs delays',
];

const trustPoints = [
  { label: 'Years in Operation', value: '12+' },
  { label: 'Factories Audited', value: '1,800+' },
  { label: 'Buyers Served', value: '620+' },
  { label: 'Countries Shipped To', value: '42' },
];

const caseStudies = [
  {
    client: 'US Home Goods Retailer',
    result: 'Reduced defect rate from 8% to under 1%',
    summary: 'We replaced three unreliable suppliers and implemented a structured QC process across 14 product lines.',
  },
  {
    client: 'European Industrial Equipment Distributor',
    result: 'Cut lead time by 5 weeks',
    summary: 'By consolidating sourcing to two verified factories and improving production planning, we shortened their order cycle significantly.',
  },
  {
    client: 'Australian Outdoor Brand',
    result: 'Successfully launched 3 new product categories',
    summary: 'We sourced and managed production for camping furniture and accessories with strict quality and packaging requirements.',
  },
];

const faqs = [
  {
    q: 'How much does your service cost?',
    a: 'Our fees are transparent and based on the scope of work. We typically charge a percentage of the order value or a fixed project fee. We provide a clear quotation before any work begins.',
  },
  {
    q: 'Do you work with small orders?',
    a: 'Yes. We work with both startups testing the market and established companies placing large orders. Minimum order quantities depend on the product and supplier.',
  },
  {
    q: 'How do you ensure quality?',
    a: 'We combine factory audits, sample approval, in-process monitoring, and pre-shipment inspection. We only release goods for shipment after they pass our quality criteria.',
  },
  {
    q: 'Can you help with existing suppliers?',
    a: 'Absolutely. Many clients ask us to audit and manage their current suppliers, improve quality systems, or resolve ongoing issues.',
  },
  {
    q: 'How quickly can you start?',
    a: 'We can usually begin within 1–2 business days of receiving your requirements and signed agreement.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-[1px] mb-6">EST. 2012 • NINGBO, CHINA</div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none mb-6">
              China Sourcing Agent<br />for Global Buyers
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-10">
              We help overseas companies find reliable Chinese suppliers, verify factories, control quality, and manage production and shipping with clarity and accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inquiry" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                Get a Free Sourcing Quote
              </a>
              <Link to="/how-it-works" className="inline-flex items-center justify-center rounded-md border border-white/30 px-8 py-3.5 text-base font-medium hover:bg-white/5 transition-colors">
                See How It Works
              </Link>
            </div>
            <div className="mt-8 text-sm text-slate-400">No obligation. Typical response within 1 business day.</div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustPoints.map((item, idx) => (
            <div key={idx}>
              <div className="text-3xl font-semibold tracking-tight text-slate-900">{item.value}</div>
              <div className="text-sm text-slate-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-500 mb-2">WHAT WE DO</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">End-to-end sourcing support</h2>
          </div>
          <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900">View all services →</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-7 hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="mb-10">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-500 mb-2">OUR APPROACH</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A clear, disciplined sourcing process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-7">
                <div className="font-mono text-sm text-slate-400 mb-3">{step.num}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/how-it-works" className="text-sm font-medium text-slate-700 hover:text-slate-900">Read the full process →</Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-500 mb-2">INDUSTRIES WE SERVE</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Products we regularly source</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-slate-600 hover:text-slate-900">See full categories →</Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {productCategories.map((cat, idx) => (
            <div key={idx} className="px-5 py-2 rounded-full border border-slate-200 text-sm text-slate-700 bg-white">
              {cat}
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-slate-600 max-w-3xl">
          We work across consumer goods, industrial components, and OEM/ODM projects. If your product is not listed, we can still help — tell us what you need.
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="mb-10">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-500 mb-2">WHY BUYERS WORK WITH US</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Common sourcing problems we solve</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                <p className="text-slate-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-500 mb-3">BUILT ON TRANSPARENCY</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
              We work for you, not the factory.
            </h2>
            <p className="text-slate-600 text-lg">
              Our only revenue comes from the buyers we represent. We do not take commissions from suppliers, and we never recommend a factory that does not meet your standards.
            </p>
            <div className="mt-8">
              <Link to="/case-studies" className="text-sm font-medium text-slate-700 hover:text-slate-900">Read real buyer stories →</Link>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-sm leading-relaxed text-slate-600">
            We provide written reports after every audit and inspection. You receive photos, findings, and clear recommendations. No surprises.
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="uppercase tracking-[2px] text-xs font-medium text-slate-500 mb-2">RESULTS</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Recent case studies</h2>
            </div>
            <Link to="/case-studies" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">All case studies →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col">
                <div className="text-sm text-slate-500 mb-4">{cs.client}</div>
                <div className="font-semibold text-lg mb-3 leading-snug">{cs.result}</div>
                <p className="text-slate-600 flex-1">{cs.summary}</p>
                <Link to="/case-studies" className="mt-6 text-sm font-medium text-slate-700 hover:text-slate-900">Read full case →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10">
          <div className="uppercase tracking-[2px] text-xs font-medium text-slate-500 mb-2">QUESTIONS</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-6">
              <div className="font-medium text-lg mb-2">{faq.q}</div>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm">
          Still have questions? <Link to="/contact" className="font-medium text-slate-900 hover:underline">Contact us directly.</Link>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl mb-10">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-400 mb-3">START A PROJECT</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get a free sourcing quote</h2>
            <p className="mt-4 text-slate-300">
              Tell us about your product and requirements. A sourcing specialist will review your inquiry and respond within 1 business day with a preliminary assessment and proposed next steps.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-8 md:p-10 shadow-xl">
            <InquiryForm />
          </div>

          <div className="mt-6 text-center text-xs text-slate-400">
            Your information is kept confidential and used only to respond to your sourcing request.
          </div>
        </div>
      </section>
    </div>
  );
}
