import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const posts = [
    {
      id: 1,
      title: 'How to Evaluate a Chinese Factory Before Placing Your First Order',
      excerpt: 'A practical checklist for verifying supplier legitimacy, production capability, and quality systems without traveling to China yourself.',
      category: 'Supplier Verification',
      date: 'June 3, 2026',
      readTime: '12 min',
      content: 'When sourcing from China for the first time, the biggest risk is committing to a supplier you have not properly vetted. This article outlines the key areas to investigate before sending a deposit.',
    },
    {
      id: 2,
      title: 'Understanding Pre-Shipment Inspection: What It Catches and What It Misses',
      excerpt: 'Pre-shipment inspection is a critical safeguard, but it has limitations. Learn what a standard PSI covers and how to make it more effective for your products.',
      category: 'Quality Control',
      date: 'May 22, 2026',
      readTime: '9 min',
      content: 'Many buyers assume that a pre-shipment inspection guarantees perfect quality. In reality, it is a sampling exercise with statistical limitations. Understanding these limits helps you set realistic expectations.',
    },
    {
      id: 3,
      title: 'Common Documentation Mistakes That Delay Shipments from China',
      excerpt: 'Incorrect or incomplete paperwork is one of the most frequent causes of customs delays. Here are the documents we review on every order and why they matter.',
      category: 'Logistics',
      date: 'May 8, 2026',
      readTime: '8 min',
      content: 'A single missing or incorrect document can hold up a container for weeks. We maintain a standard documentation checklist that we review with every client before production begins.',
    },
    {
      id: 4,
      title: 'Why Minimum Order Quantities Exist and How to Negotiate Them',
      excerpt: 'Factories set MOQs for legitimate business reasons. Understanding those reasons helps you negotiate more effectively or find suppliers better suited to smaller orders.',
      category: 'Commercial Terms',
      date: 'April 29, 2026',
      readTime: '7 min',
      content: 'Buyers often push back on MOQs without understanding the underlying economics. This article explains the cost structure that drives minimum quantities and offers practical negotiation approaches.',
    },
    {
      id: 5,
      title: 'The Real Cost of Using a Sourcing Agent vs. Going Direct',
      excerpt: 'A transparent breakdown of what a professional sourcing agent actually costs, and where the hidden costs of direct sourcing often appear.',
      category: 'Business Strategy',
      date: 'April 15, 2026',
      readTime: '11 min',
      content: 'Many buyers assume that working without an agent saves money. In practice, the costs of mistakes, travel, and time often exceed the agent fee. We lay out the numbers.',
    },
    {
      id: 6,
      title: 'How to Write a Product Specification That Chinese Factories Actually Understand',
      excerpt: 'Vague specifications lead to misunderstandings and quality issues. This guide covers the level of detail required for consistent results.',
      category: 'Product Development',
      date: 'April 2, 2026',
      readTime: '10 min',
      content: 'A good specification is not just a list of dimensions. It includes materials, tolerances, finishes, packaging, and acceptance criteria. We share examples of specifications that have worked well.',
    },
    {
      id: 7,
      title: 'What to Do When a Factory Misses a Production Deadline',
      excerpt: 'Delays happen. The question is how you respond. This article covers escalation steps, mitigation options, and how to protect your business in future orders.',
      category: 'Production Management',
      date: 'March 18, 2026',
      readTime: '6 min',
      content: 'When a factory falls behind, buyers often discover they have limited leverage. We discuss the practical options available at different stages of production and how to structure contracts to reduce this risk.',
    },
    {
      id: 8,
      title: 'Navigating Product Testing Requirements for the European and US Markets',
      excerpt: 'Testing requirements vary by product category and destination market. We outline the most common tests and how to coordinate them efficiently.',
      category: 'Compliance',
      date: 'March 5, 2026',
      readTime: '9 min',
      content: 'Many buyers are surprised by the cost and lead time of required testing. Planning for these requirements early prevents last-minute delays and expensive re-testing.',
    },
  ]

  const categories = ['All', ...new Set(posts.map(p => p.category))]

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory)

  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-sm tracking-[2px] text-slate-400 mb-4">RESOURCES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Sourcing Insights</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Practical articles based on our day-to-day work helping buyers source from China. 
            No hype, just what we have learned from managing real orders.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors ${selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="border border-slate-200 rounded-xl p-8 bg-white flex flex-col">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                <span className="px-2.5 py-0.5 bg-slate-100 rounded text-slate-600">{post.category}</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-semibold text-xl tracking-tight text-slate-900 mb-3 leading-tight">{post.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-500">
                {post.content}
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-slate-500">No articles in this category yet.</div>
        )}
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Have a Specific Question?</h2>
          <p className="text-slate-600 mb-8">Our team is happy to discuss your sourcing situation directly. No sales pitch, just practical advice.</p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Blog
