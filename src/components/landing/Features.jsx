import { MousePointerClick, Smartphone, LayoutTemplate, ShoppingBag, Globe, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: MousePointerClick,
    title: 'Drag & Drop Editor',
    desc: 'Build your site visually with our intuitive drag-and-drop editor. No code, no complexity — just creativity.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Every site looks perfect on any device. Strikingly automatically optimizes your site for mobile visitors.',
    color: 'bg-purple-100 text-green-600',
  },
  {
    icon: LayoutTemplate,
    title: '100+ Pro Templates',
    desc: 'Start with a professionally designed template and make it yours in minutes with easy customization.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: ShoppingBag,
    title: 'Built-in Online Store',
    desc: 'Sell products, accept payments, and manage orders — all from one place without any extra plugins.',
    color: 'bg-fuchsia-100 text-teal-600',
  },
  {
    icon: Globe,
    title: 'Custom Domain',
    desc: 'Connect your own domain or get a free Strikingly subdomain. Your brand, your address, your way.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics & SEO',
    desc: 'Track visitors, understand your audience, and rank higher on Google with built-in SEO tools.',
    color: 'bg-purple-100 text-green-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">Everything You Need</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful features, zero complexity</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Strikingly packs everything you need to build, launch, and grow your online presence — all in one simple platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-1 transition-all duration-200">
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
