import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StrkImageLoader from "@/components/shared/StrkImageLoader"

const posts = [
  {
    category: "Sourcing Guide",
    title: "How to Verify a Chinese Manufacturer in 5 Steps",
    excerpt:
      "A practical checklist for checking business licenses, export records, factory capacity, and references before you pay.",
    date: "July 15, 2026",
    readTime: "6 min read",
  },
  {
    category: "Quality Control",
    title: "Pre-Shipment Inspection: What to Check Before Goods Leave China",
    excerpt:
      "Learn which product attributes, packaging details, and documentation to inspect before approving shipment.",
    date: "July 8, 2026",
    readTime: "5 min read",
  },
  {
    category: "Shipping",
    title: "Incoterms Explained for First-Time China Buyers",
    excerpt:
      "FOB, CIF, EXW, DDP — understand who pays for what and where risk transfers during international shipping.",
    date: "June 28, 2026",
    readTime: "7 min read",
  },
  {
    category: "Negotiation",
    title: "How to Negotiate MOQ and Payment Terms with Chinese Suppliers",
    excerpt:
      "Strategies for lowering minimum order quantities and structuring milestone payments to reduce risk.",
    date: "June 20, 2026",
    readTime: "5 min read",
  },
  {
    category: "Industry Insights",
    title: "Top Manufacturing Regions in China and What They Produce",
    excerpt:
      "A region-by-region breakdown of China's manufacturing clusters, from Shenzhen electronics to Ningbo hardware.",
    date: "June 12, 2026",
    readTime: "8 min read",
  },
  {
    category: "Compliance",
    title: "Product Certifications: CE, FCC, RoHS, and REACH for China Imports",
    excerpt:
      "Which certifications your market may require and how to confirm a supplier can deliver compliant products.",
    date: "June 5, 2026",
    readTime: "6 min read",
  },
]

export default function Blog() {
  return (
    <StrkImageLoader>
      <div className="bg-white">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                Sourcing Insights
              </h1>
              <p className="mt-4 text-lg text-muted">
                Practical guides, checklists, and industry updates for buyers sourcing from China.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lift">
                  <CardHeader>
                    <Badge variant="secondary">{post.category}</Badge>
                    <CardTitle className="mt-3 text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </StrkImageLoader>
  )
}
