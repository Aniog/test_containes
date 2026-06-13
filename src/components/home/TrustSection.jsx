import React from 'react'
import { MapPin, Users, Award, Clock } from 'lucide-react'

const trustPoints = [
  {
    icon: MapPin,
    stat: 'Shenzhen, China',
    label: 'Based in the heart of China manufacturing hub',
  },
  {
    icon: Users,
    stat: '500+',
    label: 'Verified supplier network across all major industries',
  },
  {
    icon: Award,
    stat: '10+ Years',
    label: 'Experience in international trade and quality control',
  },
  {
    icon: Clock,
    stat: '24/7',
    label: 'Support with dedicated English-speaking project managers',
  },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-[#1a2744]">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-white mb-4">
            Why Buyers Trust Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            We are a team of sourcing professionals with deep knowledge of China manufacturing and international trade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <point.icon size={24} className="text-[#d4a843]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{point.stat}</div>
              <p className="text-gray-400 text-sm">{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
