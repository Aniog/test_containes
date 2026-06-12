import { Mail, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ivory py-16 text-graphite md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-steel text-white shadow-soft lg:grid lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-widest text-brass">Start a conversation</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Find the right folding machine for your production line.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Tell ARTITECT MACHINERY about your sheet thickness, working length, product type, and production targets. We will help you identify the best-fit double folder or metal folding machine.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:sales@artitectmachinery.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-7 py-4 font-bold text-graphite transition hover:bg-white">
                <Mail className="h-5 w-5" aria-hidden="true" />
                Email Sales
              </a>
              <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white transition hover:border-brass hover:text-brass">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Us
              </a>
            </div>
          </div>

          <div className="bg-graphite p-8 text-white sm:p-12 lg:p-14">
            <h3 className="text-2xl font-black tracking-tight text-white">Quote checklist</h3>
            <ul className="mt-6 space-y-4 text-white/80">
              {['Material type and thickness', 'Desired working length', 'Daily production volume', 'Main product profiles', 'Automation preferences'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-brass" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-5 text-white">
              <p className="text-sm font-semibold leading-7 text-white/80">
                Brand focus: double folding machine, double folder, sheet metal folder, sheet metal folding machine, metal folder, metal folder machine, and metal folding machine solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
