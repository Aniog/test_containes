import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Users, Wrench, TrendingUp, Globe } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  { year: '1998', title: 'Founded', desc: 'Started in a small Milwaukee workshop with a mission to build better folding machines.' },
  { year: '2004', title: 'First Patent', desc: 'Received our first patent for the dual-beam folding mechanism used in all our double folders.' },
  { year: '2011', title: 'Global Expansion', desc: 'Expanded distribution to 25+ countries across Europe, Asia, and South America.' },
  { year: '2018', title: 'Industry 4.0', desc: 'Launched our smart machine platform with IoT connectivity and predictive maintenance.' },
  { year: '2024', title: '10,000th Machine', desc: 'Celebrated the delivery of our 10,000th machine — a milestone built on customer trust.' },
]

const values = [
  {
    icon: Target,
    title: 'Precision First',
    desc: 'Every micron matters. We hold ourselves to the tightest tolerances in the industry because our customers cannot afford second-best.',
  },
  {
    icon: Heart,
    title: 'Craftsmanship',
    desc: 'We treat machine building as an art. Each unit is assembled by skilled technicians who take pride in their work.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    desc: 'We do not just sell machines. We build long-term relationships, providing training, support, and upgrades for the life of every product.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    desc: 'Our R&D team invests 12% of revenue annually to push the boundaries of sheet metal forming technology.',
  },
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
      <section className="relative bg-navy-900 pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          data-strk-bg-id="about-hero-bg-a3b2c1"
          data-strk-bg="factory manufacturing machinery workshop industrial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 to-navy-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-wider">Our Story</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Engineering the Future of{' '}
              <span className="text-gold-400">Metal Fabrication</span>
            </h1>
            <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-2xl">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology.
              From our humble beginnings in Milwaukee to serving customers in 50+ countries, our commitment to
              precision and quality has never wavered.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-gold-600" />
                </div>
                <h2 className="text-3xl font-display font-bold text-navy-900">Our Mission</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                To empower metal fabricators worldwide with precision folding machines that deliver
                uncompromising quality, intuitive operation, and lasting value. We believe every
                craftsman deserves tools that elevate their work.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-gold-600" />
                </div>
                <h2 className="text-3xl font-display font-bold text-navy-900">Our Vision</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the global standard for sheet metal folding technology. We envision a future where
                every fabrication shop — from a two-person workshop to a 500-person factory — has access
                to intelligent, connected, and sustainable folding solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">What Drives Us</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-bold text-navy-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 border border-slate-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 text-sm font-semibold uppercase tracking-wider">Our Journey</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-bold text-navy-900">Key Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="hidden md:block bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <span className="text-gold-600 text-sm font-bold">{m.year}</span>
                    <h3 className="mt-1 text-lg font-display font-bold text-navy-900">{m.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{m.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                </div>

                <div className="flex-1 hidden md:block" />

                {/* Mobile layout */}
                <div className="md:hidden flex-1">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <span className="text-gold-600 text-sm font-bold">{m.year}</span>
                    <h3 className="mt-1 text-lg font-display font-bold text-navy-900">{m.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: '180+', label: 'Team Members' },
              { icon: Wrench, value: '12', label: 'R&D Engineers' },
              { icon: Globe, value: '50+', label: 'Countries Served' },
              { icon: TrendingUp, value: '12%', label: 'Revenue to R&D' },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-navy-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900">
            Want to See Our Machines in Action?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Schedule a live demo at our Milwaukee showroom or request a virtual walkthrough.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-gold-500/25"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
