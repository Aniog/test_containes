import React, { useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Trash2, Save, User, Mail, Gamepad2, Clock, Calendar, Star, Heart, AlertCircle, CheckCircle } from 'lucide-react'
import { formatPayload } from '@/lib/utils'

const FavoriteGameForm = () => {
  const [visitorInfo, setVisitorInfo] = useState({
    visitor_name: '',
    visitor_email: ''
  })
  
  const [games, setGames] = useState([{
    id: Date.now(),
    game_name: '',
    play_time: '',
    platform: '',
    reason: '',
    last_play_date: '',
    rating: '',
    genre: '',
    would_recommend: true,
    favorite_aspect: ''
  }])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState('')

  const platforms = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC', 'Mobile', 'Other']
  const favoriteAspects = ['Gameplay', 'Story', 'Graphics', 'Music', 'Multiplayer', 'Characters', 'World Building', 'Other']

  const addGame = () => {
    setGames([...games, {
      id: Date.now(),
      game_name: '',
      play_time: '',
      platform: '',
      reason: '',
      last_play_date: '',
      rating: '',
      genre: '',
      would_recommend: true,
      favorite_aspect: ''
    }])
  }

  const removeGame = (id) => {
    if (games.length > 1) {
      setGames(games.filter(game => game.id !== id))
    }
  }

  const updateGame = (id, field, value) => {
    setGames(games.map(game => 
      game.id === id ? { ...game, [field]: value } : game
    ))
  }

  const updateVisitorInfo = (field, value) => {
    setVisitorInfo(prev => ({ ...prev, [field]: value }))
  }

  const validateForm = () => {
    if (!visitorInfo.visitor_name.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('Please enter your name')
      return false
    }

    for (let game of games) {
      if (!game.game_name.trim() || !game.play_time || !game.platform || !game.reason.trim() || !game.last_play_date) {
        setSubmitStatus('error')
        setSubmitMessage('Please fill in all required fields for each game')
        return false
      }
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Submit each game as a separate entry
      const submissions = games.map(game => ({
        ...visitorInfo,
        ...game,
        play_time: parseInt(game.play_time),
        rating: game.rating ? parseInt(game.rating) : null,
        would_recommend: game.would_recommend
      }))

      for (let submission of submissions) {
        const formattedPayload = formatPayload(submission)
        
        const { data: responseData, error } = await supabase
          .from('FavoriteGame')
          .insert(formattedPayload)
          .select()

        if (error) throw error
      }

      setSubmitStatus('success')
      setSubmitMessage(`Successfully submitted ${games.length} favorite game${games.length > 1 ? 's' : ''}!`)
      
      // Reset form
      setVisitorInfo({ visitor_name: '', visitor_email: '' })
      setGames([{
        id: Date.now(),
        game_name: '',
        play_time: '',
        platform: '',
        reason: '',
        last_play_date: '',
        rating: '',
        genre: '',
        would_recommend: true,
        favorite_aspect: ''
      }])

    } catch (err) {
      console.error('Failed to submit favorite games:', err)
      setSubmitStatus('error')
      setSubmitMessage('Failed to submit your favorite games. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Share Your Favorite Games</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us about the games you love! Share your gaming experiences and help other gamers discover amazing titles.
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
            submitStatus === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <span>{submitMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Visitor Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Your Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={visitorInfo.visitor_name}
                  onChange={(e) => updateVisitorInfo('visitor_name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={visitorInfo.visitor_email}
                  onChange={(e) => updateVisitorInfo('visitor_email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Games Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Gamepad2 className="h-5 w-5 mr-2" />
                Your Favorite Games ({games.length})
              </h2>
              <button
                type="button"
                onClick={addGame}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Add Game</span>
              </button>
            </div>

            <div className="space-y-6">
              {games.map((game, index) => (
                <div key={game.id} className="border border-gray-200 rounded-lg p-6 relative">
                  {/* Remove Button */}
                  {games.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeGame(game.id)}
                      className="absolute top-4 right-4 text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}

                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Game #{index + 1}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Game Name */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Game Name *
                      </label>
                      <input
                        type="text"
                        value={game.game_name}
                        onChange={(e) => updateGame(game.id, 'game_name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter game name"
                        required
                      />
                    </div>

                    {/* Platform */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Platform *
                      </label>
                      <select
                        value={game.platform}
                        onChange={(e) => updateGame(game.id, 'platform', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select platform</option>
                        {platforms.map(platform => (
                          <option key={platform} value={platform}>{platform}</option>
                        ))}
                      </select>
                    </div>

                    {/* Play Time */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Play Time (hours) *
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={game.play_time}
                        onChange={(e) => updateGame(game.id, 'play_time', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Hours played"
                        required
                      />
                    </div>

                    {/* Last Play Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Last Play Date *
                      </label>
                      <input
                        type="date"
                        value={game.last_play_date}
                        onChange={(e) => updateGame(game.id, 'last_play_date', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Star className="inline h-4 w-4 mr-1" />
                        Your Rating (1-10)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={game.rating}
                        onChange={(e) => updateGame(game.id, 'rating', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Rate 1-10"
                      />
                    </div>

                    {/* Genre */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Genre
                      </label>
                      <input
                        type="text"
                        value={game.genre}
                        onChange={(e) => updateGame(game.id, 'genre', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., RPG, Action, Strategy"
                      />
                    </div>

                    {/* Favorite Aspect */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Favorite Aspect
                      </label>
                      <select
                        value={game.favorite_aspect}
                        onChange={(e) => updateGame(game.id, 'favorite_aspect', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select aspect</option>
                        {favoriteAspects.map(aspect => (
                          <option key={aspect} value={aspect}>{aspect}</option>
                        ))}
                      </select>
                    </div>

                    {/* Would Recommend */}
                    <div className="flex items-center space-x-3 pt-6">
                      <input
                        type="checkbox"
                        id={`recommend-${game.id}`}
                        checked={game.would_recommend}
                        onChange={(e) => updateGame(game.id, 'would_recommend', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`recommend-${game.id}`} className="text-sm font-medium text-gray-700">
                        Would recommend to others
                      </label>
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Why do you like this game? *
                    </label>
                    <textarea
                      value={game.reason}
                      onChange={(e) => updateGame(game.id, 'reason', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us what makes this game special to you..."
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center space-x-2 mx-auto px-8 py-3 rounded-lg font-medium transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Save className="h-5 w-5" />
              <span>
                {isSubmitting ? 'Submitting...' : `Submit ${games.length} Favorite Game${games.length > 1 ? 's' : ''}`}
              </span>
            </button>
            <p className="text-sm text-gray-500 mt-2">
              * Required fields
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FavoriteGameForm