import React, { useState } from 'react'
import { Plus, Send, CheckCircle, Heart, Gamepad2, AlertCircle } from 'lucide-react'
import GameEntryCard, { createEmptyGame } from '../components/favorites/GameEntryCard'
import { submitFavoriteGames } from '../api/favoriteGameApi'
import { Button } from '../components/ui/Button'
import { cn } from '../lib/utils'

function validate(visitorName, games) {
  const topErrors = {}
  if (!visitorName.trim()) topErrors.visitor_name = 'Your name is required'

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
      <div className="w-20 h-20 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-green-400" />
      </div>
      <h2 className="text-3xl font-black text-white mb-3">Thanks for sharing!</h2>
      <p className="text-gray-400 text-lg mb-2">
        You submitted <span className="text-white font-bold">{count}</span> favorite game{count !== 1 ? 's' : ''}.
      </p>
      <p className="text-gray-500 text-sm mb-8 max-w-sm">
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

    const { topErrors: te, gameErrors: ge } = validate(visitorName, games)
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600/20 border border-indigo-500/40 rounded-2xl mb-5">
            <Heart className="w-8 h-8 text-indigo-400" />
          </div>
          <h1 className="text-4xl font-black text-white mb-3">Share Your Favorite Games</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Tell us about the games you love! Add as many as you like — we want to know what you're playing.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Visitor Info */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-5 bg-indigo-500 rounded-full" />
              <h2 className="text-white font-bold text-base">Your Info</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div data-error={topErrors.visitor_name ? true : undefined}>
                <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
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
                    'w-full bg-gray-800 border rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 transition-colors',
                    topErrors.visitor_name
                      ? 'border-red-500 focus:border-red-400 focus:ring-red-400/30'
                      : 'border-gray-700 focus:border-indigo-500 focus:ring-indigo-500/30'
                  )}
                />
                {topErrors.visitor_name && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />{topErrors.visitor_name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Email <span className="text-gray-600 font-normal normal-case">(optional)</span>
                </label>
                <input
                  type="email"
                  value={visitorEmail}
                  onChange={e => setVisitorEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Game Entries */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-indigo-400" />
                <h2 className="text-white font-bold text-base">
                  Your Favorite Games
                  <span className="ml-2 text-indigo-400 text-sm font-normal">({games.length})</span>
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
            className="w-full border-2 border-dashed border-gray-700 hover:border-indigo-500/60 hover:bg-indigo-500/5 rounded-2xl py-4 flex items-center justify-center gap-2 text-gray-500 hover:text-indigo-400 transition-all duration-200 mb-8 group"
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-900 border border-gray-700 rounded-2xl p-5">
            <div>
              <p className="text-white font-semibold text-sm">
                Ready to share {games.length} game{games.length !== 1 ? 's' : ''}?
              </p>
              <p className="text-gray-500 text-xs mt-0.5">Fields marked with * are required</p>
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
