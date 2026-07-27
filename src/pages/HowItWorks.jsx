import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Project Brief", desc: "Share your product specifications, target pricing, quality requirements, and delivery timeline. We review and clarify details to ensure alignment.", duration: "1-2 days" },
    { num: "02", title: "Supplier Identification", desc: "We search our supplier database and industry networks to identify 5-8 candidates matching your criteria. Initial screening eliminates unsuitable options.", duration: "5-7 days" },
    { num: "03", title: "Shortlist & Samples", desc: "We present a shortlist of 3-5 qualified suppliers with capability summaries. You select suppliers for sample evaluation.", duration: "1-2 weeks" },
    { num: "04", title: "Factory Verification", desc: "On-site audits assess production capabilities, quality systems, and compliance. We provide detailed reports with photos and recommendations.", duration: "1-3 weeks" },
    { num: "05", title: "Order Placement", desc: "After sample approval, we negotiate terms, place orders, and establish production schedules with clear milestones and payment terms.", duration: "1 week" },
    { num: "06", title: "Production Oversight", desc: "Weekly progress reports, milestone verification, and proactive issue resolution. You receive updates without managing daily communications.", duration: "Production timeline" },
    { num: "07", title: "Quality Inspection", desc: "Pre-shipment inspection verifies product quality, packaging, and labeling. We provide detailed reports with photos before release.", duration: "2-5 days" },
    { num: "08", title: "Shipping & Delivery", desc: "We coordinate freight booking, customs documentation, and track shipments to your warehouse. Final delivery confirmation completes the project.", duration: "2-6 weeks" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center"><span className="text-white font-semibold text-lg">SS</span></div>
            <span className="font-semibold text-xl text-slate-900">SSourcing China</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/services" className="text-slate-600 hover:text-slate-900">Services</Link>
            <Link to="/how-it-works" className="text-slate-900 font-medium">How It Works</Link>
            <Link to="/products" className="text-slate-600 hover:text-slate-900">Products</Link>
            <Link to="/case-studies" className="text-slate-600 hover:text-slate-900">Case Studies</Link>
            <Link to="/blog" className="text-slate-600 hover:text-slate-900">Blog</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link>
          </div>
          <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800">Get a Free Quote</Link>
        </div>
      </nav>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-widest mb-3">OUR METHODOLOGY</div>
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-xl text-slate-300">A structured 8-step process from initial inquiry to final delivery.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 pb-8 border-b border-gray-200 last:border-0">
              <div className="md:w-24 flex-shrink-0">
                <div className="text-5xl font-semibold text-slate-200">{step.num}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <span className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full whitespace-nowrap ml-4">{step.duration}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Ready to start your sourcing project?</h2>
          <p className="text-slate-600 mb-8">Get a free consultation and project assessment within 24 hours.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </div>
      </div>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0"><div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center"><span className="text-white text-xs font-semibold">SS</span></div><span>SSourcing China</span></div>
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;