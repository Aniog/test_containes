import { useEffect } from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe2, Linkedin } from "lucide-react";
import PageHero from "@/components/shared/PageHero.jsx";
import InquiryForm from "@/components/shared/InquiryForm.jsx";
import CtaBanner from "@/components/shared/CtaBanner.jsx";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ssourcingchina.com",
    href: "mailto:hello@ssourcingchina.com",
    note: "Replies within 1 business day",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+86 138 0000 0000",
    href: "tel:+8613800000000",
    note: "Mon–Sat 9:00–18:00 CST",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Yiwu, Zhejiang, China",
    note: "Visits by appointment",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "SSourcing China",
    href: "https://www.linkedin.com/",
    note: "Follow for updates and case studies",
  },
];

export default function Contact() {
  useEffect(() => {
    document.title =
      "Contact SSourcing China | Get a Free Sourcing Quote";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Contact SSourcing China for a free sourcing quote. Email, WhatsApp, and a contact form. We reply within one business day.",
      );
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content =
        "Contact SSourcing China for a free sourcing quote. Email, WhatsApp, and a contact form.";
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project. We will reply within one business day."
        description="Email, WhatsApp, or the form below. Pick whatever is easiest. We will reply with a sourcing plan, a shortlist, and a clear next step."
      />

      <section className="bg-white">
        <div className="container-x py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                Reach us directly
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">
                For most buyers, the form on the right is the fastest way to start. If
                you have an NDA, a complex spec, or a deadline sooner than two weeks,
                email us directly.
              </p>

              <ul className="mt-6 space-y-3">
                {CHANNELS.map((c) => {
                  const inner = (
                    <>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-surface text-brand-primary">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">
                          {c.label}
                        </span>
                        <span className="block text-sm font-semibold text-brand-ink">{c.value}</span>
                        <span className="block text-xs text-brand-muted">{c.note}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="flex items-start gap-3 rounded-md border border-brand-line bg-white p-4 transition-colors hover:border-brand-primary/50"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-start gap-3 rounded-md border border-brand-line bg-white p-4">
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 rounded-lg border border-brand-line bg-brand-surface p-5">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-primary" />
                  <p className="text-sm font-semibold text-brand-ink">Response time</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  Inquiries submitted before 18:00 CST get a same-day reply on weekdays.
                  Weekend inquiries get a reply by Monday morning.
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-brand-line bg-white p-5">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-brand-primary" />
                  <p className="text-sm font-semibold text-brand-ink">Languages</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  English and Mandarin. For French, German, and Spanish, we work with
                  bilingual partners.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm
                sourcePage="contact"
                title="Get a free sourcing quote"
                description="The more specific you are, the more accurate our first reply. Reference products, target price, and quantity are most useful."
              />

              <div className="mt-6 flex items-start gap-3 rounded-md border border-brand-line bg-white p-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-surface text-brand-primary">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-ink">
                    Prefer to chat first?
                  </p>
                  <p className="text-sm text-brand-muted">
                    Send a short email with your product and we will set up a 20-minute
                    video call with the sourcing lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Or start by reading the process"
        description="If you are not sure whether to use an agent, the 6-step process explains exactly what we do and when."
        primaryLabel="See How It Works"
        primaryTo="/how-it-works"
        secondaryLabel="View Services"
        secondaryTo="/services"
      />
    </>
  );
}
