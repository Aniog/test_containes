import { Link } from 'react-router-dom'
import { ChevronRight, Target, Users, Wrench, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every machine is designed with meticulous attention to detail. Our tolerances exceed industry standards because we believe precision is not optional.',
  },
  {
    icon: Wrench,
    title: 'German Craftsmanship',
    description: 'Rooted in German engineering tradition, our machines are built with premium materials and assembled by skilled technicians who take pride in their work.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description: 'We do not just sell machines; we build relationships. Our engineering team works closely with each client to deliver solutions tailored to their specific needs.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'Our R&D department constantly pushes the boundaries of sheet metal folding technology, integrating Industry 4.0 connectivity and advanced automation.',
  },
]

const milestones = [
  { year: '1987', event: 'Founded in Stuttgart, Germany as a precision metalworking shop' },
  { year: '1995', event: 'Launched first commercial double folding machine line' },
  { year: '2003', event: 'Expanded to 45+ countries with dedicated service network' },
  { year: '2010', event: 'Introduced CNC-controlled folding technology across product range' },
  { year: '2018', event: 'Opened new 12,000 sqm manufacturing facility with Industry 4.0 integration' },
  { year: '2024', event: 'Surpassed 5,000 installed machines milestone worldwide' },
]

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-950 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl">
            Over 37 years of engineering excellence in sheet metal folding technology. Discover the story behind the machines trusted by fabricators worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-3 mb-6">
                Engineering Machines That Move Industry Forward
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  ARTITECT MACHINERY was founded in 1987 in Stuttgart, Germany, driven by a simple belief: sheet metal fabricators deserve machines that combine uncompromising precision with day-in, day-out reliability.
                </p>
                <p>
                  What started as a small precision metalworking shop has grown into a globally recognized manufacturer of double folding machines, sheet metal folders, and metal folding solutions. Our success is built on the same principles that guided our founding: engineering excellence, honest craftsmanship, and genuine partnership with every customer.
                </p>
                <p>
                  Today, more than 5,000 ARTITECT machines operate in over 45 countries, powering production lines in industries from construction and HVAC to automotive and aerospace. Every machine that leaves our facility carries the same promise of quality that has defined us for over three decades.
                </p>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-steel-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-brand-200/50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-600 text-2xl font-bold">AM</span>
                </div>
                <span className="text-brand-500 text-sm font-medium">Our Manufacturing Facility</span>
                <p className="text-brand-400 text-xs mt-1">12,000 sqm in Stuttgart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-3">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 lg:p-8 rounded-2xl border border-steel-200 hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3">{value.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-3">
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-steel-200 md:-translate-x-px" />

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="text-accent font-bold text-lg mb-1">{milestone.year}</div>
                    <p className="text-steel-600 text-sm leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '37+', label: 'Years in Business' },
              { value: '5,000+', label: 'Machines Installed' },
              { value: '45+', label: 'Countries Served' },
              { value: '98%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-brand-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
