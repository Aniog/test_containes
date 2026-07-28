import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import { blogPosts } from "@/data/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { format, parseISO } from "date-fns"

export default function Blog() {
  const containerRef = useRef(null)
  const [featured, ...rest] = blogPosts

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        breadcrumb="Blog"
        eyebrow="Insights"
        title="Practical sourcing knowledge for importers"
        description="Field-tested guidance on supplier verification, quality control, and shipping - written by our sourcing team, not a content mill."
      />

      <section className="py-16 md:py-24" ref={containerRef}>
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Link
            to="/blog"
            className="group grid grid-cols-1 gap-8 overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2 lg:gap-0"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-muted lg:aspect-auto">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <Badge variant="accent">{featured.category}</Badge>
                <span className="text-xs text-muted-foreground">Featured</span>
              </div>
              <h2 id={featured.titleId} className="mt-4 text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                {featured.title}
              </h2>
              <p id={featured.descId} className="mt-3 text-base leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {format(parseISO(featured.date), "MMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {featured.readTime}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.id}
                to="/blog"
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="default" className="w-fit">
                    {post.category}
                  </Badge>
                  <h3 id={post.titleId} className="mt-3 text-lg font-semibold text-foreground">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {format(parseISO(post.date), "MMM d, yyyy")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-muted p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">
              Have a sourcing question we should write about?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Send it over. We turn real buyer questions into practical guides.
            </p>
            <Button as={Link} to="/contact" variant="primary" size="md" className="mt-5">
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
