import React from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import InquiryForm from "@/components/ui/InquiryForm";

const Contact = () => {
  return (
    <>
      <section className="bg-paper-soft border-b border-line">
        <div className="container-x py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-600 mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight">
              Tell us about your project. We reply within one working day.
            </h1>
            <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl">
              Send us a short brief using the form, or reach us directly by
              email or phone. A sourcing manager — not a chatbot — will review
              your message and reply.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ContactCard icon={<Mail className="w-5 h-5" />} title="Email" body="hello@ssourcingchina.com" href="mailto:hello@ssourcingchina.com" />
            <ContactCard icon={<Phone className="w-5 h-5" />} title="Phone" body="+86 21 0000 0000" href="tel:+862100000000" />
            <ContactCard icon={<MapPin className="w-5 h-5" />} title="Office" body="Shanghai, China" />
            <ContactCard icon={<Clock className="w-5 h-5" />} title="Hours" body="Mon–Fri, 09:00–18:00 GMT+8" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <InquiryForm
              heading="Send us a sourcing inquiry"
              subheading="The more detail you can share, the more useful our reply will be."
            />
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="border border-line rounded-lg bg-paper-soft p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-ink-900 text-white">
                  <MessageSquare className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold text-ink-900">What happens next</h3>
              </div>
              <ol className="mt-5 space-y-4 text-sm text-ink-700">
                <li>
                  <span className="font-semibold text-ink-900">1. Review:</span> A
                  sourcing manager reads your brief within one working day.
                </li>
                <li>
                  <span className="font-semibold text-ink-900">2. Shortlist:</span> If
                  we can help, we send you 3–5 candidate factories with
                  capabilities and indicative pricing.
                </li>
                <li>
                  <span className="font-semibold text-ink-900">3. Plan:</span> We
                  propose a written project plan with timeline, milestones, and
                  service fees.
                </li>
                <li>
                  <span className="font-semibold text-ink-900">4. Decide:</span> You
                  decide whether to proceed. No commitment until you confirm.
                </li>
              </ol>

              <div className="mt-6 pt-6 border-t border-line">
                <p className="text-xs text-ink-700 leading-relaxed">
                  Already have a Chinese supplier? We can verify them, run
                  inspections, or handle shipping only — no need to use every
                  service.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

const ContactCard = ({ icon, title, body, href }) => {
  const inner = (
    <>
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white border border-line text-ink-900">
        {icon}
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-600 font-semibold">
        {title}
      </p>
      <p className="mt-1 text-sm font-semibold text-ink-900 break-words">{body}</p>
    </>
  );
  const cls =
    "block bg-white border border-line rounded-lg p-5 hover:border-ink-700 transition-colors";
  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
};

export default Contact;