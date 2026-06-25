import { useEffect, useRef } from "react";
import { ShieldCheck, MapPin, FileCheck2, Handshake } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const points = [
  {
    icon: MapPin,
    title: "Based in China, close to factories",
    desc: "Our team is located in Yiwu and works directly with manufacturing clusters across Zhejiang, Jiangsu, Guangdong and Fujian.",
  },
  {
    icon: ShieldCheck,
    title: "Documented supplier vetting",
    desc: "Business license, factory address, production lines, certifications and export track record are checked before quoting.",
  },
  {
    icon: FileCheck2,
    title: "Inspection reports, not promises",
    desc: "Every order receives written QC reports with photos, measurements and AQL results. You decide whether to release the balance.",
  },
  {
    icon: Handshake,
    title: "Transparent fees, no hidden margins",
    desc: "You see the original supplier price. We are paid a clear service fee, not a commission hidden in the unit cost.",
  },
];

const TrustPoints = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p
              id="trust-points-eyebrow"
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3"
            >
              Why Buyers Trust Us
            </p>
            <h2
              id="trust-points-title"
              className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight"
            >
              A sourcing partner that works the way professional buyers work
            </h2>
            <p
              id="trust-points-desc"
              className="mt-4 text-[#475569] text-base md:text-lg leading-relaxed"
            >
              We aim to be the same kind of partner that a senior buyer would
              hire internally: methodical, documented, and accountable at every
              step.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#0F766E]/10 text-[#0F766E] shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B2545]">{title}</h3>
                    <p className="mt-1 text-sm text-[#475569] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#D9E2EC] aspect-[3/4]">
              <img
                alt="QC inspector checking products"
                className="w-full h-full object-cover"
                data-strk-img-id="trust-image-qc-7e2b1a"
                data-strk-img="[trust-points-desc] [trust-points-title] QC inspector checking products in factory"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-[#D9E2EC] aspect-square">
                <img
                  alt="Factory production line"
                  className="w-full h-full object-cover"
                  data-strk-img-id="trust-image-factory-9a4cd2"
                  data-strk-img="[trust-points-title] modern factory production line in China"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-[#D9E2EC] aspect-square">
                <img
                  alt="Cargo containers at port"
                  className="w-full h-full object-cover"
                  data-strk-img-id="trust-image-port-4f10cc"
                  data-strk-img="[trust-points-title] cargo containers at China port ready for export"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#D9E2EC]">
          {[
            { value: "10+", label: "Years sourcing from China" },
            { value: "400+", label: "Buyers served worldwide" },
            { value: "30+", label: "Product categories" },
            { value: "98%", label: "On-time shipment rate" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#0B2545]">{stat.value}</p>
              <p className="mt-1 text-sm text-[#475569]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
