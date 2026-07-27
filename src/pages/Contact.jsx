import React, { useEffect, useRef } from "react";
import {
  Mail,
  PhoneCall,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Linkedin,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/site/PageHeader";
import InquiryForm from "@/components/forms/InquiryForm";
import StrkImage from "@/components/site/StrkImage";
import Faq from "@/components/site/Faq";
import { faqs } from "@/data/site";

const Contact = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Contact"
        title="Send a brief. We will reply within one business day."
        subtitle="A short description is enough — a spec sheet, a reference product or a sketch is even better. We sign NDAs on request. We work in English, Spanish, German and Chinese."
        primaryCtaLabel={null}
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Direct contact</span>
              <h2
                id="contact-direct-title"
                className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]"
              >
                Reach the right person, not a contact form.
              </h2>
              <p
                id="contact-direct-subtitle"
                className="mt-4 text-[15.5px] leading-relaxed text-ink-600"
              >
                We answer emails and messages during Shenzhen business
                hours (UTC+8). For urgent inspection or shipping issues on
                a live PO, our after-hours number is shared with active
                clients.
              </p>

              <div className="mt-8 space-y-4 text-[15px] text-ink-700">
                <a
                  href="mailto:hello@ssourcing-china.com"
                  className="flex items-start gap-3 rounded-md border border-surface-200 bg-surface-50 p-4 hover:border-ink-900"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-ink-900">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                      Email
                    </p>
                    <p className="font-semibold text-ink-900">
                      hello@ssourcing-china.com
                    </p>
                    <p className="text-[13px] text-ink-500">
                      Replies within one business day
                    </p>
                  </span>
                </a>
                <a
                  href="tel:+8675588881234"
                  className="flex items-start gap-3 rounded-md border border-surface-200 bg-surface-50 p-4 hover:border-ink-900"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-ink-900">
                    <PhoneCall className="h-4 w-4" />
                  </span>
                  <span>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                      Phone · WeChat · WhatsApp
                    </p>
                    <p className="font-semibold text-ink-900">
                      +86 755 8888 1234
                    </p>
                    <p className="text-[13px] text-ink-500">
                      Mon–Fri, 09:00–18:30 (UTC+8)
                    </p>
                  </span>
                </a>
                <div className="flex items-start gap-3 rounded-md border border-surface-200 bg-surface-50 p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-ink-900">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                      Office
                    </p>
                    <p className="font-semibold text-ink-900">
                      12F, Saige Plaza, Huaqiang North
                    </p>
                    <p className="text-[13px] text-ink-500">
                      Shenzhen 518031, China
                    </p>
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-surface-200 bg-surface-50 p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-ink-900">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <span>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                      LinkedIn
                    </p>
                    <p className="font-semibold text-ink-900">
                      /company/ssourcing-china
                    </p>
                    <p className="text-[13px] text-ink-500">
                      Case studies, team updates
                    </p>
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <span className="eyebrow">Operating hours</span>
                <ul className="mt-3 space-y-2 text-[14.5px] text-ink-700">
                  <li className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-ink-500" />
                    Shenzhen · Mon–Fri 09:00–18:30 (UTC+8)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageCircle className="h-4 w-4 text-ink-500" />
                    After-hours line for active PO issues
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-ink-500" />
                    NDA on request before reviewing your brief
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm idPrefix="contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-50">
        <div className="container-x">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="eyebrow">Visit</span>
              <h2
                id="contact-visit-title"
                className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]"
              >
                You are welcome to come and walk the floors with us.
              </h2>
              <p
                id="contact-visit-subtitle"
                className="mt-4 text-[15.5px] leading-relaxed text-ink-600"
              >
                Several of our clients visit Shenzhen or Yiwu once or twice
                a year. We set up factory visits, sample reviews and
                meetings with existing partners in the same trip.
              </p>
              <p className="mt-4 text-[14.5px] text-ink-600">
                Tell us the dates when you plan to come and we will draft an
                itinerary.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-xl border border-surface-200">
                <StrkImage
                  imgId="contact-office-img-7a4b1d"
                  query="[contact-visit-subtitle] [contact-visit-title]"
                  ratio="16x9"
                  width={1100}
                  alt="Shenzhen skyline at dusk"
                  imgClassName="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]">
                Before you reach out
              </h2>
            </div>
            <div className="md:col-span-8">
              <Faq items={faqs} idPrefix="contact-faq" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
