import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ChevronDown } from "lucide-react";
import { COMPANY, FAQS } from "@/data/content";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need. We reply within one business day."
        subtitle="Pick the channel that suits you. We respond in English, Spanish, French, German, or Arabic."
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-6">
              <div className="card p-6 md:p-7">
                <h2 className="text-lg font-semibold text-ink mb-4">Direct contact</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-md bg-primary-light text-primary flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-ink font-medium hover:text-primary">
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-md bg-primary-light text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted">Phone</p>
                      <p className="text-ink font-medium">{COMPANY.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-md bg-primary-light text-primary flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted">WhatsApp</p>
                      <p className="text-ink font-medium">{COMPANY.whatsapp}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-md bg-primary-light text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted">Office</p>
                      <p className="text-ink font-medium">{COMPANY.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 md:p-7">
                <h2 className="text-lg font-semibold text-ink mb-4">Office hours</h2>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-ink-soft">
                    <Clock className="w-4 h-4 text-primary" />
                    {COMPANY.hours}
                  </li>
                  <li className="flex items-start gap-2 text-ink-soft">
                    <Globe className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      Languages: <span className="text-ink">{COMPANY.languages.join(", ")}</span>
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-ink-muted mt-4 leading-relaxed">
                  For urgent production issues, the fastest way to reach us is by
                  email or WhatsApp. We monitor both during and outside business hours.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="container-x">
          <div className="max-w-3xl mx-auto mb-10">
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
              Quick answers before you reach out
            </h2>
            <p className="text-base text-ink-soft">
              The questions our team hears most often from first-time clients.
            </p>
          </div>
          <div className="max-w-3xl mx-auto card divide-y divide-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 hover:bg-surface-muted/40 transition-colors"
                  >
                    <span className="text-sm md:text-base font-semibold text-ink pr-2">{f.q}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-ink-muted shrink-0 transition-transform",
                        isOpen && "rotate-180 text-primary"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-ink-soft leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
