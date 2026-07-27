import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import InquiryForm from "@/components/shared/InquiryForm";
import HelmetSEO from "@/components/shared/HelmetSEO";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ssourcingchina.com",
    href: "mailto:hello@ssourcingchina.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+86 138 1234 5678",
    href: "tel:+8613812345678",
  },
  {
    icon: MapPin,
    label: "Office Locations",
    value: "Shenzhen & Yiwu, China",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 business hours",
    href: null,
  },
];

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <HelmetSEO
        title="Contact | Get a Free Sourcing Quote | SSourcing China"
        description="Contact SSourcing China for a free sourcing quote. We help global buyers find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping."
      />

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-slate-300">
              Send us your product requirements and we will respond with a clear sourcing plan and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
              <p className="mt-4 text-slate-600">
                Whether you are ready to place an order or still exploring options, our team is here to help.
              </p>
              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-slate-900 hover:text-blue-700">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <img
                  data-strk-img-id="contact-office-img-5a7b9d"
                  data-strk-img="[contact-heading] [contact-subheading]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="SSourcing China office and team"
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Request a free sourcing quote</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
