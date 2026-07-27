import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShieldCheck, ClipboardCheck, Truck, Users, Award, 
  Clock, Globe 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import TrustBar from '../components/TrustBar';
import CaseStudyCard from '../components/CaseStudyCard';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Identify and qualify manufacturers that match your product specifications, quality standards, and commercial requirements.',
      points: ['Product specification matching', 'Supplier shortlisting', 'Capability assessment', 'Initial price benchmarking'],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site and remote verification to confirm legitimacy, production capacity, and compliance before you place orders.',
      points: ['Business license & export rights', 'Production capacity audit', 'Equipment & workforce review', 'Social compliance checks'],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Independent quality control at critical production stages to reduce defects and protect your brand.',
      points: ['Pre-production inspection', 'During production (DUPRO)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
    },
    {
      icon: Truck,
      title: 'Production Follow-up & Logistics',
      description: 'Monitor production timelines and coordinate shipping, documentation, and customs clearance.',
      points: ['Production milestone tracking', 'Sample coordination', 'Export documentation', 'Freight & customs coordination'],
    },
  ];

  const problems = [
    {
      icon: Users,
      title: 'Unreliable Suppliers',
      desc: 'Many buyers lose time and money dealing with factories that overpromise and underdeliver.',
    },
    {
      icon: Award,
      title: 'Quality Inconsistencies',
      desc: 'Without on-site oversight, product quality can vary significantly between batches.',
    },
    {
      icon: Clock,
      title: 'Production Delays',
      desc: 'Lack of visibility into factory schedules leads to missed deadlines and stockouts.',
    },
    {
      icon: Globe,
      title: 'Complex Logistics',
      desc: 'Export procedures, documentation, and freight coordination can be difficult to manage remotely.',
    },
  ];

  const caseStudies = [
    {
      client: 'HomeGoods Retailer (USA)',
      industry: 'Home & Garden',
      challenge: 'Needed a reliable manufacturer for seasonal ceramic planters with strict lead times and color consistency requirements.',
      solution: 'Sourced 3 qualified factories, conducted on-site audits, implemented pre-production sample approval and weekly production monitoring.',
      results: ['Reduced defect rate from 12% to under 2%', 'On-time delivery for 4 consecutive seasons', '15% cost improvement vs previous supplier'],
    },
    {
      client: 'Industrial Equipment Distributor (Germany)',
      industry: 'Industrial',
      challenge: 'Required a new supplier for custom-machined components with tight tolerances and ISO certification.',
      solution: 'Verified 5 machining facilities, coordinated capability studies, and established a 3-stage inspection protocol.',
      results: ['Zero critical defects in first 8 shipments', 'Supplier qualified for long-term contract', 'Lead time reduced by 11 days'],
    },
  ];

  const faqs = [
    {
      q: 'How do you charge for your services?',
      a: 'We work on a transparent fee structure based on project scope. Most clients engage us on a per-order or retainer basis. We provide a detailed quotation before any work begins.',
    },
    {
      q: 'Do you take commissions from factories?',
      a: 'No. Our compensation comes exclusively from our clients. This ensures our recommendations are based solely on your requirements and not influenced by supplier incentives.',
    },
    {
      q: 'Can you work with my existing suppliers?',
      a: 'Yes. We can audit and manage quality for your current suppliers, or help you diversify your supply base while maintaining relationships.',
    },
    {
      q: 'What is the typical timeline to find a supplier?',
      a: 'For standard products, we usually present a shortlist within 7–14 business days. Complex or highly customized products may require additional time for capability assessment.',
    },
    {
      q: 'Do you handle payments to suppliers?',
      a: 'We do not handle supplier payments directly. We can advise on payment terms, letter of credit structures, and inspection release procedures to protect your interests.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs tracking-widest mb-6">
              SHANGHAI • SINCE 2014
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              We help overseas companies find reliable Chinese suppliers, verify factories, control quality, and manage production and shipping — with clear communication and documented processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-white/30 rounded-md hover:bg-white/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-6 text-xs text-slate-400">No obligation. Typical response within 1 business day.</div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="What We Do"
          title="End-to-end sourcing support"
          description="From supplier identification to delivery, we manage the details so you can focus on your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="text-sm font-medium text-sky-700 hover:underline">View all services →</Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <SectionHeader
            eyebrow="Our Process"
            title="A structured approach to sourcing"
            description="We follow a repeatable process designed to reduce risk and improve outcomes at each stage."
          />
          <div className="max-w-3xl">
            <ProcessStep number="01" title="Requirement Definition" description="We clarify specifications, target pricing, quality standards, certifications, and volume expectations." />
            <ProcessStep number="02" title="Supplier Identification" description="We research and contact manufacturers, review capabilities, and create a shortlist of 3–5 qualified options." />
            <ProcessStep number="03" title="Verification & Sampling" description="We conduct factory audits and coordinate samples for your approval before any production commitment." />
            <ProcessStep number="04" title="Production Monitoring" description="We track production milestones, conduct in-process inspections, and address issues as they arise." />
            <ProcessStep number="05" title="Quality Control & Shipping" description="We perform final inspections, verify documentation, and coordinate logistics to your destination." />
          </div>
          <div className="mt-6">
            <Link to="/how-it-works" className="text-sm font-medium text-sky-700 hover:underline">Read the full process →</Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Common Challenges"
          title="Problems we help you avoid"
          description="Sourcing from China involves real operational risks. We help buyers manage them systematically."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-semibold tracking-tight mb-2">10+ years</div>
              <div className="text-slate-300">focused exclusively on China sourcing for international buyers.</div>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-tight mb-2">280+</div>
              <div className="text-slate-300">factories audited across 18 provinces. We maintain an active, verified supplier database.</div>
            </div>
            <div>
              <div className="text-3xl font-semibold tracking-tight mb-2">1,400+</div>
              <div className="text-slate-300">inspections completed. Every report includes photos, measurements, and pass/fail criteria.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="Products"
          title="Categories we regularly source"
          description="We work across a wide range of product categories. If your product is not listed, we can still help."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Electronics & Components', items: ['Consumer electronics', 'Power supplies & adapters', 'Cables & connectors', 'PCB assembly', 'Smart home devices'] },
            { title: 'Home & Garden', items: ['Furniture & furnishings', 'Kitchenware & tableware', 'Garden tools & decor', 'Storage & organization', 'Lighting fixtures'] },
            { title: 'Apparel & Textiles', items: ['Private label clothing', 'Workwear & uniforms', 'Home textiles', 'Bags & accessories', 'Footwear'] },
            { title: 'Industrial & MRO', items: ['Machined components', 'Fasteners & hardware', 'Packaging equipment', 'Safety equipment', 'Tools & consumables'] },
            { title: 'Automotive & Mobility', items: ['Aftermarket parts', 'Vehicle accessories', 'EV charging components', 'Bicycle & e-bike parts', 'Packaging & consumables'] },
            { title: 'Consumer Goods', items: ['Toys & games', 'Pet products', 'Sports & outdoor', 'Beauty & personal care', 'Seasonal merchandise'] },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">{cat.title}</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                {cat.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/products" className="text-sm font-medium text-sky-700 hover:underline">See full product categories →</Link>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <SectionHeader
            eyebrow="Results"
            title="Case studies"
            description="Real outcomes from clients who needed reliable supply chains, not just lower prices."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {caseStudies.map((cs, idx) => (
              <CaseStudyCard key={idx} {...cs} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/case-studies" className="text-sm font-medium text-sky-700 hover:underline">View more case studies →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Straight answers to common questions about working with a China sourcing agent."
        />
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-6">
              <div className="font-medium text-slate-900 mb-1.5">{faq.q}</div>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA / Inquiry Form */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl mb-8">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-400 mb-2">Next Step</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Get a free sourcing assessment</h2>
            <p className="text-slate-300">Tell us about your product and requirements. We will provide an initial assessment and outline the next steps — at no cost or obligation.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
