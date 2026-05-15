import { useState, useRef } from 'react'
import { Plus, Trash2, Gamepad2, Star, CheckCircle2, ChevronDown, ChevronUp, Send, ImagePlus, X, Upload } from 'lucide-react'
import { submitFavoriteGame, uploadGameImage, buildPublicImageUrl } from '../api/favoriteGame'
import { S3_DOMAIN } from '../config.jsx'

const PLATFORMS = [
  { id: 'steam', label: 'Steam', color: 'bg-[#1b2838] border-[#66c0f4]/50 text-[#66c0f4]' },
  { id: 'epic', label: 'Epic Games', color: 'bg-gray-800 border-white/30 text-white' },
  { id: 'nintendo', label: 'Nintendo', color: 'bg-red-900/60 border-red-400/50 text-red-300' },
  { id: 'playstation', label: 'PlayStation', color: 'bg-blue-900/60 border-blue-400/50 text-blue-300' },
  { id: 'xbox', label: 'Xbox', color: 'bg-green-900/60 border-green-400/50 text-green-300' },
  { id: 'mobile', label: 'Mobile', color: 'bg-purple-900/60 border-purple-400/50 text-purple-300' },
  { id: 'other', label: 'Other', color: 'bg-slate-600 border-slate-400/50 text-white' },
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
  // images: array of { file, previewUrl, uploaded: null | { storageKey, ... } }
  imageFiles: [],
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
                : 'text-slate-400'
            }`}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="ml-2 text-sm text-slate-500 self-center">{value}/5</span>
      )}
    </div>
  )
}

function ImageUploadArea({ imageFiles, onAdd, onRemove }) {
  const inputRef = useRef(null)
  const MAX = 5

  const handleFiles = (e) => {
    const files = Array.from(e.target.files || [])
    const remaining = MAX - imageFiles.length
    const toAdd = files.slice(0, remaining).map(file => ({
      file,
      previewUrl: URL.createObjectURL(file),
      uploaded: null,
    }))
    toAdd.forEach(item => onAdd(item))
    e.target.value = ''
  }

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Screenshots / Cover Images
        <span className="ml-1.5 text-xs text-slate-400 font-normal">up to {MAX} images</span>
      </label>

      {/* Previews */}
      {imageFiles.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {imageFiles.map((item, i) => (
            <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-slate-200 group">
              <img
                src={item.previewUrl}
                alt={`preview-${i}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="absolute top-0.5 right-0.5 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload button */}
      {imageFiles.length < MAX && (
        <>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFiles}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 border border-dashed border-slate-300 hover:border-green-400 rounded-xl text-sm text-slate-500 hover:text-green-600 transition-all hover:bg-green-50"
          >
            <ImagePlus className="w-4 h-4" />
            {imageFiles.length === 0 ? 'Add Images' : 'Add More'}
            <span className="text-xs text-slate-400">({imageFiles.length}/{MAX})</span>
          </button>
        </>
      )}
    </div>
  )
}

function GameCard({ game, index, total, onChange, onRemove, isExpanded, onToggle }) {
  const platform = PLATFORMS.find(p => p.id === game.platform)
  const isValid = game.game_name.trim() && game.platform && game.reason.trim()

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all ${
      isValid ? 'border-green-400/50 bg-green-50' : 'border-slate-200 bg-white'
    }`}>
      {/* Card header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            isValid ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-500'
          }`}>
            {isValid ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
          </div>
          <div className="text-left">
            <p className="text-slate-900 font-semibold text-sm">
              {game.game_name || `Game #${index + 1}`}
            </p>
            <div className="flex items-center gap-2">
              {game.platform && (
                <p className="text-xs text-slate-500">{platform?.label}</p>
              )}
              {game.imageFiles.length > 0 && (
                <span className="text-xs text-green-600 flex items-center gap-0.5">
                  <Upload className="w-3 h-3" />{game.imageFiles.length} img
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {total > 1 && (
            <button
              type="button"
              onClick={e => { e.stopPropagation(); onRemove() }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          {isExpanded
            ? <ChevronUp className="w-4 h-4 text-slate-400" />
            : <ChevronDown className="w-4 h-4 text-slate-400" />
          }
        </div>
      </button>

      {/* Card body */}
      {isExpanded && (
        <div className="px-5 pb-6 space-y-5 border-t border-slate-200 pt-5">
          {/* Game name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Game Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={game.game_name}
              onChange={e => onChange('game_name', e.target.value)}
              placeholder="e.g. The Witcher 3: Wild Hunt"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>

          {/* Platform */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
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
                      : 'bg-slate-100 border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900'
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
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Genre</label>
              <select
                value={game.genre}
                onChange={e => onChange('genre', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-green-500 transition-colors cursor-pointer"
              >
                <option value="">Select genre...</option>
                {GENRES.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Play Time (hours)
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={game.play_time_hours}
                onChange={e => onChange('play_time_hours', e.target.value)}
                placeholder="e.g. 120"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
          </div>

          {/* Last play date */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Play Date</label>
            <input
              type="date"
              value={game.last_play_date}
              onChange={e => onChange('last_play_date', e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Your Rating</label>
            <StarRating value={game.rating} onChange={v => onChange('rating', v)} />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Why do you love this game? <span className="text-red-400">*</span>
            </label>
            <textarea
              value={game.reason}
              onChange={e => onChange('reason', e.target.value)}
              placeholder="Tell us what makes this game special to you..."
              rows={3}
              maxLength={1000}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-green-500 transition-colors resize-none"
            />
            <p className="text-right text-xs text-slate-400 mt-1">{game.reason.length}/1000</p>
          </div>

          {/* Image upload */}
          <ImageUploadArea
            imageFiles={game.imageFiles}
            onAdd={item => onChange('imageFiles', [...game.imageFiles, item])}
            onRemove={i => {
              const updated = game.imageFiles.filter((_, idx) => idx !== i)
              onChange('imageFiles', updated)
            }}
          />

          {/* Would recommend */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onChange('would_recommend', !game.would_recommend)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                game.would_recommend ? 'bg-green-600' : 'bg-slate-300'
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                game.would_recommend ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
            <span className="text-sm text-slate-700">
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
  const [uploadProgress, setUploadProgress] = useState('')

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

  const emailValid = /^\S+@\S+\.\S+$/.test(submitterEmail.trim())
  const canSubmit = submitterName.trim() && emailValid && validGames.length > 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return

    setStatus('submitting')
    setErrorMsg('')
    setUploadProgress('')

    try {
      for (let i = 0; i < validGames.length; i++) {
        const game = validGames[i]

        // Upload images for this game first
        let uploadedImages = []
        if (game.imageFiles.length > 0) {
          setUploadProgress(`Uploading images for game ${i + 1} of ${validGames.length}…`)
          uploadedImages = await Promise.all(
            game.imageFiles.map(item => uploadGameImage(item.file))
          )
        }

        setUploadProgress(`Saving game ${i + 1} of ${validGames.length}…`)

        const payload = {
          submitter_name: submitterName.trim(),
          submitter_email: submitterEmail.trim(),
          game_name: game.game_name.trim(),
          platform: game.platform,
          reason: game.reason.trim(),
          would_recommend: game.would_recommend,
        }
        if (game.play_time_hours !== '') payload.play_time_hours = parseFloat(game.play_time_hours)
        if (game.last_play_date) payload.last_play_date = game.last_play_date
        if (game.rating > 0) payload.rating = game.rating
        if (game.genre) payload.genre = game.genre
        if (uploadedImages.length > 0) payload.images = uploadedImages

        await submitFavoriteGame(payload)
      }

      setSubmittedCount(validGames.length)
      setUploadProgress('')
      setStatus('success')
    } catch (err) {
      console.error('Submission error:', err)
      setUploadProgress('')
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
    setUploadProgress('')
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="bg-white border border-green-300 rounded-3xl p-10 shadow-lg">
          <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Thanks, {submitterName}!</h2>
          <p className="text-slate-500 mb-2">
            You've shared <span className="text-slate-900 font-semibold">{submittedCount} favorite game{submittedCount > 1 ? 's' : ''}</span> with the GamePulse community.
          </p>
          <p className="text-slate-400 text-sm mb-8">Your picks help other gamers discover great titles!</p>
          <button
            onClick={handleReset}
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
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
          <div className="w-10 h-10 bg-green-100 border border-green-300 rounded-xl flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-green-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">Favorite Games</h1>
        </div>
        <p className="text-slate-500">
          Share the games you love with the GamePulse community. You can add multiple games at once!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Submitter info */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <h2 className="text-slate-900 font-semibold text-base flex items-center gap-2">
            <span className="w-6 h-6 bg-green-600 rounded-full text-xs flex items-center justify-center font-bold text-white">1</span>
            About You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={submitterName}
                onChange={e => setSubmitterName(e.target.value)}
                placeholder="e.g. Alex Chen"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={submitterEmail}
                onChange={e => setSubmitterEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none transition-colors ${
                  submitterEmail && !emailValid
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-slate-200 focus:border-green-500'
                }`}
              />
              {submitterEmail && !emailValid && (
                <p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>
              )}
            </div>
          </div>
        </div>

        {/* Games section */}
        <div className="space-y-3">
          <h2 className="text-slate-900 font-semibold text-base flex items-center gap-2">
            <span className="w-6 h-6 bg-green-600 rounded-full text-xs flex items-center justify-center font-bold text-white">2</span>
            Your Favorite Games
            <span className="ml-auto text-xs text-slate-400 font-normal">
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
            className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 hover:border-green-400 rounded-2xl py-4 text-slate-400 hover:text-green-600 text-sm font-medium transition-all hover:bg-green-50"
          >
            <Plus className="w-4 h-4" />
            Add Another Game
          </button>
        </div>

        {/* Upload progress */}
        {uploadProgress && (
          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-green-700 text-sm flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-green-400/40 border-t-green-600 rounded-full animate-spin flex-shrink-0" />
            {uploadProgress}
          </div>
        )}

        {/* Error */}
        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-500 text-sm">
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-400">
            {validGames.length === 0
              ? 'Fill in at least one game to submit'
              : `Ready to submit ${validGames.length} game${validGames.length > 1 ? 's' : ''}`
            }
          </p>
          <button
            type="submit"
            disabled={!canSubmit || status === 'submitting'}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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
