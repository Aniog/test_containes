import { Mail, PhoneCall } from 'lucide-react'

const ContactBanner = () => {
  return (
    <section id="contact" className="bg-brand-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="rounded-[2rem] border border-brand-ink/10 bg-brand-white p-8 shadow-xl shadow-brand-ink/5 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-bronze">
                Start the conversation
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
                Let buyers reach ARTITECT MACHINERY through a clear, professional first impression.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-brand-slate md:text-lg">
                This launch-ready homepage gives your brand a polished digital presence for double folder and sheet metal folding machine enquiries.
              </p>
            </div>

            <div className="grid gap-4 rounded-3xl bg-brand-mist p-6">
              <a
                href="mailto:sales@artitectmachinery.com"
                className="flex items-center gap-4 rounded-2xl bg-brand-white px-5 py-4 text-brand-ink transition hover:bg-brand-ivory"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink text-brand-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-widest text-brand-bronze">
                    Email
                  </span>
                  <span className="block text-base font-semibold">sales@artitectmachinery.com</span>
                </span>
              </a>

              <a
                href="tel:+18005550188"
                className="flex items-center gap-4 rounded-2xl bg-brand-white px-5 py-4 text-brand-ink transition hover:bg-brand-ivory"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink text-brand-white">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-widest text-brand-bronze">
                    Call
                  </span>
                  <span className="block text-base font-semibold">+1 (800) 555-0188</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
