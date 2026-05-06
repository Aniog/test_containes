import { Brain, Palette, FileText, Search, ShieldCheck, RefreshCw } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Natural Language Understanding',
    description: 'Our NLU model parses your brief and extracts intent, tone, industry, and audience — building a complete brand profile before generating a single line of code.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop',
    tag: 'Language Model',
  },
  {
    icon: Palette,
    title: 'Generative Design System',
    description: 'A diffusion-based design engine creates cohesive color palettes, typography pairings, and layout compositions that match your brand identity automatically.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80&auto=format&fit=crop',
    tag: 'Design AI',
  },
  {
    icon: FileText,
    title: 'Contextual Copywriting',
    description: 'GPT-4 powered copy generation writes headlines, body text, CTAs, and meta descriptions tailored to your industry and target audience.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80&auto=format&fit=crop',
    tag: 'Content AI',
  },
  {
    icon: Search,
    title: 'SEO Intelligence',
    description: 'Built-in semantic analysis ensures every page is structured for search engines. Keyword density, schema markup, and Core Web Vitals are optimized automatically.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    tag: 'SEO Engine',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Optimization',
    description: 'Our reinforcement learning loop monitors your site\'s performance and suggests improvements based on real visitor behavior and conversion data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    tag: 'ML Ops',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Accessibility',
    description: 'Automated WCAG 2.1 AA compliance checks and GDPR-ready cookie management ensure your site is accessible and legally sound from day one.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80&auto=format&fit=crop',
    tag: 'Compliance',
  },
]

export default function AICapabilities() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Under the Hood</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Six AI systems,
            <br />
            <span className="text-white/30">one seamless experience.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <div
                key={i}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-xl border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300 bg-white/[0.02]"
              >
                {/* Image */}
                <div className="lg:col-span-4 h-48 lg:h-auto overflow-hidden">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105 transform"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-8 p-8 flex flex-col justify-center relative">
                  {/* Dashed accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-dashed border-white/10 rounded-tr" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white/60" />
                    </div>
                    <span className="text-xs text-white/30 border border-white/10 rounded-full px-2.5 py-1">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3">{cap.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xl">{cap.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
