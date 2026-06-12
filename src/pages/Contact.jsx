import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import PageHeader from '../components/shared/PageHeader';
import InquiryForm from '../components/shared/InquiryForm';
import { Mail, Phone, MapPin, Clock, MessagesSquare } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you need to source from China. A specialist replies within one business day with shortlisted factories, indicative quotations and a clear plan."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-card">
                <h3 className="text-lg font-semibold text-slate-900">
                  Talk to a sourcing specialist
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Prefer a quick chat? Reach out by email or WhatsApp and we
                  will set up a 20-minute call.
                </p>

                <ul className="mt-5 space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-0.5 text-brand" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-500">Email</span>
                      <a className="font-medium text-slate-900 hover:text-brand" href="mailto:hello@ssourcing-china.com">
                        hello@ssourcing-china.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 mt-0.5 text-brand" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-500">Phone / WhatsApp</span>
                      <span className="font-medium text-slate-900">+86 137 0000 0000</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessagesSquare className="h-5 w-5 mt-0.5 text-brand" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-500">WeChat</span>
                      <span className="font-medium text-slate-900">ssourcing_china</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-0.5 text-brand" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-500">Offices</span>
                      <span className="font-medium text-slate-900">Yiwu &amp; Shenzhen, China</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 mt-0.5 text-brand" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-500">Hours</span>
                      <span className="font-medium text-slate-900">Mon–Sat, 9:00–18:00 CST (UTC+8)</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-card">
                <img
                  alt="SSourcing China team at the office in Yiwu"
                  className="block w-full h-auto"
                  data-strk-img-id="contact-team-office-4f2a91"
                  data-strk-img="[contact-office-caption] sourcing team office china"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <p
                  id="contact-office-caption"
                  className="px-4 py-3 text-xs text-slate-500"
                >
                  Our sourcing and QC team at the Yiwu office.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Send us your sourcing inquiry
              </h2>
              <p className="mt-2 text-slate-600">
                The more detail you share — product specs, target price,
                quantity and timeline — the more useful our first reply will be.
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
