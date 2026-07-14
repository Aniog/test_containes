import { Zap, Shield, HeartHandshake, BarChart3, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We move quickly without cutting corners, delivering polished results on time.',
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Your data and projects are handled with the highest standards of security.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'A real team that listens, responds, and goes the extra mile for you.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Every decision is backed by insights to maximize your ROI.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: "Round-the-clock availability so you're never left waiting.",
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned professionals across design, engineering, and strategy.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Why choose us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, speed, and care to deliver outcomes that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-11 h-11 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
