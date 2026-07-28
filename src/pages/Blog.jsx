import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import SectionHeader from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import CTABanner from "@/components/CTABanner"
import strkImgConfig from "@/strk-img-config.json"

const posts = [
  {
    title: "How to Verify a Chinese Factory Before Placing an Order",
    excerpt: "A practical checklist for checking licenses, production capacity, quality systems, and export experience.",
    category: "Factory Verification",
    readTime: "6 min read",
    date: "July 15, 2026",
  },
  {
    title: "Understanding AQL Inspection Levels for Product Quality",
    excerpt: "What AQL means, how sampling works, and which inspection level is right for your product category.",
    category: "Quality Control",
    readTime: "5 min read",
    date: "July 8, 2026",
  },
  {
    title: "Incoterms Explained for Buyers Importing from China",
    excerpt: "FOB, CIF, DDP, EXW — learn which shipping term gives you the right balance of cost and control.",
    category: "Shipping",
    readTime: "7 min read",
    date: "June 28, 2026",
  },
  {
    title: "5 Signs a Supplier Quote Is Too Good to Be True",
    excerpt: "Red flags that can signal hidden costs, quality shortcuts, or unreliable capacity.",
    category: "Sourcing Strategy",
    readTime: "4 min read",
    date: "June 20, 2026",
  },
  {
    title: "How We Help Startups Source Their First Product from China",
    excerpt: "A step-by-step look at how small teams can safely move from idea to mass production.",
    category: "Startups",
    readTime: "6 min read",
    date: "June 12, 2026",
  },
  {
    title: "The Real Cost of Sourcing from China: Beyond Unit Price",
    excerpt: "Tooling, samples, inspections, shipping, and duties — what to budget for beyond the product cost.",
    category: "Finance",
    readTime: "5 min read",
    date: "June 5, 2026",
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
          <div className="container-site">
            <SectionHeader
              label="Blog"
              title="Practical sourcing insights"
              description="Guides and tips to help you source smarter, reduce risk, and manage suppliers in China."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Card key={post.title} className="flex flex-col overflow-hidden p-0">
                  <div className="aspect-video bg-slate-100">
                    <img
                      data-strk-img-id={`blog-thumb-${index}`}
                      data-strk-img={`[blog-title-${index}] [blog-excerpt-${index}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-blue-600">
                      <span className="rounded-full bg-blue-100 px-2.5 py-1">{post.category}</span>
                    </div>
                    <h3 id={`blog-title-${index}`} className="text-lg font-bold text-navy-900">{post.title}</h3>
                    <p id={`blog-excerpt-${index}`} className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs text-slate-500">{post.date}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="h-3.5 w-3.5" /> {post.readTime}
                      </span>
                    </div>
                    <Link to="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                      Read article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Need help applying these ideas?"
          description="Talk to our team about your specific product and sourcing challenges."
        />
    </div>
  )
}
