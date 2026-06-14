import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShieldCheck, ClipboardCheck, Factory, Truck, Users 
} from 'lucide-react';
import TrustBar from '../components/TrustBar';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import FAQ from '../components/FAQ';
import InquiryForm from '../components/InquiryForm';

const Home = ({ onQuoteClick }) => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification',
      description: 'We identify and shortlist qualified manufacturers based on your product specifications, volume, and quality requirements.',
      details: ['Database of 180+ verified suppliers', 'Custom supplier matching', 'Initial capability screening'],
    },
    {
      icon: ShieldCheck,
      title: 'Factory Verification',
      description: 'On-site audits to confirm legitimacy, production capacity, quality systems, and financial stability before you place orders.',
      details: ['Business license & export record checks', 'Production capability assessment', 'Detailed verification reports'],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, in-line, and final inspections using AQL standards to reduce defect risk before shipment.',
      details: ['AQL-based sampling', 'Photo and video documentation', 'Third-party lab testing coordination'],
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Regular production follow-up to track progress, identify delays early, and keep your order on schedule.',
      details: ['Weekly progress reports', 'Issue escalation & resolution', 'Timeline management'],
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      description: 'We arrange freight, documentation, and work with forwarders to ensure smooth export and delivery.',
      details: ['Freight forwarder coordination', 'Export documentation support', 'Customs compliance guidance'],
    },
    {
      icon: Users,
      title: 'Ongoing Supplier Management',
      description: 'Long-term support for reorders, quality consistency, and supplier performance tracking.',
      details: ['Reorder management', 'Supplier performance reviews', 'Relationship maintenance'],
    },
  ];

  const problems = [
    {
      problem: 'Unreliable suppliers who miss deadlines or change specifications',
      solution: 'We verify capacity and track record before you commit, then monitor production milestones.',
    },
    {
      problem: 'Quality issues discovered only after goods arrive',
      solution: 'Structured inspections at multiple stages with clear acceptance criteria and photo evidence.',
    },
    {
      problem: 'Difficulty communicating requirements and resolving issues across time zones',
      solution: 'English-speaking project managers who coordinate directly with factories on your behalf.',
    },
    {
      problem: 'Uncertainty about whether a factory is legitimate or overcommitted',
      solution: 'On-site verification visits and review of licenses, export history, and actual production lines.',
    },
  ];

  const caseStudies = [
    {
      client: 'European Home Appliance Brand',
      industry: 'Consumer Electronics',
      challenge: 'Previous supplier delivered inconsistent quality and missed seasonal deadlines, damaging retailer relationships.',
      solution: 'We conducted full factory verification, implemented staged inspections, and established weekly production reporting.',
      results: 'Defect rate reduced from 8.2% to 1.1%. On-time delivery improved to 96% across three production runs.',
    },
    {
      client: 'North American Industrial Distributor',
      industry: 'Industrial Equipment',
      challenge: 'Needed to qualify new Chinese manufacturers for private-label power tools within a tight 10-week window.',
      solution: 'Rapid supplier identification, on-site audits of three shortlisted factories, and sample evaluation coordination.',
      results: 'Approved supplier selected in 6 weeks. First container shipped on schedule with zero quality claims in the first year.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm mb-6">
                Shanghai-based • Serving buyers in 30+ countries
              </div>
              <h1 className="text-4xl md:text-[42px] lg:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8">
                We help overseas companies find reliable suppliers, verify factories, control quality, and manage production and shipping — with clear processes and no exaggerated promises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onQuoteClick}
                  className="px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors text-base"
                >
                  Get a Free Sourcing Quote
                </button>
                <Link
                  to="/how-it-works"
                  className="px-8 py-3.5 border border-white/30 hover:bg-white/5 text-white font-medium rounded-lg transition-colors text-base"
                >
                  See How It Works
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-400">No upfront payment required to begin supplier identification.</p>
            </div>
            
            {/* Hero Visual - Factory / Industrial */}
            <div className="relative hidden lg:block">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80" 
                  alt="Modern manufacturing facility in China with production lines and quality control processes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-4 shadow-xl border border-slate-200 max-w-[220px]">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">On-site verification</div>
                <div className="font-semibold">180+ factories audited in the last 12 months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">WHAT WE DO</div>
          <h2 className="text-3xl font-semibold text-slate-900">End-to-End China Sourcing Support</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            From initial supplier search through production monitoring and logistics, we manage the details so you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="text-blue-700 font-medium hover:underline">
            View full service details →
          </Link>
        </div>
      </section>

      {/* Sourcing Process Preview */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">OUR APPROACH</div>
            <h2 className="text-3xl font-semibold text-slate-900">A Structured, Transparent Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Requirements & Briefing', desc: 'We clarify specifications, volumes, quality standards, and timeline.' },
              { step: '02', title: 'Supplier Identification', desc: 'We research and shortlist manufacturers that match your criteria.' },
              { step: '03', title: 'Verification & Sampling', desc: 'On-site audits, sample evaluation, and detailed reporting.' },
              { step: '04', title: 'Production & Logistics', desc: 'Order follow-up, inspections, documentation, and shipping coordination.' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-2xl font-semibold text-slate-300 mb-3">{item.step}</div>
                <div className="font-semibold text-slate-900 mb-2">{item.title}</div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/how-it-works" className="text-blue-700 font-medium hover:underline">
              See the complete step-by-step process →
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">WHY BUYERS WORK WITH US</div>
          <h2 className="text-3xl font-semibold text-slate-900">Common Sourcing Challenges We Address</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-7 bg-white">
              <div className="font-medium text-slate-900 mb-2">Problem</div>
              <p className="text-slate-600 mb-5">{item.problem}</p>
              <div className="font-medium text-slate-900 mb-2">How We Help</div>
              <p className="text-slate-600">{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="text-sm font-medium text-blue-400 tracking-wider mb-2">INDUSTRIES WE SERVE</div>
              <h2 className="text-3xl font-semibold">Products We Source</h2>
            </div>
            <Link to="/products" className="text-blue-400 hover:text-blue-300 font-medium">
              Browse all categories →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              'Electronics & Components',
              'Machinery & Industrial Equipment',
              'Consumer Goods & Home Products',
              'Apparel, Textiles & Accessories',
              'Automotive Parts & Accessories',
              'Medical Devices & Supplies',
              'Building Materials & Hardware',
              'Packaging & Printing',
              'Custom / OEM Projects',
            ].map((cat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">Why Buyers Trust SSourcing China</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {[
            { title: 'On-the-ground presence', desc: 'Our team is based in Shanghai with regular travel to major manufacturing regions across China.' },
            { title: 'Practical, documented processes', desc: 'Every verification and inspection follows defined checklists. You receive clear reports, not vague assurances.' },
            { title: 'Aligned incentives', desc: 'We only earn when you move forward with a supplier. No hidden markups on factory prices.' },
          ].map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-7">
              <div className="font-semibold text-lg text-slate-900 mb-2">{item.title}</div>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">REAL RESULTS</div>
              <h2 className="text-3xl font-semibold text-slate-900">Case Studies</h2>
            </div>
            <Link to="/case-studies" className="text-blue-700 font-medium hover:underline">
              View all case studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={i} {...cs} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">QUESTIONS</div>
          <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <FAQ />
      </section>

      {/* Final CTA / Inquiry Form */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-3">Ready to Start a Sourcing Project?</h2>
            <p className="text-slate-300">Tell us about your requirements. We will prepare a preliminary assessment and outline next steps — at no cost to begin.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-slate-900">
            <InquiryForm onSuccess={() => {}} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
