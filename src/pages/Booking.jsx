import BookingForm from '@/components/booking/BookingForm'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Booking() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page header */}
      <div className="bg-red-600 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Book a Table</h1>
        <p className="text-red-100 text-lg">Reserve your spot for an unforgettable pizza experience</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Info sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            <h2 className="font-bold text-stone-900 text-lg mb-4">Restaurant Info</h2>
            <ul className="space-y-4 text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>123 Via Roma, Little Italy<br />New York, NY 10013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <span>(212) 555-0192</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-stone-800 mb-1">Opening Hours</p>
                  <p>Mon – Thu: 12pm – 10pm</p>
                  <p>Fri – Sun: 12pm – 11pm</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
            <h3 className="font-bold text-amber-800 mb-2">Good to Know</h3>
            <ul className="text-sm text-amber-700 space-y-2 list-disc list-inside">
              <li>Reservations held for 15 minutes</li>
              <li>Large groups (8+) call us directly</li>
              <li>We accommodate dietary needs</li>
              <li>Free parking after 6pm</li>
            </ul>
          </div>
        </div>

        {/* Booking form */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Make a Reservation</h2>
          <BookingForm />
        </div>
      </div>
    </div>
  )
}
