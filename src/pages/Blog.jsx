import { useEffect, useRef } from "react"
import PageHero from "@/components/shared/PageHero"
import { Section } from "@/components/shared/Section"
import { blogPosts } from "@/data/content"
import CTASection from "@/components/shared/CTASection"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { format, parseISO } from "date-fns"
import { Clock, ArrowRight } from "lucide-react"

export default function Blog() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHero
        breadcrumb="Blog"
        eyebrow="Insights"
        title="Sourcing Insights & Practical Guides"
        subtitle="Practical, no-nonsense guidance on sourcing from China - supplier verification, quality control, shipping, and more."
      />

      <Section className="bg-bg">
        <div ref={ref}>
          {/* Featured post */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border border-line bg-surface overflow-hidden shadow-sm mb-12">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 text-xs text-muted mb-3">
                <span className="rounded-full bg-blue-50 text-primary px-3 py-1 font-semibold">
                  {featured.category}
                </span>
                <span>{format(parseISO(featured.date), "MMM d, yyyy")}</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-ink leading-tight">
                {featured.title}
              </h2>
              <p id={featured.descId} className="mt-3 text-muted leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                </span>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden border border-line bg-surface shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <span className="rounded-full bg-blue-50 text-primary px-2.5 py-1 font-semibold">
                      {post.category}
                    </span>
                    <span>{format(parseISO(post.date), "MMM d, yyyy")}</span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 text-sm text-muted leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Have a sourcing question?"
        subtitle="Our blog covers the basics, but your project is unique. Ask us directly and get a tailored answer."
      />
    </>
  )
}
