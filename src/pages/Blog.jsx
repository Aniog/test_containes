import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const articles = [
    {
      slug: 'factory-audit-checklist',
      title: 'What to Look for in a China Factory Audit',
      date: 'July 15, 2026',
      category: 'Supplier Verification',
      excerpt: 'A practical checklist for buyers evaluating potential manufacturers, covering documentation, capabilities, and quality systems.',
      readTime: '8 min',
    },
    {
      slug: 'pre-shipment-inspection-guide',
      title: 'How Pre-Shipment Inspection Reduces Risk',
      date: 'July 8, 2026',
      category: 'Quality Control',
      excerpt: 'Why inspection before goods leave the factory matters, what a typical PSI covers, and how to define acceptance criteria.',
      readTime: '6 min',
    },
    {
      slug: 'moq-and-pricing',
      title: 'Understanding MOQ and Pricing in China Sourcing',
      date: 'June 28, 2026',
      category: 'Sourcing Basics',
      excerpt: 'How minimum order quantities are determined and what factors influence unit pricing when working with Chinese manufacturers.',
      readTime: '7 min',
    },
    {
      slug: 'logistics-consolidation',
      title: 'When to Consolidate Shipments from Multiple Suppliers',
      date: 'June 20, 2026',
      category: 'Logistics',
      excerpt: 'The trade-offs between consolidating orders versus shipping separately, and how to plan for cost-effective freight.',
      readTime: '5 min',
    },
    {
      slug: 'communication-best-practices',
      title: 'Communicating Effectively with Chinese Suppliers',
      date: 'June 12, 2026',
      category: 'Supplier Management',
      excerpt: 'Practical tips for reducing misunderstandings, setting clear expectations, and maintaining productive supplier relationships.',
      readTime: '6 min',
    },
    {
      slug: 'sample-approval-process',
      title: 'Building a Reliable Sample Approval Process',
      date: 'June 5, 2026',
      category: 'Quality Control',
      excerpt: 'How to structure sample stages from initial samples through production samples to avoid costly surprises later.',
      readTime: '7 min',
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Sourcing Insights</h1>
            <p className="text-xl text-slate-300">
              Practical guidance for buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Card key={idx} className="flex flex-col">
              <div className="relative h-48 bg-slate-100">
                <img
                  data-strk-img-id={`blog-${article.slug}`}
                  data-strk-img={`[${article.title}] [Sourcing Insights] factory office documents inspection`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                <CardDescription className="mt-2">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{article.date}</span>
                  <span className="text-teal-600 font-medium cursor-pointer hover:underline">Read more →</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Need Specific Guidance?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team can provide tailored advice for your product category and sourcing situation.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Blog
