import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Award, Users, Globe, Wrench, TrendingUp, Shield } from 'lucide-react'

const milestones = [
  { year: '2005', title: 'Founded', desc: 'ARTITECT MACHINERY was established with a vision for precision engineering.' },
  { year: '2010', title: 'Expansion', desc: 'Expanded manufacturing facility and introduced the first CNC folding series.' },
  { year: '2015', title: 'Global Reach', desc: 'Machines exported to over 20 countries across Europe, Asia, and the Americas.' },
  { year: '2020', title: 'Innovation', desc: 'Launched Industry 4.0 compatible folding systems with smart monitoring.' },
  { year: '2024', title: 'Milestone', desc: '500th machine delivered. Recognized as industry leader in sheet metal folding.' },
  { year: '2026', title: 'Future', desc: 'Pioneering AI-assisted folding technology and sustainable manufacturing.' },
]

const values = [
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We never compromise on quality. Every machine is built to exceed industry standards and deliver decades of reliable service.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    desc: 'We continuously push the boundaries of what folding technology can achieve, integrating the latest advancements into our designs.',
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'Our customers are partners. We work alongside them to understand their needs and deliver solutions that truly make a difference.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Honesty and transparency guide every interaction. We build trust through consistent performance and fair dealings.',
  },
]

const team = [
  {
    name: 'James Thornton',
    role: 'Founder & CEO',
    desc: 'Visionary leader with 25+ years in precision manufacturing.',
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Engineer',
    desc: 'Expert in CNC systems and automation. PhD in Mechanical Engineering.',
  },
  {
    name: 'Michael Rossi',
    role: 'Production Director',
    desc: 'Oversees manufacturing quality with meticulous attention to detail.',
  },
  {
    name: 'Emily Nakamura',
    role: 'Global Sales Head',
    desc: 'Driving worldwide expansion and customer success initiatives.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Our Story
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Two decades of engineering excellence, trusted by professionals worldwide to deliver precision folding solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  data-strk-img-id="about-story-img"
                  data-strk-img="[about-story-desc] [about-story-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="About ARTITECT MACHINERY"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:bottom-8 md:-right-6 bg-amber-600 rounded-xl p-4 md:p-6 shadow-xl">
                <div className="text-white text-2xl md:text-3xl font-bold">20+</div>
                <div className="text-amber-100 text-xs md:text-sm uppercase tracking-wider">Years</div>
              </div>
            </div>
            <div>
              <span className="text-amber-500 text-xs font-semibold tracking-wider uppercase mb-3 block">
                Our Mission
              </span>
              <h2
                id="about-story-title"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
              >
                Engineering the Future of Metal Fabrication
              </h2>
              <p
                id="about-story-desc"
                className="text-slate-400 text-base md:text-lg leading-relaxed mb-6"
              >
                Founded in 2005, ARTITECT MACHINERY began as a small engineering workshop with a singular vision: to build folding machines that redefine precision and reliability. Today, we are recognized as one of the leading manufacturers of sheet metal folding equipment, with machines operating in over 40 countries.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                Our team of engineers, machinists, and industry experts work together to design equipment that meets the exacting demands of modern fabrication. Every machine that leaves our facility carries the ARTITECT commitment to quality — a promise we have kept for over two decades.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Whether you are a small workshop or a large industrial operation, we believe precision should never be compromised. That is why every ARTITECT machine is built to perform, built to last, and built with you in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-18">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Our core values are the foundation of everything we design, build, and deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8 hover:border-amber-600/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-600/10 flex items-center justify-center mb-5 group-hover:bg-amber-600/20 transition-colors">
                  <value.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2.5">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-18">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 md:-translate-x-px" />

            <div className="space-y-10 md:space-y-16">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative pl-12 md:pl-0 ${
                    idx % 2 === 0 ? 'md:pr-1/2 md:mr-1/2' : 'md:pl-1/2 md:ml-1/2'
                  }`}
                >
                  <div className={`md:flex md:items-start ${
                    idx % 2 === 0 ? 'md:flex-row md:text-right md:justify-end' : 'md:flex-row'
                  }`}>
                    {/* Dot */}
                    <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-1 w-5 h-5 rounded-full bg-amber-600 border-4 border-slate-900 z-10" />

                    {/* Content */}
                    <div className={`md:w-[calc(50%-40px)] ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 md:p-6 hover:border-amber-600/40 transition-colors">
                        <span className="text-amber-500 font-bold text-lg md:text-xl">{milestone.year}</span>
                        <h3 className="text-white font-semibold text-base md:text-lg mt-1 mb-2">{milestone.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-18">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Leadership
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Meet the experts behind ARTITECT MACHINERY.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-amber-600/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-amber-600/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                <span className="text-amber-500 text-sm font-medium block mb-3">{member.role}</span>
                <p className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Built' },
              { value: '40+', label: 'Countries Served' },
              { value: '1200+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
