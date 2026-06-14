import { useEffect, useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Globe2,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'

const channels = [
  {
    icon: Mail,
    title: 'Email',
    value: '[email protected]',
    href: 'mailto:[email protected]',
    sub: 'Replies within 1 business day',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp / WeChat',
    value: '+86 138 0000 0000',
    href: 'https://wa.me/8613800000000',
    sub: 'Fastest for urgent or time-sensitive projects',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+86 755 8888 9999',
    href: 'tel:+8675588889999',
    sub: 'Mon–Fri, 9:00–18:00 (GMT+8)',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Shenzhen, China',
    href: '#',
    sub: 'Building 8, Innovation Park, Nanshan District',
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Contact"
        headline="Tell us about your project — we reply within 1 business day"
        subline="Share a short brief using the form, or reach us by email, WhatsApp, or phone. The more you share — specs, target price, timeline, certifications — the faster we can come back with a written scope."
        bgQuery="[page-hero-headline] [page-hero-subline]"
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              {channels.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.title}
                    href={c.href}
                    className="block rounded-2xl border border-hairline bg-white p-5 shadow-card hover:shadow-card-hover transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="icon-tile">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
                          {c.title}
                        </div>
                        <div className="mt-1 text-lg font-semibold text-brand-navy">
                          {c.value}
                        </div>
                        <div className="text-sm text-ink-soft mt-0.5">{c.sub}</div>
                      </div>
                    </div>
                  </a>
                )
              })}

              <div className="rounded-2xl border border-hairline bg-white p-5 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="icon-tile">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
                      Office hours
                    </div>
                    <div className="mt-1 text-ink leading-relaxed text-sm">
                      Mon–Fri: 9:00 – 18:00 (GMT+8)
                      <br />
                      Sat–Sun: Closed (we still reply to messages)
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-hairline bg-white p-5 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="icon-tile">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
                      Languages
                    </div>
                    <div className="mt-1 text-ink leading-relaxed text-sm">
                      English · 中文 · basic Deutsch / Français
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm sourcePage="contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow">What happens next</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
              After you send the brief
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                t: 'Reply within 1 business day',
                d: 'A sourcing manager reads your brief and replies in English (or 中文) with next steps and any clarifying questions.',
              },
              {
                t: 'Written scope and fee',
                d: 'We send a written proposal: which services are in scope, the deliverables, the fee, and the timeline. Nothing starts until you sign.',
              },
              {
                t: 'Kick-off',
                d: 'Once the scope is signed, we open a project folder, share the team, and start with the shortlist and audit.',
              },
            ].map((s, i) => (
              <div
                key={s.t}
                className="rounded-2xl border border-hairline bg-white p-6 shadow-card"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Step 0{i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-brand-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
