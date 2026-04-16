import { Eye, MessageSquare, BarChart2, Shield, Layers, RefreshCw } from 'lucide-react'

const capabilities = [
  { icon: Eye, title: 'Computer Vision', desc: 'Recognizing objects, faces, and scenes in images and video.' },
  { icon: MessageSquare, title: 'Natural Language Processing', desc: 'Understanding and generating human language at scale.' },
  { icon: BarChart2, title: 'Predictive Analytics', desc: 'Forecasting outcomes from historical data patterns.' },
  { icon: Shield, title: 'Anomaly Detection', desc: 'Identifying unusual patterns for fraud and security.' },
  { icon: Layers, title: 'Generative AI', desc: 'Creating text, images, code, and audio from prompts.' },
  { icon: RefreshCw, title: 'Reinforcement Learning', desc: 'Training agents to make decisions through trial and reward.' },
]

export default function Capabilities() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Core Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">What AI Can Do</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Modern AI spans a wide range of capabilities that are transforming every industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
