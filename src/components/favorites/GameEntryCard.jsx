import React, { useState } from 'react'
import { Trash2, Star, Gamepad2, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '../../lib/utils'
import ImageUploader from './ImageUploader'

const PLATFORMS = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC', 'Mobile', 'Other']
const GENRES = ['Action', 'RPG', 'Strategy', 'Shooter', 'Adventure', 'Racing', 'Sports', 'Simulation', 'Puzzle', 'Horror', 'Other']
const PLAY_STATUSES = ['Currently Playing', 'Completed', 'On Hold', 'Dropped', 'Plan to Play']

const PLAY_STATUS_COLORS = {
  'Currently Playing': 'text-rose-600 bg-rose-50 border-rose-300',
  'Completed':         'text-blue-400 bg-blue-400/10 border-blue-500/40',
  'On Hold':           'text-rose-600 bg-amber-50 border-amber-300',
  'Dropped':           'text-red-400 bg-red-400/10 border-red-500/40',
  'Plan to Play':      'text-purple-400 bg-purple-400/10 border-purple-500/40',
}

const PLATFORM_COLORS = {
  Steam: 'bg-[#1b2838] text-[#c7d5e0] border-[#4c6b22]',
  Epic: 'bg-[#2d2d2d] text-white border-[#0078f2]',
  'Nintendo Switch': 'bg-[#e4000f] text-white border-[#e4000f]',
  PlayStation: 'bg-[#003087] text-white border-[#003087]',
  Xbox: 'bg-[#107c10] text-white border-[#107c10]',
  PC: 'bg-slate-700 text-white border-slate-500',
  Mobile: 'bg-purple-700 text-white border-purple-500',
  Other: 'bg-slate-200 text-slate-700 border-slate-300',
}

export function createEmptyGame() {
  return {
    id: Date.now() + Math.random(),
    game_name: '',
    platform: '',
    play_status: '',
    genre: '',
    play_time_hours: '',
    last_played_date: '',
    personal_rating: 0,
    reason: '',
    would_recommend: true,
    game_images: [],
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
              n <= (hovered || value) ? 'text-amber-500 fill-amber-500' : 'text-slate-300'
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
      'bg-white border rounded-2xl overflow-hidden transition-all duration-200 shadow-sm',
      Object.keys(errors).length > 0 ? 'border-red-400' : 'border-slate-200 hover:border-rose-300'
    )}>
      {/* Card Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-slate-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-center">
            <Gamepad2 className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              {game.game_name || `Game #${index + 1}`}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
              {game.platform && (
                <span className={cn('text-xs px-2 py-0.5 rounded font-medium border inline-block', PLATFORM_COLORS[game.platform])}>
                  {game.platform}
                </span>
              )}
              {game.play_status && (
                <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium border inline-block', PLAY_STATUS_COLORS[game.play_status])}>
                  {game.play_status}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {canRemove && (
            <button
              type="button"
              onClick={onRemove}
              className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              title="Remove this game"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setExpanded(e => !e)}
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
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
              <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Game Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={game.game_name}
                onChange={e => set('game_name', e.target.value)}
                placeholder="e.g. Elden Ring"
                className={cn(
                  'w-full bg-white border rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-colors',
                  hasError('game_name')
                    ? 'border-red-500 focus:border-red-400 focus:ring-red-400/30'
                    : 'border-slate-300 focus:border-rose-500 focus:ring-rose-500/20'
                )}
              />
              {hasError('game_name') && <p className="text-red-400 text-xs mt-1">{errors.game_name}</p>}
            </div>

            <div>
              <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Platform <span className="text-red-400">*</span>
              </label>
              <select
                value={game.platform}
                onChange={e => set('platform', e.target.value)}
                className={cn(
                  'w-full bg-white border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition-colors',
                  game.platform ? 'text-slate-900' : 'text-slate-400',
                  hasError('platform')
                    ? 'border-red-500 focus:border-red-400 focus:ring-red-400/30'
                    : 'border-slate-300 focus:border-rose-500 focus:ring-rose-500/20'
                )}
              >
                <option value="" disabled>Select platform…</option>
                {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              {hasError('platform') && <p className="text-red-400 text-xs mt-1">{errors.platform}</p>}
            </div>
          </div>

          {/* Row 2: Play Status + Genre */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Play Status
              </label>
              <select
                value={game.play_status}
                onChange={e => set('play_status', e.target.value)}
                className={cn(
                  'w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-colors',
                  game.play_status ? 'text-slate-900' : 'text-slate-400'
                )}
              >
                <option value="">Select status…</option>
                {PLAY_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">Genre</label>
              <select
                value={game.genre}
                onChange={e => set('genre', e.target.value)}
                className={cn(
                  'w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-colors',
                  game.genre ? 'text-slate-900' : 'text-slate-400'
                )}
              >
                <option value="">Select genre…</option>
                {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>

          {/* Row 3: Play Time + Last Played */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Play Time (hours)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={game.play_time_hours}
                onChange={e => set('play_time_hours', e.target.value)}
                placeholder="e.g. 120"
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                Last Played Date
              </label>
              <input
                type="date"
                value={game.last_played_date}
                max={new Date().toISOString().split('T')[0]}
                onChange={e => set('last_played_date', e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-colors"
              />
            </div>
          </div>

          {/* Row 4: Personal Rating */}
          <div>
            <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
              Personal Rating
            </label>
            <StarPicker value={game.personal_rating} onChange={v => set('personal_rating', v)} />
          </div>

          {/* Row 5: Reason */}
          <div>
            <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
              Why Do You Love This Game?
            </label>
            <textarea
              value={game.reason}
              onChange={e => set('reason', e.target.value)}
              placeholder="Tell us what makes this game special to you…"
              rows={3}
              maxLength={1000}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 transition-colors resize-none"
            />
            <p className="text-slate-400 text-xs mt-1 text-right">{game.reason.length}/1000</p>
          </div>

          {/* Row 6: Would Recommend */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set('would_recommend', !game.would_recommend)}
              className={cn(
                'relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0',
                game.would_recommend ? 'bg-rose-500' : 'bg-slate-300'
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

          {/* Row 7: Image Upload */}
          <div className="border-t border-slate-200 pt-5">
            <ImageUploader
              images={game.game_images}
              onChange={imgs => set('game_images', imgs)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
