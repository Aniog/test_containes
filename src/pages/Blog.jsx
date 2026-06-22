import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const posts = [
    {
      id: 'post-1',
      title: 'How to Avoid Inconsistent Quality When Importing from China',
      excerpt: 'Quality fade is a real issue. Learn the strategies we use to keep factories accountable order after order, year after year.',
      author: 'David Chen',
      date: '2026-06-15T08:00:00Z',
      category: 'Quality Control'
    },
    {
      id: 'post-2',
      title: 'Understanding incoterms: FOB vs EXW vs DDP',
      excerpt: 'A practical guide to choosing the right shipping terms for your next order to minimize unexpected freight costs.',
      author: 'Sarah Lin',
      date: '2026-06-02T10:30:00Z',
      category: 'Shipping & Logistics'
    },
    {
      id: 'post-3',
      title: 'Why Factory Audits Are Crucial for Custom Manufacturing',
      excerpt: 'Don\'t rely on Alibaba badges alone. Discover what a real on-site factory audit looks for before you place a large deposit.',
      author: 'Michael Wang',
      date: '2026-05-20T14:15:00Z',
      category: 'Supplier Verification'
    }
  ]

  return (
    <div ref={containerRef} className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 id="page-title" className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Sourcing Insights
          </h1>
          <p id="page-subtitle" className="text-xl text-stone-600 max-w-2xl mx-auto">
            Practical advice, market updates, and best practices for importing successfully from China.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 aspect-w-16 aspect-h-9 relative min-h-[240px]">
                <img
                  alt={post.title}
                  className="object-cover w-full h-full absolute inset-0"
                  data-strk-img-id={`blog-img-${post.id}`}
                  data-strk-img={`[post-title-${post.id}] ${post.category}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600 mb-2">
                    {post.category}
                  </p>
                  <a href="#" className="block mt-2">
                    <h3 id={`post-title-${post.id}`} className="text-xl font-bold text-stone-900 mb-3 hover:text-blue-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
                  <div className="flex items-center text-sm text-stone-500">
                    <User className="flex-shrink-0 mr-1.5 h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-500">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4" />
                    <time dateTime={post.date}>
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </time>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-stone-300 shadow-sm text-base font-medium rounded text-stone-700 bg-white hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}