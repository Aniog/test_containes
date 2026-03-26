import React, { useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Heart, Plus, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { formatPayload } from '@/lib/utils'
import { Link } from 'react-router-dom'

const FavoriteGameSection = () => {
  const [visitorName, setVisitorName] = useState('')
  const [gameName, setGameName] = useState('')
  const [platform, setPlatform] = useState('')
  const [reason, setReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [submitMessage, setSubmitMessage] = useState('')

  const platforms = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC', 'Mobile', 'Other']

  const handleQuickSubmit = async (e) => {
    e.preventDefault()
    
    if (!visitorName.trim() || !gameName.trim() || !platform || !reason.trim()) {
      setSubmitStatus('error')
      setSubmitMessage('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const gameData = {
        visitor_name: visitorName,
        game_name: gameName,
        platform: platform,
        reason: reason,
        play_time: 0, // Default for quick submission
        last_play_date: new Date().toISOString().split('T')[0], // Today's date
        would_recommend: true
      }

      const formattedPayload = formatPayload(gameData)
      
      const { data: responseData, error } = await supabase
        .from('FavoriteGame')
        .insert(formattedPayload)
        .select()

      if (error) throw error

      setSubmitStatus('success')
      setSubmitMessage('Thanks for sharing your favorite game!')
      
      // Reset form
      setVisitorName('')
      setGameName('')
      setPlatform('')
      setReason('')

    } catch (err) {
      console.error('Failed to submit favorite game:', err)
      setSubmitStatus('error')
      setSubmitMessage('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Share Your Favorite Game</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help other gamers discover amazing titles by sharing what you love most about your favorite games!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
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

            <form onSubmit={handleQuickSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Your Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Game Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Game Name *
                  </label>
                  <input
                    type="text"
                    value={gameName}
                    onChange={(e) => setGameName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your favorite game"
                    required
                  />
                </div>
              </div>

              {/* Platform */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform *
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="">Select platform</option>
                  {platforms.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you love this game? *
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us what makes this game special to you..."
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Share My Favorite'}</span>
                </button>

                {/* Link to Full Form */}
                <Link
                  to="/favorite-games"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Multiple Games</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FavoriteGameSection