import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Filter,
  BookOpen,
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'sourcing-tips', name: 'Sourcing Tips' },
  { id: 'quality-control', name: 'Quality Control' },
  { id: 'supplier-verification', name: 'Supplier Verification' },
  { id: 'shipping-logistics', name: 'Shipping & Logistics' },
  { id: 'industry-news', name: 'Industry News' },
]

const posts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Checklist',
    excerpt: 'Before you place your first order, use this comprehensive checklist to verify potential suppliers and avoid costly mistakes.',
    category: 'supplier-verification',
    author: 'David Chen',
    date: '2026-06-20',
    readTime: '8 min read',
    image: 'supplier-verification-checklist',
    featured: true,
  },
  {
    id: 2,
    title: '5 Common Quality Issues in Chinese Manufacturing and How to Prevent Them',
    excerpt: 'Learn about the most frequent quality problems importers face and practical steps to ensure consistent product quality.',
    category: 'quality-control',
    author: 'Sarah Wang',
    date: '2026-06-15',
    readTime: '6 min read',
    image: 'quality-issues-manufacturing',
    featured: false,
  },
  {
    id: 3,
    title: 'The True Cost of Cheap Products: Why Price Shouldn\'t Be Your Only Criterion',
    excerpt: 'Understanding the hidden costs of choosing the cheapest supplier and how to calculate the real Total Cost of Ownership.',
    category: 'sourcing-tips',
    author: 'Michael Zhang',
    date: '2026-06-10',
    readTime: '5 min read',
    image: 'true-cost-sourcing',
    featured: false,
  },
  {
    id: 4,
    title: 'Shipping from China: Sea vs Air vs Express - Which is Right for You?',
    excerpt: 'A detailed comparison of shipping methods to help you choose the best option based on cost, speed, and product type.',
    category: 'shipping-logistics',
    author: 'Emily Liu',
    date: '2026-06-05',
    readTime: '7 min read',
    image: 'shipping-methods-china',
    featured: false,
  },
  {
    id: 5,
    title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
    excerpt: 'Practical strategies for negotiating MOQs with Chinese suppliers, especially for small businesses and startups.',
    category: 'sourcing-tips',
    author: 'David Chen',
    date: '2026-05-28',
    readTime: '5 min read',
    image: 'moq-negotiation',
    featured: false,
  },
  {
    id: 6,
    title: 'Factory Audit vs Third-Party Inspection: What\'s the Difference?',
    excerpt: 'Clear explanations of factory audits and third-party inspections, and when to use each for maximum protection.',
    category: 'quality-control',
    author: 'Sarah Wang',
    date: '2026-05-20',
    readTime: '6 min read',
    image: 'factory-audit-inspection',
    featured: false,
  },
  {
    id: 7,
    title: 'China Manufacturing Hubs: A Guide to Shenzhen, Guangzhou, Yiwu, and More',
    excerpt: 'An overview of China\'s major manufacturing regions and what each is best known for producing.',
    category: 'industry-news',
    author: 'Michael Zhang',
    date: '2026-05-15',
    readTime: '9 min read',
    image: 'china-manufacturing-hubs',
    featured: false,
  },
  {
    id: 8,
    title: 'How to Protect Your Intellectual Property When Sourcing from China',
    excerpt: 'Essential steps to safeguard your designs, trademarks, and proprietary information when working with Chinese manufacturers.',
    category: 'sourcing-tips',
    author: 'Emily Liu',
    date: '2026-05-10',
    readTime: '7 min read',
    image: 'ip-protection-china',
    featured: false,
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = React.useState('all')
  const featuredPost = posts.find((p) => p.featured)
  const regularPosts = posts.filter((p) => !p.featured && (activeCategory === 'all' || p.category === activeCategory))

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Sourcing Insights & Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Expert advice, practical tips, and industry insights to help you source better from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-slate-100">
                  <img
                    data-strk-img-id="blog-featured-img-8f2a9c"
                    data-strk-img="[blog-featured-title] [blog-featured-excerpt]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 mb-4 w-fit">
                    Featured
                  </span>
                  <h2 id="blog-featured-title" className="text-2xl font-bold text-slate-900 mb-3">{featuredPost.title}</h2>
                  <p id="blog-featured-excerpt" className="text-slate-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild>
                    <Link to={`/blog/${featuredPost.id}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="h-4 w-4 text-slate-400" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <article key={post.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-video bg-slate-100">
                  <img
                    data-strk-img-id={`blog-post-${post.id}-img`}
                    data-strk-img={`[blog-post-${post.id}-title] [blog-post-${post.id}-excerpt]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 mb-3">
                    {categories.find((c) => c.id === post.category)?.name}
                  </span>
                  <h3 id={`blog-post-${post.id}-title`} className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p id={`blog-post-${post.id}-excerpt`} className="text-sm text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-600 p-8 md:p-12 text-center">
            <BookOpen className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated with Sourcing Insights
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Get the latest sourcing tips, industry news, and expert advice delivered to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border-0 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}