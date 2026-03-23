import React, { useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Plus, Trash2, Save, Heart, Star, Calendar, Clock, Gamepad2, CheckCircle, AlertCircle } from 'lucide-react'

const FavoriteGamesPage = () => {
  const [visitorInfo, setVisitorInfo] = useState({
    name: '',
    email: ''
  })
  
  const [games, setGames] = useState([{
    id: Date.now(),
    game_name: '',
    platform: '',
    play_time_hours: '',
    reason_like: '',
    last_play_date: '',
    genre: '',
    rating: 5,
    completion_status: '',
    would_recommend: true,
    favorite_aspect: '',
    difficulty_level: ''
  }])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const platforms = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'Mobile', 'PC', 'Other']
  const genres = ['Action', 'Adventure', 'RPG', 'Strategy', 'Simulation', 'Sports', 'Racing', 'Puzzle', 'Horror', 'Indie', 'MMO', 'Fighting', 'Platformer', 'Other']
  const completionStatuses = ['Not Started', 'In Progress', 'Completed', '100% Completed', 'Abandoned']
  const favoriteAspects = ['Story', 'Gameplay', 'Graphics', 'Music', 'Characters', 'Multiplayer', 'Replayability', 'Other']
  const difficultyLevels = ['Very Easy', 'Easy', 'Normal', 'Hard', 'Very Hard']

  const addGame = () => {
    setGames([...games, {
      id: Date.now(),
      game_name: '',
      platform: '',
      play_time_hours: '',
      reason_like: '',
      last_play_date: '',
      genre: '',
      rating: 5,
      completion_status: '',
      would_recommend: true,
      favorite_aspect: '',
      difficulty_level: ''
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
    
    // Clear error for this field
    if (errors[`${id}_${field}`]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[`${id}_${field}`]
        return newErrors
      })
    }
  }

  const updateVisitorInfo = (field, value) => {
    setVisitorInfo(prev => ({ ...prev, [field]: value }))
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate visitor info
    if (!visitorInfo.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (visitorInfo.email && !/\S+@\S+\.\S+/.test(visitorInfo.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate games
    games.forEach(game => {
      if (!game.game_name.trim()) {
        newErrors[`${game.id}_game_name`] = 'Game name is required'
      }
      if (!game.platform) {
        newErrors[`${game.id}_platform`] = 'Platform is required'
      }
      if (!game.play_time_hours || game.play_time_hours <= 0) {
        newErrors[`${game.id}_play_time_hours`] = 'Play time must be greater than 0'
      }
      if (!game.reason_like.trim()) {
        newErrors[`${game.id}_reason_like`] = 'Reason is required'
      }
      if (!game.last_play_date) {
        newErrors[`${game.id}_last_play_date`] = 'Last play date is required'
      }
      if (!game.rating || game.rating < 1 || game.rating > 10) {
        newErrors[`${game.id}_rating`] = 'Rating must be between 1 and 10'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatGameData = (game) => {
    return {
      data: {
        visitor_name: visitorInfo.name.trim(),
        visitor_email: visitorInfo.email.trim() || null,
        game_name: game.game_name.trim(),
        platform: game.platform,
        play_time_hours: Number(game.play_time_hours),
        reason_like: game.reason_like.trim(),
        last_play_date: game.last_play_date,
        genre: game.genre || null,
        rating: Number(game.rating),
        completion_status: game.completion_status || null,
        would_recommend: Boolean(game.would_recommend),
        favorite_aspect: game.favorite_aspect || null,
        difficulty_level: game.difficulty_level || null
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setSubmitStatus({ type: 'error', message: 'Please fix the errors above before submitting.' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Submit each game separately
      const submissions = games.map(game => 
        supabase
          .from('FavoriteGame')
          .insert(formatGameData(game))
      )

      const results = await Promise.all(submissions)
      
      // Check for any errors
      const hasErrors = results.some(result => result.error)
      
      if (hasErrors) {
        throw new Error('Some games could not be submitted. Please try again.')
      }

      setSubmitStatus({ 
        type: 'success', 
        message: `Successfully submitted ${games.length} favorite game${games.length > 1 ? 's' : ''}! Thank you for sharing your gaming preferences.` 
      })
      
      // Reset form
      setVisitorInfo({ name: '', email: '' })
      setGames([{
        id: Date.now(),
        game_name: '',
        platform: '',
        play_time_hours: '',
        reason_like: '',
        last_play_date: '',
        genre: '',
        rating: 5,
        completion_status: '',
        would_recommend: true,
        favorite_aspect: '',
        difficulty_level: ''
      }])
      setErrors({})

    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'Failed to submit your favorite games. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Heart className="h-10 w-10 text-red-500" />
          Share Your Favorite Games
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Tell us about the games you love most! Help other gamers discover amazing titles.
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus && (
        <div className={`p-4 rounded-lg border flex items-center gap-3 ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {submitStatus.type === 'success' ? (
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
          )}
          <span>{submitStatus.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Visitor Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-blue-600" />
            Your Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={visitorInfo.name}
                onChange={(e) => updateVisitorInfo('name', e.target.value)}
                className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email (Optional)
              </label>
              <input
                type="email"
                value={visitorInfo.email}
                onChange={(e) => updateVisitorInfo('email', e.target.value)}
                className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email (optional)"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
        </div>

        {/* Games Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Your Favorite Games ({games.length})
            </h2>
            <button
              type="button"
              onClick={addGame}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Another Game
            </button>
          </div>

          {games.map((game, index) => (
            <div key={game.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Game #{index + 1}</h3>
                {games.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeGame(game.id)}
                    className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Game Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Game Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={game.game_name}
                    onChange={(e) => updateGame(game.id, 'game_name', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[`${game.id}_game_name`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., The Witcher 3"
                  />
                  {errors[`${game.id}_game_name`] && (
                    <p className="text-red-500 text-sm mt-1">{errors[`${game.id}_game_name`]}</p>
                  )}
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={game.platform}
                    onChange={(e) => updateGame(game.id, 'platform', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[`${game.id}_platform`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Platform</option>
                    {platforms.map(platform => (
                      <option key={platform} value={platform}>{platform}</option>
                    ))}
                  </select>
                  {errors[`${game.id}_platform`] && (
                    <p className="text-red-500 text-sm mt-1">{errors[`${game.id}_platform`]}</p>
                  )}
                </div>

                {/* Play Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="h-4 w-4 inline mr-1" />
                    Play Time (Hours) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={game.play_time_hours}
                    onChange={(e) => updateGame(game.id, 'play_time_hours', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[`${game.id}_play_time_hours`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 150"
                  />
                  {errors[`${game.id}_play_time_hours`] && (
                    <p className="text-red-500 text-sm mt-1">{errors[`${game.id}_play_time_hours`]}</p>
                  )}
                </div>

                {/* Last Play Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Last Play Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={game.last_play_date}
                    onChange={(e) => updateGame(game.id, 'last_play_date', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[`${game.id}_last_play_date`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors[`${game.id}_last_play_date`] && (
                    <p className="text-red-500 text-sm mt-1">{errors[`${game.id}_last_play_date`]}</p>
                  )}
                </div>

                {/* Genre */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
                  <select
                    value={game.genre}
                    onChange={(e) => updateGame(game.id, 'genre', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Genre</option>
                    {genres.map(genre => (
                      <option key={genre} value={genre}>{genre}</option>
                    ))}
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Star className="h-4 w-4 inline mr-1" />
                    Your Rating (1-10) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={game.rating}
                    onChange={(e) => updateGame(game.id, 'rating', e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[`${game.id}_rating`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors[`${game.id}_rating`] && (
                    <p className="text-red-500 text-sm mt-1">{errors[`${game.id}_rating`]}</p>
                  )}
                </div>

                {/* Completion Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Completion Status</label>
                  <select
                    value={game.completion_status}
                    onChange={(e) => updateGame(game.id, 'completion_status', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Status</option>
                    {completionStatuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>

                {/* Favorite Aspect */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Favorite Aspect</label>
                  <select
                    value={game.favorite_aspect}
                    onChange={(e) => updateGame(game.id, 'favorite_aspect', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Aspect</option>
                    {favoriteAspects.map(aspect => (
                      <option key={aspect} value={aspect}>{aspect}</option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                  <select
                    value={game.difficulty_level}
                    onChange={(e) => updateGame(game.id, 'difficulty_level', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Difficulty</option>
                    {difficultyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Would Recommend */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={`recommend_${game.id}`}
                    checked={game.would_recommend}
                    onChange={(e) => updateGame(game.id, 'would_recommend', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`recommend_${game.id}`} className="text-sm font-medium text-gray-700">
                    I would recommend this game to others
                  </label>
                </div>
              </div>

              {/* Reason Why You Like It */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you like this game? <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={game.reason_like}
                  onChange={(e) => updateGame(game.id, 'reason_like', e.target.value)}
                  rows={3}
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors[`${game.id}_reason_like`] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us what makes this game special to you..."
                />
                {errors[`${game.id}_reason_like`] && (
                  <p className="text-red-500 text-sm mt-1">{errors[`${game.id}_reason_like`]}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2 mx-auto"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Submitting...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Submit My Favorite Games
              </>
            )}
          </button>
          <p className="text-gray-500 text-sm mt-2">
            Fields marked with <span className="text-red-500">*</span> are required
          </p>
        </div>
      </form>
    </div>
  )
}

export default FavoriteGamesPage