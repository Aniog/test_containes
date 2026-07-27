import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Clock, ArrowUpRight } from 'lucide-react'

const blogPosts = [
  {
    category: 'Sourcing Guide',
    title: 'How to Find Reliable Suppliers in China: A Complete Guide',
    excerpt: 'Learn the step-by-step process for identifying, evaluating, and selecting trustworthy manufacturers in China. We cover supplier databases, trade shows, verification methods, and red flags to watch for.',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    category: 'Quality Control',
    title: 'Understanding Quality Inspection: What to Check Before Shipping',
    excerpt: 'A detailed guide to quality inspections for products from China. Learn what to check, when to inspect, and how to read inspection reports to make informed decisions about your orders.',
    date: '2026-07-08',
    readTime: '6 min read',
  },
  {
    category: 'Shipping',
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare sea freight and air freight for shipping from China. We break down costs, transit times, product suitability, and how to choose the best option for your specific needs.',
    date: '2026-06-28',
    readTime: '5 min read',
  },
  {
    category: 'Sourcing Guide',
    title: 'MOQ Explained: How to Negotiate Minimum Order Quantities',
    excerpt: 'Minimum order quantities can be a barrier for new buyers. Learn what MOQs are, why factories set them, and practical strategies for negotiating lower quantities without sacrificing quality.',
    date: '2026-06-20',
    readTime: '7 min read',
  },
  {
    category: 'Factory Verification',
    title: 'Factory Audit Checklist: What We Check When Visiting Suppliers',
    excerpt: 'Get an inside look at our factory audit process. We share the key areas we evaluate during on-site visits, from business licenses to production capacity and quality management systems.',
    date: '2026-06-12',
    readTime: '6 min read',
  },
  {
    category: 'Compliance',
    title: 'Product Compliance for China Imports: Certifications You Need',
    excerpt: 'Different products require different certifications for import into various countries. Learn which certifications you need for your products and how to ensure your supplier can provide them.',
    date: '2026-06-05',
    readTime: '8 min read',
  },
  {
    category: 'Sourcing Guide',
    title: 'Trading Company vs Factory: How to Tell the Difference',
    excerpt: 'Many suppliers on B2B platforms are trading companies, not factories. Learn how to identify the difference, when each type is appropriate, and how to work with both effectively.',
    date: '2026-05-28',
    readTime: '5 min read',
  },
  {
    category: 'Quality Control',
    title: 'Common Quality Issues in Chinese Manufacturing and How to Avoid Them',
    excerpt: 'Based on our experience with thousands of inspections, we share the most common quality issues we encounter and practical steps you can take to prevent them in your orders.',
    date: '2026-05-20',
    readTime: '7 min read',
  },
  {
    category: 'Shipping',
    title: 'Understanding Incoterms for China Imports: FOB, CIF, EXW Explained',
    excerpt: 'Incoterms determine who is responsible for costs and risks at each stage of shipping. Learn the most common terms used in China trade and which ones work best for different situations.',
    date: '2026-05-12',
    readTime: '6 min read',
  },
]

export function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Practical advice, guides, and insights to help you source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow flex flex-col">
                <CardHeader className="pb-4">
                  <Badge className="w-fit bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 mb-3">
                    {post.category}
                  </Badge>
                  <h2 className="text-lg font-semibold text-slate-900 leading-snug">{post.title}</h2>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="text-sm text-blue-700 hover:text-blue-800 font-medium flex items-center gap-1">
                      Read More
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help with Your Sourcing?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Our guides are a great starting point, but nothing beats personalized advice from experienced sourcing professionals.
          </p>
          <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
            <Link to="/contact">
              Talk to a Sourcing Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
