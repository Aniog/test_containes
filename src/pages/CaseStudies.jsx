import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      client: "European Retail Chain",
      industry: "Home Goods Retail",
      challenge: "Managing 12 suppliers across 3 provinces with inconsistent quality and delivery delays averaging 3 weeks.",
      solution: "Consolidated to 3 verified suppliers with standardized QC protocols and production monitoring.",
      results: ["35% reduction in landed cost", "On-time delivery improved to 97%", "Quality complaints reduced by 82%"],
      timeline: "4 months"
    },
    {
      client: "US Hardware Brand",
      industry: "Tools & Equipment",
      challenge: "8% return rate due to dimensional defects and packaging damage during transit.",
      solution: "Implemented inline QC checkpoints, revised packaging specifications, and added container loading supervision.",
      results: ["Return rate reduced to 0.4%", "Zero defects over 18 months", "Customer satisfaction score increased 24 points"],
      timeline: "6 months"
    },
    {
      client: "Australian Importer",
      industry: "Seasonal Consumer Goods",
      challenge: "Missed seasonal windows due to production delays and slow communication with factories.",
      solution: "Weekly production tracking, milestone-based payments, and direct factory liaison with daily updates during peak season.",
      results: ["6 weeks faster average delivery", "Zero missed seasonal deadlines", "Production visibility improved significantly"],
      timeline: "Ongoing partnership"
    }
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
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900">How It Works</Link>
            <Link to="/products" className="text-slate-600 hover:text-slate-900">Products</Link>
            <Link to="/case-studies" className="text-slate-900 font-medium">Case Studies</Link>
            <Link to="/blog" className="text-slate-600 hover:text-slate-900">Blog</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link>
          </div>
          <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800">Get a Free Quote</Link>
        </div>
      </nav>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-widest mb-3">CLIENT RESULTS</div>
          <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
          <p className="text-xl text-slate-300">Real outcomes from sourcing projects across different industries and markets.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {cases.map((study, idx) => (
          <div key={idx} className="border border-gray-200 rounded-2xl p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div>
                <div className="text-sm text-emerald-600 font-medium mb-1">{study.industry}</div>
                <h3 className="text-2xl font-semibold text-slate-900">{study.client}</h3>
              </div>
              <div className="text-sm text-slate-500 mt-2 md:mt-0 md:text-right">Timeline: {study.timeline}</div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-xs font-medium text-slate-500 tracking-widest mb-2">CHALLENGE</div>
                <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 tracking-widest mb-2">SOLUTION</div>
                <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 tracking-widest mb-2">RESULTS</div>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="text-sm text-emerald-700 flex items-start"><span className="mr-2">→</span>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Ready to achieve similar results?</h2>
          <p className="text-slate-600 mb-8">Every sourcing project is different. Let's discuss what success looks like for your business.</p>
          <Link to="/contact" className="inline-block px-8 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">Start a Conversation</Link>
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

export default CaseStudies;