import { useEffect, useRef } from 'react'
import { Factory, Award, Users, TrendingUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const values = [
    {
      icon: Factory,
      title: 'Manufacturing Excellence',
      description: 'State-of-the-art facilities with rigorous quality control at every production stage.',
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'ISO 9001:2015 certified with CE marking on all our machinery for international standards.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled engineers and technicians with decades of combined experience in sheet metal machinery.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Investing in R&D to bring you the latest technology and most efficient folding solutions.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About ARTITECT MACHINERY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of precision engineering and innovation in sheet metal folding technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              data-strk-bg-id="about-factory-001"
              data-strk-bg="Modern manufacturing facility with sheet metal machinery production line"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
              style={{
                height: '500px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-lg shadow-xl">
              <div className="text-4xl font-bold">Since 1999</div>
              <div className="text-lg">Engineering Excellence</div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting the Future of Sheet Metal Fabrication
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. 
              What started as a small workshop has grown into a leading manufacturer of precision folding machines 
              trusted by fabricators worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice 
              for businesses seeking reliable, efficient, and precise sheet metal folding solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                Schedule a Factory Tour
              </a>
              <a
                href="#products"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 text-center"
              >
                View Our Catalog
              </a>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
