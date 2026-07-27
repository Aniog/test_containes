import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import InquiryForm from '@/components/shared/InquiryForm'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'inquiry@ssourcingchina.com',
    note: 'Best for detailed briefs — attach specs, photos, or links.',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 755 8610 2288',
    note: 'Mon–Fri, 9:00–18:00 China Standard Time (GMT+8).',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp / WeChat',
    value: '+86 138 2655 8890',
    note: 'Fastest for quick questions and scheduling calls.',
  },
]

const Contact = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="contact-bg-5e91a7"
          data-strk-bg="[contact-subtitle] [contact-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
              Contact Us
            </p>
            <h1 id="contact-title" className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Get a free sourcing quote
            </h1>
            <p id="contact-subtitle" className="mt-5 text-lg leading-relaxed text-slate-300">
              Tell us what you want to source from China. A sourcing specialist —
              not a salesperson — will reply within one business day with a concrete
              plan and a transparent quotation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                align="left"
                eyebrow="Reach Us Directly"
                title="Talk to the team in Shenzhen"
                description="Prefer to discuss first? Contact us through any channel below, or simply fill in the form — it reaches the same specialists."
              />
              <div className="mt-8 space-y-5">
                {contactMethods.map((method) => (
                  <div key={method.label} className="flex gap-4 rounded-xl border border-line bg-paper p-5">
                    <div className="inline-flex h-fit rounded-lg bg-brand-50 p-3">
                      <method.icon className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{method.label}</p>
                      <p className="mt-0.5 text-base font-semibold text-ink">{method.value}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-body">{method.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-line bg-white p-5">
                <div className="flex gap-4">
                  <div className="inline-flex h-fit rounded-lg bg-brand-50 p-3">
                    <MapPin className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Office</p>
                    <p className="mt-0.5 text-base font-semibold text-ink">
                      Room 1206, Tower B, Nanshan iPark
                    </p>
                    <p className="text-base text-slate-body">Shenzhen, Guangdong, China 518057</p>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                      <Clock className="h-4 w-4" /> Mon–Fri 9:00–18:00 CST (GMT+8)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            What happens after you submit?
          </h2>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-3 md:gap-8">
            {[
              {
                step: '1',
                title: 'Review',
                text: 'A sourcing specialist reviews your brief and may ask 2–3 clarifying questions by email.',
              },
              {
                step: '2',
                title: 'Proposal',
                text: 'Within one business day you receive a proposed approach, timeline, and itemized quotation.',
              },
              {
                step: '3',
                title: 'Your decision',
                text: 'You decide whether to proceed. No obligation, no follow-up pressure — ever.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
