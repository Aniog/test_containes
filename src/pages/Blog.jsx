import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock } from "lucide-react"
import { BLOG_POSTS } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section } from "@/components/shared/Section"
import { format, parseISO } from "date-fns"

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))]

export default function Blog() {
  const [active, setActive] = useState("All")

  const filtered = useMemo(
    () => (active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active)),
    [active],
  )

  const [featured, ...rest] = filtered

  return (
    <>
      <section className="bg-gradient-to-b from-white to-page">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow">Blog & resources</p>
          <h1
            id="blog-h1"
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl"
          >
            Practical guides for buyers sourcing from China
          </h1>
          <p
            id="blog-sub"
            className="mt-4 max-w-2xl text-base text-ink-700 md:text-lg"
          >
            Short, honest articles on the things we see every day on the
            ground: quality control, supplier verification, shipping, OEM and
            the practical side of importing.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const isActive = active === c
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-navy bg-navy text-white"
                      : "border-border-soft bg-white text-ink-700 hover:border-slate-300"
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>

          {featured && (
            <article
              id={`post-${featured.id}`}
              className="card mt-10 grid overflow-hidden lg:grid-cols-2"
            >
              <div className="bg-gradient-to-br from-navy to-navy-soft p-8 text-white lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Featured · {featured.category}
                </p>
                <h2
                  id={`post-${featured.id}-title`}
                  className="mt-3 text-2xl font-semibold md:text-3xl"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm text-white/80 md:text-base">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs text-white/70">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.minutes} min read
                  </span>
                  <span>·</span>
                  <span>{format(parseISO(featured.date), "MMM d, yyyy")}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8 lg:p-10">
                <h3 className="text-lg font-semibold text-ink-900">
                  Why we wrote this
                </h3>
                <p className="text-sm text-ink-700">
                  These notes come from real buyer situations we have handled.
                  The goal is to give you a clearer, calmer view of the topic —
                  so you can ask better questions and avoid the most common
                  mistakes.
                </p>
                <div className="mt-2">
                  <Link to="/contact" className="btn-primary">
                    Discuss with a project manager
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                id={`post-${post.id}`}
                className="card flex flex-col p-6"
              >
                <div className="flex items-center gap-2 text-xs text-ink-500">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-ink-700">
                    {post.category}
                  </span>
                  <span>·</span>
                  <span>{format(parseISO(post.date), "MMM d, yyyy")}</span>
                </div>
                <h3
                  id={`post-${post.id}-title`}
                  className="mt-3 text-lg font-semibold text-ink-900"
                >
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-700">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border-soft pt-3 text-xs text-ink-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.minutes} min read
                  </span>
                  <Link
                    to="/contact"
                    className="font-semibold text-navy hover:text-accent"
                  >
                    Ask us about it →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-ink-500">
              No articles in this category yet.
            </p>
          )}
        </div>
      </Section>

      <CtaBanner
        eyebrow="Have a question we should answer?"
        title="Suggest a topic for the blog"
        subtitle="If there is a sourcing, QC or shipping topic you wish we would cover, send it over. We write what buyers actually need."
        primaryLabel="Suggest a topic"
        primaryTo="/contact"
        secondaryLabel="See our services"
        secondaryTo="/services"
      />
    </>
  )
}
