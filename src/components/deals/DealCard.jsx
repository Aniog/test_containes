import React from 'react'
import { ExternalLink, Star, Clock } from 'lucide-react'
import { PlatformBadge } from '../ui/Badge'
import { formatDistanceToNow } from 'date-fns'

export default function DealCard({ deal }) {
  const d = deal.data
  const savings = (d.original_price - d.deal_price).toFixed(2)
  const expiresIn = d.expires_at ? formatDistanceToNow(new Date(d.expires_at), { addSuffix: true }) : null

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-400/60 hover:shadow-md transition-all duration-300 group flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={d.cover_image || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80'}
          alt={d.game_title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-sm font-black px-3 py-1 rounded-xl shadow-lg">
          -{d.discount_percent}%
        </div>
        <div className="absolute top-2 left-2">
          <PlatformBadge platform={d.platform} />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-slate-900 font-semibold text-sm leading-tight line-clamp-2 mb-2">{d.game_title}</h3>

        {d.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-amber-600 text-xs font-medium">{d.rating.toFixed(1)}</span>
          </div>
        )}

        {d.genre && (
          <span className="text-xs text-slate-400 mb-3">{d.genre}</span>
        )}

        <div className="mt-auto space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-emerald-600 font-black text-xl">${d.deal_price?.toFixed(2)}</span>
            <span className="text-slate-400 text-sm line-through">${d.original_price?.toFixed(2)}</span>
            <span className="text-emerald-600 text-xs font-medium">Save ${savings}</span>
          </div>

          {expiresIn && (
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
              <span>Expires {expiresIn}</span>
            </div>
          )}

          {d.deal_url && (
            <a
              href={d.deal_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium py-2 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Get Deal
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
