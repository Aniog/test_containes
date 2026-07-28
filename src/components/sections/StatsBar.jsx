import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { TRUST_POINTS } from "@/data/content";

export default function StatsBar() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-primary text-white">
      <div className="container-x py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
          {TRUST_POINTS.map((p) => (
            <div key={p.label} className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold tracking-tight">{p.value}</p>
              <p className="text-xs md:text-sm text-white/70 mt-1">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
