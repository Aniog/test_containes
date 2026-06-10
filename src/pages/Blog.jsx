import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '@/components/sections/BlogCard'

const Blog = () => {
  const articles = [
    {
      slug: "how-to-verify-a-chinese-factory-before-placing-an-order",
      title: "How to Verify a Chinese Factory Before Placing an Order",
      excerpt: "A practical checklist for international buyers to assess supplier legitimacy, production capacity, and quality systems before committing to production.",
      date: "May 28, 2026",
      category: "Supplier Verification",
      readTime: "12 min read"
    },
    {
      slug: "common-quality-issues-in-china-sourcing-and-how-to-prevent-them",
      title: "Common Quality Issues in China Sourcing and How to Prevent Them",
      excerpt: "Learn the most frequent quality problems we see and the inspection and process controls that actually reduce defect rates.",
      date: "May 15, 2026",
      category: "Quality Control",
      readTime: "10 min read"
    },
    {
      slug: "understanding-moq-and-how-it-affects-your-sourcing-strategy",
      title: "Understanding MOQ and How It Affects Your Sourcing Strategy",
      excerpt: "Minimum order quantities vary widely by product and factory. Here's how to navigate MOQ requirements and when to push back.",
      date: "May 2, 2026",
      category: "Sourcing Strategy",
      readTime: "8 min read"
    },
    {
      slug: "pre-shipment-inspection-what-to-expect-and-what-to-ask-for",
      title: "Pre-Shipment Inspection: What to Expect and What to Ask For",
      excerpt: "A guide to pre-shipment inspections, including AQL standards, what inspectors actually check, and how to interpret inspection reports.",
      date: "Apr 18, 2026",
      category: "Quality Control",
      readTime: "11 min read"
    },
    {
      slug: "china-sourcing-for-small-businesses-is-it-worth-it",
      title: "China Sourcing for Small Businesses: Is It Worth It?",
      excerpt: "Direct sourcing from China is not only for large importers. Here's when smaller orders can make sense and how to approach them.",
      date: "Apr 3, 2026",
      category: "Sourcing Strategy",
      readTime: "9 min read"
    },
    {
      slug: "shipping-from-china-freight-options-and-cost-drivers",
      title: "Shipping from China: Freight Options and Cost Drivers",
      excerpt: "A breakdown of sea freight, air freight, and express options, including what affects pricing and how to choose the right method for your order.",
      date: "Mar 20, 2026",
      category: "Logistics",
      readTime: "10 min read"
    },
    {
      slug: "what-to-include-in-a-product-specification-for-chinese-suppliers",
      title: "What to Include in a Product Specification for Chinese Suppliers",
      excerpt: "Clear specifications reduce misunderstandings and quality issues. Here's the information you should provide when requesting quotes.",
      date: "Mar 7, 2026",
      category: "Sourcing Basics",
      readTime: "7 min read"
    },
    {
      slug: "payment-terms-in-china-sourcing-what-is-standard-and-what-is-negotiable",
      title: "Payment Terms in China Sourcing: What Is Standard and What Is Negotiable",
      excerpt: "TT, LC, and other payment methods explained. Learn what terms are typical, what factories expect, and how to protect your interests.",
      date: "Feb 25, 2026",
      category: "Sourcing Basics",
      readTime: "9 min read"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-wider text-blue-300 mb-3">RESOURCES</div>
            <h1 className="text-white mb-6">Sourcing Insights & Guidance</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Practical articles on China sourcing, supplier verification, quality control, and supply chain management for international buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <BlogCard 
              key={index}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              category={article.category}
              readTime={article.readTime}
            />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="section-heading mb-3">Stay Informed</h2>
            <p className="text-slate-600 mb-6">We periodically share practical guidance on sourcing from China. No spam, no sales pitches.</p>
            <Link to="/contact" className="inline-flex items-center text-accent font-medium hover:underline">
              Contact us to be added to our updates list →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
