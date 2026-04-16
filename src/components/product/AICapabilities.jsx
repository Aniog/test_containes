import { CheckCircle2, Cpu, Eye, Code2, Layers, TrendingUp } from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: 'Neural Layout Engine',
    description: 'Our proprietary model analyzes thousands of high-converting websites to generate layouts that are both beautiful and optimized for engagement.',
    features: ['Responsive by default', 'Conversion-optimized', 'A/B test ready'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format&fit=crop',
  },
  {
    icon: Eye,
    title: 'Visual Intelligence',
    description: 'AI selects and crops images, generates illustrations, and maintains visual consistency across every page of your site automatically.',
    features: ['Auto image curation', 'Brand color extraction', 'Icon generation'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
  },
  {
    icon: Code2,
    title: 'Clean Code Output',
    description: 'Every site is generated as production-ready, semantic HTML with optimized CSS — exportable and developer-friendly.',
    features: ['Semantic HTML5', 'Optimized CSS', 'Export to code'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop',
  },
  {
    icon: Layers,
    title: 'Component Library',
    description: 'Access 200+ pre-built AI-enhanced components — from hero sections to pricing tables — all customizable with natural language.',
    features: ['200+ components', 'Natural language editing', 'Version history'],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80&auto=format&fit=crop',
  },
  {
    icon: TrendingUp,
    title: 'SEO Autopilot',
    description: 'AI writes meta tags, structured data, and optimized content that ranks. Integrated with Google Search Console for real-time insights.',
    features: ['Auto meta tags', 'Schema markup', 'Core Web Vitals'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop',
  },
];

export default function AICapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            AI that understands design.
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            ArcaneAI isn't just a template engine — it's a full creative intelligence platform that learns your brand and builds with purpose.
          </p>
        </div>

        {/* Alternating feature rows */}
        <div className="space-y-24">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text side */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                  <cap.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
                {/* Dashed corner accents */}
                <div className={`absolute -top-3 ${index % 2 === 0 ? '-right-3' : '-left-3'} w-16 h-16 border-t border-r border-dashed border-slate-300 rounded-tr-xl`} />
                <div className={`absolute -bottom-3 ${index % 2 === 0 ? '-left-3' : '-right-3'} w-16 h-16 border-b border-l border-dashed border-slate-300 rounded-bl-xl`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
