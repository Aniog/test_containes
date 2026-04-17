import React, { useState } from 'react'
import { Plus, Trash2, Star, Gamepad2, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../../lib/utils'

const PLATFORMS = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC', 'Mobile', 'Other']
const GENRES = ['Action', 'RPG', 'Strategy', 'Shooter', 'Adventure', 'Racing', 'Sports', 'Simulation', 'Puzzle', 'Horror', 'Other']

const PLATFORM_COLORS = {
  Steam: 'bg-[#1b2838] text-[#c7d5e0] border-[#4c6b22]',
  Epic: 'bg-[#2d2d2d] text-white border-[#0078f2]',
  'Nintendo Switch': 'bg-[#e4000f] text-white border-[#e4000f]',
  PlayStation: 'bg-[#003087] text-white border-[#003087]',
  Xbox: 'bg-[#107c10] text-white border-[#107c10]',
  PC: 'bg-gray-700 text-white border-gray-500',
  Mobile: 'bg-purple-700 text-white border-purple-500',
  Other: 'bg-gray-800 text-gray-300 border-gray-600',
}

export function createEmptyGame() {
  return {
    id: Date.now() + Math.random(),
    game_name: '',
    platform: '',
    genre: '',
    play_time_hours: '',
    last_played_date: '',
    personal_rating: 0,
    reason: '',
    would_recommend: true,
  }
}

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(n === value ? 0 : n)}
          className="p-0.5 transition-transform hover:scale-110"
        >
          <Star
            className={cn(
              'w-6 h-6 transition-colors',
              n <= (hovered || value) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
            )}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="text-yellow-400 text-sm font-medium ml-1">{value}/5</span>
      )}
    </div>
  )
}

export default function GameEntryCard({ game, index, onChange, onRemove, canRemove, errors = {} }) {
  const [expanded, setExpanded] = useState(true)

  const set = (field, val) => onChange({ ...game, [field]: val })
  const hasError = (field) => !!errors[field]

  return (
    <div className={cn(
      'bg-gray-900 border rounded-2xl overflow-hidden transition-all duration-200',
      Object.keys(errors).length > 0 ? 'border-red-500/60' : 'border-gray-700 hover:border-gray-600'
    )}>
      {/* Card Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-gray-800/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600/20 border border-indigo-500/40 rounded-lg flex items-center justify-center">
            <Gamepad2 className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              {game.game_name || `Game #${index + 1}`}
            </p>
            {game.platform && (
              <span className={cn('text-xs px-2 py-0.5 rounded font-medium border mt-0.5 inline-block', PLATFORM_COLORS[game.platform])}>
                {game.platform}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {canRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
              title="Remove this game"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setExpanded(e => !e)}
            className="p-1.5 text-gray-500 hover:text-white hover:bg-gray-700 rounded-lg transition-all"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Card Body */}
      {expanded && (
        <div className="p-5 space-y-5">
          {/* Row 1: Game Name + Platform */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Game Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={game.game_name}
                onChange={e => set('game_name', e.target.value)}
                placeholder="e.g. Elden Ring"
                className={cn(
                  'w-full bg-gray-800 border rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 transition-colors',
                  hasError('game_name')
                    ? 'border-red-500 focus:border-red-400 focus:ring-red-400/30'
                    : 'border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/30'
                )}
              />
              {hasError('game_name') && <p className="text-red-400 text-xs mt-1">{errors.game_name}</p>}
            </div>

            <div>
              <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Platform <span className="text-red-400">*</span>
              </label>
              <select
                value={game.platform}
                onChange={e => set('platform', e.target.value)}
                className={cn(
                  'w-full bg-gray-800 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition-colors',
                  game.platform ? 'text-white' : 'text-gray-500',
                  hasError('platform')
                    ? 'border-red-500 focus:border-red-400 focus:ring-red-400/30'
                    : 'border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/30'
                )}
              >
                <option value="" disabled>Select platform…</option>
                {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              {hasError('platform') && <p className="text-red-400 text-xs mt-1">{errors.platform}</p>}
            </div>
          </div>

          {/* Row 2: Genre + Play Time + Last Played */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5">Genre</label>
              <select
                value={game.genre}
                onChange={e => set('genre', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
              >
                <option value="">Select genre…</option>
                {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Play Time (hours)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={game.play_time_hours}
                onChange={e => set('play_time_hours', e.target.value)}
                placeholder="e.g. 120"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Last Played Date
              </label>
              <input
                type="date"
                value={game.last_played_date}
                max={new Date().toISOString().split('T')[0]}
                onChange={e => set('last_played_date', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-colors [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Row 3: Personal Rating */}
          <div>
            <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
              Personal Rating
            </label>
            <StarPicker value={game.personal_rating} onChange={v => set('personal_rating', v)} />
          </div>

          {/* Row 4: Reason */}
          <div>
            <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
              Why Do You Love This Game?
            </label>
            <textarea
              value={game.reason}
              onChange={e => set('reason', e.target.value)}
              placeholder="Tell us what makes this game special to you…"
              rows={3}
              maxLength={1000}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-colors resize-none"
            />
            <p className="text-gray-600 text-xs mt-1 text-right">{game.reason.length}/1000</p>
          </div>

          {/* Row 5: Would Recommend */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set('would_recommend', !game.would_recommend)}
              className={cn(
                'relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0',
                game.would_recommend ? 'bg-indigo-600' : 'bg-gray-700'
              )}
            >
              <span className={cn(
                'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200',
                game.would_recommend ? 'translate-x-5' : 'translate-x-0'
              )} />
            </button>
            <span className="text-gray-300 text-sm">
              I would recommend this game to others
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
