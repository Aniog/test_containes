import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Clock, Globe2 } from "lucide-react";
import { Section, SectionHeader } from "../components/ui/Primitives.jsx";
import InquiryForm from "../components/ui/InquiryForm.jsx";
import { siteConfig } from "../data/site.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    primary: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    secondary: "We reply within 1 business day",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`,
    secondary: "Fastest for urgent questions",
  },
  {
    icon: Phone,
    title: "Phone",
    primary: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    secondary: "Mon–Fri, 9:00–18:00 CST",
  },
];

export default function Contact() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <>
      <section ref={heroRef} className="bg-navy text-white">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="kicker text-accent mb-3">Contact</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Let's talk about what you need to source
            </h1>
            <p className="mt-5 text-lg text-white/80">
              The fastest way to get a useful answer is to fill in the form below. If
              you'd rather talk first, you can email, WhatsApp, or call us directly.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contactCards.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card card-hover flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-md bg-navy text-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted font-semibold">
                    {c.title}
                  </div>
                  <div className="mt-1 text-navy font-semibold group-hover:text-accent transition">
                    {c.primary}
                  </div>
                  <div className="text-xs text-muted mt-1">{c.secondary}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent flex-shrink-0" />
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <SectionHeader
              kicker="Send a brief"
              title="Tell us what you need to source"
              subtitle="The more specific you can be, the more useful our first reply will be. We respond within 1 business day."
            />
            <InquiryForm />
          </div>
          <div className="lg:col-span-5">
            <div className="card">
              <h3 className="text-navy font-semibold text-lg">Our office</h3>
              <div className="mt-4 space-y-3 text-sm text-ink/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-navy font-medium">{siteConfig.address}</div>
                    <div className="text-muted text-xs">On the ground in mainland China since {siteConfig.established}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-navy font-medium">Business hours</div>
                    <div className="text-muted text-xs">{siteConfig.hours}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-navy font-medium">Languages</div>
                    <div className="text-muted text-xs">English, Mandarin Chinese</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-5">
              <h3 className="text-navy font-semibold text-lg">What happens next</h3>
              <ol className="mt-4 space-y-3 text-sm text-ink/80">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center flex-shrink-0">1</span>
                  <span>We review your brief and respond within 1 business day.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center flex-shrink-0">2</span>
                  <span>We schedule a 30-minute call to align on scope and budget.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center flex-shrink-0">3</span>
                  <span>You receive a written quote and a dedicated agent assignment.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
