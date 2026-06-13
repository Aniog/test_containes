import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Gem, Users, Globe, Factory, Wrench, TrendingUp } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  { year: '1994', title: 'Founded', desc: 'ARTITECT MACHINERY established in Houston, TX with a mission to redefine sheet metal folding.' },
  { year: '2002', title: 'First Export', desc: 'Expanded internationally, delivering machines to fabricators across Europe and Asia.' },
  { year: '2010', title: 'CNC Innovation', desc: 'Launched our proprietary CNC control system with real-time bend simulation.' },
  { year: '2016', title: 'Industry 4.0', desc: 'Introduced IoT connectivity and remote diagnostics across our full product line.' },
  { year: '2020', title: 'Global Reach', desc: 'Surpassed 10,000 machines installed in 40+ countries worldwide.' },
  { year: '2024', title: 'Next Gen', desc: 'Released our AI-assisted bending optimization system for maximum efficiency.' },
]

const values = [
  { icon: Target, title: 'Precision', desc: 'Every machine is built to deliver accuracy within 0.01mm, because we believe precision is non-negotiable.' },
  { icon: Gem, title: 'Quality', desc: 'Premium materials, rigorous testing, and continuous improvement define every product we ship.' },
  { icon: Users, title: 'Partnership', desc: 'We don\'t just sell machines. We build lasting relationships with our clients through support and training.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Continuous R&D investment ensures our machines stay at the cutting edge of folding technology.' },
]

const team = [
  { name: 'Richard Hartmann', role: 'Founder & CEO', desc: '30+ years in industrial machinery. Mechanical Engineering from MIT.' },
  { name: 'Dr. Elena Vasquez', role: 'Head of R&D', desc: 'PhD in Materials Science. 15+ patents in metal forming technology.' },
  { name: 'Thomas Keller', role: 'VP of Manufacturing', desc: 'Former plant director at Siemens. Lean manufacturing expert.' },
  { name: 'Akiko Tanaka', role: 'Global Sales Director', desc: '20 years in international machinery sales. Fluent in 4 languages.' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-20 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-strk-bg-id="about-hero-bg-9c4d2e"
          data-strk-bg="[about-hero-title] industrial factory manufacturing machinery"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Our Story
            </span>
            <h1 id="about-hero-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Three Decades of{' '}
              <span className="text-brand-gold italic">Engineering</span>{' '}
              Excellence
            </h1>
            <p className="font-body text-lg text-white/70 leading-relaxed">
              Since 1994, ARTITECT MACHINERY has been pushing the boundaries of what's possible 
              in sheet metal fabrication. Our journey from a small workshop to a global leader is 
              built on precision, innovation, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div className="bg-brand-dark rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-brand-gold" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="font-body text-white/70 leading-relaxed">
                To empower metal fabricators worldwide with precision-engineered folding machines that 
                increase productivity, reduce waste, and deliver consistent quality. We believe every 
                workshop deserves access to industrial-grade technology.
              </p>
            </div>
            <div className="bg-brand-navy rounded-2xl p-8 lg:p-10 border border-white/10">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-brand-gold" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="font-body text-white/70 leading-relaxed">
                To be the global standard in sheet metal folding technology. We envision a future where 
                smart, connected machines seamlessly integrate into automated production lines, making 
                precision fabrication accessible to businesses of every size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-20">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mt-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-gold/10 transition-colors">
                    <Icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-cream py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-20">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Our Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mt-4">
              Key Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-brand-warm-gray -translate-x-1/2 hidden sm:block" />
            <div className="space-y-8 lg:space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:mb-12`}>
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-brand-gold rounded-full border-4 border-brand-cream -translate-x-1/2 z-10 hidden sm:block" />
                  {/* Content */}
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className="bg-white rounded-xl p-6 border border-brand-warm-gray">
                      <span className="font-display text-2xl font-bold text-brand-gold">{m.year}</span>
                      <h3 className="font-display text-lg font-bold text-brand-dark mt-1 mb-2">{m.title}</h3>
                      <p className="font-body text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mt-4">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-brand-cream/50 border border-brand-warm-gray rounded-xl p-6 text-center hover:border-brand-gold/30 transition-colors">
                <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-bold text-brand-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark">{member.name}</h3>
                <p className="font-body text-xs text-brand-gold uppercase tracking-wider mt-1 mb-3 font-medium">
                  {member.role}
                </p>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, value: '30+', label: 'Years in Business' },
              { icon: Globe, value: '45+', label: 'Countries Served' },
              { icon: Wrench, value: '12,000+', label: 'Machines Installed' },
              { icon: Users, value: '200+', label: 'Team Members' },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="text-center">
                  <Icon className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="font-body text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Want to Join Our <span className="text-brand-gold italic">Story</span>?
          </h2>
          <p className="font-body text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Whether you're looking for your first folding machine or upgrading your entire production line, 
            we're here to help you succeed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
