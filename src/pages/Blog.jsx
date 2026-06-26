import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { format, parseISO } from "date-fns"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import CtaBand from "@/components/sections/CtaBand"
import { BLOG_POSTS } from "@/lib/content"

export default function Blog() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing knowledge from the ground"
        description="Field-tested guidance on supplier verification, quality control, and shipping — written by the team that does the work, not just talks about it."
      />

      <section className="py-20 md:py-28">
        <div ref={ref} className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Featured post */}
          <Card className="mb-12 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/9] overflow-hidden bg-page lg:aspect-auto">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {featured.category}
                </span>
                <h2
                  id={featured.titleId}
                  className="mt-3 text-2xl font-bold text-ink md:text-3xl"
                >
                  {featured.title}
                </h2>
                <p
                  id={featured.descId}
                  className="mt-3 text-base leading-relaxed text-slate-body"
                >
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(parseISO(featured.date), "MMM d, yyyy")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <div className="mt-6">
                  <Button as={Link} to="/blog" variant="outline">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-page">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="mt-2 text-lg font-bold text-ink">
                    {post.title}
                  </h3>
                  <p
                    id={post.descId}
                    className="mt-2 flex-1 text-sm leading-relaxed text-slate-body"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a sourcing question we should write about?"
        description="Send us your question. If it is useful to other buyers, we will turn the answer into a guide."
        buttonText="Get a Free Sourcing Quote"
      />
    </>
  )
}
