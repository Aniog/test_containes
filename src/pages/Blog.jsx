import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { format, parseISO } from "date-fns"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { BLOG_POSTS } from "@/data/content"
import PageHeader from "@/components/common/PageHeader"
import CtaBanner from "@/components/common/CtaBanner"

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const [featured, ...rest] = BLOG_POSTS
  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Practical guidance for sourcing from China"
        description="Field-tested notes on supplier verification, quality control, and shipping to help you make better buying decisions."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 lg:aspect-auto">
                <img
                  alt={featured.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <span className="inline-block w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
                  {featured.category}
                </span>
                <h2
                  id={featured.titleId}
                  className="mt-4 text-2xl font-bold text-ink md:text-3xl"
                >
                  {featured.title}
                </h2>
                <p
                  id={featured.descId}
                  className="mt-3 text-slate-600"
                >
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(parseISO(featured.date), "MMM d, yyyy")}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <Link
                  to="/blog"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-accent"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block w-fit rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand">
                    {post.category}
                  </span>
                  <h3
                    id={post.titleId}
                    className="mt-3 text-lg font-semibold text-ink"
                  >
                    {post.title}
                  </h3>
                  <p
                    id={post.descId}
                    className="mt-2 flex-1 text-sm leading-relaxed text-slate-600"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {format(parseISO(post.date), "MMM d, yyyy")}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
