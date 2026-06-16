import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Users, Award, Factory, TrendingUp, Handshake } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every component is designed and manufactured to deliver consistent, repeatable accuracy in every bend.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We listen to our customers and continuously improve our machines based on real-world feedback from the shop floor.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'ISO 9001 certified manufacturing processes ensure every machine meets the highest quality standards before shipping.',
  },
  {
    icon: Factory,
    title: 'Innovation',
    description: 'Our R&D team constantly pushes the boundaries of what is possible in sheet metal folding technology.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We invest 15% of revenue into research and development, ensuring our machines remain at the cutting edge.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We view every customer relationship as a long-term partnership, providing ongoing support throughout the machine lifecycle.',
  },
]

const timeline = [
  { year: '1998', title: 'Founded', description: 'ARTITECT MACHINERY established in Cleveland, Ohio with a vision to build the best folding machines in the world.' },
  { year: '2003', title: 'First CNC Model', description: 'Launched our first CNC-controlled double folding machine, setting new standards for precision in the industry.' },
  { year: '2008', title: 'Global Expansion', description: 'Opened distribution in Europe and Asia, bringing ARTITECT quality to metalworkers worldwide.' },
  { year: '2014', title: 'Automation Division', description: 'Established the automation division, introducing fully automated folding cells for high-volume production.' },
  { year: '2019', title: 'Smart Factory', description: 'Launched IoT-enabled machines with real-time monitoring, predictive maintenance, and remote diagnostics.' },
  { year: '2024', title: '5000th Machine', description: 'Celebrated the installation of our 5000th machine, now serving customers in over 40 countries.' },
]

const team = [
  { name: 'Robert Chen', role: 'CEO & Founder', description: '30+ years of experience in metal fabrication machinery.' },
  { name: 'Sarah Martinez', role: 'VP Engineering', description: 'Former aerospace engineer with a passion for precision manufacturing.' },
  { name: 'James Wilson', role: 'Head of Sales', description: 'Expert in matching the right machine to each customer\'s unique needs.' },
  { name: 'Dr. Emily Park', role: 'R&D Director', description: 'Leading our next-generation smart folding technology development.' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-400 text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-6">
            Building the <span className="text-accent-400">Future</span> of Metal Fabrication
          </h1>
          <p className="text-brand-200 text-lg max-w-3xl mx-auto leading-relaxed">
            For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal folding
            technology. Our commitment to precision, durability, and innovation has made us the
            trusted partner for metalworking professionals worldwide.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section ref={containerRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-500 text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mt-4 mb-6">
                From Workshop to{' '}
                <span className="text-brand-500">World Leader</span>
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  ARTITECT MACHINERY was founded in 1998 by Robert Chen, a mechanical engineer
                  with a vision to build sheet metal folding machines that combined industrial
                  precision with operator-friendly design. What started as a small workshop in
                  Cleveland has grown into a global manufacturing operation.
                </p>
                <p>
                  Today, our 120,000 square foot facility houses state-of-the-art CNC machining
                  centers, a dedicated R&D lab, and a comprehensive testing facility where every
                  machine undergoes rigorous quality verification before shipping.
                </p>
                <p>
                  We remain committed to our founding principles: build machines that last,
                  treat every customer as a partner, and never stop innovating.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-steel-100">
                <img
                  alt="ARTITECT MACHINERY factory floor"
                  data-strk-img-id="about-factory-img"
                  data-strk-img="[about-factory-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div id="about-factory-title" className="sr-only">Modern industrial factory manufacturing metal machinery CNC equipment</div>
              <div className="absolute -bottom-6 -left-6 bg-accent-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-extrabold">25+</div>
                <div className="text-sm font-medium opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-500 text-sm font-semibold uppercase tracking-widest">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mt-4 mb-6">
              What <span className="text-brand-500">Drives</span> Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 border border-steel-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-900 mb-3">{value.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-500 text-sm font-semibold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mt-4">
              Key <span className="text-brand-500">Milestones</span>
            </h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-100" />

            <div className="space-y-12">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-20">
                  <div className="absolute left-4 w-9 h-9 bg-brand-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="bg-steel-50 rounded-2xl p-6 border border-steel-200">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent-500 font-extrabold text-lg">{item.year}</span>
                      <span className="text-steel-900 font-bold text-lg">{item.title}</span>
                    </div>
                    <p className="text-steel-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-500 text-sm font-semibold uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mt-4">
              Our <span className="text-brand-500">Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 border border-steel-200 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-brand-100 rounded-full mx-auto mb-5 flex items-center justify-center">
                  <span className="text-brand-600 text-2xl font-bold">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-steel-900 mb-1">{member.name}</h3>
                <p className="text-accent-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-steel-500 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Partner with <span className="text-accent-400">ARTITECT</span>?
          </h2>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of satisfied customers worldwide. Contact our team to discuss
            your metal fabrication needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="accent" className="gap-2">
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
