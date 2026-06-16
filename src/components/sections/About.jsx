import { CheckCircle, Users, Globe, Trophy } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: Trophy, value: '25+', label: 'Years Experience' },
    { icon: CheckCircle, value: '99%', label: 'Satisfaction Rate' },
  ]

  return (
    <section id="about" className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-white/10 text-brand-gold text-sm font-medium rounded-full mb-6">
              About ARTITECT
            </span>
            <h2 className="heading-section text-4xl md:text-5xl mb-6">
              Pioneering Metal Folding
              <span className="block text-brand-gold">Since 1998</span>
            </h2>
            <p className="text-white/80 text-lg mb-6 text-body">
              ARTITECT MACHINERY has been at the forefront of metal folding technology for over two decades. 
              Our commitment to innovation and quality has made us a trusted partner for manufacturers worldwide.
            </p>
            <p className="text-white/70 mb-8 text-body">
              From our state-of-the-art manufacturing facility, we design and produce a comprehensive range of 
              double folding machines, sheet metal folders, and metal folding solutions that meet the highest 
              industry standards.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'ISO 9001:2015 Certified Manufacturing',
                'Advanced CNC Technology Integration',
                'Comprehensive Warranty & Support',
                'Custom Solutions Available',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More About Us
            </a>
          </div>

          {/* Image/Stats */}
          <div className="relative">
            <div 
              className="aspect-square rounded-2xl overflow-hidden bg-brand-secondary"
              data-strk-bg-id="about-bg-s4t5u6"
              data-strk-bg="[about-title] [about-subtitle]"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 right-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-xl"
                >
                  <stat.icon className="w-6 h-6 text-brand-accent mb-2" />
                  <div className="text-2xl font-bold text-brand-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
