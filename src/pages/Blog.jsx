import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Button from "@/components/ui/button"
import { format } from "date-fns"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const posts = [
  {
    title: "How to Verify a Chinese Factory: A Step-by-Step Guide",
    excerpt: "Learn the essential steps to verify factory credentials, assess production capabilities, and avoid common pitfalls when evaluating suppliers in China.",
    author: "SSourcing Team",
    date: new Date(2026, 5, 15),
    readTime: "8 min read",
    category: "Supplier Verification",
    tags: ["factory audit", "verification", "due diligence"],
    slug: "verify-chinese-factory-guide"
  },
  {
    title: "Quality Control in China: AQL Standards and Inspection Types",
    excerpt: "Understanding Acceptable Quality Limit (AQL) standards and when to use during-production vs. pre-shipment inspections for your orders.",
    author: "SSourcing Team",
    date: new Date(2026, 5, 1),
    readTime: "6 min read",
    category: "Quality Control",
    tags: ["QC", "AQL", "inspection", "quality"],
    slug: "quality-control-aql-standards"
  },
  {
    title: "The Complete Guide to China Sourcing Costs in 2026",
    excerpt: "Breakdown of typical sourcing costs including product pricing, inspection fees, logistics, customs duties, and how to estimate your total landed cost.",
    author: "SSourcing Team",
    date: new Date(2026, 4, 20),
    readTime: "10 min read",
    category: "Sourcing Guide",
    tags: ["costs", "pricing", "budgeting", "landed cost"],
    slug: "china-sourcing-costs-guide-2026"
  },
  {
    title: "Top 10 Mistakes to Avoid When Sourcing from China",
    excerpt: "Common pitfalls that cost buyers time and money, and practical strategies to avoid them based on our experience managing thousands of sourcing projects.",
    author: "SSourcing Team",
    date: new Date(2026, 4, 5),
    readTime: "7 min read",
    category: "Tips & Advice",
    tags: ["mistakes", "tips", "best practices"],
    slug: "sourcing-china-mistakes-avoid"
  },
  {
    title: "Factory Audit Checklist: What to Look for On-Site",
    excerpt: "Our comprehensive factory audit checklist covering production capacity, quality systems, worker safety, certifications, and red flags to watch for.",
    author: "SSourcing Team",
    date: new Date(2026, 3, 18),
    readTime: "9 min read",
    category: "Supplier Verification",
    tags: ["audit", "checklist", "factory visit", "inspection"],
    slug: "factory-audit-checklist"
  },
  {
    title: "Shipping from China: Freight Options and Documentation",
    excerpt: "Compare sea freight, air freight, rail, and express shipping options. Understand Incoterms, customs documentation, and how to choose the right method.",
    author: "SSourcing Team",
    date: new Date(2026, 3, 1),
    readTime: "8 min read",
    category: "Logistics",
    tags: ["shipping", "freight", "logistics", "customs"],
    slug: "shipping-from-china-options"
  },
  {
    title: "How to Protect Your Intellectual Property When Sourcing in China",
    excerpt: "Practical strategies for protecting your designs, patents, and trade secrets when working with Chinese manufacturers, including NDAs and IP registration.",
    author: "SSourcing Team",
    date: new Date(2026, 2, 10),
    readTime: "7 min read",
    category: "Tips & Advice",
    tags: ["IP protection", "legal", "NDA", "design protection"],
    slug: "protect-ip-china-sourcing"
  },
  {
    title: "Minimum Order Quantities: How to Negotiate with Chinese Suppliers",
    excerpt: "Strategies for negotiating lower MOQs with Chinese factories, especially for startups and small businesses looking to test new products.",
    author: "SSourcing Team",
    date: new Date(2026, 1, 22),
    readTime: "6 min read",
    category: "Sourcing Guide",
    tags: ["MOQ", "negotiation", "small orders", "startups"],
    slug: "negotiate-moq-chinese-suppliers"
  }
]

const categories = ["All", "Sourcing Guide", "Supplier Verification", "Quality Control", "Logistics", "Tips & Advice"]

export default function Blog() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const containerRef = useRef(null)

  const filteredPosts = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [activeCategory])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-surface-300 leading-relaxed">
              Practical advice, industry insights, and step-by-step guides for sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-500 text-white"
                    : "bg-white text-surface-600 border border-surface-200 hover:border-brand-500 hover:text-brand-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-sm border border-surface-100 hover:shadow-md transition-shadow">
                <div
                  data-strk-bg-id={`blog-${post.slug}`}
                  data-strk-bg={`[blog-title-${post.slug}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                  className="h-48 bg-brand-100"
                />
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 text-xs text-surface-400 mb-3">
                    <span className="bg-brand-50 text-brand-600 font-medium px-2 py-0.5 rounded">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{format(post.date, "MMM d, yyyy")}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h2 id={`blog-title-${post.slug}`} className="text-base font-semibold text-brand-900 mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-surface-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-surface-400 flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                    <Link to={`/blog/${post.slug}`} className="text-sm text-brand-500 font-medium hover:text-accent-500 transition-colors flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}