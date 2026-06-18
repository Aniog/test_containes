import { useEffect, useRef } from 'react'
import { Brain, Zap, Eye, MessageSquare, BarChart3, Shield, ChevronRight, Cpu, Globe, Layers } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const capabilities = [
  {
    id: 'nlp',
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'AI systems that understand, interpret, and generate human language — powering chatbots, translation, and content creation.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    id: 'vision',
    icon: Eye,
    title: 'Computer Vision',
    description: 'Machines that can see and interpret visual data — enabling facial recognition, medical imaging, and autonomous vehicles.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    id: 'ml',
    icon: BarChart3,
    title: 'Machine Learning',
    description: 'Algorithms that learn from data to make predictions and decisions without being explicitly programmed for each task.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    id: 'robotics',
    icon: Cpu,
    title: 'Robotics & Automation',
    description: 'Intelligent machines that perform physical tasks, from manufacturing robots to surgical assistants and delivery drones.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    id: 'generative',
    icon: Layers,
    title: 'Generative AI',
    description: 'Models that create new content — images, music, code, and text — by learning patterns from vast datasets.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
  {
    id: 'safety',
    icon: Shield,
    title: 'AI Safety & Ethics',
    description: 'Research ensuring AI systems are aligned with human values, transparent, fair, and safe for society at large.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
]

const timeline = [
  { year: '1950', event: 'Alan Turing proposes the Turing Test as a measure of machine intelligence.' },
  { year: '1956', event: 'The term "Artificial Intelligence" is coined at the Dartmouth Conference.' },
  { year: '1997', event: "IBM's Deep Blue defeats world chess champion Garry Kasparov." },
  { year: '2012', event: 'Deep learning breakthrough — AlexNet wins ImageNet, sparking the modern AI era.' },
  { year: '2017', event: 'Google introduces the Transformer architecture, revolutionizing NLP.' },
  { year: '2022', event: 'ChatGPT launches, bringing generative AI to hundreds of millions of users.' },
]

const applications = [
  { icon: Globe, label: 'Healthcare', desc: 'Disease diagnosis, drug discovery, personalized medicine' },
  { icon: Zap, label: 'Finance', desc: 'Fraud detection, algorithmic trading, risk assessment' },
  { icon: Brain, label: 'Education', desc: 'Adaptive learning, tutoring systems, content generation' },
  { icon: Cpu, label: 'Science', desc: 'Climate modeling, protein folding, space exploration' },
]

export default function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0f1e] text-gray-50 font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-indigo-400" />
            <span className="font-bold text-lg tracking-tight">AI Explained</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#what-is-ai" className="hover:text-white transition-colors">What is AI</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#history" className="hover:text-white transition-colors">History</a>
            <a href="#applications" className="hover:text-white transition-colors">Applications</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-[#0a0f1e] to-violet-950/30 pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-8">
            <Zap className="w-3.5 h-3.5" />
            The Intelligence Revolution
          </div>

          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            The Future is{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Artificial
            </span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Artificial Intelligence is reshaping every corner of human civilization — from how we work and communicate, to how we discover new medicines and explore the cosmos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#what-is-ai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/25"
            >
              Explore AI <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#history"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              View History
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative max-w-4xl mx-auto mt-16 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-indigo-500/10">
          <img
            alt="Artificial Intelligence visualization"
            data-strk-img-id="hero-ai-visual-8f2a9c"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* What is AI */}
      <section id="what-is-ai" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">The Basics</p>
              <h2 id="what-is-ai-title" className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                What is Artificial Intelligence?
              </h2>
              <p id="what-is-ai-desc" className="text-gray-400 text-lg leading-relaxed mb-6">
                Artificial Intelligence is the simulation of human intelligence processes by computer systems. These processes include learning, reasoning, problem-solving, perception, and language understanding.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Unlike traditional software that follows explicit rules, AI systems learn from data — identifying patterns, making decisions, and improving over time with experience. Modern AI is powered by neural networks inspired by the structure of the human brain.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Narrow AI', desc: 'Specialized for one task' },
                  { label: 'General AI', desc: 'Human-level reasoning' },
                  { label: 'Machine Learning', desc: 'Learns from data' },
                  { label: 'Deep Learning', desc: 'Neural network layers' },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                    <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl shadow-indigo-500/5">
              <img
                alt="What is Artificial Intelligence"
                data-strk-img-id="what-is-ai-img-3b7d2e"
                data-strk-img="[what-is-ai-desc] [what-is-ai-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 px-6 bg-gray-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Core Domains</p>
            <h2 id="capabilities-title" className="text-3xl md:text-4xl font-bold mb-4">Key AI Capabilities</h2>
            <p id="capabilities-subtitle" className="text-gray-400 max-w-xl mx-auto">
              Modern AI spans a wide range of disciplines, each solving unique challenges and unlocking new possibilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.id}
                  className={`bg-gray-900 border ${cap.border} rounded-2xl p-6 hover:shadow-lg transition-all`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${cap.bg} rounded-xl mb-4`}>
                    <Icon className={`w-6 h-6 ${cap.color}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{cap.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">A Brief History</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones in AI</h2>
            <p className="text-gray-400">From a thought experiment to a global revolution — the key moments that shaped AI.</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-16">
                  <div className="absolute left-0 w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-indigo-400">{item.year}</span>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-24 px-6 bg-gray-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Real-World Impact</p>
            <h2 id="applications-title" className="text-3xl md:text-4xl font-bold mb-4">AI in Action</h2>
            <p id="applications-subtitle" className="text-gray-400 max-w-xl mx-auto">
              Artificial Intelligence is already transforming industries and improving lives across the globe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {applications.map((app) => {
              const Icon = app.icon
              return (
                <div key={app.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-indigo-500/40 transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-xl mb-4">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{app.label}</h3>
                  <p className="text-gray-500 text-sm">{app.desc}</p>
                </div>
              )
            })}
          </div>

          {/* CTA Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-indigo-500/20 bg-gradient-to-r from-indigo-950/60 to-violet-950/60 p-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-violet-600/5 pointer-events-none" />
            <Brain className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h3 id="cta-title" className="text-2xl md:text-3xl font-bold mb-3">The AI Era Has Begun</h3>
            <p id="cta-desc" className="text-gray-400 max-w-lg mx-auto mb-6">
              We are living through the most transformative technological shift in human history. AI is not the future — it is the present.
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/25">
              <Zap className="w-4 h-4" /> Embrace the Future
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-gray-300">AI Explained</span>
          </div>
          <p className="text-gray-600 text-sm">© 2026 AI Explained. Exploring the frontier of intelligence.</p>
        </div>
      </footer>
    </div>
  )
}
