import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "../components/shared/PageHeader"
import { blogPosts } from "../data/siteData"

const formatDate = (iso) => {
  const d = new Date(iso)
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

export default function Blog() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides for B2B buyers"
        description="Field notes from sourcing in China — supplier verification, quality control, logistics and negotiation."
      />

      <section ref={ref} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="aspect-[16/9] h-full w-full overflow-hidden bg-brand-soft lg:aspect-auto">
                  <img
                    alt={featured.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`blog-featured-${featured.id}-img`}
                    data-strk-img={`[blog-featured-excerpt] [blog-featured-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10 lg:col-span-6">
                <span className="inline-flex w-max items-center rounded-full bg-brand-accent/10 px-2.5 py-1 text-xs font-semibold text-brand-accent">
                  Featured · {featured.category}
                </span>
                <h2
                  id="blog-featured-title"
                  className="mt-4 text-2xl font-bold tracking-tight text-brand-ink md:text-3xl"
                >
                  {featured.title}
                </h2>
                <p
                  id="blog-featured-excerpt"
                  className="mt-3 text-base leading-relaxed text-brand-body"
                >
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-brand-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-6 inline-flex w-max items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
                >
                  Read article
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md"
              >
                <div className="aspect-[3/2] w-full overflow-hidden bg-brand-soft">
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-accent">
                    {post.category}
                  </span>
                  <h3
                    id={`blog-${post.id}-title`}
                    className="mt-3 text-base font-semibold text-brand-ink md:text-lg"
                  >
                    {post.title}
                  </h3>
                  <p
                    id={`blog-${post.id}-excerpt`}
                    className="mt-2 text-sm leading-relaxed text-brand-body"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-brand-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-line bg-brand-soft p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="text-xl font-semibold text-brand-ink md:text-2xl">
                Have a specific sourcing question?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-body">
                Skip the research and ask our team directly.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent-dark"
            >
              Contact our team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
