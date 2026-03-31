import React, { useState } from 'react'
import { User, Mail, Phone, Building, Briefcase, Brain, Target, DollarSign, Bell, Send, Loader2 } from 'lucide-react'
import { createUserInfo } from '@/api/userInfo.js'

const UserInfoForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    job_title: '',
    interest_in_ai: '',
    use_case: '',
    budget_range: '',
    newsletter_subscription: false
  })
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const result = await createUserInfo(formData)
      
      if (result.success) {
        setSuccess(true)
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          company: '',
          job_title: '',
          interest_in_ai: '',
          use_case: '',
          budget_range: '',
          newsletter_subscription: false
        })
        if (onSuccess) onSuccess(result.data)
      } else {
        setError(result.error || 'Failed to submit form')
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">Your information has been submitted successfully. We'll be in touch soon!</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-4 text-green-600 hover:text-green-800 underline"
        >
          Submit Another Form
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started with AI</h2>
        <p className="text-gray-600">Tell us about yourself and discover how AI can transform your business.</p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2">
          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 text-sm">!</span>
          </div>
          <span className="text-red-700">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your company name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Briefcase className="w-4 h-4 inline mr-2" />
            Job Title
          </label>
          <input
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter your job title"
          />
        </div>

        {/* AI Interest */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Brain className="w-4 h-4 inline mr-2" />
            Interest in AI *
          </label>
          <select
            name="interest_in_ai"
            value={formData.interest_in_ai}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          >
            <option value="">Select your AI experience level</option>
            <option value="Beginner">Beginner - New to AI</option>
            <option value="Intermediate">Intermediate - Some AI knowledge</option>
            <option value="Advanced">Advanced - Experienced with AI</option>
            <option value="Expert">Expert - AI specialist</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Target className="w-4 h-4 inline mr-2" />
            Primary Use Case
          </label>
          <textarea
            name="use_case"
            value={formData.use_case}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Describe how you plan to use AI in your business..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 inline mr-2" />
            Budget Range
          </label>
          <select
            name="budget_range"
            value={formData.budget_range}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          >
            <option value="">Select your budget range</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $50,000">$10,000 - $50,000</option>
            <option value="Over $50,000">Over $50,000</option>
          </select>
        </div>

        {/* Newsletter */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="newsletter_subscription"
            id="newsletter"
            checked={formData.newsletter_subscription}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-700 flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Subscribe to our AI newsletter for latest updates and insights
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get Started with AI
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default UserInfoForm