import { Target, Award, Users, Globe } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '25+' },
  { label: 'Machines Delivered', value: '3,200+' },
  { label: 'Countries Served', value: '45+' },
  { label: 'Global Partners', value: '120+' },
]

const values = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every machine is designed with meticulous attention to tolerance, durability, and repeatability.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'ISO 9001 certified manufacturing with 100% machine inspection before delivery.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description: 'We work closely with fabricators to understand their workflow and deliver tailored solutions.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Comprehensive after-sales support with service technicians available in 45+ countries.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              Engineering Excellence in Metal Folding Since 1998
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              ARTITECT MACHINERY was founded by master engineers with a singular vision:
              build metal folding machines that set the standard for precision, durability, and operator experience.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, our double folding machines, sheet metal folders, and metal folding equipment
              power fabrication shops across 45 countries. From automotive component manufacturing
              to architectural metalwork, our machines deliver the accuracy and throughput
              that modern industry demands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-gold/20 transition-all duration-200"
              >
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Core Values</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The principles that guide every machine we build and every relationship we build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}