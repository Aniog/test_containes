import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Loader2, Calendar, User, ArrowRight } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { format, parseISO } from 'date-fns'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Blog = () => {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: response, error } = await client
          .from('BlogPost')
          .select('*')
          .order('createdAt', { ascending: false })

        if (error) throw error
        setPosts(response?.data?.list || [])
      } catch (err) {
        console.error('Failed to fetch posts:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  // Static posts for demonstration/backup
  const staticPosts = [
    {
      id: 'p1',
      title: 'How to Verify a China Supplier: 5 Essential Steps',
      excerpt: 'Learn the difference between a high-quality manufacturer and a trader posing as a factory.',
      category: 'Sourcing Tips',
      author: 'Chen Wei',
      createdAt: '2026-05-10T10:00:00Z',
      slug: 'how-to-verify-china-supplier'
    },
    {
      id: 'p2',
      title: 'Current Shipping Trends in 2026: What Buyers Need to Know',
      excerpt: 'From port delays to container shortages, stay updated on the latest logistics landscape.',
      category: 'Shipping & Logistics',
      author: 'Sarah Johnson',
      createdAt: '2026-06-01T14:30:00Z',
      slug: 'shipping-trends-2026'
    },
    {
      id: 'p3',
      title: 'Why Quality Control is Your Best Investment',
      excerpt: 'Discover how pre-shipment inspections can save your brand reputation and thousands in costs.',
      category: 'Sourcing Tips',
      author: 'Mark Benson',
      createdAt: '2026-06-12T09:15:00Z',
      slug: 'why-qc-is-best-investment'
    }
  ]

  const displayPosts = posts.length > 0 ? posts : staticPosts

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Blog Intro */}
      <section className="bg-slate-900 border-b border-slate-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">SSourcing <span className="text-amber-500">Insights</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Expert guides, industry news, and insider tips on navigating the China supply chain.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-[-40px]">
        {loading ? (
          <div className="py-20 flex justify-center">
            <Loader2 className="h-10 w-10 text-amber-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col group">
                <div className="aspect-[16/9] relative overflow-hidden bg-slate-100">
                  <div 
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    data-strk-bg-id={`post-bg-${post.id}`}
                    data-strk-bg={`[post-title-${post.id}] China sourcing factory business`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category || post.data?.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {format(parseISO(post.createdAt || post.data?.createdAt || new Date().toISOString()), 'MMM dd, yyyy')}</span>
                    <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author || post.data?.author || 'Team SSourcing'}</span>
                  </div>
                  <h2 id={`post-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title || post.data?.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt || post.data?.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      to={`/blog/${post.slug || post.data?.slug}`}
                      className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors"
                    >
                      Read Full Article <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && displayPosts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200 shadow-sm">
            <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900">No blog posts found</h3>
            <p className="text-slate-500 mt-2">Check back soon for latest insights from our sourcing experts.</p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <div className="bg-amber-500 rounded-3xl p-8 md:p-12 text-center text-slate-900 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white/10 rounded-full" />
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">Stay Updated on China Sourcing</h2>
          <p className="text-lg font-medium mb-8 relative z-10">Get the latest industry news and sourcing strategies delivered to your inbox.</p>
          <div className="max-w-md mx-auto relative z-10">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3 rounded-md border-none outline-none focus:ring-2 focus:ring-slate-900 placeholder:text-slate-400 font-medium"
                required
              />
              <button className="bg-slate-900 text-white px-8 py-3 rounded-md font-bold hover:bg-slate-800 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-4 text-slate-800 font-medium italic opacity-70">We respect your privacy. No spam, ever.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
