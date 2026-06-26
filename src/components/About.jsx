import { Factory, Users, Target, Eye } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Crafting Excellence Since 2001
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              At ARTITECT MACHINERY, we've dedicated over two decades to perfecting 
              the art and science of sheet metal folding. What started as a small workshop 
              with a big vision has grown into a global leader in precision folding equipment.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is simple: to engineer folding machines that empower manufacturers 
              to achieve unprecedented levels of precision, efficiency, and quality. Every 
              machine that leaves our facility carries with it our commitment to excellence 
              and our passion for innovation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Today, our equipment is trusted by thousands of businesses across more than 
              50 countries, from small job shops to major industrial manufacturers. We take 
              pride in knowing that ARTITECT machines are helping to build the world around us.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                { icon: <Target className="w-5 h-5" />, text: 'Precision in every detail' },
                { icon: <Eye className="w-5 h-5" />, text: 'Innovation for the future' },
                { icon: <Users className="w-5 h-5" />, text: 'Partnership with our clients' },
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-blue-600">{value.icon}</div>
                  <span className="text-gray-700 font-medium">{value.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="mb-6">
                <Factory className="w-16 h-16" />
              </div>
              
              <h4 className="text-2xl font-bold mb-4">Our Commitment</h4>
              
              <ul className="space-y-3">
                {[
                  'ISO 9001:2015 Certified Manufacturing',
                  'CE Safety Certification on All Machines',
                  '5-Year Comprehensive Warranty Standard',
                  'Dedicated After-Sales Support Team',
                  'Continuous R&D Investment',
                  'Sustainable Manufacturing Practices',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-300 mt-1">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl" />
          </div>
        </div>

        {/* Team/Expertise Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                number: '50+',
                label: 'Expert Engineers',
                description: 'Dedicated professionals with decades of combined experience',
              },
              {
                number: '100k+',
                label: 'Sq Ft Facility',
                description: 'State-of-the-art manufacturing and testing facility',
              },
              {
                number: '200+',
                label: 'Patents & Innovations',
                description: 'Industry-leading technological advancements',
              },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
