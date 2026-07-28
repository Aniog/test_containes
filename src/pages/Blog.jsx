import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "How to Verify a Chinese Factory Before Placing an Order",
    excerpt:
      "Factory verification is one of the most important steps in China sourcing. Learn the key checks every buyer should perform.",
    date: "July 15, 2026",
    category: "Factory Verification",
  },
  {
    title: "Pre-Shipment Inspection: What to Check and When",
    excerpt:
      "A comprehensive guide to pre-shipment inspections, including defect classification, AQL sampling, and reporting standards.",
    date: "July 8, 2026",
    category: "Quality Control",
  },
  {
    title: "Understanding Incoterms When Importing from China",
    excerpt:
      "FOB, CIF, DDP — what do they mean for your cost and risk? A practical breakdown for first-time and experienced importers.",
    date: "June 28, 2026",
    category: "Logistics",
  },
  {
    title: "5 Red Flags to Spot an Unreliable Supplier on Alibaba",
    excerpt:
      "Not every gold supplier is trustworthy. Here are five warning signs that should make you think twice before committing.",
    date: "June 20, 2026",
    category: "Supplier Sourcing",
  },
  {
    title: "How to Structure Payment Terms with Chinese Suppliers",
    excerpt:
      "Protect your deposit and balance payments with the right contract terms, escrow options, and milestone-based releases.",
    date: "June 12, 2026",
    category: "Negotiation",
  },
  {
    title: "The Real Cost of Sourcing from China: Beyond the Unit Price",
    excerpt:
      "Shipping, duties, QC, and communication costs add up. Here is how to budget accurately for your total landed cost.",
    date: "June 5, 2026",
    category: "Cost Management",
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#f0f4f8] via-white to-[#f6f8fb] py-16 md:py-24">
        <div className="container-main text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Blog
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-text-primary">
            Sourcing Insights & Guides
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            Practical tips, industry updates, and how-to guides for buyers sourcing from China.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <span className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-text-primary leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs text-text-muted">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-main text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-text-primary">Need Personalized Advice?</h2>
          <p className="mt-4 text-text-secondary">
            Our team is happy to discuss your specific sourcing challenges.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
