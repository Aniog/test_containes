import { useState } from 'react'
import { Plus, Trash2, Gamepad2, Star, CheckCircle2, ChevronDown, ChevronUp, Send } from 'lucide-react'
import { submitFavoriteGame } from '../api/favoriteGame'

const PLATFORMS = [
  { id: 'steam', label: 'Steam', color: 'bg-[#1b2838] border-[#66c0f4]/50 text-[#66c0f4]' },
  { id: 'epic', label: 'Epic Games', color: 'bg-gray-800 border-white/30 text-white' },
  { id: 'nintendo', label: 'Nintendo', color: 'bg-red-900/60 border-red-400/50 text-red-300' },
  { id: 'playstation', label: 'PlayStation', color: 'bg-blue-900/60 border-blue-400/50 text-blue-300' },
  { id: 'xbox', label: 'Xbox', color: 'bg-green-900/60 border-green-400/50 text-green-300' },
  { id: 'mobile', label: 'Mobile', color: 'bg-purple-900/60 border-purple-400/50 text-purple-300' },
  { id: 'other', label: 'Other', color: 'bg-gray-700 border-gray-500/50 text-gray-300' },
]

const GENRES = [
  'RPG', 'FPS', 'Action', 'Adventure', 'Strategy', 'Simulation',
  'Sports', 'Racing', 'Puzzle', 'Horror', 'Platformer', 'Fighting',
  'Roguelike', 'MMORPG', 'Indie', 'Other',
]

const EMPTY_GAME = {
  game_name: '',
  platform: '',
  play_time_hours: '',
  last_play_date: '',
  reason: '',
  rating: 0,
  genre: '',
  would_recommend: true,
}

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            className={`w-7 h-7 transition-colors ${
              star <= (hovered || value)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-600'
            }`}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="ml-2 text-sm text-gray-400 self-center">{value}/5</span>
      )}
    </div>
  )
}

function GameCard({ game, index, total, onChange, onRemove, isExpanded, onToggle }) {
  const platform = PLATFORMS.find(p => p.id === game.platform)
  const isValid = game.game_name.trim() && game.platform && game.reason.trim()

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all ${
      isValid ? 'border-indigo-500/40 bg-indigo-950/20' : 'border-white/10 bg-gray-900'
    }`}>
      {/* Card header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            isValid ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-400'
          }`}>
            {isValid ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm">
              {game.game_name || `Game #${index + 1}`}
            </p>
            {game.platform && (
              <p className="text-xs text-gray-400">{platform?.label}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {total > 1 && (
            <button
              type="button"
              onClick={e => { e.stopPropagation(); onRemove() }}
              className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          {isExpanded
            ? <ChevronUp className="w-4 h-4 text-gray-400" />
            : <ChevronDown className="w-4 h-4 text-gray-400" />
          }
        </div>
      </button>

      {/* Card body */}
      {isExpanded && (
        <div className="px-5 pb-6 space-y-5 border-t border-white/10 pt-5">
          {/* Game name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Game Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={game.game_name}
              onChange={e => onChange('game_name', e.target.value)}
              placeholder="e.g. The Witcher 3: Wild Hunt"
              className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Platform */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Platform <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onChange('platform', p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    game.platform === p.id
                      ? p.color + ' scale-105 shadow-md'
                      : 'bg-gray-800 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Genre + Play time row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Genre</label>
              <select
                value={game.genre}
                onChange={e => onChange('genre', e.target.value)}
                className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
              >
                <option value="">Select genre...</option>
                {GENRES.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Play Time (hours)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={game.play_time_hours}
                onChange={e => onChange('play_time_hours', e.target.value)}
                placeholder="e.g. 120"
                className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          {/* Last play date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Play Date</label>
            <input
              type="date"
              value={game.last_play_date}
              onChange={e => onChange('last_play_date', e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors [color-scheme:dark]"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Rating</label>
            <StarRating value={game.rating} onChange={v => onChange('rating', v)} />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Why do you love this game? <span className="text-red-400">*</span>
            </label>
            <textarea
              value={game.reason}
              onChange={e => onChange('reason', e.target.value)}
              placeholder="Tell us what makes this game special to you..."
              rows={3}
              maxLength={1000}
              className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
            <p className="text-right text-xs text-gray-600 mt-1">{game.reason.length}/1000</p>
          </div>

          {/* Would recommend */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onChange('would_recommend', !game.would_recommend)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                game.would_recommend ? 'bg-indigo-600' : 'bg-gray-700'
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                game.would_recommend ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
            <span className="text-sm text-gray-300">
              I would recommend this game to others
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FavoriteGamePage() {
  const [submitterName, setSubmitterName] = useState('')
  const [submitterEmail, setSubmitterEmail] = useState('')
  const [games, setGames] = useState([{ ...EMPTY_GAME }])
  const [expandedIndex, setExpandedIndex] = useState(0)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const [submittedCount, setSubmittedCount] = useState(0)

  const updateGame = (index, field, value) => {
    setGames(prev => prev.map((g, i) => i === index ? { ...g, [field]: value } : g))
  }

  const addGame = () => {
    setGames(prev => [...prev, { ...EMPTY_GAME }])
    setExpandedIndex(games.length)
  }

  const removeGame = (index) => {
    setGames(prev => prev.filter((_, i) => i !== index))
    setExpandedIndex(Math.max(0, expandedIndex - 1))
  }

  const validGames = games.filter(g => g.game_name.trim() && g.platform && g.reason.trim())
  const canSubmit = submitterName.trim() && validGames.length > 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return

    setStatus('submitting')
    setErrorMsg('')

    try {
      for (const game of validGames) {
        const payload = {
          submitter_name: submitterName.trim(),
          game_name: game.game_name.trim(),
          platform: game.platform,
          reason: game.reason.trim(),
        }
        if (submitterEmail.trim()) payload.submitter_email = submitterEmail.trim()
        if (game.play_time_hours !== '') payload.play_time_hours = parseFloat(game.play_time_hours)
        if (game.last_play_date) payload.last_play_date = game.last_play_date
        if (game.rating > 0) payload.rating = game.rating
        if (game.genre) payload.genre = game.genre
        payload.would_recommend = game.would_recommend

        await submitFavoriteGame(payload)
      }

      setSubmittedCount(validGames.length)
      setStatus('success')
    } catch (err) {
      console.error('Submission error:', err)
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const handleReset = () => {
    setSubmitterName('')
    setSubmitterEmail('')
    setGames([{ ...EMPTY_GAME }])
    setExpandedIndex(0)
    setStatus('idle')
    setErrorMsg('')
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="bg-gray-900 border border-green-500/30 rounded-3xl p-10">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-3">Thanks, {submitterName}!</h2>
          <p className="text-gray-400 mb-2">
            You've shared <span className="text-white font-semibold">{submittedCount} favorite game{submittedCount > 1 ? 's' : ''}</span> with the GamePulse community.
          </p>
          <p className="text-gray-500 text-sm mb-8">Your picks help other gamers discover great titles!</p>
          <button
            onClick={handleReset}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Share More Games
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-indigo-600/30 border border-indigo-500/40 rounded-xl flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-indigo-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white">Favorite Games</h1>
        </div>
        <p className="text-gray-400">
          Share the games you love with the GamePulse community. You can add multiple games at once!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Submitter info */}
        <div className="bg-gray-900 border border-white/10 rounded-2xl p-5 space-y-4">
          <h2 className="text-white font-semibold text-base flex items-center gap-2">
            <span className="w-6 h-6 bg-indigo-600 rounded-full text-xs flex items-center justify-center font-bold">1</span>
            About You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={submitterName}
                onChange={e => setSubmitterName(e.target.value)}
                placeholder="e.g. Alex Chen"
                className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email <span className="text-gray-600 font-normal">(optional)</span>
              </label>
              <input
                type="email"
                value={submitterEmail}
                onChange={e => setSubmitterEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Games section */}
        <div className="space-y-3">
          <h2 className="text-white font-semibold text-base flex items-center gap-2">
            <span className="w-6 h-6 bg-indigo-600 rounded-full text-xs flex items-center justify-center font-bold">2</span>
            Your Favorite Games
            <span className="ml-auto text-xs text-gray-500 font-normal">
              {validGames.length}/{games.length} complete
            </span>
          </h2>

          {games.map((game, index) => (
            <GameCard
              key={index}
              game={game}
              index={index}
              total={games.length}
              onChange={(field, value) => updateGame(index, field, value)}
              onRemove={() => removeGame(index)}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
            />
          ))}

          {/* Add game button */}
          <button
            type="button"
            onClick={addGame}
            className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-white/15 hover:border-indigo-500/50 rounded-2xl py-4 text-gray-500 hover:text-indigo-400 text-sm font-medium transition-all hover:bg-indigo-500/5"
          >
            <Plus className="w-4 h-4" />
            Add Another Game
          </button>
        </div>

        {/* Error */}
        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-gray-600">
            {validGames.length === 0
              ? 'Fill in at least one game to submit'
              : `Ready to submit ${validGames.length} game${validGames.length > 1 ? 's' : ''}`
            }
          </p>
          <button
            type="submit"
            disabled={!canSubmit || status === 'submitting'}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {status === 'submitting' ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Submit {validGames.length > 0 ? `${validGames.length} Game${validGames.length > 1 ? 's' : ''}` : 'Games'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
