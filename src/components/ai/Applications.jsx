import { Stethoscope, Car, GraduationCap, Landmark, ShoppingCart, Leaf } from 'lucide-react'

const apps = [
  {
    icon: Stethoscope,
    title: 'Healthcare',
    desc: 'AI diagnoses diseases from medical images, accelerates drug discovery, and personalizes treatment plans.',
    gradient: 'from-pink-500/20 to-rose-600/10',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
  },
  {
    icon: Car,
    title: 'Autonomous Vehicles',
    desc: 'Self-driving cars use computer vision and real-time decision-making to navigate complex environments.',
    gradient: 'from-blue-500/20 to-cyan-600/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Adaptive learning platforms personalize curricula, provide instant feedback, and identify learning gaps.',
    gradient: 'from-yellow-500/20 to-amber-600/10',
    border: 'border-yellow-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Landmark,
    title: 'Finance',
    desc: 'AI powers fraud detection, algorithmic trading, credit scoring, and personalized financial advice.',
    gradient: 'from-green-500/20 to-emerald-600/10',
    border: 'border-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    desc: 'Recommendation engines, demand forecasting, and visual search are transforming how we shop.',
    gradient: 'from-orange-500/20 to-amber-600/10',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-400',
  },
  {
    icon: Leaf,
    title: 'Climate & Environment',
    desc: 'AI models climate change, optimizes energy grids, and helps design sustainable solutions.',
    gradient: 'from-teal-500/20 to-cyan-600/10',
    border: 'border-teal-500/20',
    iconColor: 'text-teal-400',
  },
]

export default function Applications() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Real-World Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">AI in Action</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            AI is no longer science fiction — it's actively transforming every sector of society.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map(({ icon: Icon, title, desc, gradient, border, iconColor }) => (
            <div
              key={title}
              className={`bg-gradient-to-br ${gradient} border ${border} rounded-2xl p-7 hover:scale-[1.02] transition-transform`}
            >
              <Icon className={`w-8 h-8 ${iconColor} mb-4`} />
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
