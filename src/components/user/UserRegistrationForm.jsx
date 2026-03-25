import React, { useState } from 'react'
import { User, Mail, Phone, Calendar, MapPin, Building, Briefcase, Heart, CheckCircle, AlertCircle } from 'lucide-react'

const UserRegistrationForm = ({ onSubmit, onCancel, initialData, isEditing }) => {
  const [formData, setFormData] = useState({
    first_name: initialData?.first_name || '',
    last_name: initialData?.last_name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    date_of_birth: initialData?.date_of_birth || '',
    gender: initialData?.gender || 'prefer_not_to_say',
    country: initialData?.country || '',
    city: initialData?.city || '',
    occupation: initialData?.occupation || '',
    company: initialData?.company || '',
    interests: initialData?.interests || [],
    newsletter_subscription: initialData?.newsletter_subscription || false,
    terms_accepted: initialData?.terms_accepted || false
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newInterest, setNewInterest] = useState('')

  const validateForm = () => {
    const newErrors = {}

    // Required fields validation
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required'
    }
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.terms_accepted) {
      newErrors.terms_accepted = 'You must accept the terms and conditions'
    }

    // Optional field validation
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleAddInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }))
      setNewInterest('')
    }
  }

  const handleRemoveInterest = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Format data according to schema requirements
      const formattedData = {
        ...formData,
        // Ensure boolean values are properly formatted
        newsletter_subscription: Boolean(formData.newsletter_subscription),
        terms_accepted: Boolean(formData.terms_accepted)
      }

      await onSubmit(formattedData)
      
      // Reset form on successful submission
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        gender: 'prefer_not_to_say',
        country: '',
        city: '',
        occupation: '',
        company: '',
        interests: [],
        newsletter_subscription: false,
        terms_accepted: false
      })
      
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
          <User className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {isEditing ? 'Edit User' : 'User Registration'}
        </h2>
        <p className="text-gray-600">
          {isEditing ? 'Update the user information below' : 'Please fill out the form below to create your account'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <User className="h-5 w-5 mr-2 text-blue-600" />
            Personal Information
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.first_name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your first name"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.first_name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.last_name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your last name"
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.last_name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="prefer_not_to_say">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Mail className="h-5 w-5 mr-2 text-blue-600" />
            Contact Information
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            Location
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your country"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your city"
              />
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
            Professional Information
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Occupation
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your job title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Heart className="h-5 w-5 mr-2 text-blue-600" />
            Interests & Hobbies
          </h3>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add an interest (e.g., Photography, Cooking, Sports)"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddInterest())}
              />
              <button
                type="button"
                onClick={handleAddInterest}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>
            
            {formData.interests.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {interest}
                    <button
                      type="button"
                      onClick={() => handleRemoveInterest(interest)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Preferences</h3>
          
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="newsletter_subscription"
                checked={formData.newsletter_subscription}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">
                Subscribe to our newsletter for updates and news
              </span>
            </label>

            <label className="flex items-start">
              <input
                type="checkbox"
                name="terms_accepted"
                checked={formData.terms_accepted}
                onChange={handleInputChange}
                className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 ${
                  errors.terms_accepted ? 'border-red-500' : ''
                }`}
              />
              <span className="ml-2 text-gray-700">
                I accept the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> *
              </span>
            </label>
            {errors.terms_accepted && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.terms_accepted}
              </p>
            )}
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-gray-200">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                {isEditing ? 'Update User' : 'Register'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserRegistrationForm