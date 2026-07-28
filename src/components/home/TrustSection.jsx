import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ShieldCheck, FileCheck2, Languages, Clock4, Camera, Award } from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Independent on-site presence",
    body: "Our auditors and QC inspectors visit factories in person, not by email. Photos and signed checklists go with every report.",
  },
  {
    icon: FileCheck2,
    title: "Transparent pricing",
    body: "We charge our clients directly and do not take commissions from factories. What we quote is what you pay.",
  },
  {
    icon: Languages,
    title: "Communication in your language",
    body: "Your account manager writes and speaks in English, Spanish, French, German, or Arabic — and translates for the factory.",
  },
  {
    icon: Clock4,
    title: "Reports within 24 hours",
    body: "Inspection and audit reports are sent the same day they are completed, with clear pass/fail conclusions.",
  },
  {
    icon: Camera,
    title: "Photo and video evidence",
    body: "Every inspection includes dated photos of the lot, the line, the packing, and the load — so you can verify remotely.",
  },
  {
    icon: Award,
    title: "Compliance support",
    body: "We help identify the right certifications (CE, FCC, RoHS, REACH, FDA, ISO) and coordinate testing before production.",
  },
];

export default function TrustSection() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why SSourcing China"
          title="Built for buyers who can't be in China every week"
          subtitle="Six reasons overseas clients keep working with us, order after order."
          align="center"
          className="mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="card p-6">
                <div className="w-10 h-10 rounded-md bg-primary-light text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
