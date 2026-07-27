import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { format, parseISO } from 'date-fns'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .from('BlogPost')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .then(({ data: response, error }) => {
        if (error) {
          console.error('Failed to load blog posts', error)
        } else {
          setPosts(response?.data?.list ?? [])
        }
        setLoading(false)
      })
  }, [])

  const formatDate = (dateStr) => {
    try {
      return format(parseISO(dateStr), 'MMMM d, yyyy')
    } catch {
      return dateStr
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary">
        <div className="container-main py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Blog</span>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
              Insights on China Sourcing
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Practical guides, industry updates, and lessons from over a decade of sourcing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white">
        <div className="container-main">
          {loading ? (
            <div className="py-12 text-center text-slate-500">Loading articles...</div>
          ) : posts.length === 0 ? (
            <div className="py-12 text-center text-slate-500">No articles published yet.</div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const d = post.data || {}
                return (
                  <article
                    key={post.id}
                    className="flex flex-col overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1 rounded bg-surface px-2 py-0.5 font-medium text-primary">
                          <Tag className="h-3 w-3" />
                          {d.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(d.published_at)}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold leading-snug">
                        {d.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                        {d.excerpt}
                      </p>
                      <div className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-400">
                        By {d.author}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface">
        <div className="container-main py-16 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Need Personalized Sourcing Advice?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Our blog covers general guidance. For advice tailored to your product and market, talk to our team.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="btn-primary gap-2">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
