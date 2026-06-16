import { Target, Eye, Award, Users } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every machine is engineered to deliver exact specifications and consistent results.'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge technology and design.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Uncompromising standards in materials, manufacturing, and testing.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships with our clients through exceptional support.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About ARTITECT MACHINERY
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With decades of expertise in sheet metal fabrication equipment, we design and manufacture
            world-class folding machines that empower industries worldwide.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Engineering Excellence Since 2000
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ARTITECT MACHINERY was founded with a singular vision: to revolutionize the sheet metal
              fabrication industry through innovative folding solutions. What started as a small workshop
              has grown into a global leader in precision machinery.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our team of expert engineers and technicians work tirelessly to design machines that combine
              traditional craftsmanship with modern automation, ensuring our clients achieve unprecedented
              productivity and quality in their operations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, our machines operate in over 50 countries, trusted by industries ranging from
              automotive and aerospace to construction and electronics. We don't just build machines;
              we build partnerships that last.
            </p>
          </div>

          <div className="relative">
            <div
              className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl"
              data-strk-bg-id="about-image"
              data-strk-bg="sheet metal machinery factory industrial"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🏭</div>
                  <p className="text-xl font-semibold">State-of-the-Art Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                    <IconComponent className="w-8 h-8" />
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

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Production?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who trust ARTITECT MACHINERY for their folding needs.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
