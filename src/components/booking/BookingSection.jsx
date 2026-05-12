import React from 'react'
import BookingForm from './BookingForm.jsx'

export default function BookingSection() {
  return (
    <section id="book" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-wide">
              Book a Lesson
            </span>
            <h2 className="text-4xl font-bold text-stone-800 mb-5 leading-tight">
              Ready to Start<br />Your Journey?
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-8">
              Fill out the form and we'll get back to you within 24 hours to confirm your lesson time.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Location</p>
                  <p className="text-stone-500 text-sm">123 Meadow Lane, Countryside, CA 94000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📞</div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Phone</p>
                  <p className="text-stone-500 text-sm">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">Hours</p>
                  <p className="text-stone-500 text-sm">Mon – Sun: 8:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
