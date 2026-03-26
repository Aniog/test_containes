import React, { useState } from 'react'
import { supabase } from '../api/postgrest-client.js'
import { User, Mail, Phone, Building, Briefcase, Brain, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const UserForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    job_title: '',
    interest_in_ai: 'beginner',
    use_case: '',
    newsletter_subscription: false
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const formatPayload = (rawData) => {
    return {
      data: {
        full_name: rawData.full_name,
        email: rawData.email,
        phone: rawData.phone,
        company: rawData.company,
        job_title: rawData.job_title,
        interest_in_ai: rawData.interest_in_ai,
        use_case: rawData.use_case,
        newsletter_subscription: Boolean(rawData.newsletter_subscription)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Format data according to schema requirements
      const payload = formatPayload(formData)

      const { data: responseData, error: apiError } = await supabase
        .from('User')
        .insert(payload)
        .select()

      if (apiError) throw apiError

      if (!responseData?.success) {
        throw new Error('Failed to submit user information')
      }

      setSuccess(true)
      // Reset form
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        company: '',
        job_title: '',
        interest_in_ai: 'beginner',
        use_case: '',
        newsletter_subscription: false
      })

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)

    } catch (err) {
      console.error('Form submission failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our AI Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized AI recommendations and stay updated with the latest innovations. 
            Tell us about yourself and your AI interests.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800">Thank you! Your information has been submitted successfully.</span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-800">Error: {error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-sm border">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>

            {/* Job Title */}
            <div>
              <label htmlFor="job_title" className="block text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="w-4 h-4 inline mr-2" />
                Job Title
              </label>
              <input
                type="text"
                id="job_title"
                name="job_title"
                value={formData.job_title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your job title"
              />
            </div>

            {/* AI Interest Level */}
            <div>
              <label htmlFor="interest_in_ai" className="block text-sm font-medium text-gray-700 mb-2">
                <Brain className="w-4 h-4 inline mr-2" />
                AI Interest Level *
              </label>
              <select
                id="interest_in_ai"
                name="interest_in_ai"
                value={formData.interest_in_ai}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="beginner">Beginner - New to AI</option>
                <option value="intermediate">Intermediate - Some experience</option>
                <option value="advanced">Advanced - Experienced user</option>
                <option value="expert">Expert - AI professional</option>
              </select>
            </div>
          </div>

          {/* Use Case */}
          <div className="mt-6">
            <label htmlFor="use_case" className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              How do you plan to use AI?
            </label>
            <textarea
              id="use_case"
              name="use_case"
              value={formData.use_case}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your AI use case, goals, or interests..."
            />
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="newsletter_subscription"
                checked={formData.newsletter_subscription}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                Subscribe to our newsletter for AI updates and insights
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Join AI Community'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default UserForm