import React, { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on materials or craftsmanship',
      icon: '🏆'
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our technology and processes',
      icon: '💡'
    },
    {
      title: 'Reliability',
      description: 'Machines that perform day in, day out',
      icon: '⚙️'
    },
    {
      title: 'Support',
      description: 'Dedicated customer service and technical support',
      icon: '🤝'
    }
  ]

  const team = [
    {
      name: 'Michael Anderson',
      role: 'CEO & Founder',
      imageId: 'team-ceo-001',
      titleId: 'team-ceo-title'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Engineering',
      imageId: 'team-engineering-002',
      titleId: 'team-engineering-title'
    },
    {
      name: 'Robert Martinez',
      role: 'Sales Director',
      imageId: 'team-sales-003',
      titleId: 'team-sales-title'
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 id="about-page-title" className="text-4xl md:text-5xl font-bold mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p id="about-page-subtitle" className="text-xl text-slate-300">
            Engineering excellence since 2001
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Founded in 2001, ARTITECT MACHINERY has grown from a small workshop to a global leader in sheet metal folding technology. Our passion for precision engineering drives us to create machines that empower fabricators worldwide.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                With over 25 years of experience, we understand the challenges faced by modern fabrication shops. That's why every ARTITECT machine is designed with the operator in mind – combining precision, durability, and ease of use.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, our machines operate in over 50 countries, helping businesses of all sizes achieve superior folding results with every project.
              </p>
            </div>
            <div className="relative h-96 bg-slate-200 rounded-xl overflow-hidden">
              <div 
                className="w-full h-full"
                data-strk-bg-id="about-story-bg-002"
                data-strk-bg="sheet metal fabrication workshop industrial manufacturing"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower sheet metal fabricators with precision-engineered folding machines that enhance productivity, ensure quality, and drive business growth through innovative technology and exceptional support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the global benchmark for sheet metal folding technology, recognized for quality, innovation, and customer success in every corner of the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-slate-600">
              Meet the experts behind ARTITECT MACHINERY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.imageId} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-slate-200">
                  <img 
                    alt={member.name}
                    data-strk-img-id={member.imageId}
                    data-strk-img={`[${member.titleId}] professional portrait`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 id={member.titleId} className="text-xl font-semibold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-slate-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers worldwide who trust ARTITECT MACHINERY for their folding needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Our Team
            </a>
            <a 
              href="#products" 
              className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
