import { Link } from "react-router-dom"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import { BLOG_POSTS } from "@/data/content"
import { PageHeader } from "@/components/shared/PageHeader"
import { StrkImage } from "@/components/shared/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"
import { CtaSection } from "@/components/shared/CtaSection"
import { Badge } from "@/components/ui/badge"

export default function Blog() {
  const ref = useImageLoader([])
  const [featured, ...rest] = BLOG_POSTS
  return (
    <>
      <PageHeader
        bgId="blog-header-bg-3m4n5o"
        eyebrow="Blog"
        title="Sourcing insights and practical guides"
        description="Practical advice on sourcing from China — supplier verification, quality control, negotiation, and shipping."
      />

      <section ref={ref} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Link
            to="/blog"
            className="group grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md lg:grid-cols-2"
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto">
              <StrkImage
                imgId={featured.imgId}
                query={`[${featured.descId}] [${featured.titleId}]`}
                ratio="16x9"
                width={1200}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <Badge variant="accent" className="w-fit">
                Featured
              </Badge>
              <h2
                id={featured.titleId}
                className="mt-4 text-2xl font-bold tracking-tight text-brand-900 md:text-3xl"
              >
                {featured.title}
              </h2>
              <p
                id={featured.descId}
                className="mt-3 text-base leading-relaxed text-slate-600"
              >
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Read article
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.id}
                to="/blog"
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <StrkImage
                    imgId={post.imgId}
                    query={`[${post.descId}] [${post.titleId}]`}
                    ratio="16x9"
                    width={600}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="brand" className="w-fit">
                    {post.category}
                  </Badge>
                  <h3
                    id={post.titleId}
                    className="mt-3 text-lg font-semibold text-brand-900"
                  >
                    {post.title}
                  </h3>
                  <p
                    id={post.descId}
                    className="mt-2 flex-1 text-sm text-slate-600"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
