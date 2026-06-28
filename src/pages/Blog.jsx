import { useEffect, useRef } from "react"
import { format, parseISO } from "date-fns"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import { Section, SectionContainer } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import CtaBand from "@/components/shared/CtaBand"
import { BLOG_POSTS } from "@/data/content"

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing insights"
        description="Guides and checklists on supplier verification, quality control, shipping, and working with Chinese factories."
      />

      <Section className="bg-white">
        <SectionContainer>
          <div ref={containerRef}>
            {/* Featured post */}
            <article className="grid gap-8 overflow-hidden rounded-xl border border-slate-200 bg-white lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto">
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
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                  <span className="rounded-full bg-primary/5 px-3 py-1 font-semibold text-primary">
                    {featured.category}
                  </span>
                  <span>{format(parseISO(featured.date), "MMM d, yyyy")}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 id={featured.titleId} className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="mt-3 text-base leading-relaxed text-slate-600">
                  {featured.excerpt}
                </p>
                <div className="mt-6">
                  <Button to="/contact" variant="ghost" className="px-0">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Rest of posts */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
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
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="rounded-full bg-primary/5 px-2.5 py-1 font-semibold text-primary">
                        {post.category}
                      </span>
                    </div>
                    <h3 id={post.titleId} className="mt-3 text-lg font-semibold text-slate-900">
                      {post.title}
                    </h3>
                    <p id={post.descId} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                      <span>{format(parseISO(post.date), "MMM d, yyyy")}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionContainer>
      </Section>

      <CtaBand
        title="Have a sourcing question?"
        description="We're happy to share what we know. Send your question and we'll point you in the right direction."
        buttonText="Contact Us"
      />
    </>
  )
}
