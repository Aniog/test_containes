import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

const Blog = () => {
  const articles = [
    {
      slug: 'factory-verification-what-to-check',
      title: 'Factory Verification: What to Check Before Placing an Order',
      date: 'June 12, 2026',
      category: 'Sourcing Process',
      excerpt: 'A factory visit or remote verification can reveal important information about a supplier\'s capabilities and reliability. Here are the key areas we assess during verification.',
      readTime: '8 min read',
    },
    {
      slug: 'pre-shipment-inspection-guide',
      title: 'Pre-Shipment Inspection: A Practical Guide for Importers',
      date: 'June 5, 2026',
      category: 'Quality Control',
      excerpt: 'Pre-shipment inspection is one of the most effective ways to reduce quality risk. This guide covers what to inspect, how to define acceptance criteria, and how to interpret reports.',
      readTime: '10 min read',
    },
    {
      slug: 'understanding-moq-and-production-lead-times',
      title: 'Understanding MOQ and Production Lead Times in China',
      date: 'May 28, 2026',
      category: 'Sourcing Basics',
      excerpt: 'Minimum order quantities and lead times vary significantly by product and supplier. Understanding these constraints helps set realistic expectations and plan sourcing timelines.',
      readTime: '6 min read',
    },
    {
      slug: 'common-mistakes-first-time-importers',
      title: 'Common Mistakes First-Time Importers Make',
      date: 'May 20, 2026',
      category: 'Sourcing Process',
      excerpt: 'Many first-time importers encounter similar challenges. We outline frequent issues we see and how to avoid them when sourcing from China.',
      readTime: '7 min read',
    },
    {
      slug: 'shipping-options-from-china-to-international',
      title: 'Shipping Options from China to International Destinations',
      date: 'May 14, 2026',
      category: 'Logistics',
      excerpt: 'Choosing the right shipping method involves tradeoffs between cost, speed, and reliability. This overview covers sea freight, air freight, and express options.',
      readTime: '9 min read',
    },
    {
      slug: 'quality-standards-and-certifications',
      title: 'Quality Standards and Certifications: What Importers Need to Know',
      date: 'May 7, 2026',
      category: 'Compliance',
      excerpt: 'Different markets have different safety and quality requirements. We explain common certifications and how to determine what applies to your products.',
      readTime: '11 min read',
    },
    {
      slug: 'working-with-sourcing-agents',
      title: 'Working with Sourcing Agents: What to Expect',
      date: 'April 30, 2026',
      category: 'Sourcing Process',
      excerpt: 'A sourcing agent can provide valuable support, but results depend on clear communication and realistic expectations. We explain how effective agent relationships work.',
      readTime: '7 min read',
    },
    {
      slug: 'sample-approval-best-practices',
      title: 'Sample Approval: Best Practices for Product Development',
      date: 'April 22, 2026',
      category: 'Quality Control',
      excerpt: 'The sample stage is critical for setting quality expectations. We share practices that help importers and suppliers align on specifications before production begins.',
      readTime: '6 min read',
    },
  ]

  const categories = ['All', 'Sourcing Process', 'Quality Control', 'Logistics', 'Compliance', 'Sourcing Basics']

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[36px] font-semibold mb-4">Blog</h1>
            <p className="text-lg text-[#94A3B8]">
              Practical information about sourcing from China. We share observations from our work 
              to help importers make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full border border-[#E2E8F0] text-[#475569] bg-white"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A2540] mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#475569] flex-1 mb-4">{article.excerpt}</p>
                  <div className="text-sm text-[#2563EB] font-medium">
                    Read article →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white border border-[#E2E8F0] rounded-xl text-center">
            <h3 className="font-semibold text-[#0A2540] mb-2">Looking for specific guidance?</h3>
            <p className="text-sm text-[#475569] mb-4">
              We can discuss your sourcing situation and share relevant experience from similar projects.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
