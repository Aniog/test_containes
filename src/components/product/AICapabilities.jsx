import { Brain, Layers, RefreshCw, Search, Smartphone, Type } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Natural Language Understanding',
    description: 'Describe your website in plain English. Our AI parses intent, tone, and structure to generate exactly what you envision.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop',
    tag: 'Core AI',
  },
  {
    icon: Layers,
    title: 'Multi-Page Architecture',
    description: 'Generate complete multi-page sites with consistent navigation, shared design tokens, and coherent information architecture.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80&auto=format&fit=crop',
    tag: 'Structure',
  },
  {
    icon: Type,
    title: 'AI Copywriting Engine',
    description: 'Every headline, paragraph, and CTA is crafted by our language model — optimized for your industry and target audience.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&auto=format&fit=crop',
    tag: 'Content',
  },
  {
    icon: Search,
    title: 'SEO Intelligence',
    description: 'Automatic meta tags, structured data, semantic HTML, and keyword optimization built into every page from day one.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&auto=format&fit=crop',
    tag: 'SEO',
  },
  {
    icon: Smartphone,
    title: 'Adaptive Responsive Design',
    description: 'AI-generated layouts that look perfect on every screen size — from 4K monitors to the smallest mobile devices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop',
    tag: 'Design',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Iteration',
    description: 'Request changes in natural language. The AI understands context and applies updates without breaking your existing design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
    tag: 'Workflow',
  },
]

export default function AICapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">AI Capabilities</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Powered by next-generation AI
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Six core AI systems working in harmony to build, optimize, and evolve your web presence.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ icon: Icon, title, description, image, tag }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gray-50">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
