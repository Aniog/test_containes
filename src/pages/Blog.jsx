import { useEffect, useRef } from "react"
import { format, parseISO } from "date-fns"
import { Link } from "react-router-dom"
import { ArrowRight, Clock } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { blogPosts } from "@/data/blog"
import PageHeader from "@/components/shared/PageHeader"
import { Container } from "@/components/shared/Section"
import CtaBanner from "@/components/shared/CtaBanner"

export default function Blog() {
  const ref = useRef(null)
  const [featured, ...rest] = blogPosts

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing insights"
        description="Guides and checklists on supplier verification, quality control, and shipping — written for buyers, not for marketing."
      />

      <section ref={ref} className="py-16 md:py-24 bg-bg">
        <Container>
          {/* Featured post */}
          <Link
            to="/blog"
            className="group grid gap-8 lg:grid-cols-2 lg:items-center rounded-2xl border border-border bg-surface p-6 md:p-8 shadow-card transition hover:shadow-lift"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-light px-3 py-1 font-semibold text-brand">
                  {featured.category}
                </span>
                <span className="text-slate-ink">
                  {format(parseISO(featured.date), "MMM d, yyyy")}
                </span>
              </div>
              <h2 id={featured.titleId} className="mt-4 text-2xl md:text-3xl font-bold text-ink leading-snug">
                {featured.title}
              </h2>
              <p id={featured.descId} className="mt-3 text-slate-ink leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read article
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Rest */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.id}
                to="/blog"
                className="group overflow-hidden rounded-xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-brand-light px-3 py-1 font-semibold text-brand">
                      {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="mt-3 text-lg font-bold text-ink leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 text-sm text-slate-ink leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-ink">
                    <span>{format(parseISO(post.date), "MMM d, yyyy")}</span>
                    <span aria-hidden>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Have a sourcing question we should write about?"
        description="Send us your question and we may cover it in a future guide. Or get a free quote for your current project."
        secondaryLabel="View services"
        secondaryTo="/services"
      />
    </>
  )
}
