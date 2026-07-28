import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  CheckCircle2,
  FileText,
  BadgeCheck,
  Users,
  Globe2,
  Wallet,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import strkImgConfig from "@/strk-img-config.json";

const points = [
  {
    icon: BadgeCheck,
    title: "Pre-vetted supplier database",
    text: "1,200+ factories we have personally visited or audited in Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong.",
  },
  {
    icon: FileText,
    title: "Written reports, not screenshots",
    text: "Every inspection and audit comes with a PDF report: photos, measurements, defect lists, and clear pass/fail recommendations.",
  },
  {
    icon: Users,
    title: "Bilingual project managers",
    text: "Your dedicated PM works in your time zone and writes fluent English. No more chasing WeChat threads at 2 a.m.",
  },
  {
    icon: Wallet,
    title: "Transparent fees",
    text: "Service fees quoted up front. Factory pricing passed through with our cost breakdown so you see the full picture.",
  },
  {
    icon: Globe2,
    title: "Logistics you can track",
    text: "We book with established freight forwarders. You get booking confirmation, container photos, and tracking milestones.",
  },
  {
    icon: CheckCircle2,
    title: "You stay in control",
    text: "We recommend, you decide. We never take commission from the factory, so the advice you get is on your side.",
  },
];

export default function TrustPoints() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-600">
              Why work with us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
              Practical, on-the-ground support — without the agency markup
            </h2>
            <p className="mt-4 text-lg text-ink-700 leading-relaxed">
              We are a focused China sourcing team, not a marketplace and not
              a generalist consultancy. Our pricing is published, our reports
              are written, and our project managers are accountable to you.
            </p>

            <div className="mt-8 aspect-[4/5] bg-ink-100 rounded-lg overflow-hidden">
              <img
                alt="Sourcing manager reviewing inspection report at factory"
                data-strk-img-id="trust-photo-7b1c2a"
                data-strk-img="[trust-section-title] [trust-eyebrow]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            <Link
              to="/case-studies"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-700"
            >
              Read real buyer stories
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-canvas border border-ink-200 rounded-lg p-6 hover:border-brand-100 transition"
              >
                <div className="w-10 h-10 rounded-md bg-brand-100 text-brand-800 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
