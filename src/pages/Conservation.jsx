import { Leaf, Shield, Users, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const threats = [
  {
    title: 'Deforestation',
    icon: '🪓',
    stat: '15 billion trees',
    statLabel: 'cut down every year',
    desc: 'Industrial logging, agricultural expansion, and urban development are the leading causes of forest loss. The Amazon alone loses an area the size of a football field every minute.',
  },
  {
    title: 'Climate Change',
    icon: '🌡️',
    stat: '+1.5°C',
    statLabel: 'global temperature rise',
    desc: 'Rising temperatures, prolonged droughts, and extreme weather events stress forest ecosystems, increasing the risk of wildfires and pest outbreaks.',
  },
  {
    title: 'Illegal Logging',
    icon: '⚠️',
    stat: '50–90%',
    statLabel: 'of logging is illegal in some regions',
    desc: 'Illegal logging accounts for a significant portion of global timber trade, undermining legal protections and devastating protected forest areas.',
  },
  {
    title: 'Biodiversity Loss',
    icon: '🦋',
    stat: '1 million',
    statLabel: 'species threatened with extinction',
    desc: 'As forests shrink, the species that depend on them lose their habitat. Many go extinct before they are even discovered by science.',
  },
]

const actions = [
  {
    icon: <Leaf className="w-8 h-8 text-green-400" />,
    title: 'Plant Trees',
    desc: 'Support reforestation programs that restore degraded land and create new habitats for wildlife.',
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: 'Protect Habitats',
    desc: 'Advocate for stronger legal protections for old-growth forests and indigenous land rights.',
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: 'Support Communities',
    desc: 'Empower local and indigenous communities who are the most effective guardians of their forests.',
  },
  {
    icon: <Globe className="w-8 h-8 text-teal-400" />,
    title: 'Reduce Your Impact',
    desc: 'Choose sustainably sourced products, reduce paper waste, and support companies with zero-deforestation policies.',
  },
]

const orgs = [
  { name: 'Rainforest Alliance', url: '#', desc: 'Certifying sustainable agriculture and forestry worldwide.' },
  { name: 'WWF Forests', url: '#', desc: 'Protecting the world\'s most important forests and the species within.' },
  { name: 'One Tree Planted', url: '#', desc: 'A non-profit focused on global reforestation — one dollar, one tree.' },
  { name: 'FSC', url: '#', desc: 'Forest Stewardship Council — responsible forest management certification.' },
]

const faqs = [
  {
    q: 'How much forest is lost each year?',
    a: 'Approximately 10 million hectares of forest are lost each year — an area roughly the size of Iceland. Tropical forests are the most severely affected.',
  },
  {
    q: 'Can forests recover once lost?',
    a: 'Secondary forests can regrow over decades, but primary old-growth forests take centuries to recover their full biodiversity and carbon storage capacity.',
  },
  {
    q: 'What is sustainable forestry?',
    a: 'Sustainable forestry manages forests to meet current needs without compromising the ability of future generations to meet theirs — balancing ecological, economic, and social values.',
  },
  {
    q: 'How do forests fight climate change?',
    a: 'Forests absorb CO₂ through photosynthesis and store it in wood, roots, and soil. The world\'s forests store more carbon than the entire atmosphere contains.',
  },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-green-800/40 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium hover:bg-green-900/30 transition-colors"
      >
        {q}
        {open ? <ChevronUp className="w-4 h-4 text-green-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-green-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-green-300/70 text-sm leading-relaxed border-t border-green-800/30 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Conservation() {
  return (
    <div className="bg-[#0a1a0b] text-green-50 min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1600&q=80"
          alt="Forest conservation"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0b]/70 to-[#0a1a0b]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-green-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Act now
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Forest Conservation
          </h1>
          <p className="text-green-300/70 text-lg">
            Understanding the threats our forests face — and what we can do together to protect them.
          </p>
        </div>
      </section>

      {/* Threats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">The Threats</h2>
          <p className="text-center text-green-300/60 mb-12 max-w-xl mx-auto">
            Forests face unprecedented pressure from human activity and a changing climate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {threats.map(({ title, icon, stat, statLabel, desc }) => (
              <div key={title} className="bg-green-950/40 border border-green-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <div className="mb-3">
                  <span className="text-2xl font-extrabold text-green-400">{stat}</span>
                  <span className="text-green-300/60 text-sm ml-2">{statLabel}</span>
                </div>
                <p className="text-green-300/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-16 px-6 bg-green-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">How You Can Help</h2>
          <p className="text-center text-green-300/60 mb-12 max-w-xl mx-auto">
            Every action counts. Here are four powerful ways to make a difference.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#0f2210] border border-green-800/30 rounded-2xl p-6 text-center hover:border-green-600/50 transition-colors">
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-green-300/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress bar section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">Global Progress</h2>
          <p className="text-center text-green-300/60 mb-12">
            The world is making strides — but there is still much to do.
          </p>
          {[
            { label: 'Protected forest area', pct: 18, color: 'bg-green-500' },
            { label: 'Reforestation targets met', pct: 34, color: 'bg-teal-500' },
            { label: 'Illegal logging reduction', pct: 22, color: 'bg-blue-500' },
            { label: 'Sustainable certification', pct: 12, color: 'bg-emerald-400' },
          ].map(({ label, pct, color }) => (
            <div key={label} className="mb-6">
              <div className="flex justify-between text-sm text-green-300/80 mb-2">
                <span>{label}</span>
                <span className="font-semibold text-white">{pct}%</span>
              </div>
              <div className="h-3 bg-green-900/50 rounded-full overflow-hidden">
                <div
                  className={`h-full ${color} rounded-full transition-all`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organisations */}
      <section className="py-16 px-6 bg-green-950/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">Key Organisations</h2>
          <p className="text-center text-green-300/60 mb-12">
            These organisations are leading the fight to protect the world's forests.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {orgs.map(({ name, desc }) => (
              <div key={name} className="bg-[#0f2210] border border-green-800/30 rounded-xl p-6 hover:border-green-600/40 transition-colors">
                <h3 className="text-white font-bold mb-1">{name}</h3>
                <p className="text-green-300/60 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">Common Questions</h2>
          <p className="text-center text-green-300/60 mb-12">
            Answers to the questions we hear most often.
          </p>
          <div className="flex flex-col gap-3">
            {faqs.map(faq => (
              <FAQ key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="text-3xl font-bold text-white mb-3">Together We Can Protect Our Forests</h2>
          <p className="text-green-300/70 mb-8">
            Share this page, support a conservation organisation, or simply plant a tree. Every action matters.
          </p>
          <a
            href="https://www.worldwildlife.org/initiatives/forests"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Take Action Today
          </a>
        </div>
      </section>
    </div>
  )
}
