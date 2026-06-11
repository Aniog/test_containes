import { Shield, Settings, Award, Clock, CheckCircle, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction with premium materials ensures decades of reliable operation.',
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Advanced folding technology delivers consistent, accurate bends every time.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'Meets international safety and quality standards for industrial machinery.',
  },
  {
    icon: Clock,
    title: 'Fast Setup',
    description: 'Intuitive controls and quick-change tooling minimize downtime between jobs.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Guaranteed',
    description: 'Comprehensive warranty and dedicated support team for peace of mind.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our technical team provides training and assistance throughout your machine lifecycle.',
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose ARTITECT?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine decades of engineering expertise with modern manufacturing techniques 
            to deliver folding machines that exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
