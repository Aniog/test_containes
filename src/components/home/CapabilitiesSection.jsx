import { Gauge, Layers3, Settings, Wrench } from 'lucide-react'

const capabilities = [
  { icon: Gauge, title: 'Production confidence', text: 'Consistent folding performance supports busy fabrication teams and repeat orders.' },
  { icon: Layers3, title: 'Flexible sheet handling', text: 'A strong fit for sheet metal parts, panels, trims, profiles, and formed components.' },
  { icon: Settings, title: 'Simple operation', text: 'Clear controls and ergonomic workflow help operators move from setup to folding with ease.' },
  { icon: Wrench, title: 'Service-minded build', text: 'Durable machine structures and accessible maintenance points support long-term reliability.' },
]

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Why ARTITECT</p>
          <h2 id="capabilities-title" className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Engineered strength with a premium user experience.
          </h2>
          <p id="capabilities-subtitle" className="mt-5 text-lg leading-8 text-slate-300">
            Your folding equipment should feel powerful, controlled, and straightforward. ARTITECT MACHINERY focuses on dependable mechanics, intuitive workflow, and clean presentation from inquiry to installation.
          </p>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-4">
            <img
              alt="Precision sheet metal fabrication workshop"
              className="h-80 w-full rounded-2xl object-cover"
              data-strk-img-id="artitect-capabilities-workshop-b6d8f0"
              data-strk-img="[capabilities-subtitle] [capabilities-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-xl shadow-slate-950/20">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
