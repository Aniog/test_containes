import { Mail, PhoneCall } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-20 text-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl shadow-slate-300">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Let’s talk machinery</p>
              <h2 id="contact-title" className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Ready to choose your folding machine?
              </h2>
              <p id="contact-subtitle" className="mt-5 text-lg leading-8 text-slate-300">
                Contact ARTITECT MACHINERY for double folding machines, double folders, sheet metal folders, metal folders, and complete metal folding machine guidance.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:sales@artitectmachinery.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email us
                </a>
                <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-amber-300 hover:text-amber-200">
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Call sales
                </a>
              </div>
            </div>
            <div
              className="min-h-96 bg-slate-800"
              data-strk-bg-id="artitect-contact-bg-e9c4a7"
              data-strk-bg="[contact-subtitle] [contact-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="900"
            />
          </div>
        </div>
        <footer className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-slate-700">© 2026 ARTITECT MACHINERY. Precision folding equipment.</p>
          <p>Double folding machine • Sheet metal folder • Metal folder machine</p>
        </footer>
      </div>
    </section>
  )
}

export default ContactSection
