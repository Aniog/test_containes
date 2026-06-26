import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    {
      slug: 'factory-audit-checklist',
      title: 'What to Look for in a Factory Audit Report',
      category: 'Quality',
      date: 'June 12, 2026',
      readTime: '8 min',
      excerpt: 'A factory audit is only useful if you know what the findings actually mean. Here is what we include in our audit reports and why each section matters.',
      content: 'When evaluating a potential supplier, a factory audit report should give you concrete information about capability, quality systems, and risk factors. We structure our reports to cover business legitimacy, production capacity, equipment, quality processes, and compliance documentation. Each section includes specific observations rather than general impressions. Understanding the difference between a "pass" on paper and actual production readiness is critical before placing orders.',
    },
    {
      slug: 'moq-negotiation',
      title: 'How to Approach MOQ Discussions with Chinese Suppliers',
      category: 'Sourcing',
      date: 'May 28, 2026',
      readTime: '6 min',
      excerpt: 'Minimum order quantities are negotiable, but the approach matters. We share practical strategies for discussing MOQ without damaging the supplier relationship.',
      content: 'MOQ is often presented as fixed, but it is frequently a starting point. The key is understanding what drives the supplier\'s number: setup costs, material purchasing, or production efficiency. We recommend approaching MOQ discussions with data about your expected volume over time, rather than simply asking for a lower number. Building a phased commitment can be more effective than a one-time reduction request.',
    },
    {
      slug: 'inspection-sampling',
      title: 'Understanding AQL Sampling in Pre-Shipment Inspections',
      category: 'Quality',
      date: 'May 15, 2026',
      readTime: '7 min',
      excerpt: 'AQL (Acceptable Quality Limit) is the standard sampling method used in pre-shipment inspections. Here is how it works and what the numbers actually mean for your order.',
      content: 'AQL sampling is designed to give you a statistically reasonable assessment of quality without inspecting every unit. Different AQL levels are appropriate for different product types and risk tolerances. We explain how to select appropriate AQL levels, what major vs minor defects mean in practice, and how to interpret inspection reports when making accept/reject decisions.',
    },
    {
      slug: 'payment-terms',
      title: 'Common Payment Terms and What They Mean for Risk',
      category: 'Operations',
      date: 'April 30, 2026',
      readTime: '5 min',
      excerpt: 'Payment terms affect both cash flow and risk allocation. We outline the most common structures used in China sourcing and the tradeoffs involved.',
      content: 'TT in advance, letter of credit, and net terms each allocate risk differently between buyer and supplier. We discuss when each structure makes sense, how to protect yourself when paying in advance, and how payment terms can be used as leverage in negotiations. The right structure depends on your relationship with the supplier and the nature of the order.',
    },
    {
      slug: 'communication-tips',
      title: 'Communicating Product Specifications Across Language Barriers',
      category: 'Operations',
      date: 'April 18, 2026',
      readTime: '6 min',
      excerpt: 'Misunderstandings about specifications are one of the most common sources of quality issues. Practical approaches to making your requirements clear.',
      content: 'Written specifications, reference samples, and photos each have strengths and limitations. We recommend a layered approach: written specs for measurable requirements, physical samples for subjective qualities, and annotated photos for specific details. We also discuss how to handle revisions and confirm understanding at each stage of the process.',
    },
    {
      slug: 'shipping-consolidation',
      title: 'When Consolidating Orders Makes Financial Sense',
      category: 'Logistics',
      date: 'April 3, 2026',
      readTime: '5 min',
      excerpt: 'Combining orders from multiple suppliers into single shipments can reduce freight costs, but it adds complexity. Here is how to evaluate whether consolidation is worth it.',
      content: 'Consolidation reduces per-unit freight cost but extends lead time and increases coordination complexity. We walk through the math of when consolidation makes sense, how to coordinate timing across suppliers, and what documentation is required for consolidated shipments. Not every situation benefits from consolidation.',
    },
    {
      slug: 'certification-basics',
      title: 'CE, FCC, and CPSIA: What Documentation Do You Actually Need?',
      category: 'Compliance',
      date: 'March 20, 2026',
      readTime: '7 min',
      excerpt: 'Market entry requirements vary by product and destination. We clarify what documentation is typically required and what suppliers can realistically provide.',
      content: 'Many buyers assume suppliers will automatically provide the right certifications. In practice, documentation requirements depend on the product category, target market, and how the product will be sold. We discuss the difference between supplier declarations and third-party testing, and how to determine what is actually needed for your situation.',
    },
    {
      slug: 'supplier-relationships',
      title: 'Building Productive Long-Term Supplier Relationships',
      category: 'Sourcing',
      date: 'March 5, 2026',
      readTime: '6 min',
      excerpt: 'The best sourcing outcomes often come from ongoing supplier relationships rather than one-off transactions. How to build relationships that benefit both sides.',
      content: 'Treating suppliers as transactional counterparties tends to produce transactional results. We discuss how consistent communication, fair dealing on issues, and realistic expectations contribute to better long-term outcomes. A good supplier relationship does not eliminate the need for verification and inspection, but it can reduce friction and improve responsiveness.',
    },
  ];

  const categories = ['All', 'Sourcing', 'Quality', 'Operations', 'Logistics', 'Compliance'];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">RESOURCES</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Sourcing Insights</h1>
            <p className="text-lg text-slate-600">
              Practical guidance on China sourcing, quality management, and supplier operations. Written for buyers who want clarity, not hype.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map((post, idx) => (
            <article key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                <span className="px-2.5 py-0.5 bg-slate-100 rounded text-slate-600">{post.category}</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">{post.title}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">{post.excerpt}</p>
              <div className="text-sm text-slate-700 border-t border-slate-100 pt-4 mt-auto">
                {post.content.substring(0, 180)}...
              </div>
              <div className="mt-4 text-xs text-slate-500">Full article available upon request</div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-slate-500">No articles in this category yet.</div>
        )}
      </div>

      <div className="bg-white border-y border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Looking for specific guidance?</h2>
          <p className="text-slate-600 mb-6">We can discuss your situation directly or point you to relevant resources.</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800">Contact Us</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
