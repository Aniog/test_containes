import { Mail, PhoneCall } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="bg-stone-950 px-6 py-16 md:px-10 md:py-24 xl:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
            Start the conversation
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Looking for the right double folding machine for your production line?
          </h2>
          <p className="text-base leading-7 text-slate-300 md:text-lg">
            Tell us about your material range, production goals, and preferred workflow. We will help guide you toward the most suitable ARTITECT MACHINERY solution.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:sales@artitectmachinery.com"
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6 text-white transition hover:bg-slate-950/70"
          >
            <Mail className="h-6 w-6 text-amber-300" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Email
            </p>
            <p className="mt-2 text-lg font-medium text-white">sales@artitectmachinery.com</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Send project details and machine requirements.</p>
          </a>

          <a
            href="tel:+1-800-284-7843"
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6 text-white transition hover:bg-slate-950/70"
          >
            <PhoneCall className="h-6 w-6 text-amber-300" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Phone
            </p>
            <p className="mt-2 text-lg font-medium text-white">+1 (800) 284-7843</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Speak with a specialist about workflow fit and capacity.</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
