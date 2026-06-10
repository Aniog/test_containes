import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { industries } from '@/data/siteData.jsx';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const Industries = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="container-artitect">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              id="industries"
              eyebrow="Industries served"
              title="From the workshop to the skyline."
              description="Our machines are trusted across HVAC, architectural, automotive, and custom fabrication — anywhere angle accuracy matters."
            />
            <div
              className="mt-10 aspect-[4/5] bg-steel-100 relative overflow-hidden"
              data-strk-bg-id="industries-bg-7b1d4c"
              data-strk-bg="[industries-title] [industries-eyebrow] architectural metal cladding panels"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1000"
            />
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-steel-200 border border-steel-200">
              {industries.map((industry, i) => (
                <div
                  key={industry.title}
                  id={`industry-${i}`}
                  className="bg-paper p-8 md:p-10 min-h-[200px] flex flex-col justify-between"
                >
                  <div>
                    <div className="font-mono text-[10px] tracking-wider2 uppercase text-accent-600">
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 font-display font-bold text-xl md:text-2xl text-ink-900">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-ink-500 text-sm md:text-base leading-relaxed">
                    {industry.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
