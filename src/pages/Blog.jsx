import * as React from "react"
import { Link } from "react-router-dom"
import PageHeader from "@/components/shared/PageHeader"
import SectionTitle from "@/components/shared/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CTASection from "@/components/home/CTASection"

const posts = [
  {
    category: "Supplier Verification",
    title: "How to verify a Chinese manufacturer in 5 steps",
    excerpt: "A practical checklist for confirming that a factory is legitimate, capable, and financially stable before you place an order.",
    date: "June 18, 2026",
    readTime: "6 min read",
  },
  {
    category: "Quality Control",
    title: "AQL sampling explained for importers",
    excerpt: "What AQL means, how inspection levels work, and why pre-shipment inspections are not optional for serious buyers.",
    date: "June 10, 2026",
    readTime: "5 min read",
  },
  {
    category: "Shipping",
    title: "FOB, CIF, or DDP: choosing the right incoterm",
    excerpt: "A clear comparison of common incoterms and when each one makes sense for small and mid-sized importers.",
    date: "May 28, 2026",
    readTime: "7 min read",
  },
  {
    category: "Negotiation",
    title: "How to negotiate MOQs with Chinese suppliers",
    excerpt: "Tactics for reducing minimum order quantities without damaging your supplier relationship or paying a premium.",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    category: "Product Development",
    title: "Prototype to mass production: what to expect",
    excerpt: "The milestones between sample approval and mass production, and how to avoid common delays.",
    date: "April 30, 2026",
    readTime: "6 min read",
  },
  {
    category: "Compliance",
    title: "Product certification basics for EU and US markets",
    excerpt: "An overview of CE, FCC, RoHS, and other common certifications importers need when sourcing from China.",
    date: "April 12, 2026",
    readTime: "8 min read",
  },
]

export default function Blog() {
  return (
    <div>
      <PageHeader
        title="Sourcing insights from China"
        description="Practical guides for buyers who want to source smarter, reduce risk, and control costs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Blog"
            title="Latest articles"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <Card key={idx} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                  <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              More articles coming soon. <Link to="/contact" className="text-brand-600 hover:underline">Subscribe to updates</Link>.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
