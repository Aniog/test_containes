import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { SITE } from "@/lib/site-data";
import PageHero from "@/components/site/PageHero";
import InquiryForm from "@/components/site/InquiryForm";

export default function Contact() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about your project. A sourcing specialist will reply within 1 working day with next steps and an indicative quote — no obligation."
        titleId="contact-page-title"
        descId="contact-page-desc"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <aside className="lg:col-span-2 space-y-5">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-navy-900">
                  Talk to our team
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Reach us directly or send your inquiry through the form.
                </p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-navy-700 hover:text-navy-900 font-medium break-all"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                        Phone
                      </p>
                      <p className="text-navy-700 font-medium">{SITE.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                        WhatsApp / WeChat
                      </p>
                      <p className="text-navy-700 font-medium">{SITE.whatsapp}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                        Office
                      </p>
                      <p className="text-slate-800">{SITE.addressShort}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                        Hours
                      </p>
                      <p className="text-slate-800">{SITE.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-navy-50 p-6">
                <h4 className="text-base font-semibold text-navy-900">
                  What to include in your message
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    Product type and key specifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    Target quantity and target price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    Required certifications (CE, FCC, RoHS, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    Destination country and preferred Incoterm
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    Timeline or launch date
                  </li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
