import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Calendar, User, Clock, Search, Shield, Truck, FileText, CheckCircle, TrendingUp } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "How to Verify a Chinese Factory Before Placing Orders",
    excerpt: "Learn the essential steps to verify a Chinese manufacturer's legitimacy, including business license checks, factory audits, and red flags to watch for.",
    category: "Supplier Verification",
    date: "June 15, 2026",
    readTime: "8 min read",
    image: "verification"
  },
  {
    id: 2,
    title: "Understanding Quality Control Inspections in China",
    excerpt: "A comprehensive guide to quality control inspections, including AQL standards, inspection stages, and how to interpret inspection reports.",
    category: "Quality Control",
    date: "June 10, 2026",
    readTime: "10 min read",
    image: "quality"
  },
  {
    id: 3,
    title: "Navigating China Shipping: FOB, CIF, and EXW Explained",
    excerpt: "Understand the different shipping terms used in China sourcing and how to choose the right incoterms for your business needs.",
    category: "Logistics",
    date: "June 5, 2026",
    readTime: "7 min read",
    image: "shipping"
  },
  {
    id: 4,
    title: "Common Mistakes to Avoid When Sourcing from China",
    excerpt: "Learn about the most common pitfalls in China sourcing and how to avoid them to ensure successful partnerships with suppliers.",
    category: "Sourcing Tips",
    date: "May 28, 2026",
    readTime: "6 min read",
    image: "tips"
  },
  {
    id: 5,
    title: "How to Negotiate with Chinese Suppliers",
    excerpt: "Master the art of negotiation with Chinese manufacturers. Learn cultural insights, pricing strategies, and relationship building tips.",
    category: "Negotiation",
    date: "May 20, 2026",
    readTime: "9 min read",
    image: "negotiation"
  },
  {
    id: 6,
    title: "Understanding Minimum Order Quantities (MOQs)",
    excerpt: "Everything you need to know about MOQs in China manufacturing, including how to negotiate lower quantities and manage production runs.",
    category: "Manufacturing",
    date: "May 12, 2026",
    readTime: "5 min read",
    image: "moq"
  }
]

const categories = [
  { name: "All Posts", count: 6 },
  { name: "Supplier Verification", count: 1 },
  { name: "Quality Control", count: 1 },
  { name: "Logistics", count: 1 },
  { name: "Sourcing Tips", count: 1 },
  { name: "Negotiation", count: 1 },
  { name: "Manufacturing", count: 1 }
]

const featuredPost = {
  title: "The Complete Guide to China Sourcing in 2026",
  excerpt: "Everything you need to know about sourcing products from China, from finding suppliers to shipping your goods. Updated for 2026 with the latest market insights and best practices.",
  category: "Guide",
  date: "June 18, 2026",
  readTime: "20 min read"
}

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog | China Sourcing Insights | SSourcing China</title>
        <meta name="description" content="Expert insights on China sourcing, supplier verification, quality control, and logistics. Stay informed with our latest articles and guides." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-slate-600">
              Expert guidance on China sourcing, supplier management, and international trade. Stay informed with our latest articles and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="lg:flex items-center gap-8">
              <div className="lg:w-2/3">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                  Featured Guide
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-blue-100 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-blue-200 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
              <div className="lg:w-1/3 mt-8 lg:mt-0">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-semibold mb-4">What's Inside:</h3>
                  <ul className="space-y-3">
                    {[
                      "Finding reliable suppliers",
                      "Factory verification process",
                      "Quality control strategies",
                      "Negotiation tactics",
                      "Shipping & logistics",
                      "Common pitfalls to avoid"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-blue-100 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-slate-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-600 mb-8">
              Subscribe to our newsletter for the latest China sourcing insights, tips, and industry news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog