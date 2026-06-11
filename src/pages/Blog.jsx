import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogCard from '@/components/sections/BlogCard'

const Blog = () => {
  const posts = [
    {
      slug: "factory-audit-checklist-china-sourcing",
      title: "Factory Audit Checklist: What to Verify Before Placing an Order",
      excerpt: "A practical guide to the key areas we evaluate during on-site factory audits, including legal status, production capability, quality systems, and compliance considerations.",
      date: "May 28, 2026",
      category: "Quality",
      readTime: "12 min read"
    },
    {
      slug: "pre-shipment-inspection-guide",
      title: "Pre-Shipment Inspection: A Practical Guide for Importers",
      excerpt: "How to define acceptance criteria, select sampling plans, and interpret inspection reports. Includes common issues we encounter and how to address them before goods leave the factory.",
      date: "May 15, 2026",
      category: "Quality",
      readTime: "10 min read"
    },
    {
      slug: "understanding-incoterms-2020-sourcing",
      title: "Understanding Incoterms 2020 for China Sourcing",
      excerpt: "A clear explanation of the most commonly used Incoterms in China sourcing transactions, including FOB, CIF, and DDP, with practical considerations for each term.",
      date: "May 2, 2026",
      category: "Logistics",
      readTime: "8 min read"
    },
    {
      slug: "common-quality-issues-consumer-electronics",
      title: "Common Quality Issues in Consumer Electronics Sourcing",
      excerpt: "Based on our inspection data, the most frequent quality issues we encounter when sourcing electronics and components, and how to prevent them through specification and inspection.",
      date: "April 18, 2026",
      category: "Quality",
      readTime: "11 min read"
    },
    {
      slug: "evaluating-supplier-capacity-china",
      title: "Evaluating Supplier Capacity: Questions to Ask Before Committing",
      excerpt: "How to assess whether a factory can realistically meet your volume and timeline requirements. Includes red flags and verification methods we use during supplier evaluation.",
      date: "April 3, 2026",
      category: "Sourcing",
      readTime: "9 min read"
    },
    {
      slug: "documentation-requirements-china-exports",
      title: "Documentation Requirements for China Exports: A Checklist",
      excerpt: "A practical checklist of commercial and regulatory documents commonly required for shipments from China, including commercial invoice, packing list, certificate of origin, and more.",
      date: "March 20, 2026",
      category: "Logistics",
      readTime: "7 min read"
    },
    {
      slug: "working-with-chinese-factories-communication",
      title: "Working with Chinese Factories: Communication Best Practices",
      excerpt: "Practical guidance on communicating effectively with Chinese manufacturers, including how to write clear specifications, manage expectations, and avoid common misunderstandings.",
      date: "March 7, 2026",
      category: "Sourcing",
      readTime: "10 min read"
    },
    {
      slug: "sample-evaluation-process-china-sourcing",
      title: "Sample Evaluation: Why It Matters and How to Do It Right",
      excerpt: "The role of samples in the sourcing process, what to evaluate, how to document feedback, and why skipping or rushing this step often leads to problems during production.",
      date: "February 25, 2026",
      category: "Sourcing",
      readTime: "8 min read"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase tracking-[2px] text-xs text-slate-400 mb-3">RESOURCES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Blog</h1>
          <p className="max-w-2xl text-lg text-slate-300">Practical guidance on China sourcing, quality management, and supply chain operations based on our day-to-day work with factories and buyers.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Have a specific sourcing question?</h2>
          <p className="text-slate-600 mb-6">We respond to inquiries within one business day. Tell us about your project and we will provide a preliminary assessment.</p>
          <Link to="/contact" className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">Contact Us</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog