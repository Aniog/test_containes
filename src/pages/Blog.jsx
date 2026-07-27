import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { blogPosts } from '@/data/siteData'
import PageHero from '@/components/sections/PageHero'

export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing notes for overseas buyers"
        description="Short, clear articles on China supplier selection, quality inspection, product briefs, production follow-up, and shipping coordination."
      />
      <section className="bg-brand-ice py-16 text-brand-navy md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-cyan">
                <CalendarDays className="h-4 w-4" /> {post.category}
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">{post.excerpt}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy">
                Ask about this topic <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
