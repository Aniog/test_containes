import { Mail, Phone, MapPin, Globe2, Clock } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import InquiryForm from "@/components/shared/InquiryForm";
import { COMPANY } from "@/data/site";
import { FAQS } from "@/data/site";

export default function Contact() {
  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact"
            title="Let's scope your next project"
            description="Send us a brief description of what you'd like to source. We respond within one business day, usually faster."
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <aside className="lg:col-span-5">
            <h2 className="text-lg font-semibold text-brand-900">
              Contact information
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              Prefer email, phone, or a scheduled call? Use whichever channel is
              easiest.
            </p>

            <ul className="mt-6 space-y-5 text-sm">
              <ContactRow
                icon={MapPin}
                label="Head office"
                value={COMPANY.address}
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value={COMPANY.email}
                href={`mailto:${COMPANY.email}`}
              />
              <ContactRow
                icon={Phone}
                label="Phone / WhatsApp"
                value={COMPANY.phone}
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={Globe2}
                label="Service region"
                value="Worldwide buyers, suppliers in mainland China"
              />
              <ContactRow
                icon={Clock}
                label="Office hours"
                value={COMPANY.hours}
              />
            </ul>

            <div className="mt-10 rounded-2xl border border-ink-200 bg-ink-50 p-6">
              <h3 className="text-base font-semibold text-brand-900">
                What to include in your first message
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  Product type and key specs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  Target quantity and timeline
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  Destination country and shipping mode
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  Quality standards and certifications needed
                </li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-brand-900">
                Send us an inquiry
              </h2>
              <p className="mt-1.5 text-sm text-ink-600">
                Required fields are marked with an asterisk. We typically
                respond within one business day.
              </p>
              <div className="mt-6">
                <InquiryForm sourcePage="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quick answers"
            title="Frequently asked questions"
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FAQS.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-ink-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-brand-900">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-900 text-white">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-brand-900">{value}</p>
      </div>
    </div>
  );
  return (
    <li>{href ? <a href={href}>{content}</a> : content}</li>
  );
}