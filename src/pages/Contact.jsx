import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/sections/PageHero.jsx";
import InquiryForm from "@/components/sections/InquiryForm.jsx";

const Contact = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    let frame;
    if (mapRef.current) {
      frame = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, mapRef.current);
      });
    }
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote, or just ask a question"
        subtitle="Email is the fastest way to reach us. We answer every inquiry in English within one business day (China Standard Time, UTC+8). No obligation, no follow-up spam."
      />

      <section ref={mapRef} className="bg-white">
        <div className="container-page section-pad">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2
                id="contact-form-title"
                className="text-2xl md:text-3xl font-bold text-ink-900 tracking-tight"
              >
                Tell us what you're sourcing
              </h2>
              <p className="mt-2 text-base text-ink-700">
                The more detail you can share (target quantity, materials,
                reference links or photos), the more useful our reply can be.
              </p>
              <div className="mt-6">
                <InquiryForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              <h2
                id="contact-direct-title"
                className="text-2xl md:text-3xl font-bold text-ink-900 tracking-tight"
              >
                Reach us directly
              </h2>
              <p className="mt-2 text-base text-ink-700">
                If you already know what you need, the channels below go
                straight to the right team.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        General inquiries
                      </p>
                      <a
                        href="mailto:hello@ssourcing.cn"
                        className="text-sm text-brand-600 hover:text-brand-700"
                      >
                        hello@ssourcing.cn
                      </a>
                    </div>
                  </div>
                </li>
                <li className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-600">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        WhatsApp / WeChat
                      </p>
                      <p className="text-sm text-ink-700">
                        +86 138 0000 0000 (Mon–Sat, 9:00–18:00 CST)
                      </p>
                    </div>
                  </div>
                </li>
                <li className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-600">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        Office line
                      </p>
                      <p className="text-sm text-ink-700">
                        +86 574 0000 0000
                      </p>
                    </div>
                  </div>
                </li>
                <li className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-600">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        Office address
                      </p>
                      <p className="text-sm text-ink-700">
                        Room 1208, Building A, Central Business District,
                        Ningbo, Zhejiang 315000, China
                      </p>
                    </div>
                  </div>
                </li>
                <li className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-600">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        Working hours
                      </p>
                      <p className="text-sm text-ink-700">
                        Monday – Saturday, 9:00 – 18:00 CST
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <div
                className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl border border-ink-200 bg-ink-100"
                data-strk-bg-id="contact-map-bg"
                data-strk-bg="Ningbo Zhejiang China office business district city skyline"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
