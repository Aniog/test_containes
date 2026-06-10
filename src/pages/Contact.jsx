import InquiryForm from "@/components/InquiryForm"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

const CONTACTS = [
  { icon: Mail, label: "Email", value: "hello@ssourcingchina.com", href: "mailto:hello@ssourcingchina.com" },
  { icon: Phone, label: "Phone", value: "+86 138 0000 0000", href: "tel:+8613800000000" },
  { icon: MessageCircle, label: "WhatsApp / WeChat", value: "+86 138 0000 0000" },
  { icon: MapPin, label: "Office", value: "Yiwu, Zhejiang, China" },
  { icon: Clock, label: "Working hours", value: "Mon–Sat, 9:00–18:00 (GMT+8)" },
]

export default function Contact() {
  return (
    <div>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Get a Free Sourcing Quote
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-3xl">
            Tell us about your product and timeline. A senior sourcing
            specialist will reply within one business day with initial supplier
            options and a clear plan to move forward.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy">Send your inquiry</h2>
            <p className="mt-3 text-slate-600">
              The more detail you share, the more accurate our initial response.
              Anything you send is kept confidential.
            </p>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white border border-border-soft rounded-xl p-6">
              <h3 className="text-lg font-semibold text-navy mb-4">Direct contact</h3>
              <ul className="space-y-4">
                {CONTACTS.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-bg-soft text-blue-action shrink-0">
                      <c.icon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-navy hover:underline font-medium">{c.value}</a>
                      ) : (
                        <p className="text-navy font-medium">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy text-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">What happens next</h3>
              <ol className="space-y-3 text-sm text-slate-200 list-decimal list-inside">
                <li>We confirm your inquiry within one business day.</li>
                <li>A specialist reviews your needs and asks any clarifying questions.</li>
                <li>You receive an initial sourcing plan and timeline at no cost.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
