import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Users, Globe, Trophy, Target, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every machine is engineered to exacting tolerances, ensuring consistent results in every bend.',
  },
  {
    icon: Trophy,
    title: 'Quality',
    description: 'We use only premium materials and rigorous testing protocols to deliver machines that last.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Your success is our priority. We provide comprehensive support from selection to installation.',
  },
]

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5000+', label: 'Machines Delivered' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Customer Satisfaction' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              About <span className="text-amber-500">ARTITECT</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of metal folding 
              technology, delivering precision-engineered equipment to manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 1998, ARTITECT MACHINERY began as a small workshop with a big vision: 
                  to create metal folding machines that combine German engineering precision with 
                  modern manufacturing efficiency.
                </p>
                <p>
                  Today, we operate state-of-the-art manufacturing facilities spanning over 50,000 
                  square meters, employing more than 500 skilled engineers, technicians, and support 
                  staff dedicated to pushing the boundaries of metal forming technology.
                </p>
                <p>
                  Our machines are trusted by leading manufacturers across automotive, aerospace, 
                  construction, and industrial sectors in over 40 countries. From small job shops 
                  to large-scale production facilities, ARTITECT delivers solutions that transform 
                  how businesses approach metal fabrication.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-16 h-16 text-slate-400" />
                </div>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Company Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The principles that guide everything we do at ARTITECT MACHINERY.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 bg-slate-100 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-12 h-12 text-slate-400" />
                </div>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Global Map</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Global Reach, Local Support
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  With a network of authorized distributors and service centers across six continents, 
                  ARTITECT MACHINERY ensures that expert support is always within reach.
                </p>
                <p>
                  Our regional teams provide localized service including installation, training, 
                  maintenance, and rapid parts delivery. We understand that machine downtime costs 
                  money, which is why we maintain extensive parts inventories worldwide.
                </p>
                <p>
                  Whether you are in North America, Europe, Asia, or anywhere else in the world, 
                  ARTITECT delivers the same commitment to quality and service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Behind every ARTITECT machine is a team of dedicated professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'James Mitchell', role: 'CEO & Founder', image: 'CEO' },
              { name: 'Sarah Chen', role: 'Chief Engineer', image: 'Engineer' },
              { name: 'Michael Torres', role: 'Head of Sales', image: 'Sales' },
              { name: 'Emma Wilson', role: 'Customer Success', image: 'Support' },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-md overflow-hidden text-center">
                <div className="aspect-square bg-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-2">
                      <Users className="w-10 h-10 text-slate-400" />
                    </div>
                    <span className="text-xs text-slate-500">{member.image}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Partner with ARTITECT
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join thousands of manufacturers who trust ARTITECT MACHINERY for their metal forming needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
