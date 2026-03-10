import React from 'react'
import { MapPin, Phone, Mail, Clock, Car, Wifi, Shield, Coffee } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Meadowbrook Lane', 'Countryside, CA 95123'],
      color: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', 'Call or text anytime'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@meadowbrookequestrian.com', 'We respond within 24 hours'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 7:00 PM', 'Sat-Sun: 7:00 AM - 6:00 PM'],
      color: 'text-orange-600'
    }
  ]

  const facilities = [
    {
      icon: Shield,
      title: 'Safety Equipment',
      description: 'Professional helmets, safety vests, and first aid stations throughout the facility.'
    },
    {
      icon: Car,
      title: 'Ample Parking',
      description: 'Free parking available with easy access to the main facility and viewing areas.'
    },
    {
      icon: Coffee,
      title: 'Comfort Amenities',
      description: 'Comfortable seating areas, restrooms, and refreshment facilities for families.'
    },
    {
      icon: Wifi,
      title: 'Modern Facilities',
      description: 'Climate-controlled indoor arena, outdoor rings, and well-maintained trails.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit Our Facility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of beautiful countryside, our modern facility offers 
            everything you need for an exceptional equestrian experience.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className={`${info.color} bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`${idx === 0 ? 'font-semibold text-gray-900' : 'text-gray-600 text-sm'} ${idx > 0 ? 'mt-1' : ''}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Map and Directions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Getting Here</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">From Downtown</h4>
                <p className="text-gray-600 leading-relaxed">
                  Take Highway 101 North for 15 miles, exit at Meadowbrook Road. 
                  Turn right and continue for 2 miles. Our facility will be on your left 
                  with clear signage and ample parking.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Public Transportation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Bus Route 45 stops at Meadowbrook & Country Lane, just a 5-minute walk 
                  from our facility. Service runs every 30 minutes during peak hours.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What to Bring</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Comfortable, closed-toe shoes (boots preferred)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Long pants (jeans or riding pants)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Water bottle and sunscreen
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Helmet (or use ours - included in lesson fee)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            {/* Map Placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">123 Meadowbrook Lane, Countryside, CA</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Features */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our modern facility is designed with both horse and rider comfort in mind, 
              featuring state-of-the-art amenities and safety features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{facility.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              )
            })}
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">Indoor Arena</h4>
              <p className="text-gray-600 text-sm">
                Climate-controlled 80' x 120' indoor arena with premium footing, 
                perfect for year-round riding regardless of weather conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">Outdoor Rings</h4>
              <p className="text-gray-600 text-sm">
                Multiple outdoor riding rings including a jumping course and 
                dressage arena, all with professional-grade footing and lighting.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">Trail System</h4>
              <p className="text-gray-600 text-sm">
                Miles of scenic trails winding through beautiful countryside, 
                suitable for all skill levels with varying terrain and challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Riding Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our equestrian family. Contact us today to schedule 
            a facility tour or book your first lesson.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Tour
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Call Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection