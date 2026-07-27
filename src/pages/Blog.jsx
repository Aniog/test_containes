import { useEffect, useRef, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { format, parseISO } from "date-fns"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { blogPosts } from "@/data/content"

const categories = ["All", "Sourcing", "Quality", "Shipping", "Logistics", "Compliance"]

export default function Blog() {
  const [filter, setFilter] = useState("All")
  const [query, setQuery] = useState("")

  const posts = useMemo(() => {
    return blogPosts
      .filter((p) => filter === "All" || p.category === filter)
      .filter(
        (p) =>
          !query ||
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase())
      )
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [filter, query])

  return (
    <>
      <Section background="light" className="pt-12 md:pt-20" id="top">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Blog
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-navy-600 tracking-tight">
            Practical guides for sourcing from China
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Plain-language guides and how-tos for overseas buyers — no
            marketing fluff, just what we have learned in the field.
          </p>
        </div>
      </Section>

      <Section background="white" className="pt-0">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors " +
                  (filter === c
                    ? "border-navy-600 bg-navy-600 text-white"
                    : "border-slate-300 bg-white text-slate-600 hover:border-slate-400")
                }
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts"
              className="block w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-navy-600 focus:outline-none focus:ring-2 focus:ring-navy-600/20"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-cardHover transition-shadow"
            >
              <div className="flex-1 p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-navy-50 px-2.5 py-0.5 font-semibold text-navy-600">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(parseISO(post.date), "MMM d, yyyy")}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-navy-600 leading-snug group-hover:text-accent-500">
                  <Link to={`/blog#${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 px-6 py-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                <Link
                  to={`/blog#${post.slug}`}
                  className="font-semibold text-navy-600 hover:text-accent-500 inline-flex items-center gap-1"
                >
                  Read
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-10 text-center">
            <p className="text-base text-slate-600">
              No posts match your search. Try a different keyword.
            </p>
          </div>
        )}
      </Section>

      <Section background="light" id="all-posts">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-600 tracking-tight">
            All posts
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Full content for each guide.
          </p>
        </div>
        <div className="mt-10 space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              id={post.slug}
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-card"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-navy-50 px-2.5 py-0.5 font-semibold text-navy-600">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {format(parseISO(post.date), "MMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-navy-600 tracking-tight">
                {post.title}
              </h3>
              <p className="mt-2 text-base text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed">
                {post.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="navy">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Have a question we haven't covered?
            </h2>
            <p className="mt-3 text-lg text-slate-200 leading-relaxed max-w-2xl">
              Send us your brief and we will get back with a tailored plan.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
