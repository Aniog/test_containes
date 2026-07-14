import { ClipboardList, MailCheck, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'Capture the right details',
    description: 'Collect names, emails, companies, and messages in one clear form that is easy to complete.',
    icon: ClipboardList,
  },
  {
    title: 'Confirm every submission',
    description: 'Visitors see an immediate success message, and the preview saves each contact in the review panel.',
    icon: MailCheck,
  },
  {
    title: 'Ready for real storage',
    description: 'The interface is prepared for durable contact storage once you approve the frontend design.',
    icon: ShieldCheck,
  },
]

const FeatureCards = () => {
  return (
    <section id="features" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Why it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Everything needed for a simple contact workflow.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-amber-50 p-6 text-slate-800 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
