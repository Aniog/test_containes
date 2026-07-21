import React from 'react'
import { Link } from 'react-router-dom'

const Journal = () => {
  const posts = [
    { id: 1, title: 'How to Style Gold Jewelry for Work', date: '2026-07-10', readTime: '4 min read' },
    { id: 2, title: 'The Art of Gifting Jewelry', date: '2026-06-28', readTime: '5 min read' },
    { id: 3, title: 'Behind the Design: Golden Sphere Huggies', date: '2026-06-15', readTime: '3 min read' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-3xl sm:text-4xl tracking-wide text-[#1a1a1a]">Journal</h1>
      <p className="mt-2 text-sm text-[#1a1a1a]/70">Stories, guides, and inspiration from the Velmora studio.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <article key={post.id} className="rounded-xl border border-[#f0f0f0] bg-white overflow-hidden transition hover:shadow-lg">
            <div className="aspect-[16/9] bg-[#f5f5f5]">
              <img alt={post.title} className="h-full w-full object-cover" src={`https://placehold.co/800x450/f5f5f5/1a1a1a?text=${encodeURIComponent(post.title)}`} />
            </div>
            <div className="p-5">
              <p className="text-xs text-[#1a1a1a]/60">{post.date} · {post.readTime}</p>
              <h2 className="mt-2 font-serif text-lg tracking-wide text-[#1a1a1a]">{post.title}</h2>
              <Link to={`/journal/${post.id}`} className="mt-3 inline-flex items-center text-sm text-[#c9a96e] hover:underline">
                Read more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Journal
