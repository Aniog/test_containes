import React, { useState } from 'react'
import { User, ArrowRight } from 'lucide-react'

const UsernameInput = ({ onUsernameSet }) => {
  const [username, setUsername] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!username.trim() || isSubmitting) return

    setIsSubmitting(true)
    try {
      await onUsernameSet(username.trim())
    } catch (error) {
      console.error('Failed to set username:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <User className="text-blue-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Join the Chat Room</h1>
          <p className="text-gray-600">Enter your display name to start chatting</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Display Name
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name..."
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              maxLength={50}
              required
            />
          </div>

          <button
            type="submit"
            disabled={!username.trim() || isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Joining...</span>
              </>
            ) : (
              <>
                <span>Join Chat</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            By joining, you agree to be respectful and follow community guidelines.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UsernameInput