import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section, Container } from "@/components/ui/Section"
import { BLOG_POSTS } from "@/data/site"
import { Clock } from "lucide-react"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const formatDate = (iso) => {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing insights"
        description="Clear, practical guidance on supplier verification, quality control, production, and shipping from China — written for buyers, not for hype."
      />

      <Section className="bg-white">
        <Container>
          <article className="group grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
            <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-[#1B6CA8]/10 px-3 py-1 font-semibold text-[#1B6CA8]">
                  {featured.category}
                </span>
                <span className="text-slate-500">
                  {formatDate(featured.date)}
                </span>
              </div>
              <h2 id={featured.titleId} className="mt-4 text-2xl font-bold text-[#0B2545]">
                {featured.title}
              </h2>
              <p id={featured.descId} className="mt-3 text-base leading-relaxed text-slate-600">
                {featured.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-400">
                Coming soon
              </span>
            </div>
          </article>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src={PLACEHOLDER}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-[#1B6CA8]/10 px-2.5 py-1 font-semibold text-[#1B6CA8]">
                      {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="mt-3 text-lg font-bold text-[#0B2545]">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="Have a sourcing question we should write about?"
        description="Send us your question. If it's useful to other buyers, we may cover it in a future article — and we'll answer you directly in the meantime."
      />
    </>
  )
}
