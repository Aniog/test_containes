import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, User } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { formatDistanceToNow } from 'date-fns'

const categoryColors = {
  News: 'default',
  Review: 'warning',
  Guide: 'success',
  Feature: 'secondary',
  Opinion: 'outline',
  Deal: 'danger',
}

export default function ArticleCard({ article, featured = false }) {
  const d = article.data
  const timeAgo = d.published_at ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true }) : ''

  if (featured) {
    return (
      <Link to={`/articles/${article.id}`} className="group block">
        <div className="relative rounded-2xl overflow-hidden h-80 bg-slate-100">
          <img
            src={d.cover_image || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80'}
            alt={d.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant={categoryColors[d.category] || 'default'}>{d.category}</Badge>
              {d.platform_tags?.slice(0, 2).map(p => (
                <Badge key={p} variant="secondary">{p}</Badge>
              ))}
            </div>
            <h2 className="text-white font-bold text-xl leading-tight group-hover:text-sky-300 transition-colors line-clamp-2">
              {d.title}
            </h2>
            <div className="flex items-center gap-4 mt-3 text-slate-300 text-sm">
              {d.author && <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{d.author}</span>}
              {d.read_time && <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{d.read_time} min read</span>}
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/articles/${article.id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-sky-400/60 hover:shadow-md transition-all duration-300 flex flex-col h-full">
        <div className="relative overflow-hidden">
          <img
            src={d.cover_image || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80'}
            alt={d.title}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2">
            <Badge variant={categoryColors[d.category] || 'default'}>{d.category}</Badge>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-slate-900 font-semibold text-sm leading-tight group-hover:text-sky-600 transition-colors line-clamp-2 mb-2">
            {d.title}
          </h3>
          <p className="text-slate-500 text-xs line-clamp-3 mb-3 flex-1">{d.excerpt}</p>
          <div className="flex items-center gap-3 text-slate-400 text-xs mt-auto">
            {d.author && <span className="flex items-center gap-1"><User className="w-3 h-3" />{d.author}</span>}
            {d.read_time && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{d.read_time} min</span>}
            <span className="ml-auto">{timeAgo}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
