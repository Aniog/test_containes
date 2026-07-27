import { useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Clock3, MessageSquare } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquiryForm from '@/components/shared/InquiryForm'

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-200">Contact</p>
          <h1 id="contact-hero-title" className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Get a Free Sourcing Quote
          </h1>
          <p id="contact-hero-subtitle" className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Tell us what you want to source. A sourcing specialist — not a bot — will review your brief and reply within one business day with next steps and a fee proposal.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Contact details</h2>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    <div>
                      <p className="font-medium text-slate-900">Shenzhen Office</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                        Room 1205, Huarun Building, Nanshan District, Shenzhen, Guangdong, China
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary-600" />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a href="mailto:inquiry@ssourcingchina.com" className="text-sm text-primary-600 hover:text-primary-700">
                        inquiry@ssourcingchina.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary-600" />
                    <div>
                      <p className="font-medium text-slate-900">Phone / WhatsApp</p>
                      <p className="text-sm text-slate-600">+86 755 8602 4488</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 shrink-0 text-primary-600" />
                    <div>
                      <p className="font-medium text-slate-900">Office hours</p>
                      <p className="text-sm text-slate-600">Mon–Fri, 9:00–18:00 (GMT+8)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">What happens after you submit</h2>
                <ol className="mt-5 space-y-4">
                  {[
                    'A sourcing specialist reviews your product brief within one business day.',
                    'We reply with initial questions and a proposed sourcing approach.',
                    'You receive a written fee proposal before any paid work begins.',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-800 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <img
                  alt="SSourcing China office team in Shenzhen"
                  className="aspect-[16/9] w-full object-cover"
                  data-strk-img-id="contact-office-v4w5x6"
                  data-strk-img="[contact-hero-subtitle] [contact-hero-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Sourcing inquiry form</h2>
                    <p className="text-sm text-slate-600">Fields marked * are required</p>
                  </div>
                </div>
                <div className="pt-6">
                  <InquiryForm source="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
