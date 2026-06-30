import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'

export default function Journal() {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering: How to Style Your Jewelry',
      excerpt: 'Master the art of layering delicate pieces for a look that\'s uniquely yours.',
      date: '2026-06-15',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    },
    {
      id: 2,
      title: 'Behind the Scenes: Our London Design Studio',
      excerpt: 'A glimpse into the creative process behind our latest collection.',
      date: '2026-06-08',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    },
    {
      id: 3,
      title: 'Jewelry Care 101: Keeping Your Pieces Beautiful',
      excerpt: 'Simple tips to maintain the brilliance of your Velmora jewelry for years.',
      date: '2026-05-28',
      image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&q=80',
    },
  ]

  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide mb-3">Journal</h1>
          <p className="text-sm text-gray-600">Stories, style tips, and behind-the-scenes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>
                <h2 className="font-serif text-lg group-hover:text-[#c9a96e] transition-colors">{article.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
