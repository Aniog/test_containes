import { PageContainer } from "@/components/shared/PageContainer"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { StockImage } from "@/components/shared/StockImage"

const posts = [
  {
    id: "factory-audit",
    category: "Quality",
    title: "What to Check During a China Factory Audit",
    excerpt:
      "A practical checklist for verifying licenses, production capacity, equipment, and quality systems before you place an order.",
    date: "July 15, 2026",
  },
  {
    id: "incoterms",
    category: "Shipping",
    title: "Incoterms Explained for First-Time China Buyers",
    excerpt:
      "FOB, CIF, DDP, EXW — what they mean, who pays for what, and which one reduces your risk.",
    date: "July 8, 2026",
  },
  {
    id: "negotiate-moq",
    category: "Sourcing",
    title: "How to Negotiate MOQs Without Damaging the Relationship",
    excerpt:
      "Five approaches to lower minimum order quantities while keeping suppliers motivated to work with you.",
    date: "June 28, 2026",
  },
  {
    id: "quality-inspection",
    category: "Quality",
    title: "Pre-Shipment Inspection: AQL Standards and Timing",
    excerpt:
      "When to book an inspection, how AQL sampling works, and what to do if the report shows defects.",
    date: "June 20, 2026",
  },
  {
    id: "payment-safety",
    category: "Risk",
    title: "Safe Payment Practices When Buying from China",
    excerpt:
      "Bank transfers, letters of credit, escrow, and trade assurance — a comparison for overseas buyers.",
    date: "June 12, 2026",
  },
  {
    id: "supplier-response",
    category: "Communication",
    title: "Why Chinese Suppliers Stop Responding (and How to Fix It)",
    excerpt:
      "Common reasons for silence and practical ways to reopen the conversation and move the project forward.",
    date: "June 5, 2026",
  },
]

export default function Blog() {
  return (
    <PageContainer>
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Sourcing Insights
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Practical guides for buying from China with fewer surprises.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => {
              const titleId = `blog-${p.id}-title`
              const excerptId = `blog-${p.id}-excerpt`
              return (
                <Card key={p.id} className="overflow-hidden">
                  <StockImage
                    imgId={`blog-thumb-${p.id}-p7q8r9`}
                    query={`[${excerptId}] [${titleId}]`}
                    ratio="16x9"
                    width="600"
                    alt={p.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{p.category}</Badge>
                      <span className="text-xs text-slate-500">{p.date}</span>
                    </div>
                    <h2 id={titleId} className="mt-3 text-lg font-semibold">
                      {p.title}
                    </h2>
                    <p id={excerptId} className="mt-2 text-sm text-slate-600">
                      {p.excerpt}
                    </p>
                    <button
                      type="button"
                      className="mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      Read article
                    </button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
