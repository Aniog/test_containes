import React from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHeader from "../components/site/PageHeader";
import InquiryForm from "../components/site/InquiryForm";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@ssourcing.cn",
    sub: "We reply within one business day.",
    href: "mailto:hello@ssourcing.cn",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    detail: "+86 138 0000 0000",
    sub: "Mon–Fri, 9:00–18:00 CST",
    href: "tel:+8613800000000",
  },
  {
    icon: MessageCircle,
    title: "WeChat",
    detail: "ssourcing-china",
    sub: "Add us for quick questions.",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: "Yiwu, Zhejiang, China",
    sub: "Branches in Shenzhen and Ningbo.",
  },
];

export default function Contact() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you want to source"
        description="Share your specs and target price. We respond with a sourcing plan, supplier shortlist and indicative quotation — usually within one business day."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4 space-y-5">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const Inner = (
                  <div className="rounded-xl border border-line bg-white p-5 hover:shadow-card transition h-full">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-50 text-brand-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-brand-700">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-base font-semibold text-brand-800">
                      {c.detail}
                    </p>
                    <p className="mt-1 text-sm text-ink-700">{c.sub}</p>
                  </div>
                );
                return c.href ? (
                  <a key={c.title} href={c.href} className="block">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.title}>{Inner}</div>
                );
              })}

              <div className="rounded-xl border border-line bg-surface-50 p-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-50 text-brand-700">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-brand-700">
                  Working hours
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  Monday–Friday, 9:00–18:00 China Standard Time (UTC+8). For
                  urgent issues during production we cover extended hours.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-800 tracking-tight">
                Sourcing inquiry
              </h2>
              <p className="mt-2 text-ink-700">
                The more detail you share, the more useful our first reply can
                be. All fields except name, email and product description are
                optional.
              </p>
              <div className="mt-6">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
