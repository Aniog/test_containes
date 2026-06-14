import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe2,
  Linkedin,
  MessageSquare,
  ArrowRight,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero.jsx"
import InquiryForm from "@/components/sections/InquiryForm.jsx"

const OFFICES = [
  {
    city: "Shenzhen (HQ)",
    address: "Room 1808, Tower B, Technology Park, Nanshan District, Shenzhen 518057",
    role: "Sourcing, audits, QC, production follow-up",
  },
  {
    city: "Ningbo",
    address: "Room 705, Trade Center, Haishu District, Ningbo 315000",
    role: "Home goods, kitchenware, packaging coordination",
  },
]

const FAQ = [
  {
    q: "How fast will I get a reply?",
    a: "A senior sourcing manager reads every brief and replies within one business day (China time).",
  },
  {
    q: "Do I need to share my design or product idea?",
    a: "Only the level of detail you are comfortable with. We can start with a category and quantity, and we sign an NDA before sharing sensitive specs with any factory.",
  },
  {
    q: "What if I am not sure what I need yet?",
    a: "That is normal, especially for first-time buyers. Pick 'Not sure' in the service list and tell us a little about your business — we will guide the next step.",
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])
  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to source"
        subtitle="A senior sourcing manager in Shenzhen reads every brief and replies within one business day, in English, with a concrete next step — shortlist, sample plan, or audit recommendation."
        bullets={["Reply in < 1 business day", "Named manager per project", "No obligation"]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="h2">Reach us directly</h2>
              <p className="lead mt-4">
                Prefer email, phone or a video call? Our team is available Monday to
                Friday, 09:00 to 18:00 China time (UTC+8). For urgent requests outside
                hours, write to{" "}
                <a className="text-navy-700 underline" href="mailto:hello@ssourcingchina.com">
                  hello@ssourcingchina.com
                </a>
                .
              </p>

              <div className="mt-6 space-y-4">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="hello@ssourcingchina.com"
                  href="mailto:hello@ssourcingchina.com"
                />
                <ContactItem
                  icon={Phone}
                  label="Phone / WhatsApp"
                  value="+86 755 8888 9999"
                  href="tel:+8675588889999"
                />
                <ContactItem
                  icon={MessageSquare}
                  label="WeChat"
                  value="SSourcing_China"
                />
                <ContactItem
                  icon={Clock}
                  label="Hours"
                  value="Mon-Fri, 09:00-18:00 China time (UTC+8)"
                />
                <ContactItem
                  icon={Globe2}
                  label="Languages"
                  value="English · Mandarin · Spanish"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-navy-500 hover:text-navy-700"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <Link to="/case-studies" className="btn-ghost">
                  See case studies <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <InquiryForm sourcePage="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Our offices</p>
              <h2 className="h2 mt-3">Two China offices, one English-speaking team</h2>
              <p className="lead mt-4">
                Our head office in Shenzhen handles most sourcing, audits and QC. Our
                Ningbo office supports home goods, kitchenware and packaging-heavy
                projects.
              </p>
              <ul className="mt-6 space-y-4">
                {OFFICES.map((o) => (
                  <li
                    key={o.city}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="icon-bubble-navy">
                        <MapPin className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{o.city}</h3>
                        <p className="mt-1 text-sm text-slate-600">{o.address}</p>
                        <p className="mt-2 text-xs text-slate-500">{o.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="card">
                  <h3 className="text-base font-semibold text-slate-900">
                    Sales & new inquiries
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    For first-time buyers, new product projects, and shortlist requests.
                  </p>
                  <a
                    href="mailto:hello@ssourcingchina.com"
                    className="mt-3 inline-block text-sm font-semibold text-navy-700 hover:text-navy-500"
                  >
                    hello@ssourcingchina.com
                  </a>
                </div>
                <div className="card">
                  <h3 className="text-base font-semibold text-slate-900">
                    Existing clients
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    For ongoing orders, sample status, or production updates, contact
                    your dedicated manager directly.
                  </p>
                  <a
                    href="mailto:projects@ssourcingchina.com"
                    className="mt-3 inline-block text-sm font-semibold text-navy-700 hover:text-navy-500"
                  >
                    projects@ssourcingchina.com
                  </a>
                </div>
                <div className="card">
                  <h3 className="text-base font-semibold text-slate-900">
                    Press & partnerships
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Media requests, podcast interviews, and partnership opportunities.
                  </p>
                  <a
                    href="mailto:press@ssourcingchina.com"
                    className="mt-3 inline-block text-sm font-semibold text-navy-700 hover:text-navy-500"
                  >
                    press@ssourcingchina.com
                  </a>
                </div>
                <div className="card">
                  <h3 className="text-base font-semibold text-slate-900">Careers</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    We are always interested in hearing from senior sourcing managers,
                    QC engineers, and category specialists.
                  </p>
                  <a
                    href="mailto:careers@ssourcingchina.com"
                    className="mt-3 inline-block text-sm font-semibold text-navy-700 hover:text-navy-500"
                  >
                    careers@ssourcingchina.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="h2 mt-3">Quick answers to common questions</h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {FAQ.map((f) => (
              <div key={f.q} className="p-6">
                <h3 className="text-base font-semibold text-slate-900">{f.q}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactItem({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <span className="icon-bubble-navy">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-slate-900">{value}</p>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} className="block transition-colors hover:border-navy-500">
        {inner}
      </a>
    )
  }
  return inner
}
