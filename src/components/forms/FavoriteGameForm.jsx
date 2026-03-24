import React, { useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Star, Calendar, Clock, Gamepad2, User, Mail, Heart, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { getPlatformColor } from '@/lib/utils'

const FavoriteGameForm = ({ onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    game_name: '',
    play_time_hours: '',
    platform: '',
    reason: '',
    last_play_date: '',
    genre: '',
    rating: '',
    completion_status: '',
    favorite_moment: '',
    would_recommend: true,
    visitor_name: '',
    visitor_email: ''
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const platforms = ['Steam', 'Epic', 'Nintendo Switch', 'PlayStation', 'Xbox', 'PC', 'Mobile', 'Other']
  const completionStatuses = ['Not Started', 'In Progress', 'Completed', '100% Completed', 'Dropped']

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.game_name.trim()) {
      newErrors.game_name = 'Game name is required'
    }

    if (!formData.play_time_hours || formData.play_time_hours <= 0) {
      newErrors.play_time_hours = 'Play time must be greater than 0'
    }

    if (!formData.platform) {
      newErrors.platform = 'Platform is required'
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Please tell us why you like this game'
    }

    if (!formData.last_play_date) {
      newErrors.last_play_date = 'Last play date is required'
    }

    if (!formData.rating || formData.rating < 1 || formData.rating > 10) {
      newErrors.rating = 'Rating must be between 1 and 10'
    }

    if (!formData.completion_status) {
      newErrors.completion_status = 'Completion status is required'
    }

    if (formData.visitor_email && !/\S+@\S+\.\S+/.test(formData.visitor_email)) {
      newErrors.visitor_email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Format data according to schema requirements
      const payload = {
        data: {
          game_name: formData.game_name.trim(),
          play_time_hours: Number(formData.play_time_hours),
          platform: formData.platform,
          reason: formData.reason.trim(),
          last_play_date: formData.last_play_date,
          genre: formData.genre.trim() || null,
          rating: Number(formData.rating),
          completion_status: formData.completion_status,
          favorite_moment: formData.favorite_moment.trim() || null,
          would_recommend: formData.would_recommend,
          visitor_name: formData.visitor_name.trim() || null,
          visitor_email: formData.visitor_email.trim() || null
        }
      }

      const { data: responseData, error } = await supabase
        .from('FavoriteGame')
        .insert(payload)
        .select()

      if (error) throw error

      setSuccess(true)
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          game_name: '',
          play_time_hours: '',
          platform: '',
          reason: '',
          last_play_date: '',
          genre: '',
          rating: '',
          completion_status: '',
          favorite_moment: '',
          would_recommend: true,
          visitor_name: '',
          visitor_email: ''
        })
        setSuccess(false)
        if (onSuccess) onSuccess(responseData.data)
      }, 2000)

    } catch (err) {
      console.error('Failed to submit favorite game:', err)
      setErrors({ submit: err.message || 'Failed to submit form. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your favorite game has been successfully submitted. We appreciate you sharing your gaming experience with us!
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium">
            🎮 "{formData.game_name}" has been added to our community favorites!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center space-x-2">
          <Heart className="h-6 w-6 text-red-500" />
          <span>Share Your Favorite Game</span>
        </h2>
        <p className="text-gray-600">
          Tell us about a game you love! Your submission helps us understand what makes games special to our community.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Game Information Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Gamepad2 className="h-5 w-5 text-blue-600" />
            <span>Game Information</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Game Name *
              </label>
              <input
                type="text"
                name="game_name"
                value={formData.game_name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.game_name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., The Legend of Zelda: Breath of the Wild"
              />
              {errors.game_name && (
                <p className="text-red-500 text-xs mt-1">{errors.game_name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Genre (Optional)
              </label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Action-Adventure, RPG, FPS"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Platform *
              </label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.platform ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Platform</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
              {errors.platform && (
                <p className="text-red-500 text-xs mt-1">{errors.platform}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Completion Status *
              </label>
              <select
                name="completion_status"
                value={formData.completion_status}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.completion_status ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Status</option>
                {completionStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              {errors.completion_status && (
                <p className="text-red-500 text-xs mt-1">{errors.completion_status}</p>
              )}
            </div>
          </div>
        </div>

        {/* Gaming Experience Section */}
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Clock className="h-5 w-5 text-green-600" />
            <span>Your Gaming Experience</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Play Time (Hours) *
              </label>
              <input
                type="number"
                name="play_time_hours"
                value={formData.play_time_hours}
                onChange={handleInputChange}
                min="0"
                step="0.5"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.play_time_hours ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., 150"
              />
              {errors.play_time_hours && (
                <p className="text-red-500 text-xs mt-1">{errors.play_time_hours}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Play Date *
              </label>
              <input
                type="date"
                name="last_play_date"
                value={formData.last_play_date}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.last_play_date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.last_play_date && (
                <p className="text-red-500 text-xs mt-1">{errors.last_play_date}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal Rating (1-10) *
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  min="1"
                  max="10"
                  className={`w-20 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.rating ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="8"
                />
                <div className="flex space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < (formData.rating || 0) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              {errors.rating && (
                <p className="text-red-500 text-xs mt-1">{errors.rating}</p>
              )}
            </div>
          </div>
        </div>

        {/* Personal Thoughts Section */}
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Heart className="h-5 w-5 text-purple-600" />
            <span>Share Your Thoughts</span>
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why do you like this game? *
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.reason ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tell us what makes this game special to you..."
              />
              {errors.reason && (
                <p className="text-red-500 text-xs mt-1">{errors.reason}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Favorite Moment (Optional)
              </label>
              <textarea
                name="favorite_moment"
                value={formData.favorite_moment}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Share a memorable moment from your gameplay..."
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="would_recommend"
                checked={formData.would_recommend}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-sm font-medium text-gray-700">
                I would recommend this game to others
              </label>
            </div>
          </div>
        </div>

        {/* Optional Contact Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <User className="h-5 w-5 text-gray-600" />
            <span>Contact Information (Optional)</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="visitor_name"
                value={formData.visitor_name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="visitor_email"
                value={formData.visitor_email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.visitor_email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com (optional)"
              />
              {errors.visitor_email && (
                <p className="text-red-500 text-xs mt-1">{errors.visitor_email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-red-700">{errors.submit}</p>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Heart className="h-4 w-4" />
                <span>Share My Favorite Game</span>
              </>
            )}
          </button>
          
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default FavoriteGameForm