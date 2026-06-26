import { format, parseISO } from "date-fns"
import { PageHeader } from "@/components/sections/PageHeader"
import { Container } from "@/components/ui/primitives"
import { blogPosts } from "@/data/site"
import { useStrkImages } from "@/lib/useStrkImages"
import CtaSection from "@/components/sections/CtaSection"

export default function Blog() {
  const ref = useStrkImages([])

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing insights"
        description="Guides and field notes on supplier verification, quality control, and shipping from China — written for buyers, not marketers."
      />

      <section ref={ref} className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-56 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>{format(parseISO(post.date), "MMM d, yyyy")}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 id={post.titleId} className="mt-3 text-xl font-bold text-slate-900">{post.title}</h2>
                  <p id={post.descId} className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="mt-4 inline-flex w-fit items-center text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Read article
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  )
}
