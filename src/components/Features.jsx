import { Settings, Shield, Zap, Headphones, Wrench, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'CNC-controlled systems deliver ±0.05mm accuracy for consistent, repeatable results in every operation.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction and premium components ensure decades of reliable industrial service.',
  },
  {
    icon: Zap,
    title: 'High Efficiency',
    description: 'Optimized folding cycles and quick-change tooling maximize your production throughput.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: '24/7 technical assistance, comprehensive training, and rapid response maintenance services.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design and accessible service points minimize downtime and reduce maintenance costs.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'From small workshops to large factories, our machines scale to match your production needs.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-primary/10 text-brand-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">Why Choose Us</span>
          <h2 className="section-title">Engineered for Excellence</h2>
          <p className="section-subtitle">Every ARTITECT machine is built with decades of engineering expertise and a commitment to quality that sets industry standards.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 group"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
