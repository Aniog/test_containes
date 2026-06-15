import React, { useRef, useEffect } from 'react'
import { Check, Award, Target, Eye } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, sectionRef.current)
      return cleanup
    }
  }, [])

  const features = [
    'Industry-leading precision and accuracy',
    'Durable construction for long-term reliability',
    'Advanced automation and control systems',
    'Comprehensive warranty and support',
    'Custom solutions for unique requirements',
    'Global service network and parts availability'
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                data-strk-bg-id="about-img-001"
                data-strk-bg="professional team manufacturing machinery industrial equipment"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 bg-blue-700 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About ARTITECT MACHINERY
            </h2>

            <p id="about-subtitle" className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal
              folding technology. We design and manufacture precision machinery that empowers
              fabricators and manufacturers worldwide to achieve exceptional results.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has made us a
              trusted partner for businesses seeking reliable, high-performance folding solutions.
              From small workshops to large industrial operations, our machines deliver the
              precision and durability our customers depend on.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Our Mission</h3>
                  <p className="text-sm text-gray-600">
                    Deliver precision machinery that empowers manufacturing excellence
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Our Vision</h3>
                  <p className="text-sm text-gray-600">
                    Lead the industry in innovation and customer satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
