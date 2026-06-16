import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, Clock, Target, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)

  useEffect(() => {
    const cleanupFunctions = []

    if (heroRef.current) {
      cleanupFunctions.push(ImageHelper.loadImages(strkImgConfig, heroRef.current))
    }
    if (storyRef.current) {
      cleanupFunctions.push(ImageHelper.loadImages(strkImgConfig, storyRef.current))
    }
    if (valuesRef.current) {
      cleanupFunctions.push(ImageHelper.loadImages(strkImgConfig, valuesRef.current))
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup())
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800" ref={heroRef}>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            data-strk-bg-id="about-hero-bg-001"
            data-strk-bg="industrial machinery manufacturing facility precision engineering"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="about-hero-title" className="text-5xl md:text-6xl font-bold text-white mb-6">
            About ARTITECT
          </h1>
          <p id="about-hero-subtitle" className="text-xl text-blue-100 max-w-3xl mx-auto">
            Three decades of engineering excellence, delivering precision sheet metal folding
            machines to manufacturers worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <img
                alt="ARTITECT Machinery Factory"
                className="w-full rounded-2xl shadow-2xl"
                data-strk-img-id="about-factory-001"
                data-strk-img="modern machinery factory manufacturing facility precision engineering"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-700 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">30+</div>
                  <div className="text-lg font-semibold">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 id="about-story-title" className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1994, ARTITECT MACHINERY began with a simple mission: to build the
                world's most reliable sheet metal folding machines. What started as a small
                workshop has grown into a global leader in precision machinery manufacturing.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, our machines are trusted by manufacturers in over 45 countries. From
                automotive suppliers to aerospace contractors, our equipment delivers the
                precision and reliability that modern industry demands.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-gray-600 font-medium">Clients Worldwide</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Award className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                  <div className="text-gray-600 font-medium">Industry Awards</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">45+</div>
                  <div className="text-gray-600 font-medium">Countries Served</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Target className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">99.8%</div>
                  <div className="text-gray-600 font-medium">Quality Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="about-values-title" className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p id="about-values-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from engineering to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe that precision is not just a specification—it's a commitment.
                Every machine we build undergoes rigorous testing to ensure it meets our
                exacting standards.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just sell machines—we build lasting partnerships. Our relationship
                with customers continues long after the sale with comprehensive support and service.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously invest in R&D to push the boundaries of what's possible
                in sheet metal folding technology, ensuring our customers stay ahead of the competition.
              </p>
            </div>
          </div>

          {/* Commitments */}
          <div className="mt-16 bg-white rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Commitments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Premium quality in every machine we build',
                'On-time delivery for all orders',
                'Comprehensive warranty coverage',
                '24/7 technical support availability',
                'Continuous innovation in technology',
                'Environmental sustainability in manufacturing'
              ].map((commitment, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind ARTITECT MACHINERY</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Michael Anderson',
                role: 'Chief Executive Officer',
                description: '30+ years in precision machinery industry'
              },
              {
                name: 'Sarah Chen',
                role: 'Head of Engineering',
                description: 'Ph.D. in Mechanical Engineering, MIT'
              },
              {
                name: 'Robert Martinez',
                role: 'Global Sales Director',
                description: 'Expert in international business development'
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-700 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-700 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Visit Our Facility</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            See our machines in action. Schedule a visit to our state-of-the-art manufacturing facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center justify-center group"
            >
              Schedule a Visit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
