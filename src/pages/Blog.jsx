import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/CTASection"
import { blogPosts } from "@/data/content"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

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
        title="Sourcing insights & practical guides"
        description="Practical, no-nonsense articles on sourcing from China, supplier verification, quality control, and shipping."
      />

      <section ref={ref} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          {/* Featured post */}
          <Link
            to="/blog"
            className="group mb-12 grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[blog-${featured.id}-title] [blog-${featured.id}-excerpt]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full bg-brand/10 px-3 py-1 font-semibold text-brand">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" /> {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                </span>
              </div>
              <h2
                id={`blog-${featured.id}-title`}
                className="mt-4 text-2xl font-bold text-ink md:text-3xl"
              >
                {featured.title}
              </h2>
              <p
                id={`blog-${featured.id}-excerpt`}
                className="mt-3 text-sm leading-relaxed text-muted md:text-base"
              >
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.id}
                to="/blog"
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.id}-title] [blog-${post.id}-excerpt]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-brand/10 px-2.5 py-1 font-semibold text-brand">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" /> {post.date}
                    </span>
                  </div>
                  <h3
                    id={`blog-${post.id}-title`}
                    className="mt-3 text-lg font-bold text-ink"
                  >
                    {post.title}
                  </h3>
                  <p
                    id={`blog-${post.id}-excerpt`}
                    className="mt-2 flex-1 text-sm leading-relaxed text-muted"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary">Load more articles</Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a sourcing question?"
        description="Our articles cover the basics, but every product is different. Tell us what you're sourcing and we'll give you specific guidance."
      />
    </>
  )
}
