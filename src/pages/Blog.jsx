import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Calendar,
  Clock,
  ChevronRight,
  Search,
  Tag,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const blogPosts = [
  {
    title: "How to Verify a Chinese Factory: A Step-by-Step Guide",
    excerpt:
      "Learn the essential steps for verifying Chinese suppliers before placing an order. From license checks to on-site audits, we cover everything you need to know.",
    category: "Supplier Verification",
    date: "June 8, 2026",
    readTime: "8 min read",
    slug: "how-to-verify-chinese-factory",
  },
  {
    title: "Quality Control in China: What Every Importer Should Know",
    excerpt:
      "Understanding quality control processes is critical for successful importing. This guide explains the different inspection stages and how to implement them.",
    category: "Quality Control",
    date: "May 25, 2026",
    readTime: "10 min read",
    slug: "quality-control-china-guide",
  },
  {
    title: "The Complete Guide to Shipping from China to Your Country",
    excerpt:
      "From FOB to DDP, understand your shipping options, estimated costs, transit times, and what documents you need for smooth customs clearance.",
    category: "Logistics",
    date: "May 12, 2026",
    readTime: "12 min read",
    slug: "shipping-from-china-guide",
  },
  {
    title: "How to Negotiate with Chinese Suppliers (Without Offending Anyone)",
    excerpt:
      "Negotiation in China requires cultural awareness. Learn the do's and don'ts of supplier negotiations to get better terms while maintaining good relationships.",
    category: "Sourcing Tips",
    date: "April 28, 2026",
    readTime: "7 min read",
    slug: "negotiate-chinese-suppliers",
  },
  {
    title: "Alibaba vs. Sourcing Agent: Which Is Right for Your Business?",
    excerpt:
      "Comparing the pros and cons of sourcing directly from Alibaba versus working with a professional sourcing agent for different business scenarios.",
    category: "Sourcing Tips",
    date: "April 15, 2026",
    readTime: "9 min read",
    slug: "alibaba-vs-sourcing-agent",
  },
  {
    title: "Understanding Chinese Factory MOQs and How to Negotiate Them",
    excerpt:
      "Minimum order quantities can be a barrier for small businesses. Here's how to find factories with flexible MOQs and negotiate better terms.",
    category: "Sourcing Tips",
    date: "March 30, 2026",
    readTime: "6 min read",
    slug: "understanding-factory-moq",
  },
  {
    title: "Top 10 Mistakes New Importers Make When Sourcing from China",
    excerpt:
      "Avoid these common pitfalls that cost new importers time, money, and frustration. Learn from real experiences of businesses that have been there.",
    category: "Importing Tips",
    date: "March 18, 2026",
    readTime: "8 min read",
    slug: "new-importer-mistakes-china",
  },
  {
    title: "How Much Does It Cost to Source Products from China?",
    excerpt:
      "Breakdown of all costs involved in sourcing from China including product cost, QC fees, shipping, duties, and hidden expenses you need to budget for.",
    category: "Sourcing Tips",
    date: "March 5, 2026",
    readTime: "11 min read",
    slug: "cost-of-sourcing-from-china",
  },
  {
    title: "The Role of Product Sampling in China Sourcing",
    excerpt:
      "Why product samples are essential, how to manage the sampling process, and what to check before approving samples for mass production.",
    category: "Product Development",
    date: "February 20, 2026",
    readTime: "7 min read",
    slug: "product-sampling-china-sourcing",
  },
]

const categories = [
  "All Posts",
  ...new Set(blogPosts.map((p) => p.category)),
]

export default function Blog() {
  const ref = useRef(null)
  const [activeCategory, setActiveCategory] = useState("All Posts")

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const filteredPosts =
    activeCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <div ref={ref}>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Practical advice, guides, and insights on sourcing products from China.
              Written by our team with years of on-the-ground experience.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-bg">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-white text-txt-secondary border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <article key={i} className="card-hover flex flex-col">
                <div className="flex items-center gap-2 text-xs text-txt-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="text-xs font-medium text-accent mb-2 uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="text-lg font-semibold text-primary mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-txt-secondary text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-white py-16">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Get Sourcing Tips Delivered to Your Inbox
          </h2>
          <p className="text-txt-secondary mb-8">
            Subscribe to our newsletter for practical sourcing advice, market insights,
            and new blog posts.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="form-input flex-1"
              required
            />
            <button type="submit" className="btn-primary flex-shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help With Your Sourcing Project?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the right suppliers and manage your
            production in China.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}