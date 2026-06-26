import React from 'react'
import { Factory, Award, Users, Globe } from 'lucide-react'

const stats = [
  { icon: Factory, label: 'Years of Experience', value: '25+' },
  { icon: Users, label: 'Global Clients', value: '500+' },
  { icon: Award, label: 'Quality Certifications', value: 'ISO 9001' },
  { icon: Globe, label: 'Countries Served', value: '40+' },
]

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                data-strk-img-id="about-factory-img-9b2d4e"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 id="about-title" className="text-3xl sm:text-4xl font-bold text-slate-900">
              Engineering Excellence Since 1998
            </h2>
            <p id="about-subtitle" className="mt-4 text-lg text-slate-600 leading-relaxed">
              ARTITECT MACHINERY has been at the forefront of sheet metal folding technology 
              for over two decades. Our commitment to precision engineering, innovative design, 
              and customer satisfaction has made us a trusted partner for manufacturers worldwide.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Every machine we build reflects our dedication to quality. From our double 
              folding machines to our versatile sheet metal folders, each product undergoes 
              rigorous testing to ensure it meets the highest industry standards.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-lg mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
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
