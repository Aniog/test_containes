import { ArrowRight } from 'lucide-react'

export default function CtaBand() {
  return (
    <section className="bg-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Ready to upgrade your folding line?
            </h2>
            <p className="mt-2 text-slate-900/80 font-medium">
              Talk to our engineers about the right machine for your workshop.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-slate-800 shrink-0"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
