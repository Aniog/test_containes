import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock4, MessageSquare, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero.jsx";
import InquiryForm from "@/components/shared/InquiryForm.jsx";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ssourcingchina.com",
    href: "mailto:info@ssourcingchina.com",
    note: "We typically reply within one business day.",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+86 755 0000 0000",
    href: "tel:+8675500000000",
    note: "Mon–Fri, 9:00–18:00 China Standard Time.",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Shenzhen, Guangdong, China",
    href: null,
    note: "With partner coverage in Yiwu and Guangzhou.",
  },
  {
    icon: Clock4,
    label: "Working Hours",
    value: "Mon – Fri · 09:00 – 18:00 CST",
    href: null,
    note: "We schedule calls in your time zone where possible.",
  },
];

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="page-fade">
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you need to source"
        subtitle="Fill in the form below and our sourcing team will get back to you within one business day — with a shortlist of verified suppliers, sample plans, and a clear next step."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#0F172A] leading-tight">
                We reply within one business day.
              </h2>
              <p className="mt-4 text-[15.5px] text-[#475569] leading-relaxed">
                Whether you are at the idea stage or already working with a Chinese supplier, we are happy to talk through your project. No commitment, no obligation.
              </p>

              <div className="mt-8 space-y-6">
                {CONTACT_INFO.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#0E2A47]/5 text-[#0E2A47]">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="mt-1 block text-[15.5px] font-semibold text-[#0F172A] hover:text-[#C8553D]">
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[15.5px] font-semibold text-[#0F172A]">{c.value}</p>
                      )}
                      <p className="mt-1 text-[13.5px] text-[#64748B]">{c.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-[#E5E1D8] overflow-hidden">
                <img
                  alt="Sourcing team meeting in a Shenzhen office"
                  data-strk-img-id="contact-office-meeting-3b7c81"
                  data-strk-img="[contact-team-subtitle] [contact-team-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 bg-[#F6F1EA]">
                  <p id="contact-team-title" className="text-[14px] font-semibold text-[#0F172A]">Talk to our sourcing team</p>
                  <p id="contact-team-subtitle" className="mt-1 text-[13px] text-[#475569]">Schedule a 30-minute video call to walk through your project.</p>
                  <a href="mailto:info@ssourcingchina.com?subject=Schedule%20a%20call" className="mt-3 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#C8553D] hover:text-[#B44A33]">
                    <MessageSquare className="h-4 w-4" /> Request a call
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0E2A47] text-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                Not ready to send a full inquiry yet?
              </h2>
              <p className="mt-4 text-[16px] text-white/80 max-w-xl">
                Send us a short email describing your project. We will tell you honestly whether we are the right partner for it.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <a href="mailto:info@ssourcingchina.com" className="btn-primary">
                Email us <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/how-it-works" className="btn-ghost-light">
                Read our process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}