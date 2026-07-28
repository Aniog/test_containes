import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import strkImgConfig from '@/strk-img-config.json'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getCategoryLabel = (category) => {
  const labels = {
    'sourcing-tips': 'Sourcing Tips',
    'industry-news': 'Industry News',
    'quality-control': 'Quality Control',
    'shipping-logistics': 'Shipping & Logistics',
    'supplier-management': 'Supplier Management',
  }
  return labels[category] || category
}

const getReadTime = (content) => {
  const words = content?.split(/\s+/).length || 0
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

export default function BlogPage() {
  const containerRef = useRef(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data: response, error } = await client
          .from('BlogPost')
          .select('*')
          .eq('status', 'published')
          .order('published_date', { ascending: false })

        if (error) throw error
        const list = response?.data?.list ?? []
        setPosts(list)
      } catch (err) {
        console.error('Failed to fetch blog posts:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [loading])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Blog</span>
            <h1 id="blog-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4">
              Sourcing Insights & Guides
            </h1>
            <p id="blog-page-subtitle" className="text-lg text-slate-300 leading-relaxed">
              Practical advice, industry insights, and step-by-step guides to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-slate-500">Loading articles...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => {
                const fields = post.data || {}
                const postId = post.id
                return (
                  <article key={postId} className="card group overflow-hidden">
                    <div
                      className="aspect-video rounded-t-lg -mx-6 -mt-6 mb-4 bg-slate-100"
                      data-strk-bg-id="blog-bg-item"
                      data-strk-bg="[blog-page-title] [blog-page-subtitle]"
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="600"
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2 py-1 rounded-full">
                        {getCategoryLabel(fields.category)}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {fields.published_date
                          ? new Date(fields.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                          : ''}
                      </span>
                    </div>
                    <h3 id={`blog-title-${postId}`} className="heading-3 mb-2 group-hover:text-blue-800 transition-colors">
                      {fields.title}
                    </h3>
                    <p className="body-text text-sm mb-4">{fields.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" />
                        {getReadTime(fields.content)}
                      </span>
                      <button className="inline-flex items-center text-blue-800 font-medium text-sm hover:text-blue-700">
                        Read more <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                    <span id={`blog-category-${postId}`} className="sr-only">{getCategoryLabel(fields.category)}</span>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="heading-2 mb-4">Stay Updated on China Sourcing</h2>
          <p className="body-text mb-6">
            Get practical sourcing tips, industry updates, and guides delivered to your inbox. No spam, just useful information.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
