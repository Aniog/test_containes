import { Mail, PhoneCall } from 'lucide-react'

function ContactBanner() {
  return (
    <section id="contact" className="bg-brand-mist py-16 text-brand-copy md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="rounded-3xl border border-brand-line bg-white p-8 shadow-lg shadow-slate-950/5 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-champagne-deep">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-copy md:text-4xl">
              Ready to discuss your next folding machine solution?
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-soft md:text-lg">
              Tell us what kind of double folder or sheet metal folding machine you
              need, and we will help guide you toward the right ARTITECT MACHINERY
              product direction.
            </p>
          </div>

          <div className="mt-8 grid gap-4 text-sm text-brand-copy lg:mt-0 lg:min-w-[250px]">
            <a
              className="flex items-center gap-3 rounded-2xl border border-brand-line bg-brand-mist px-5 py-4 font-medium transition hover:border-brand-champagne-deep"
              href="mailto:sales@artitectmachinery.com"
            >
              <Mail className="h-5 w-5 text-brand-champagne-deep" />
              sales@artitectmachinery.com
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border border-brand-line bg-brand-mist px-5 py-4 font-medium transition hover:border-brand-champagne-deep"
              href="tel:+18005550199"
            >
              <PhoneCall className="h-5 w-5 text-brand-champagne-deep" />
              +1 (800) 555-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
