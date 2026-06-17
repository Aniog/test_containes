import React from 'react'
import { Award, Users, Globe, Target, Heart, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Every machine we build reflects our unwavering commitment to precision engineering and quality craftsmanship.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We build lasting relationships with our clients through honest communication and reliable service.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Continuous investment in R&D ensures our products stay at the forefront of sheet metal technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partnership',
      description: 'We see every client as a partner, working together to achieve mutual success and growth.'
    }
  ]

  const milestones = [
    { year: '1995', title: 'Company Founded', description: 'Started as a small workshop with a vision for precision engineering' },
    { year: '2000', title: 'First Export', description: 'Expanded internationally with first export orders to Europe' },
    { year: '2005', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management' },
    { year: '2010', title: 'Global Expansion', description: 'Established distribution network across 30+ countries' },
    { year: '2015', title: 'Smart Technology', description: 'Launched Industry 4.0 enabled folding machines' },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented smart factory solutions and IoT integration' },
    { year: '2024', title: 'Next Generation', description: 'Introduced AI-powered predictive maintenance systems' }
  ]

  const team = [
    { name: 'Robert Chen', role: 'CEO & Founder', experience: '30+ years' },
    { name: 'Sarah Mitchell', role: 'Chief Engineer', experience: '20+ years' },
    { name: 'David Kumar', role: 'Head of Operations', experience: '18+ years' },
    { name: 'Lisa Thompson', role: 'Global Sales Director', experience: '15+ years' }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ARTITECT MACHINERY
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              For over 25 years, we have been at the forefront of sheet metal folding technology, 
              delivering precision-engineered solutions to industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Founded in 1995, ARTITECT MACHINERY began as a small workshop with a big vision: 
                  to revolutionize sheet metal folding through precision engineering and innovative design.
                </p>
                <p>
                  Today, we are a global leader in manufacturing double folding machines, sheet metal folders, 
                  and metal folding machines. Our products are trusted by thousands of companies across 
                  manufacturing, automotive, aerospace, and construction industries.
                </p>
                <p>
                  What sets us apart is our relentless pursuit of excellence. Every machine that bears 
                  the ARTITECT name undergoes rigorous testing and quality assurance to ensure it meets 
                  the highest standards of performance and reliability.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">25+</div>
                  <div className="text-slate-700 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
                  <div className="text-slate-700 font-medium">Global Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-slate-700 font-medium">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">1000+</div>
                  <div className="text-slate-700 font-medium">Machines Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do, from design and manufacturing to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key milestones that have shaped our company over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                      <span className="text-amber-600 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow"></div>
                  
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the experienced professionals driving our vision forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-amber-600 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our commitment to quality is validated by internationally recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management' },
              { name: 'CE Marking', desc: 'European Conformity' },
              { name: 'ISO 14001', desc: 'Environmental Management' },
              { name: 'OHSAS 18001', desc: 'Occupational Health & Safety' }
            ].map((cert, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <Award className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-slate-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-slate-300 mb-8">
            Join thousands of satisfied clients who trust ARTITECT MACHINERY for their sheet metal folding needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About