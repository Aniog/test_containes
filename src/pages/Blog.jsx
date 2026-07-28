import { Link } from "react-router-dom"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"
import { format, parseISO } from "date-fns"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/siteData"

export default function Blog() {
  useDocumentTitle("Sourcing Blog | SSourcing China")

  return (
    <div>
      <section className="bg-slate-50 py-20">
        <div className="container-main text-center">
          <span
            id="blog-hero-subtitle"
            className="text-sm font-semibold uppercase tracking-wide text-primary"
          >
            Blog
          </span>
          <h1 id="blog-hero-title" className="mt-3 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Practical sourcing insights
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Guides, checklists, and market tips for buyers sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden p-0">
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`${post.imgId}-page`}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-hero-subtitle] [blog-hero-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                    {post.category}
                  </div>
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-slate-500">
                    {format(parseISO(post.date), "MMMM d, yyyy")}
                  </p>
                  <CardTitle id={post.titleId} className="mt-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription id={post.descId} className="mt-2 flex-1">
                    {post.excerpt}
                  </CardDescription>
                  <Link
                    to="#"
                    className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    Read article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
