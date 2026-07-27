import { Shield, Award, Users, Globe, Target, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Years in Business', value: '12+' },
  { label: 'Suppliers Verified', value: '5,000+' },
  { label: 'Orders Managed', value: '3,200+' },
  { label: 'Countries Served', value: '40+' },
]

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We provide honest, unbiased assessments of suppliers and factories. No hidden agendas, no inflated reports.',
  },
  {
    icon: Award,
    title: 'Quality Commitment',
    description: 'Every inspection follows rigorous international standards. We do not compromise on quality, and we stand behind our work.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your business goals drive our actions. We tailor our services to your specific needs, budget, and timeline.',
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    description: 'With offices in Guangzhou and team members across key manufacturing hubs, we know the local landscape inside out.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by your outcomes — lower costs, faster delivery, better quality, and stronger supplier relationships.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description: 'We build lasting relationships with both clients and suppliers. Many of our client engagements span years, not months.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 text-white">
        <div className="section-container section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About SSourcing China
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto">
            We are a China-based sourcing agency dedicated to helping global buyers
            navigate the complexities of Chinese manufacturing with confidence and transparency.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                SSourcing China was founded in 2014 by a team of international trade professionals
                who saw firsthand the challenges overseas buyers face when sourcing from China.
                Miscommunication, unreliable suppliers, quality inconsistencies, and logistical
                hurdles were costing businesses time and money.
              </p>
              <p>
                We built SSourcing China to bridge that gap. Our mission is simple: provide
                honest, professional sourcing support that protects our clients' interests at
                every stage of the supply chain.
              </p>
              <p>
                Over the past decade, we have grown from a small team in Guangzhou to a
                full-service sourcing agency serving clients in over 40 countries. We have
                built relationships with thousands of verified suppliers across dozens of
                industries, and we continue to expand our network every year.
              </p>
              <p>
                What sets us apart is our commitment to transparency. We do not take
                commissions from suppliers. Our clients pay us for our service, and we work
                exclusively on their behalf. This ensures our recommendations are always
                impartial and focused on finding the best solution for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-50 section-padding">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="card">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Work With Us?</h2>
          <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link to="/contact" className="btn-primary text-lg inline-block">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </>
  )
}