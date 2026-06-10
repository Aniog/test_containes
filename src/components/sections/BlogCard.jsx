import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'

const BlogCard = ({ slug, title, excerpt, date, category, readTime }) => {
  return (
    <Link to={`/blog/${slug}`} className="block group">
      <Card className="h-full border-slate-200 group-hover:border-slate-300 transition-colors">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="uppercase tracking-widest">{category}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          <h3 className="font-semibold text-lg mb-2 text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">{title}</h3>
          <p className="text-sm text-slate-600 line-clamp-3">{excerpt}</p>
          <div className="mt-4 text-sm text-blue-700 font-medium">Read article →</div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default BlogCard
