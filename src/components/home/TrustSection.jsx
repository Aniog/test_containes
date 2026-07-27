import React from 'react'
import { Shield, Award, Globe, Clock, Users, FileCheck } from 'lucide-react'

const trustPoints = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Licensed & Certified',
    description: 'Officially registered sourcing company with all required business licenses and certifications.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: '40+ Countries Served',
    description: 'Trusted by businesses across North America, Europe, Australia, and the Middle East.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '15+ Years Experience',
    description: 'Deep industry knowledge and supplier networks built over more than a decade.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Bilingual Team',
    description: 'English and Chinese-speaking team ensuring clear communication with suppliers.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Quality Guarantee',
    description: 'We stand behind our quality inspections with a satisfaction guarantee.',
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Transparent Process',
    description: 'Regular updates, detailed reports, and full visibility into every step.',
  },
]

const TrustSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Trust Us
          </span>
          <h2 className="section-title">Your Trusted Partner in China</h2>
          <p className="section-subtitle mx-auto">
            We've built our reputation on reliability, transparency, and results.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center 
                            text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-white 
                            transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{point.title}</h3>
              <p className="text-navy-500 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
