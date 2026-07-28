import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { format } from "date-fns"
import { ArrowRight, Clock } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import { Section, Container } from "@/components/ui/section"
import { blogPosts } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing knowledge"
        description="Guides and notes on supplier verification, quality control, and shipping from China — written for buyers, not marketers."
      />

      <Section>
        <Container>
          <div ref={containerRef}>
            {/* Featured post */}
            <article className="group grid gap-8 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 lg:grid-cols-2 lg:gap-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">
                    {featured.category}
                  </span>
                  <span>{format(new Date(featured.date), "MMM d, yyyy")}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2
                  id={featured.titleId}
                  className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                >
                  {featured.title}
                </h2>
                <p
                  id={featured.descId}
                  className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {featured.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            {/* Rest */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      alt={post.title}
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[${post.descId}] [${post.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-accent">
                        {post.category}
                      </span>
                      <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
                    </div>
                    <h3
                      id={post.titleId}
                      className="mt-3 text-lg font-bold text-foreground"
                    >
                      {post.title}
                    </h3>
                    <p
                      id={post.descId}
                      className="mt-2 flex-1 text-sm text-muted-foreground"
                    >
                      {post.excerpt}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  )
}
