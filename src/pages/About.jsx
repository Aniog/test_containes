import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Heart, Globe, Award, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    icon: Target,
    title: 'Precision First',
    description: 'Every machine we build is engineered to deliver micrometer-level accuracy, ensuring your production meets the highest standards.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'We listen to our customers and continuously improve our products based on real-world feedback and evolving industry needs.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'With distributors and service centers in over 50 countries, we provide local support wherever your operations take you.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'ISO 9001 certified manufacturing processes and rigorous testing ensure every machine meets our exacting standards.',
  },
]

const milestones = [
  { year: '1998', event: 'ARTITECT MACHINERY founded in Industrial District' },
  { year: '2005', event: 'Launched our first CNC-controlled folding machine' },
  { year: '2010', event: 'Expanded to international markets, serving 20+ countries' },
  { year: '2015', event: 'Introduced the revolutionary Double Folding Machine series' },
  { year: '2020', event: 'Reached 5,000+ machines delivered worldwide' },
  { year: '2024', event: 'Launched next-generation smart folding technology' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Building <span className="text-amber-500">Excellence</span> Since 1998
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            For over 25 years, ARTITECT MACHINERY has been at the forefront of metal 
            folding technology, delivering precision equipment to manufacturers worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 id="about-facility-title" className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                From Workshop to World Leader
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p id="about-facility-desc">
                  ARTITECT MACHINERY began as a small workshop with a big vision: to create 
                  metal folding equipment that combines German engineering precision with 
                  practical, user-friendly operation.
                </p>
                <p>
                  Today, we are a global leader in metal folding technology, with state-of-the-art 
                  manufacturing facilities and a team of over 500 dedicated professionals. Our 
                  machines are trusted by fabricators, manufacturers, and industrial operations 
                  in more than 50 countries.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to quality and our deep 
                  understanding of our customers' needs. Every machine that leaves our facility 
                  is built to perform reliably for decades, backed by comprehensive support 
                  and service.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-full object-cover"
                data-strk-img-id="about-facility-img"
                data-strk-img="[about-facility-title] [about-facility-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="section-title mt-3 mb-4">What Drives Us</h2>
            <p className="section-subtitle">
              Our core values shape every decision we make and every machine we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="section-title mt-3 mb-4">Company Milestones</h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-amber-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-amber-500 rounded-full mt-2" />
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-0.5 h-full bg-slate-200 -translate-x-1/2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-slate-700 text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-slate-400 text-sm">Team Members</div>
            </div>
            <div>
              <Globe className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-slate-400 text-sm">Countries Served</div>
            </div>
            <div>
              <Award className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div>
              <Clock className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-slate-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get in touch with our team to discuss how ARTITECT MACHINERY can 
            support your manufacturing goals.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
