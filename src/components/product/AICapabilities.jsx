import { Brain, Wand2, Code2, ImageIcon, Globe2, TrendingUp } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Natural Language Understanding',
    description: 'Describe your site in plain English. Our AI parses intent, tone, and context to generate exactly what you envision.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop',
    tag: 'Core AI',
  },
  {
    icon: Wand2,
    title: 'Intelligent Design Generation',
    description: 'AI selects harmonious color palettes, font pairings, and layout compositions based on your industry and brand.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80&auto=format&fit=crop',
    tag: 'Design',
  },
  {
    icon: Code2,
    title: 'Clean Code Output',
    description: 'Every site generates semantic, accessible HTML with optimized CSS — ready for developers to extend.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop',
    tag: 'Engineering',
  },
  {
    icon: ImageIcon,
    title: 'AI Image Curation',
    description: 'Automatically sources and places contextually relevant, high-quality imagery from our licensed library.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80&auto=format&fit=crop',
    tag: 'Media',
  },
  {
    icon: Globe2,
    title: 'Multi-language Support',
    description: 'Generate and translate your entire site into 40+ languages with culturally aware localization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop',
    tag: 'Localization',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description: 'AI analyzes top-performing sites in your niche and applies proven CRO patterns automatically.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
    tag: 'Growth',
  },
]

export default function AICapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            AI that understands<br />every dimension of your site
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            Six core AI modules work in concert to deliver a complete, professional web presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ icon: Icon, title, description, image, tag }) => (
            <div
              key={title}
              className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/90 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
