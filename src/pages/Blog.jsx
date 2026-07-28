import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/ui/CTAButton';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sourcing Process', 'Quality Control', 'Supplier Verification', 'Logistics', 'Industry Insights'];

  const articles = [
    {
      id: 1,
      title: 'How to Evaluate a Chinese Supplier Before Placing an Order',
      excerpt: 'A practical checklist for assessing supplier capability, legitimacy, and fit before committing to production.',
      category: 'Supplier Verification',
      date: 'July 15, 2026',
      readTime: '8 min',
      content: 'Before placing an order with a new supplier, it is important to verify their legitimacy and assess their capability to meet your requirements. This article outlines key areas to investigate and questions to ask during the evaluation process.',
    },
    {
      id: 2,
      title: 'Understanding Pre-Shipment Inspection: What Buyers Need to Know',
      excerpt: 'An overview of inspection types, sampling methods, and how to interpret inspection reports.',
      category: 'Quality Control',
      date: 'July 8, 2026',
      readTime: '6 min',
      content: 'Pre-shipment inspection is a common quality control measure, but its effectiveness depends on proper planning and clear acceptance criteria. This guide explains what buyers should specify and how to use inspection results.',
    },
    {
      id: 3,
      title: 'Common Documentation Errors in China Exports and How to Avoid Them',
      excerpt: 'Mistakes in commercial invoices, packing lists, and certificates that can delay shipments.',
      category: 'Logistics',
      date: 'June 28, 2026',
      readTime: '5 min',
      content: 'Documentation errors are a frequent cause of customs delays and additional costs. We review the most common issues we see and provide guidance on preparing accurate export documentation.',
    },
    {
      id: 4,
      title: 'Factory Audits: What They Reveal and What They Miss',
      excerpt: 'The value and limitations of on-site supplier audits in the sourcing process.',
      category: 'Supplier Verification',
      date: 'June 20, 2026',
      readTime: '7 min',
      content: 'A factory audit provides valuable information about a supplier, but it is a snapshot in time. This article discusses what audits can and cannot tell you, and how to use audit findings effectively.',
    },
    {
      id: 5,
      title: 'Setting Quality Standards for Custom Manufactured Products',
      excerpt: 'How to define specifications and acceptance criteria that suppliers can actually meet.',
      category: 'Quality Control',
      date: 'June 12, 2026',
      readTime: '9 min',
      content: 'Vague quality requirements lead to disputes and disappointment. We discuss how to translate your expectations into clear, measurable specifications that can be verified during production and inspection.',
    },
    {
      id: 6,
      title: 'Regional Manufacturing Differences Across China',
      excerpt: 'An overview of major manufacturing regions and their typical product specialties.',
      category: 'Industry Insights',
      date: 'June 5, 2026',
      readTime: '6 min',
      content: 'China is not a single manufacturing location. Different regions have developed expertise in different product categories. Understanding these patterns can help narrow your supplier search.',
    },
    {
      id: 7,
      title: 'Managing Production Timelines: A Buyer\'s Perspective',
      excerpt: 'Practical approaches to tracking progress and addressing delays during manufacturing.',
      category: 'Sourcing Process',
      date: 'May 28, 2026',
      readTime: '7 min',
      content: 'Production delays are common in sourcing from China. This article covers how to establish realistic timelines, monitor progress effectively, and respond when schedules slip.',
    },
    {
      id: 8,
      title: 'The Role of Samples in the Sourcing Process',
      excerpt: 'How to use samples effectively for quality verification and supplier evaluation.',
      category: 'Sourcing Process',
      date: 'May 20, 2026',
      readTime: '5 min',
      content: 'Samples serve multiple purposes in sourcing, from initial capability assessment to final quality approval. We discuss how to request, evaluate, and use samples throughout the sourcing process.',
    },
    {
      id: 9,
      title: 'Working with Trading Companies vs. Direct Manufacturers',
      excerpt: 'The practical differences and considerations when choosing between these supplier types.',
      category: 'Supplier Verification',
      date: 'May 12, 2026',
      readTime: '6 min',
      content: 'Both trading companies and direct manufacturers can be appropriate sourcing partners depending on your needs. This article outlines the typical characteristics of each and factors to consider.',
    },
    {
      id: 10,
      title: 'Incoterms for China Sourcing: A Practical Guide',
      excerpt: 'Commonly used Incoterms and what they mean for responsibility and cost allocation.',
      category: 'Logistics',
      date: 'May 5, 2026',
      readTime: '8 min',
      content: 'Choosing the right Incoterm affects who handles logistics, who bears risk at each stage, and how costs are allocated. We review the most relevant terms for China sourcing.',
    },
    {
      id: 11,
      title: 'Building Long-Term Supplier Relationships',
      excerpt: 'Approaches to developing reliable supply partnerships beyond individual transactions.',
      category: 'Industry Insights',
      date: 'April 28, 2026',
      readTime: '6 min',
      content: 'One-time orders and ongoing supply relationships require different approaches. This article discusses how to evaluate suppliers for long-term potential and build productive working relationships.',
    },
    {
      id: 12,
      title: 'Quality Control on a Budget: Prioritizing Inspection Activities',
      excerpt: 'How to allocate quality control resources effectively when budgets are limited.',
      category: 'Quality Control',
      date: 'April 20, 2026',
      readTime: '5 min',
      content: 'Comprehensive quality control can be expensive. We discuss how to prioritize inspection activities based on product risk, supplier history, and order value.',
    },
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-[#0A2540] mb-4">Sourcing Insights</h1>
            <p className="text-lg text-[#4B5563]">
              Practical guidance on sourcing from China, based on our experience working with international buyers and Chinese suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1E40AF] text-white'
                    : 'bg-gray-100 text-[#4B5563] hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article key={article.id} className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 bg-[#EFF6FF] text-[#1E40AF] rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#6B7280]">{article.readTime}</span>
                </div>
                <h3 className="font-semibold text-[#0A2540] mb-2 leading-snug">{article.title}</h3>
                <p className="text-sm text-[#4B5563] mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[#6B7280] pt-4 border-t border-gray-100">
                  <span>{article.date}</span>
                  <span className="text-[#1E40AF] hover:underline cursor-pointer">Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-[#4B5563] mb-6">
            These articles provide general guidance based on common sourcing scenarios. Specific situations may require different approaches. Contact us to discuss your particular requirements.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
};

export default Blog;
