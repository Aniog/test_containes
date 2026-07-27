import { Link } from "react-router-dom"
import { CalendarDays, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    title: "How to Verify a Chinese Manufacturer Before Placing an Order",
    excerpt: "A practical checklist for confirming factory legitimacy, capacity, and export experience before you commit.",
    category: "Factory Verification",
    date: "July 15, 2026",
  },
  {
    title: "Understanding AQL Inspection Levels for Product Quality",
    excerpt: "What AQL means, how sampling works, and which inspection level is right for your product category.",
    category: "Quality Control",
    date: "July 8, 2026",
  },
  {
    title: "Sea Freight vs. Air Freight: Choosing the Right Shipping Method",
    excerpt: "Cost, transit time, and volume considerations to help you decide how to move goods from China.",
    category: "Logistics",
    date: "June 28, 2026",
  },
  {
    title: "Common Payment Terms When Sourcing from China",
    excerpt: "T/T, L/C, D/P, and escrow explained — plus how to structure payments to protect your cash flow.",
    category: "Sourcing Basics",
    date: "June 20, 2026",
  },
  {
    title: "How to Write an Effective Product Specification for Chinese Suppliers",
    excerpt: "Clear specs reduce misunderstandings, samples, and costly rework. Here is what to include.",
    category: "Sourcing Basics",
    date: "June 12, 2026",
  },
  {
    title: "What to Expect During a Factory Audit",
    excerpt: "A walkthrough of the typical factory audit process and the key risk areas we assess on site.",
    category: "Factory Verification",
    date: "June 5, 2026",
  },
]

export default function BlogPage() {
  return (
    <div>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Blog</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Sourcing Insights & Guides
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Practical articles to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="flex flex-col">
                <CardHeader>
                  <Badge variant="secondary">{post.category}</Badge>
                  <CardTitle className="mt-3 text-xl leading-snug">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="flex-1 text-base leading-relaxed">{post.excerpt}</CardDescription>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <Link to="#" className="flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
