import React, { useState } from 'react'
import { supabase } from '../api/postgrest-client.js'
import { User, Mail, Phone, Building, Briefcase, Brain, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    job_title: '',
    interest_in_ai: '',
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

  const formatPayload = (data) => {
    return {
      data: {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone || '',
        company: data.company || '',
        job_title: data.job_title || '',
        interest_in_ai: data.interest_in_ai,
        use_case: data.use_case || '',
        newsletter_subscription: Boolean(data.newsletter_subscription)
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Format the payload according to schema requirements
      const payload = formatPayload(formData)
      
      const { data: responseData, error: apiError } = await supabase
        .from('User')
        .insert(payload)
        .select()

      if (apiError) throw apiError

      if (!responseData?.success) {
        throw new Error('Registration failed')
      }

      setSuccess(true)
      console.log('User registered successfully:', responseData.data)
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          company: '',
          job_title: '',
          interest_in_ai: '',
          use_case: '',
          newsletter_subscription: false
        })
        setSuccess(false)
      }, 3000)

    } catch (err) {
      console.error('Registration error:', err)
      setError(err.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to AI Site!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for joining us. We're excited to help you explore the world of AI.
        </p>
        <p className="text-sm text-gray-500">
          You'll receive a confirmation email shortly with next steps.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        {/* Full Name */}
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline h-4 w-4 mr-1" />
            Full Name *
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline h-4 w-4 mr-1" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="inline h-4 w-4 mr-1" />
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            <Building className="inline h-4 w-4 mr-1" />
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your company name"
          />
        </div>

        {/* Job Title */}
        <div>
          <label htmlFor="job_title" className="block text-sm font-medium text-gray-700 mb-2">
            <Briefcase className="inline h-4 w-4 mr-1" />
            Job Title
          </label>
          <input
            type="text"
            id="job_title"
            name="job_title"
            value={formData.job_title}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your job title"
          />
        </div>

        {/* AI Interest Level */}
        <div>
          <label htmlFor="interest_in_ai" className="block text-sm font-medium text-gray-700 mb-2">
            <Brain className="inline h-4 w-4 mr-1" />
            AI Interest Level *
          </label>
          <select
            id="interest_in_ai"
            name="interest_in_ai"
            value={formData.interest_in_ai}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Select your AI experience level</option>
            <option value="beginner">Beginner - New to AI</option>
            <option value="intermediate">Intermediate - Some AI experience</option>
            <option value="advanced">Advanced - Regular AI user</option>
            <option value="expert">Expert - AI professional</option>
          </select>
        </div>

        {/* Use Case */}
        <div>
          <label htmlFor="use_case" className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="inline h-4 w-4 mr-1" />
            How do you plan to use AI?
          </label>
          <textarea
            id="use_case"
            name="use_case"
            value={formData.use_case}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
            placeholder="Tell us about your AI use cases, goals, or interests..."
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="newsletter_subscription"
            name="newsletter_subscription"
            checked={formData.newsletter_subscription}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="newsletter_subscription" className="ml-3 text-sm text-gray-700">
            Subscribe to our newsletter for AI updates and insights
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Registering...
            </>
          ) : (
            'Join AI Site'
          )}
        </button>
      </form>
    </div>
  )
}

export default UserRegistrationForm