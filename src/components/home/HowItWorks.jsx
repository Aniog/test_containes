import { MessageSquare, Wand2, Globe, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Describe your vision',
    description: 'Tell NexusAI what you need in plain language. Describe your brand, goals, and style preferences.',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'AI generates your site',
    description: 'Our AI engine crafts a complete, responsive website with copy, layout, and design — in seconds.',
  },
  {
    icon: Globe,
    step: '03',
    title: 'Customize & refine',
    description: 'Fine-tune every detail with our intuitive editor. Change colors, fonts, and content effortlessly.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch instantly',
    description: 'Publish to a custom domain with one click. Your site is live, fast, and SEO-optimized.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Dashed line connector */}
      <div className="absolute top-1/2 left-0 right-0 hidden lg:block pointer-events-none">
        <svg width="100%" height="2" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#d1d5db" strokeWidth="1" strokeDasharray="8 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">How it works</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            From idea to live site<br />in four steps
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            No design skills. No coding. Just your vision and our AI.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                {step}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
