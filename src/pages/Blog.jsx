import { useEffect, useRef } from "react"
import useDocumentTitle from "@/hooks/useDocumentTitle"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "@/components/PageHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import CTASection from "@/components/sections/CTASection"

const posts = [
  {
    title: "How to Verify a Chinese Factory Before Placing an Order",
    excerpt:
      "A practical checklist for confirming that a supplier is legitimate, capable, and the right fit for your product.",
    date: "July 15, 2026",
    category: "Factory Verification",
    imgId: "blog-factory-verification-img",
    titleId: "blog-factory-verification-title",
  },
  {
    title: "Understanding AQL Inspections for Imports from China",
    excerpt:
      "What AQL sampling means, why it matters, and how pre-shipment inspections protect your order quality.",
    date: "July 8, 2026",
    category: "Quality Control",
    imgId: "blog-aql-inspections-img",
    titleId: "blog-aql-inspections-title",
  },
  {
    title: "FOB vs. CIF: Choosing the Right Incoterm",
    excerpt:
      "A buyer-friendly guide to common shipping terms and how they affect cost, risk, and control.",
    date: "June 28, 2026",
    category: "Shipping",
    imgId: "blog-incoterms-img",
    titleId: "blog-incoterms-title",
  },
  {
    title: "Reducing Lead Times When Sourcing from China",
    excerpt:
      "Strategies to improve production planning, consolidate suppliers, and avoid peak-season delays.",
    date: "June 20, 2026",
    category: "Operations",
    imgId: "blog-lead-times-img",
    titleId: "blog-lead-times-title",
  },
]

export default function Blog() {
  useDocumentTitle("Blog | SSourcing China")
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <PageHeader
        badge="Blog"
        title="Sourcing insights from China"
        description="Practical guides, checklists, and industry updates for global buyers."
      />

      <section className="section bg-white">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden transition hover:shadow-md">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="mb-2 flex items-center gap-3 text-xs text-slate-500">
                    <span className="font-medium text-accent">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <CardTitle id={post.titleId} className="text-lg">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <span className="text-sm font-semibold text-slate-900 hover:text-accent">
                    Read more →
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
