import { useEffect } from "react"
import { Link } from "react-router-dom"
import { format, parseISO } from "date-fns"
import { ArrowRight } from "lucide-react"
import PageHero from "@/components/shared/PageHero"
import PageShell from "@/components/shared/PageShell"
import { Container, Section, Badge } from "@/components/ui/primitives"
import { BLOG_POSTS } from "@/data/blog"

export default function Blog() {
  useEffect(() => {
    document.title =
      "Blog | China Sourcing Insights | SSourcing China"
  }, [])

  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Practical notes on China sourcing"
        description="Short, useful articles written by our team — based on the questions buyers ask us every week."
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((p) => (
              <article
                key={p.slug}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/9] bg-slate-100">
                  <img
                    alt={p.imgAlt}
                    data-strk-img-id={p.imgId}
                    data-strk-img="[blog-post-title]"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <Badge tone="amber">{p.category}</Badge>
                    <time dateTime={p.date}>
                      {format(parseISO(p.date), "MMM d, yyyy")}
                    </time>
                    <span>· {p.readTime}</span>
                  </div>
                  <h3
                    id={`blog-post-${p.slug}-title`}
                    className="mt-3 text-xl font-semibold text-slate-900"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      to={`/blog/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-navy-700"
                    >
                      Read article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </PageShell>
  )
}