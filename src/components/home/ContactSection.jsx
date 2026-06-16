import { ArrowRight, ClipboardList, MessageSquareMore } from 'lucide-react'

const checklist = [
  'Material type and thickness range',
  'Preferred folding length and output volume',
  'Machine style of interest from the product lineup',
]

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-900 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Next step</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Ready to position ARTITECT MACHINERY with confidence?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">This site now gives your brand a polished foundation for showcasing double folding machines, sheet metal folders, and metal folding systems in a way that feels premium and easy to navigate.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-200">
                Review products again
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#top" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-amber-300/40 hover:text-amber-200">
                Back to top
              </a>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">
              <ClipboardList className="h-5 w-5 text-amber-300" />
              <h3 className="text-xl font-semibold">Inquiry-ready checklist</h3>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                  <MessageSquareMore className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-slate-300">Use this framework to guide future calls, quote requests, or product detail conversations with prospective buyers.</p>
          </aside>
        </div>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:mt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-300">ARTITECT MACHINERY</p>
          <p>Elegant machinery presentation for double folding and metal folding equipment.</p>
        </footer>
      </div>
    </section>
  )
}

export default ContactSection
