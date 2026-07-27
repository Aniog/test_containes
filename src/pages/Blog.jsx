import { Link } from "react-router-dom"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import PageHeader from "@/components/layout/PageHeader"
import CTASection from "@/components/sections/CTASection"
import { BLOG_POSTS } from "@/data/site"

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing insights for global buyers"
        description="Field-tested guidance on supplier verification, quality control, and shipping from China — written by our team."
        cta={false}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex w-fit items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
