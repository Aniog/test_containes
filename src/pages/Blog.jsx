import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'How to Evaluate a Chinese Factory Before Placing an Order',
      excerpt: 'A practical checklist for assessing supplier capability, legitimacy, and quality systems during initial qualification.',
      category: 'Supplier Selection',
      date: 'June 12, 2026',
      readTime: '12 min',
      content: 'When sourcing from China, the first step is determining whether a factory can actually produce what you need at the required quality level. This article outlines a structured approach to factory evaluation, including document verification, on-site assessment, and reference checks.',
    },
    {
      id: 2,
      title: 'Understanding Pre-Shipment Inspection Standards',
      excerpt: 'An overview of common inspection protocols, AQL sampling, and how to interpret inspection reports.',
      category: 'Quality Control',
      date: 'June 5, 2026',
      readTime: '9 min',
      content: 'Pre-shipment inspection is a standard risk mitigation tool, but its effectiveness depends on proper sampling, clear acceptance criteria, and accurate reporting. We explain how AQL works and what to look for in an inspection report.',
    },
    {
      id: 3,
      title: 'Common Documentation Issues in China Sourcing',
      excerpt: 'Commercial invoices, packing lists, certificates of origin, and other documents that frequently cause delays.',
      category: 'Logistics',
      date: 'May 28, 2026',
      readTime: '8 min',
      content: 'Incorrect or incomplete documentation is one of the most common causes of shipping delays. This article covers the documents typically required for international shipments from China and common errors to avoid.',
    },
    {
      id: 4,
      title: 'Working with Trading Companies vs. Direct Factories',
      excerpt: 'The trade-offs between convenience and control when deciding between intermediaries and manufacturers.',
      category: 'Supplier Selection',
      date: 'May 20, 2026',
      readTime: '10 min',
      content: 'Many buyers default to working with trading companies for convenience. Others insist on direct factory relationships. Both approaches have advantages and limitations. We discuss when each model makes sense.',
    },
    {
      id: 5,
      title: 'Quality Issues That Appear After Production Starts',
      excerpt: 'Why problems often emerge mid-production and how to catch them earlier in the process.',
      category: 'Quality Control',
      date: 'May 14, 2026',
      readTime: '7 min',
      content: 'Pre-shipment inspection can catch many issues, but some problems are expensive to fix at that stage. We discuss common mid-production issues and how during-production checks can reduce risk.',
    },
    {
      id: 6,
      title: 'Incoterms for Buyers Sourcing from China',
      excerpt: 'A practical guide to choosing the right Incoterms for your shipments and understanding responsibilities.',
      category: 'Logistics',
      date: 'May 8, 2026',
      readTime: '11 min',
      content: 'FOB, CIF, DDP, and other terms define who pays for what and when risk transfers. Choosing the wrong term can lead to unexpected costs or complications. We explain the most common options for China sourcing.',
    },
    {
      id: 7,
      title: 'How to Write a Clear Product Specification',
      excerpt: 'What information factories need to provide accurate quotations and consistent production.',
      category: 'Supplier Selection',
      date: 'April 30, 2026',
      readTime: '9 min',
      content: 'Vague specifications lead to misunderstandings, sample rejections, and quality issues. This article provides a framework for documenting product requirements in a way that manufacturers can act on.',
    },
    {
      id: 8,
      title: 'Payment Terms and Risk Allocation',
      excerpt: 'Common payment structures used in China sourcing and how they balance buyer and supplier risk.',
      category: 'General',
      date: 'April 22, 2026',
      readTime: '8 min',
      content: 'Payment terms are a key risk management tool. We discuss typical structures including deposits, milestone payments, and letters of credit, and how to align payment with verification milestones.',
    },
    {
      id: 9,
      title: 'Managing Time Zone and Communication Challenges',
      excerpt: 'Practical approaches to maintaining clear communication across time zones and language barriers.',
      category: 'General',
      date: 'April 15, 2026',
      readTime: '6 min',
      content: 'Time differences and language barriers are facts of life when sourcing from China. We share methods that help keep projects on track without requiring 24-hour availability.',
    },
  ];

  const categories = ['All', 'Supplier Selection', 'Quality Control', 'Logistics', 'General'];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Blog</h1>
            <p className="text-lg text-[#475569]">
              Practical articles on China sourcing, supplier management, and quality control. 
              Written for buyers who want to understand the process, not just outsource it.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-[#0A2540] text-white border-[#0A2540]' 
                    : 'bg-white text-[#475569] border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article key={article.id} className="blog-card">
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-semibold text-lg mb-3 leading-snug">{article.title}</h2>
                  <p className="text-sm text-[#475569] mb-4">{article.excerpt}</p>
                  <p className="text-sm text-[#475569] line-clamp-3">{article.content}</p>
                  <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                    <span className="text-sm text-[#2563EB]">Read more →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className="text-center text-[#64748B]">No articles in this category yet.</p>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-3">Need Specific Guidance?</h2>
            <p className="text-[#475569] mb-6">
              Our blog covers general topics. For advice specific to your product or situation, contact us directly.
            </p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
