import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { format, parseISO } from "date-fns"
import { ArrowRight, Clock } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero"
import { Card } from "@/components/ui/card"
import CtaBanner from "@/components/layout/CtaBanner"
import { blogPosts } from "@/data/content"

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [featured, ...rest] = blogPosts

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Practical guidance for sourcing from China"
        description="Clear, no-nonsense articles on supplier verification, quality control, shipping, and working with Chinese factories."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mb-10 overflow-hidden transition-shadow hover:shadow-md">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 md:aspect-auto">
                <img
                  alt={featured.title}
                  data-strk-img-id={`blog-featured-${featured.imgId}`}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f59e0b]">
                  Featured · {featured.category}
                </span>
                <h2 id={featured.titleId} className="mt-2 text-2xl font-bold text-slate-900">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="mt-3 text-sm leading-relaxed text-slate-600">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                  <span>{format(parseISO(featured.date), "MMM d, yyyy")}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <Link
                  to="/blog"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f2a4a] hover:underline"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-card-${post.imgId}`}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#f59e0b]">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="mt-2 text-lg font-bold text-slate-900">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    <span>{format(parseISO(post.date), "MMM d, yyyy")}</span>
                    <span className="flex items-center gap-1">
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

      <CtaBanner />
    </div>
  )
}
