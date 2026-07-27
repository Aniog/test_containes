import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock, Search } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Badge from "@/components/ui/Badge"
import PageHero from "@/components/shared/PageHero"
import { BLOG_POSTS } from "@/data/site"
import { cn } from "@/lib/utils"
import useStrkImages from "@/hooks/useStrkImages"

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))]

const formatDate = (iso) => {
  const d = new Date(iso)
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

const Blog = () => {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")
  const ref = useStrkImages([category, query])

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchCat = category === "All" || p.category === category
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [category, query])

  const featured = BLOG_POSTS[0]

  return (
    <>
      <PageHero
        id="blog"
        eyebrow="Blog & resources"
        title="Practical guides for buyers sourcing from China"
        subtitle="Templates, checklists and field notes from 12+ years on the ground. No fluff, no clickbait."
      />

      {/* Featured */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <article
            ref={ref}
            className="grid lg:grid-cols-12 gap-0 rounded-2xl border border-line bg-white overflow-hidden"
          >
            <div
              className="lg:col-span-6 aspect-[16/10] lg:aspect-auto bg-[#EDF1F7] bg-cover bg-center"
              data-strk-bg-id={`blog-feat-${featured.id}-bg-1b2c3d`}
              data-strk-bg={`[blog-feat-${featured.id}-excerpt] [blog-feat-${featured.id}-title]`}
              data-strk-bg-ratio="16x10"
              data-strk-bg-width="1200"
            />
            <div className="lg:col-span-6 p-7 md:p-10 flex flex-col justify-center">
              <Badge variant="gold">Featured</Badge>
              <div className="mt-3 text-xs text-ink-muted font-semibold uppercase tracking-wider">
                {featured.category}
              </div>
              <h2
                id={`blog-feat-${featured.id}-title`}
                className="mt-2 text-2xl md:text-3xl font-bold text-ink leading-tight tracking-tight"
              >
                {featured.title}
              </h2>
              <p
                id={`blog-feat-${featured.id}-excerpt`}
                className="mt-4 text-base text-ink-subtle leading-relaxed"
              >
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-ink-muted">
                <span>{formatDate(featured.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <Link
                to="/blog"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2545] hover:text-[#133B6F] w-fit"
              >
                Read article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </Container>
      </section>

      {/* List */}
      <section className="py-12 md:py-20 bg-[#F4F6F9]">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <SectionHeader
              eyebrow="All articles"
              title="Filter by category or search by keyword"
              subtitle=""
            />
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted pointer-events-none" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-line rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2545]/30 focus:border-[#0B2545]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold border transition-colors",
                  category === c
                    ? "bg-[#0B2545] text-white border-[#0B2545]"
                    : "bg-white text-ink-subtle border-line hover:border-[#0B2545]/30"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white border border-line rounded-xl">
              <p className="text-ink-subtle">No articles match your search.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="rounded-xl border border-line bg-white overflow-hidden flex flex-col hover:shadow-card-hover transition-shadow"
                >
                  <div
                    className="aspect-[16/10] w-full bg-[#EDF1F7] bg-cover bg-center"
                    data-strk-bg-id={`blog-${p.id}-bg-${p.id}bg`}
                    data-strk-bg={`[blog-${p.id}-excerpt] [blog-${p.id}-title]`}
                    data-strk-bg-ratio="16x10"
                    data-strk-bg-width="600"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-ink-muted mb-3">
                      <span className="font-semibold uppercase tracking-wider text-[#0B2545]">
                        {p.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {p.readTime}
                      </span>
                    </div>
                    <h3
                      id={`blog-${p.id}-title`}
                      className="text-lg font-bold text-ink mb-2 leading-snug"
                    >
                      {p.title}
                    </h3>
                    <p
                      id={`blog-${p.id}-excerpt`}
                      className="text-sm text-ink-subtle leading-relaxed flex-1"
                    >
                      {p.excerpt}
                    </p>
                    <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
                      <span className="text-xs text-ink-muted">
                        {formatDate(p.date)}
                      </span>
                      <Link
                        to="/blog"
                        className="text-xs font-semibold text-[#0B2545] hover:text-[#133B6F] inline-flex items-center gap-1"
                      >
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

export default Blog
