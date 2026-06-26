import { Mail, Phone, MapPin, Clock, MessageSquare, Globe } from "lucide-react"
import PageHero from "@/components/sections/PageHero"
import InquiryForm from "@/components/sections/InquiryForm"
import { SITE } from "@/lib/content"

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: SITE.whatsapp,
    href: `https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}`,
  },
  {
    icon: Clock,
    label: "Working hours",
    value: SITE.hours,
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you want to source. We will review your requirements and reply within one business day with a clear plan and quote — no obligation, no pressure."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Left: contact info */}
            <div>
              <h2 className="text-2xl font-bold text-ink">
                Talk to a sourcing specialist
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-body">
                Prefer to reach us directly? Use any of the channels below. For
                new projects, the form on the right gives us the detail we need
                to give you a useful first response.
              </p>

              <div className="mt-8 space-y-4">
                {CONTACT_METHODS.map((m) => {
                  const Icon = m.icon
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-border-soft bg-surface p-5 transition-colors hover:border-brand">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                          {m.label}
                        </p>
                        <p className="mt-0.5 font-semibold text-ink">
                          {m.value}
                        </p>
                      </div>
                    </div>
                  )
                  return m.href ? (
                    <a
                      key={m.label}
                      href={m.href}
                      className="block"
                      target={m.href.startsWith("http") ? "_blank" : undefined}
                      rel={m.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={m.label}>{content}</div>
                  )
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-border-soft bg-surface p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Office
                    </p>
                    <p className="mt-0.5 font-semibold text-ink">
                      {SITE.address}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3 border-t border-border-soft pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Globe className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Where we ship
                    </p>
                    <p className="mt-0.5 font-semibold text-ink">
                      40+ countries worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
