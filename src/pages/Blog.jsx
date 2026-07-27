import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../lib/utils'
import CTASection from '../components/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const posts = [
    {
      id: 1,
      title: 'How to Evaluate a Chinese Factory Before Placing Your First Order',
      excerpt: 'A practical checklist for verifying supplier legitimacy, production capacity, and quality systems before you commit to production.',
      category: 'Supplier Verification',
      date: '2026-06-12',
      readTime: '12 min',
      content: 'Before placing your first order with a new Chinese supplier, it is essential to verify that the factory is a legitimate business with the capacity and systems to deliver what they promise. This guide outlines the key areas to investigate during a factory audit.',
    },
    {
      id: 2,
      title: 'Understanding Pre-Shipment Inspection Standards (AQL Explained)',
      excerpt: 'A clear explanation of Acceptable Quality Limit (AQL) standards and how to decide what inspection level is appropriate for your products.',
      category: 'Quality Control',
      date: '2026-05-28',
      readTime: '9 min',
      content: 'Many buyers are unsure what level of inspection is appropriate for their products. This article explains AQL sampling standards and provides guidance on setting inspection criteria that balance cost and risk.',
    },
    {
      id: 3,
      title: 'Common Documentation Mistakes That Delay Shipments',
      excerpt: 'Missing or incorrect export documents are a frequent cause of customs delays. Here are the documents you should prepare and common errors to avoid.',
      category: 'Logistics',
      date: '2026-05-15',
      readTime: '8 min',
      content: 'Even when production is complete and quality is acceptable, shipments can be delayed by documentation issues. This post covers the most common paperwork problems we see and how to prevent them.',
    },
    {
      id: 4,
      title: 'Negotiating Payment Terms with Chinese Suppliers',
      excerpt: 'A balanced approach to payment terms that protects both buyer and supplier while keeping the relationship productive.',
      category: 'Sourcing Strategy',
      date: '2026-04-30',
      readTime: '10 min',
      content: 'Payment terms are one of the most negotiated aspects of sourcing from China. This article discusses common structures and how to find terms that work for both parties.',
    },
    {
      id: 5,
      title: 'What to Do When Quality Issues Are Found During Inspection',
      excerpt: 'A step-by-step guide to handling quality problems discovered during pre-shipment inspection, including communication templates and resolution options.',
      category: 'Quality Control',
      date: '2026-04-18',
      readTime: '11 min',
      content: 'Finding quality issues during inspection is stressful but manageable if you have a clear process. This guide walks through how to document, communicate, and resolve problems effectively.',
    },
    {
      id: 6,
      title: 'How to Calculate True Landed Cost from China',
      excerpt: 'Beyond the factory price: understanding all the costs involved in getting products from a Chinese factory to your warehouse.',
      category: 'Sourcing Strategy',
      date: '2026-04-03',
      readTime: '7 min',
      content: 'Many buyers focus only on the unit price when comparing suppliers. This article breaks down all the components of landed cost so you can make accurate comparisons.',
    },
    {
      id: 7,
      title: 'Choosing Between Trading Companies and Direct Factories',
      excerpt: 'The trade-offs between working with trading companies versus direct manufacturers, and when each option makes sense.',
      category: 'Supplier Verification',
      date: '2026-03-20',
      readTime: '9 min',
      content: 'Not every supplier you encounter is a factory. This post explains how to identify trading companies, the advantages and disadvantages of each model, and how to decide which is right for your situation.',
    },
    {
      id: 8,
      title: 'Managing Production Timelines Across Multiple Suppliers',
      excerpt: 'Practical tips for coordinating orders across several factories without losing visibility or control.',
      category: 'Production Management',
      date: '2026-03-05',
      readTime: '8 min',
      content: 'As your sourcing volume grows, you may work with multiple factories simultaneously. This article shares methods we use to track progress and keep projects on schedule.',
    },
    {
      id: 9,
      title: 'Export Compliance Basics for First-Time Importers',
      excerpt: 'An overview of key compliance considerations when importing from China, including restricted products and documentation requirements.',
      category: 'Logistics',
      date: '2026-02-22',
      readTime: '10 min',
      content: 'First-time importers often overlook compliance requirements until problems arise. This guide covers the basics you should understand before placing your first order.',
    },
  ]

  const categories = ['All', ...new Set(posts.map(p => p.category))]

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory)

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] text-white/60 mb-4">RESOURCES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Sourcing Insights</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Practical guidance on sourcing from China, based on our experience working with factories and buyers.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article key={post.id} className="border border-slate-200 rounded-lg p-6 flex flex-col">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-3 leading-snug">{post.title}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded">{post.category}</span>
                <span className="text-slate-400">Read more →</span>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-slate-500 py-12">No articles in this category yet.</p>
        )}
      </section>

      <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Need Specific Guidance?</h2>
          <p className="text-slate-600 mb-6">If you have a question about sourcing from China that is not covered here, we are happy to discuss it directly.</p>
          <Link to="/contact" className="inline-block px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800">Contact Us</Link>
        </div>
      </section>

      <CTASection 
        title="Ready to start a sourcing project?" 
        subtitle="Submit your requirements and we will prepare a customized proposal." 
      />
    </div>
  )
}

export default Blog
