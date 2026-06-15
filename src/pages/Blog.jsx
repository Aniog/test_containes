import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current)
  }, [])
  const posts = [
    {
      title: 'Top 5 Manufacturing Hubs in China for 2024',
      excerpt: 'Discover which cities lead the way in electronics, textiles, and heavy machinery, and why location matters for your sourcing strategy.',
      date: 'May 12, 2024',
      category: 'Sourcing Strategy'
    },
    {
      title: 'How to Read a Chinese Business License',
      excerpt: 'Essential tips for verifying your supplier legal status and avoiding common registration pitfalls.',
      date: 'April 28, 2024',
      category: 'Tutorial'
    },
    {
      title: 'Quality Fade: How to Stop It Before It Starts',
      excerpt: 'Learn the warning signs of declining quality and how to implement strict QC protocols for recurring orders.',
      date: 'April 15, 2024',
      category: 'Quality Control'
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">China Sourcing Blog</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Insights, tutorials, and news from the heart of the Chinese manufacturing landscape.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <article key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition group">
                <div className="h-48 bg-slate-100 overflow-hidden relative">
                  <img 
                    data-strk-img-id={`blog-${i}`}
                    data-strk-img={`[${'blog-' + i + '-title'}] china manufacturing export business`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    alt={post.title}
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-sm text-slate-400 mb-2">{post.date}</span>
                  <h3 id={`blog-${i}-title`} className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                  <button className="text-blue-600 font-bold text-sm hover:underline self-start">Read More &rarr;</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
