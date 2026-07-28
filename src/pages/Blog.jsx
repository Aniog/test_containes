import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  ChevronRight
} from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing Your First Order',
    excerpt: 'A practical guide to factory verification, including what documents to check, what to look for during an on-site visit, and red flags to watch out for.',
    category: 'Supplier Verification',
    author: 'Zhang Wei',
    date: 'July 15, 2026',
    readTime: '8 min read',
    slug: 'verify-chinese-factory',
  },
  {
    title: 'China Sourcing: A Complete Guide for First-Time Importers',
    excerpt: 'Everything you need to know about sourcing from China for the first time, from finding suppliers to managing logistics and customs clearance.',
    category: 'Sourcing Guide',
    author: 'Li Ming',
    date: 'July 8, 2026',
    readTime: '12 min read',
    slug: 'china-sourcing-guide',
  },
  {
    title: 'Understanding AQL: Quality Inspection Standards Explained',
    excerpt: 'What is Acceptable Quality Limit (AQL) and how to use it for your product inspections. A clear explanation with practical examples.',
    category: 'Quality Control',
    author: 'Chen Yu',
    date: 'June 28, 2026',
    readTime: '6 min read',
    slug: 'aql-quality-inspection',
  },
  {
    title: 'Top 10 Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Learn from common pitfalls that cost importers time and money, and how to avoid them with proper planning and due diligence.',
    category: 'Tips & Advice',
    author: 'Zhang Wei',
    date: 'June 20, 2026',
    readTime: '10 min read',
    slug: 'sourcing-mistakes',
  },
  {
    title: 'Factory Audit Checklist: What to Look for During an On-Site Visit',
    excerpt: 'A comprehensive checklist for conducting factory audits, covering production capacity, quality systems, working conditions, and more.',
    category: 'Supplier Verification',
    author: 'Li Ming',
    date: 'June 12, 2026',
    readTime: '7 min read',
    slug: 'factory-audit-checklist',
  },
  {
    title: 'Shipping from China: Sea vs. Air vs. Rail Freight Comparison',
    excerpt: 'Compare the cost, speed, and reliability of different shipping methods from China to major global destinations.',
    category: 'Logistics',
    author: 'Chen Yu',
    date: 'June 5, 2026',
    readTime: '9 min read',
    slug: 'shipping-china-comparison',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog</h1>
            <p className="text-lg md:text-xl text-brand-200 leading-relaxed">
              Practical insights, guides, and tips for sourcing products from China. Written by our team of sourcing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <div 
                      data-strk-bg-id={`blog-img-${i}`}
                      data-strk-bg={`[blog-title-${i}] [blog-category]`}
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="600"
                      className="w-full h-40 rounded-lg bg-cover bg-center bg-gray-100"
                    />
                  </div>
                  <Badge variant="default" className="mb-3 w-fit">{post.category}</Badge>
                  <h3 id={`blog-title-${i}`} className="font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Get the latest sourcing tips and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-11 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}