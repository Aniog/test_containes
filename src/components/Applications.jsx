import { Stethoscope, Car, Palette, FlaskConical, GraduationCap, ShoppingCart } from 'lucide-react'

const apps = [
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: 'Healthcare',
    desc: 'AI diagnoses diseases from medical images, accelerates drug discovery, and personalizes treatment plans.',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: 'Autonomous Vehicles',
    desc: 'Self-driving cars use AI to perceive surroundings, predict behavior, and navigate safely in real time.',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: 'Creative Arts',
    desc: 'AI generates stunning artwork, composes music, writes stories, and collaborates with human creators.',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: 'Scientific Research',
    desc: 'From protein folding (AlphaFold) to climate modeling, AI is accelerating scientific breakthroughs.',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'Education',
    desc: 'Adaptive learning platforms personalize curricula, provide instant feedback, and support every learner.',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: 'E-Commerce',
    desc: 'Recommendation engines, dynamic pricing, and demand forecasting power the modern shopping experience.',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
]

const Applications = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">
            Real-World Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            AI in Action
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Artificial intelligence is transforming industries and improving
            lives across the globe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.title}
              className={`p-6 rounded-2xl ${app.bg} border ${app.border} hover:scale-[1.02] transition group`}
            >
              <div className={`mb-4 ${app.iconColor} group-hover:scale-110 transition inline-block`}>
                {app.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{app.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Applications
