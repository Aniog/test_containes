import React, { useState } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import BookingForm from './components/BookingForm'
import BookingList from './components/BookingList'
import { Horse, Star, Clock, Users, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [refreshBookings, setRefreshBookings] = useState(0)

  // Format payload to match schema types
  const formatPayload = (rawData) => {
    return {
      ...rawData,
      // All fields are already strings from form inputs, which matches our schema
    }
  }

  const handleBookingSubmit = async (formData) => {
    try {
      const formattedPayload = formatPayload(formData)
      
      const { data: responseData, error } = await supabase
        .from('HorseClassBooking')
        .insert(formattedPayload)
        .select()

      if (error || !responseData?.success) {
        console.error("Booking failed:", error)
        alert("Booking failed. Please try again.")
        return
      }

      alert("Booking submitted successfully! We'll contact you soon to confirm your class.")
      
      // Trigger refresh of booking list
      setRefreshBookings(prev => prev + 1)
      
    } catch (err) {
      console.error("Booking submission error:", err)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Horse className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Sunset Ridge Equestrian
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the joy of horseback riding with professional instruction in a beautiful, safe environment
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>All Skill Levels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Safe & Fun</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Classes?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive horse riding instruction for all ages and experience levels in a supportive, professional environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instruction</h3>
              <p className="text-gray-600">
                Learn from certified instructors with years of experience teaching riders of all levels.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Horse className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Well-Trained Horses</h3>
              <p className="text-gray-600">
                Our gentle, well-trained horses are perfect for beginners and challenging enough for advanced riders.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                We prioritize safety with proper equipment, thorough instruction, and careful supervision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Book Your Class Today</h2>
            <p className="text-gray-600">
              Ready to start your equestrian journey? Fill out the form below to book your horse riding class.
            </p>
          </div>
          
          <BookingForm onBookingSubmit={handleBookingSubmit} />
        </div>
      </div>

      {/* Recent Bookings Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <BookingList key={refreshBookings} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Horse className="w-8 h-8 text-amber-400" />
                <h3 className="text-xl font-bold">Sunset Ridge Equestrian</h3>
              </div>
              <p className="text-gray-300">
                Professional horse riding instruction in a beautiful, safe environment for riders of all levels.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 123 Ranch Road, Countryside, ST 12345</p>
                <p>📞 (555) 123-RIDE</p>
                <p>✉️ info@sunsetridgeequestrian.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Class Schedule</h4>
              <div className="space-y-2 text-gray-300">
                <p>Morning Classes: 9:00 AM - 12:00 PM</p>
                <p>Afternoon Classes: 2:00 PM - 5:00 PM</p>
                <p>Private Lessons: By Appointment</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Sunset Ridge Equestrian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
