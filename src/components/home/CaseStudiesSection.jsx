import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import strkImgConfig from '@/strk-img-config.json';
import { caseStudies } from '@/data/content';

export default function CaseStudiesSection() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} id="case-studies" className="section section-alt">
      <div className="container-x">
        <SectionHeader
          eyebrow="Case studies"
          title="Real projects, real numbers"
          subtitle="Four short stories of how we worked with importers, brands, and Amazon sellers to solve a specific sourcing problem."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.slice(0, 4).map((cs) => (
            <article key={cs.id} className="card overflow-hidden flex flex-col">
              <div className="relative">
                <img
                  alt={`${cs.industry} — ${cs.headline}`}
                  className="w-full h-52 object-cover"
                  data-strk-img-id={cs.imageId}
                  data-strk-img={cs.image}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-3 left-3">
                  <span className="pill bg-white/95 text-[#0B2545]">{cs.industry}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[17px] font-bold text-[#1A2230] leading-snug">{cs.headline}</h3>
                <p className="mt-2 text-sm text-[#3D4A5C] leading-relaxed line-clamp-3 flex-1">{cs.summary}</p>

                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#EEF1F6] pt-4">
                  {cs.metrics.map((m, i) => (
                    <div key={i}>
                      <p className="text-base font-extrabold text-[#0B2545] leading-tight">{m.value}</p>
                      <p className="text-[11px] text-[#6B7A90] mt-0.5 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/case-studies" variant="secondary" size="md" showArrow>
            See all case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
