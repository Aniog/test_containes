import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import PageHeader from '@/components/layout/PageHeader'
import CTASection from '@/components/sections/CTASection'
import { Section } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { BLOG_POSTS } from '@/data/content'

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Sourcing insights & guides"
        description="Practical guides on supplier verification, quality control, shipping, and sourcing strategy from China."
      />

      <Section className="bg-white">
        <Link
          to={`/blog/${featured.slug}`}
          className="group grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2 md:p-8"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <img
              alt={featured.title}
              data-strk-img-id={`${featured.imgId}-feat`}
              data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Badge variant="brand">{featured.category}</Badge>
            <h2
              id={featured.titleId}
              className="mt-3 text-2xl font-bold text-slate-900"
            >
              {featured.title}
            </h2>
            <p id={featured.descId} className="mt-3 text-slate-600">
              {featured.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {format(parseISO(featured.date), 'MMM d, yyyy')}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featured.readTime}
              </span>
            </div>
            <span className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-700">
              Read article
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="card group overflow-hidden"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  alt={post.title}
                  data-strk-img-id={`${post.imgId}-card`}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="brand">{post.category}</Badge>
                <h3 id={post.titleId} className="mt-3 text-lg font-bold text-slate-900">
                  {post.title}
                </h3>
                <p id={post.descId} className="mt-2 text-sm text-slate-600">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(parseISO(post.date), 'MMM d, yyyy')}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
