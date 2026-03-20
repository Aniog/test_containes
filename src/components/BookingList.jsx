import React, { useEffect, useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { Calendar, Clock, User, Mail, Phone, Star, MessageSquare, Loader2, AlertCircle, CheckCircle, XCircle } from 'lucide-react'

const BookingList = () => {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('HorseClassBooking')
        .select('*')
        .order('created_at', { ascending: false })

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setBookings(dataPayload.list || [])

    } catch (err) {
      console.error('Fetch bookings failed:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-yellow-100 text-yellow-800'
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="animate-spin w-8 h-8 text-amber-600" />
        <span className="ml-2 text-gray-600">Loading bookings...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
        <AlertCircle size={20} />
        <span>Error: {error}</span>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Bookings</h2>
      
      {bookings.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No bookings yet</p>
          <p className="text-gray-400">Book your first horse riding class above!</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-amber-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{booking.student_name}</h3>
                    <p className="text-gray-600 text-sm">Booking #{booking.id}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                  {getStatusIcon(booking.status)}
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{booking.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{booking.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="w-4 h-4" />
                    <span className="capitalize">{booking.class_type} Class</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(booking.preferred_date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{formatTime(booking.preferred_time)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="w-4 h-4" />
                    <span className="capitalize">{booking.experience_level} Experience</span>
                  </div>
                </div>
              </div>

              {booking.special_requests && (
                <div className="border-t pt-4">
                  <div className="flex items-start gap-2 text-gray-600">
                    <MessageSquare className="w-4 h-4 mt-1" />
                    <div>
                      <p className="font-medium text-sm">Special Requests:</p>
                      <p className="text-sm">{booking.special_requests}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BookingList