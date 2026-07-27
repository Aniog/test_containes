import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import InquiryForm from '@/components/InquiryForm'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Locations',
    lines: ['Shenzhen, Guangdong, China', 'Yiwu, Zhejiang, China'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@ssourcingchina.com'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+86 755 1234 5678', '+86 579 8765 4321'],
  },
  {
    icon: Clock,
    title: 'Response Time',
    lines: ['Quotes within 24 business hours'],
  },
]

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Contact SSourcing China
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Ready to source from China? Send us your requirements and we will get back to you quickly.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <InquiryForm embedded />
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <div className="mt-3 space-y-1 text-sm text-slate-600">
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                )
              })}

              <div
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200"
                data-strk-bg-id="contact-office-bg-9g8h7i"
                data-strk-bg="[contact-subtitle] [contact-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
