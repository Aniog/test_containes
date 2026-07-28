import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Globe2,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import InquiryForm from "@/components/shared/InquiryForm";
import strkImgConfig from "@/strk-img-config.json";

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="bg-brand-900 text-white py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            id="contact-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500"
          >
            Contact
          </p>
          <h1
            id="contact-title"
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
          >
            Tell us what you want to source. We'll come back with a real plan.
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-3xl">
            Most first replies go out within four hours during China business
            hours (GMT+8). For urgent projects, mention it in the message.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-ink-200 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-ink-900">
                  Direct contacts
                </h2>
                <ul className="mt-4 space-y-4 text-sm text-ink-700">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-ink-900">Email</div>
                      <a
                        href="mailto:hello@ssourcing.cn"
                        className="text-ink-700 hover:text-brand-800"
                      >
                        hello@ssourcing.cn
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-ink-900">Phone</div>
                      <span className="text-ink-700">+86 755 0000 0000</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-ink-900">WeChat</div>
                      <span className="text-ink-700">ssourcing_cn</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-ink-900">Office</div>
                      <span className="text-ink-700">
                        Nanshan District, Shenzhen
                        <br />
                        Guangdong Province, China
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-800 text-white rounded-lg p-6">
                <div className="flex items-center gap-2 text-accent-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    Business hours
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  Monday – Friday, 09:00 – 18:00 China Standard Time
                  (GMT+8). We typically respond to inquiries within one
                  business day.
                </p>
                <div className="mt-5 flex items-center gap-2 text-white/70 text-xs">
                  <Globe2 className="w-4 h-4" />
                  Operating across Shenzhen, Dongguan, Guangzhou, Hangzhou,
                  Ningbo, and Xiamen.
                </div>
              </div>

              <div className="aspect-[4/3] bg-ink-100 rounded-lg overflow-hidden">
                <img
                  alt="Shenzhen office building and the SSourcing team"
                  data-strk-img-id="contact-photo-2c0f7a"
                  data-strk-img="[contact-eyebrow] [contact-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                align="left"
                eyebrow="Send a brief"
                title="Project inquiry form"
                description="The more we know about your product, quantity, and timing, the more useful our first reply will be. Reference photos or spec sheets are very welcome."
              />
              <div className="mt-8">
                <InquiryForm source="contact_page" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
