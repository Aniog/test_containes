import { ArrowRight, CheckCircle2 } from 'lucide-react'

const proofPoints = ['Fast response', 'Organized follow-up', 'Local preview saving']
const leadCards = [
  { title: 'Discovery call request', progressClass: 'w-4/5' },
  { title: 'Partnership inquiry', progressClass: 'w-2/3' },
  { title: 'Project estimate', progressClass: 'w-1/2' },
]

const HeroSection = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-blue-50">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/50 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            Simple lead capture for growing teams
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Turn every message into a contact you can review later.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A clean landing page with a focused contact form, instant confirmation, and a saved contacts panel so new inquiries never feel lost.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm transition hover:border-blue-600 hover:text-blue-800"
            >
              Send a message
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#saved-contacts"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:border-blue-600 hover:text-blue-600"
            >
              View saved contacts
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-slate-800 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-5 w-5 text-cyan-500" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
        <aside className="relative z-10 rounded-3xl border border-blue-100 bg-white p-8 text-slate-800 shadow-2xl" aria-label="Contact workflow summary">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Preview workflow</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Capture now. Review later.</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Visitors can submit the form, receive confirmation, and see their details added to the saved contacts panel instantly.
          </p>
          <div className="mt-6 grid gap-3">
            {leadCards.map((card, index) => (
              <div key={card.title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800">
                <span className="font-semibold text-slate-900">{card.title}</span>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-800">#{index + 1}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default HeroSection
