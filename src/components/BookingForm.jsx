import React, { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, Star, MessageSquare } from 'lucide-react'

const BookingForm = ({ onBookingSubmit }) => {
  const [formData, setFormData] = useState({
    student_name: '',
    email: '',
    phone: '',
    class_type: '',
    preferred_date: '',
    preferred_time: '',
    experience_level: '',
    special_requests: '',
    status: 'pending'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await onBookingSubmit(formData)
      // Reset form after successful submission
      setFormData({
        student_name: '',
        email: '',
        phone: '',
        class_type: '',
        preferred_date: '',
        preferred_time: '',
        experience_level: '',
        special_requests: '',
        status: 'pending'
      })
    } catch (error) {
      console.error('Booking submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book Your Horse Riding Class</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <input
              type="text"
              name="student_name"
              value={formData.student_name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Class Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Star className="w-4 h-4" />
              Class Type *
            </label>
            <select
              name="class_type"
              value={formData.class_type}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select class type</option>
              <option value="beginner">Beginner Class</option>
              <option value="intermediate">Intermediate Class</option>
              <option value="advanced">Advanced Class</option>
              <option value="private">Private Lesson</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Star className="w-4 h-4" />
              Experience Level *
            </label>
            <select
              name="experience_level"
              value={formData.experience_level}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select experience level</option>
              <option value="none">No Experience</option>
              <option value="beginner">Beginner (1-6 months)</option>
              <option value="some">Some Experience (6+ months)</option>
              <option value="experienced">Experienced (2+ years)</option>
            </select>
          </div>
        </div>

        {/* Schedule */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Preferred Date *
            </label>
            <input
              type="date"
              name="preferred_date"
              value={formData.preferred_date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4" />
              Preferred Time *
            </label>
            <select
              name="preferred_time"
              value={formData.preferred_time}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Select time slot</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4" />
            Special Requests or Notes
          </label>
          <textarea
            name="special_requests"
            value={formData.special_requests}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Any special requests, medical conditions, or additional information..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Submitting...
            </>
          ) : (
            'Book My Class'
          )}
        </button>
      </form>
    </div>
  )
}

export default BookingForm