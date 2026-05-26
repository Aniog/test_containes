import React, { useState } from 'react'
import { Plus, Send, CheckCircle, Heart, Gamepad2, AlertCircle } from 'lucide-react'
import GameEntryCard, { createEmptyGame } from '../components/favorites/GameEntryCard'
import { submitFavoriteGames } from '../api/favoriteGameApi'
import { Button } from '../components/ui/Button'
import { cn } from '../lib/utils'

function validate(visitorName, visitorEmail, games) {
  const topErrors = {}
  if (!visitorName.trim()) topErrors.visitor_name = 'Your name is required'
  if (!visitorEmail.trim()) topErrors.visitor_email = 'Email is required'
  else if (!/^\S+@\S+\.\S+$/.test(visitorEmail.trim())) topErrors.visitor_email = 'Please enter a valid email address'

  const gameErrors = games.map(g => {
    const e = {}
    if (!g.game_name.trim()) e.game_name = 'Game name is required'
    if (!g.platform) e.platform = 'Please select a platform'
    return e
  })

  return { topErrors, gameErrors }
}

function SuccessScreen({ count, onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
      <div className="w-20 h-20 bg-rose-50 border border-rose-200 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-rose-500" />
      </div>
      <h2 className="text-3xl font-black text-slate-900 mb-3">Thanks for sharing!</h2>
      <p className="text-slate-500 text-lg mb-2">
        You submitted <span className="text-slate-900 font-bold">{count}</span> favorite game{count !== 1 ? 's' : ''}.
      </p>
      <p className="text-slate-400 text-sm mb-8 max-w-sm">
        Your picks have been saved. We love hearing what games our community enjoys!
      </p>
      <Button onClick={onReset} size="lg">
        <Heart className="w-5 h-5" />
        Submit More Favorites
      </Button>
    </div>
  )
}

export default function FavoritesPage() {
  const [visitorName, setVisitorName] = useState('')
  const [visitorEmail, setVisitorEmail] = useState('')
  const [games, setGames] = useState([createEmptyGame()])
  const [topErrors, setTopErrors] = useState({})
  const [gameErrors, setGameErrors] = useState([{}])
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [submitError, setSubmitError] = useState('')
  const [submittedCount, setSubmittedCount] = useState(0)

  const addGame = () => {
    setGames(prev => [...prev, createEmptyGame()])
    setGameErrors(prev => [...prev, {}])
  }

  const updateGame = (index, updated) => {
    setGames(prev => prev.map((g, i) => i === index ? updated : g))
    // Clear errors for changed fields
    setGameErrors(prev => prev.map((e, i) => {
      if (i !== index) return e
      const next = { ...e }
      if (updated.game_name) delete next.game_name
      if (updated.platform) delete next.platform
      return next
    }))
  }

  const removeGame = (index) => {
    setGames(prev => prev.filter((_, i) => i !== index))
    setGameErrors(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const { topErrors: te, gameErrors: ge } = validate(visitorName, visitorEmail, games)
    const hasTopErrors = Object.keys(te).length > 0
    const hasGameErrors = ge.some(e => Object.keys(e).length > 0)

    if (hasTopErrors || hasGameErrors) {
      setTopErrors(te)
      setGameErrors(ge)
      // Scroll to first error
      document.querySelector('[data-error]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setStatus('submitting')
    try {
      await submitFavoriteGames(visitorName.trim(), visitorEmail.trim(), games)
      setSubmittedCount(games.length)
      setStatus('success')
    } catch (err) {
      console.error('Submission error:', err)
      setSubmitError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const handleReset = () => {
    setVisitorName('')
    setVisitorEmail('')
    setGames([createEmptyGame()])
    setTopErrors({})
    setGameErrors([{}])
    setStatus('idle')
    setSubmitError('')
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SuccessScreen count={submittedCount} onReset={handleReset} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="py-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-50 border border-rose-200 rounded-2xl mb-5">
            <Heart className="w-8 h-8 text-rose-500" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">Share Your Favorite Games</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Tell us about the games you love! Add as many as you like — we want to know what you're playing.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Visitor Info */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-5 bg-rose-500 rounded-full" />
              <h2 className="text-slate-900 font-bold text-base">Your Info</h2>
            </div>
            <p className="text-slate-400 text-xs mb-5 pl-3">
              Your email groups all your game submissions together so we can see your full list.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div data-error={topErrors.visitor_name ? true : undefined}>
                <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={visitorName}
                  onChange={e => {
                    setVisitorName(e.target.value)
                    if (e.target.value.trim()) setTopErrors(prev => { const n = { ...prev }; delete n.visitor_name; return n })
                  }}
                  placeholder="e.g. Alex Chen"
                  className={cn(
                    'w-full bg-white border rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-colors',
                    topErrors.visitor_name
                      ? 'border-red-500 focus:border-red-400 focus:ring-red-400/30'
                      : 'border-slate-300 focus:border-rose-500 focus:ring-rose-500/20'
                  )}
                />
                {topErrors.visitor_name && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{topErrors.visitor_name}
                  </p>
                )}
              </div>

              <div data-error={topErrors.visitor_email ? true : undefined}>
                <label className="block text-slate-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Email <span className="text-red-400">*</span>
                  <span className="ml-1.5 text-rose-500 font-normal normal-case text-[10px]">— groups your submissions</span>
                </label>
                <input
                  type="email"
                  value={visitorEmail}
                  onChange={e => {
                    setVisitorEmail(e.target.value)
                    if (e.target.value.trim()) setTopErrors(prev => { const n = { ...prev }; delete n.visitor_email; return n })
                  }}
                  placeholder="you@example.com"
                  className={cn(
                    'w-full bg-white border rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-colors',
                    topErrors.visitor_email
                      ? 'border-red-500 focus:border-red-400 focus:ring-red-400/30'
                      : 'border-slate-300 focus:border-rose-500 focus:ring-rose-500/20'
                  )}
                />
                {topErrors.visitor_email && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{topErrors.visitor_email}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Game Entries */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-rose-500" />
                <h2 className="text-slate-900 font-bold text-base">
                  Your Favorite Games
                  <span className="ml-2 text-rose-500 text-sm font-normal">({games.length})</span>
                </h2>
              </div>
            </div>

            {games.map((game, index) => (
              <GameEntryCard
                key={game.id}
                game={game}
                index={index}
                onChange={updated => updateGame(index, updated)}
                onRemove={() => removeGame(index)}
                canRemove={games.length > 1}
                errors={gameErrors[index] || {}}
              />
            ))}
          </div>

          {/* Add Game Button */}
          <button
            type="button"
            onClick={addGame}
            className="w-full w-full border-2 border-dashed border-slate-300 hover:border-rose-400 hover:bg-rose-50/50 rounded-2xl py-4 flex items-center justify-center gap-2 text-slate-400 hover:text-rose-500 transition-all duration-200 mb-8 group"
          >
            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Add Another Game</span>
          </button>

          {/* Submit Error */}
          {status === 'error' && submitError && (
            <div className="flex items-start gap-3 bg-red-900/30 border border-red-700/50 rounded-xl p-4 mb-6">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-300 text-sm">{submitError}</p>
            </div>
          )}

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div>
              <p className="text-slate-900 font-semibold text-sm">
                Ready to share {games.length} game{games.length !== 1 ? 's' : ''}?
              </p>
              <p className="text-slate-400 text-xs mt-0.5">Fields marked with * are required</p>
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto"
            >
              {status === 'submitting' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit My Favorites
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
