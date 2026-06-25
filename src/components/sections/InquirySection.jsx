import { Mail, Phone, MapPin, Clock } from "lucide-react";
import InquiryForm from "./InquiryForm";
import SectionHeader from "./SectionHeader";

export default function InquirySection({ withHeader = true, id = "inquiry" }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {withHeader && (
          <SectionHeader
            eyebrow="Get a Free Sourcing Quote"
            title="Tell us what you'd like to source"
            description="Share a few details about your product, target quantity, and timeline. A senior sourcing specialist will reply within one business day with an honest assessment."
          />
        )}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <InquiryForm />
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-brand text-white p-6 shadow-sm">
              <h4 className="text-base font-semibold">Talk to us directly</h4>
              <p className="mt-2 text-sm text-white/80">
                Prefer email or messaging? Reach the sourcing team during China business hours.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-white/70" />
                  <span>hello@ssourcingchina.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-white/70" />
                  <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-white/70" />
                  <span>Yiwu · Shenzhen · Guangzhou, China</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-white/70" />
                  <span>Mon–Sat, 09:00–18:00 GMT+8</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-surface border border-line p-6 shadow-sm">
              <h4 className="text-base font-semibold text-ink">What you'll get back</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>An honest assessment of feasibility, lead time, and ballpark pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>2–3 suggested next steps tailored to your product and order size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>A clear note on whether we are the right partner — or who else to talk to</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
