import { ArrowRight, Mail, PackageCheck, Wrench } from 'lucide-react'

function ContactSection() {
  return (
    <section id="quote" className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Next step</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Tell us what you need to fold.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Share your material type, sheet thickness, bending length, and target production volume. ARTITECT MACHINERY can help guide you toward the right double folding machine or sheet metal folder setup.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:sales@artitectmachinery.com?subject=ARTITECT%20MACHINERY%20Quote%20Request"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Email for a quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Review products
              </a>
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-3xl bg-white p-6 text-slate-950">
              <Mail className="h-6 w-6 text-amber-600" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Simple inquiry process</h3>
              <p className="mt-2 leading-7 text-slate-600">Send your folding requirements and receive clear product direction.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white">
              <PackageCheck className="h-6 w-6 text-amber-400" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">Product-fit guidance</h3>
              <p className="mt-2 leading-7 text-slate-200">Compare double folders, metal folders, and sheet metal folding machines by use case.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white">
              <Wrench className="h-6 w-6 text-amber-400" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">Installation-minded support</h3>
              <p className="mt-2 leading-7 text-slate-200">Plan machine selection around your workshop layout and production goals.</p>
            </div>
          </aside>
        </div>

        <footer className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold tracking-[0.2em] text-white">ARTITECT MACHINERY</p>
          <p>Double folding machines and sheet metal folding solutions for modern fabrication.</p>
        </footer>
      </div>
    </section>
  )
}

export default ContactSection
