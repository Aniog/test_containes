import React, { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Horse } from 'lucide-react'
import { supabase } from '@/api/postgrest-client.js'

const HorseBooking = () => {
  const [selectedHorse, setSelectedHorse] = useState('')
  const [formData, setFormData] = useState({
    visitor_name: '',
    visitor_email: '',
    visitor_phone: '',
    horse_name: '',
    booking_date: '',
    booking_time: '',
    duration_hours: 1,
    special_requests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const horses = [
    { name: 'Thunder', description: 'Strong and reliable, perfect for experienced riders', color: 'bg-gray-700' },
    { name: 'Lightning', description: 'Fast and energetic, great for adventure seekers', color: 'bg-yellow-600' },
    { name: 'Star', description: 'Gentle and calm, ideal for beginners', color: 'bg-blue-600' },
    { name: 'Midnight', description: 'Elegant and graceful, beautiful black coat', color: 'bg-black' },
    { name: 'Sunshine', description: 'Friendly and warm, loves attention', color: 'bg-orange-500' },
    { name: 'Spirit', description: 'Independent and strong-willed, for confident riders', color: 'bg-green-700' }
  ]

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

  const handleHorseSelect = (horseName) => {
    setSelectedHorse(horseName)
    setFormData(prev => ({ ...prev, horse_name: horseName }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const formatPayload = (data) => {
    return {
      ...data,
      duration_hours: Number(data.duration_hours)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const formattedPayload = formatPayload(formData)
      
      const { data: responseData, error } = await supabase
        .from('HorseBooking')
        .insert(formattedPayload)
        .select()

      if (error || !responseData?.success) {
        throw new Error(error?.message || 'Booking failed')
      }

      setSubmitMessage('🎉 Booking successful! We will contact you soon to confirm your horse riding session.')
      
      // Reset form
      setFormData({
        visitor_name: '',
        visitor_email: '',
        visitor_phone: '',
        horse_name: '',
        booking_date: '',
        booking_time: '',
        duration_hours: 1,
        special_requests: ''
      })
      setSelectedHorse('')

    } catch (err) {
      console.error('Booking failed:', err)
      setSubmitMessage('❌ Booking failed. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Horse className="w-12 h-12 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-800">Horse Booking</h1>
          </div>
          <p className="text-lg text-gray-600">Select your favorite horse and book your riding experience</p>
        </div>

        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`mb-6 p-4 rounded-lg text-center font-medium ${
            submitMessage.includes('successful') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Horse Selection */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Horse className="w-6 h-6" />
              Choose Your Horse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {horses.map((horse) => (
                <div
                  key={horse.name}
                  onClick={() => handleHorseSelect(horse.name)}
                  className={`cursor-pointer border-2 rounded-lg p-4 transition-all duration-200 hover:shadow-lg ${
                    selectedHorse === horse.name
                      ? 'border-green-500 bg-green-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-full h-24 ${horse.color} rounded-lg mb-3 flex items-center justify-center`}>
                    <Horse className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">{horse.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{horse.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Your Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="visitor_name"
                    value={formData.visitor_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="visitor_email"
                      value={formData.visitor_email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="visitor_phone"
                      value={formData.visitor_phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Booking Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Booking Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                  <input
                    type="date"
                    name="booking_date"
                    value={formData.booking_date}
                    onChange={handleInputChange}
                    min={today}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <select
                      name="booking_time"
                      value={formData.booking_time}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (hours)</label>
                  <select
                    name="duration_hours"
                    value={formData.duration_hours}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value={1}>1 hour</option>
                    <option value={2}>2 hours</option>
                    <option value={3}>3 hours</option>
                    <option value={4}>4 hours</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Special Requests
              </label>
              <textarea
                name="special_requests"
                value={formData.special_requests}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Any special requests or notes..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || !selectedHorse}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                isSubmitting || !selectedHorse
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? 'Booking...' : 'Book My Horse Ride'}
            </button>
            {!selectedHorse && (
              <p className="text-sm text-gray-500 mt-2">Please select a horse to continue</p>
            )}
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600">
          <p>© {new Date().getFullYear()} Horse Booking. Experience the joy of riding!</p>
        </div>
      </div>
    </div>
  )
}

export default HorseBooking