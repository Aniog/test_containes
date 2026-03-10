import React, { useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { X, Calendar, Clock, User, Mail, Phone, AlertCircle, CheckCircle } from 'lucide-react'

const BookingForm = ({ isOpen, onClose, selectedLessonType = '' }) => {
  const [formData, setFormData] = useState({
    student_name: '',
    email: '',
    phone: '',
    lesson_type: selectedLessonType,
    preferred_date: '',
    preferred_time: '',
    experience_level: '',
    age: '',
    special_requests: '',
    status: 'pending'
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const lessonTypes = [
    { value: 'beginner', label: 'Beginner Lessons' },
    { value: 'intermediate', label: 'Intermediate Training' },
    { value: 'advanced', label: 'Advanced Coaching' },
    { value: 'jumping', label: 'Jumping Lessons' },
    { value: 'dressage', label: 'Dressage Training' },
    { value: 'trail', label: 'Trail Riding' }
  ]

  const experienceLevels = [
    { value: 'none', label: 'No Experience' },
    { value: 'beginner', label: 'Beginner (1-6 months)' },
    { value: 'some', label: 'Some Experience (6+ months)' },
    { value: 'experienced', label: 'Experienced (2+ years)' }
  ]

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const formatPayload = (data) => {
    return {
      ...data,
      age: Number(data.age), // Convert string to number
      status: data.status || 'pending'
    }
  }

  const validateForm = () => {
    const requiredFields = ['student_name', 'email', 'phone', 'lesson_type', 'preferred_date', 'experience_level', 'age']
    
    for (const field of requiredFields) {
      if (!formData[field]) {
        return `Please fill in the ${field.replace('_', ' ')}`
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address'
    }

    // Age validation
    const age = Number(formData.age)
    if (isNaN(age) || age < 5 || age > 100) {
      return 'Please enter a valid age between 5 and 100'
    }

    // Date validation (must be in the future)
    const selectedDate = new Date(formData.preferred_date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (selectedDate < today) {
      return 'Please select a future date'
    }

    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const formattedPayload = formatPayload(formData)
      
      const { data: responseData, error: apiError } = await supabase
        .from('LessonBooking')
        .insert(formattedPayload)
        .select()

      if (apiError) throw apiError

      if (!responseData?.success) {
        throw new Error('Booking submission failed')
      }

      setSuccess(true)
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          student_name: '',
          email: '',
          phone: '',
          lesson_type: '',
          preferred_date: '',
          preferred_time: '',
          experience_level: '',
          age: '',
          special_requests: '',
          status: 'pending'
        })
        setSuccess(false)
        onClose()
      }, 2000)

    } catch (err) {
      console.error('Booking submission failed:', err)
      setError(err.message || 'Failed to submit booking. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Riding Lesson</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success Message */}
        {success && (
          <div className="m-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900">Booking Submitted Successfully!</h3>
              <p className="text-green-700">We'll contact you within 24 hours to confirm your lesson.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="m-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <div>
              <h3 className="font-semibold text-red-900">Error</h3>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="student_name"
                value={formData.student_name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="5"
                max="100"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your age"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Lesson Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lesson Type *
              </label>
              <select
                name="lesson_type"
                value={formData.lesson_type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select lesson type</option>
                {lessonTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level *
              </label>
              <select
                name="experience_level"
                value={formData.experience_level}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select experience level</option>
                {experienceLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Preferred Date *
              </label>
              <input
                type="date"
                name="preferred_date"
                value={formData.preferred_date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Preferred Time
              </label>
              <select
                name="preferred_time"
                value={formData.preferred_time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select preferred time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requests or Notes
            </label>
            <textarea
              name="special_requests"
              value={formData.special_requests}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Any special requirements, medical conditions, or preferences we should know about..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || success}
              className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : success ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Submitted!
                </>
              ) : (
                'Submit Booking Request'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingForm