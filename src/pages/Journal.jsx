import React from 'react'

export default function Journal() {
  const posts = [
    { id: 1, title: 'How to Style Gold Jewelry for Everyday Wear', date: 'June 28, 2026', readTime: '4 min read' },
    { id: 2, title: 'The Art of Gifting Jewelry', date: 'June 15, 2026', readTime: '5 min read' },
    { id: 3, title: 'Behind the Design: Golden Sphere Huggies', date: 'May 30, 2026', readTime: '3 min read' },
  ]

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-3">Journal</p>
          <h1 className="section-title mb-10">Stories & Inspiration</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="group border-b border-brand-border pb-8 last:border-b-0">
                <h2 className="font-serif text-2xl text-brand-text group-hover:text-brand-gold transition-colors">{post.title}</h2>
                <div className="mt-2 flex items-center gap-3 text-xs text-brand-muted">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}