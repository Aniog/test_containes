import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icons';
import CtaBanner from '@/components/shared/CtaBanner';
import InquiryForm from '@/components/shared/InquiryForm';
import { caseStudies } from '@/data/content';

export default function CaseStudies() {
  const imgRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imgRef.current);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Four real sourcing projects, with real numbers"
        subtitle="A short, honest look at the kinds of buyers we work with and the kind of outcomes we help create. Specific numbers, specific products, no fairy tales."
        bgId="cases-bg-4b8c2d"
        bgQuery="[cases-hero-subtitle] [cases-hero-title]"
      >
        <span id="cases-hero-title" className="sr-only">Case studies</span>
        <span id="cases-hero-subtitle" className="sr-only">Real outcomes for real buyers</span>
      </PageHero>

      <section ref={imgRef} className="section">
        <div className="container-x space-y-12">
          {caseStudies.map((cs, i) => {
            const isReverse = i % 2 === 1;
            return (
              <article key={cs.id} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className={`lg:col-span-5 ${isReverse ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden border border-[#DDE2EC]">
                    <img
                      alt={cs.headline}
                      className="w-full h-72 md:h-80 object-cover"
                      data-strk-img-id={cs.imageId}
                      data-strk-img={cs.image}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${isReverse ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="pill bg-[#EEF1F6] text-[#0B2545]">{cs.industry}</span>
                    <span className="pill bg-white border border-[#DDE2EC] text-[#3D4A5C]">{cs.client}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A2230] leading-snug">{cs.headline}</h2>
                  <p className="mt-3 text-base text-[#3D4A5C] leading-relaxed">{cs.summary}</p>

                  <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
                    {cs.metrics.map((m, mi) => (
                      <div key={mi}>
                        <p className="text-xl md:text-2xl font-extrabold text-[#0B2545] leading-tight">{m.value}</p>
                        <p className="text-xs text-[#6B7A90] mt-1 leading-snug">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-5 rounded-md bg-[#F8F9FB] border border-[#EEF1F6]">
                    <p className="text-[11px] uppercase tracking-wider text-[#6B7A90] font-bold mb-2">Project timeline</p>
                    <ol className="space-y-2 text-sm text-[#3D4A5C]">
                      {cs.timeline.map((t, ti) => (
                        <li key={ti} className="flex items-start gap-2.5">
                          <span className="text-[#E8743B] font-bold flex-shrink-0">{ti + 1}.</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-x">
          <SectionHeader
            eyebrow="The kind of buyers we work with"
            title="Importers, Amazon sellers, brand owners, and procurement teams"
            subtitle="Some are placing their first China order. Others are replacing an underperforming agent. All of them want a single point of contact, written reporting, and a clear answer when things go wrong."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Importers & distributors', body: 'You sell into retail, B2B, or your own e-commerce store. You need consistent quality, on-time shipping, and someone to chase suppliers when lead times slip.' },
              { title: 'Amazon FBA sellers', body: 'You need labeled, cartoned, FBA-ready inventory — ideally consolidated with other sellers to hit target unit economics.' },
              { title: 'Brand owners & startups', body: 'You are launching a new product and need help going from sample to first production run to first container.' },
            ].map((c, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-[16px] font-bold text-[#1A2230]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#3D4A5C] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Start a project"
                title="Tell us what you are working on"
                subtitle="Send a short brief and a representative photo or spec. We'll come back with a feasibility note and next steps within 1 business day."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="card p-6 md:p-8">
                <InquiryForm idPrefix="cases-inquiry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to talk through a specific sourcing challenge?"
        subtitle="We can schedule a 20-minute call with one of our project managers — no commitment, no cost."
      />
    </>
  );
}
