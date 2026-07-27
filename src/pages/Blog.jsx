import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { title: "How to Evaluate a Chinese Supplier's Production Capacity", date: "July 15, 2026", excerpt: "Production capacity claims often differ from actual output. Learn the key questions and verification methods to assess whether a supplier can meet your volume requirements.", category: "Supplier Verification" },
    { title: "Common Quality Issues in Consumer Electronics Sourcing", date: "July 8, 2026", excerpt: "From component sourcing to final assembly, electronics present unique quality challenges. This guide covers the most frequent defects and how to prevent them.", category: "Quality Control" },
    { title: "Understanding Incoterms for China Imports", date: "June 28, 2026", excerpt: "FOB, CIF, DDP—choosing the right shipping terms affects cost, risk, and responsibility. A practical breakdown for importers sourcing from China.", category: "Logistics" },
    { title: "The Real Cost of Working with Unverified Suppliers", date: "June 20, 2026", excerpt: "Low unit prices can hide significant risks. We examine case examples where skipping verification led to costly outcomes and how proper due diligence prevents them.", category: "Risk Management" },
    { title: "Preparing for Pre-Shipment Inspections: A Checklist", date: "June 12, 2026", excerpt: "Effective inspections require preparation. This checklist helps importers define acceptance criteria, communicate requirements, and interpret inspection reports.", category: "Quality Control" },
    { title: "Navigating Product Testing Requirements by Market", date: "June 5, 2026", excerpt: "Different markets have different compliance requirements. An overview of common testing standards for consumer products entering the US, EU, and Australia.", category: "Compliance" }
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
            <Link to="/case-studies" className="text-slate-600 hover:text-slate-900">Case Studies</Link>
            <Link to="/blog" className="text-slate-900 font-medium">Blog</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link>
          </div>
          <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800">Get a Free Quote</Link>
        </div>
      </nav>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-widest mb-3">INSIGHTS</div>
          <h1 className="text-4xl font-semibold mb-4">Sourcing Insights</h1>
          <p className="text-xl text-slate-300">Practical guidance on China sourcing, supplier management, and import operations.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-8 hover:border-slate-300 transition-colors">
              <div className="text-xs font-medium text-emerald-600 mb-3">{post.category}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 leading-tight">{post.title}</h3>
              <div className="text-sm text-slate-500 mb-4">{post.date}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 text-sm font-medium text-slate-900">Read more →</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-slate-500">More articles coming soon. Subscribe to receive updates.</div>
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

export default Blog;