import { Eye, MessageSquare, Zap, Shield, BarChart2, Globe } from 'lucide-react'

const capabilities = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Computer Vision',
    desc: 'Recognizing objects, faces, and scenes in images and video with human-level accuracy.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Natural Language Processing',
    desc: 'Understanding, generating, and translating human language across hundreds of languages.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Autonomous Decision-Making',
    desc: 'Real-time reasoning and action in complex, dynamic environments like self-driving cars.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Anomaly Detection',
    desc: 'Identifying fraud, cyber threats, and system failures before they cause damage.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'Predictive Analytics',
    desc: 'Forecasting trends, demand, and outcomes from historical and real-time data.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Multimodal Understanding',
    desc: 'Processing text, images, audio, and video together for richer comprehension.',
    color: 'from-indigo-500 to-blue-500',
  },
]

const Capabilities = () => {
  return (
    <section className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
            Core Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            What AI Can Do
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Modern AI systems excel across a wide range of cognitive tasks that
            once required human expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition group"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cap.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition`}
              >
                {cap.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
