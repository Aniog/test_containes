import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Wind, Building2, Cpu, Car, Lightbulb, Wrench } from 'lucide-react';
import { industries } from '@/data/siteData.jsx';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const ICONS = [Wind, Building2, Cpu, Car, Lightbulb, Wrench];

const IndustriesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-paper">
      <section className="bg-steel-50 border-b border-steel-200">
        <div className="container-artitect pt-20 md:pt-28 pb-12 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span
                id="industries-hero-eyebrow"
                className="label-eyebrow brass-bar"
              >
                Industries we serve
              </span>
              <h1
                id="industries-hero-title"
                className="mt-6 font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-ink-900 leading-[0.95] tracking-tight"
              >
                Anywhere the
                <br />
                <span className="text-accent-600">angle matters.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p
                id="industries-hero-desc"
                className="text-lg md:text-xl text-ink-500 leading-relaxed"
              >
                ARTITECT machines are trusted across HVAC, architecture,
                automotive, and custom fabrication. Same engineering DNA,
                tailored to the way each industry works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-artitect">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200 border border-steel-200">
            {industries.map((industry, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={industry.title}
                  id={`industry-card-${i}`}
                  className="bg-paper p-8 md:p-10 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 flex items-center justify-center bg-ink-900 text-paper">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
                      0{i + 1} / 0{industries.length}
                    </div>
                  </div>
                  <h3 className="mt-8 font-display font-bold text-2xl md:text-3xl text-ink-900">
                    {industry.title}
                  </h3>
                  <p className="mt-4 text-ink-500 text-base leading-relaxed flex-1">
                    {industry.body}
                  </p>
                  <div className="mt-8 pt-6 border-t border-steel-200">
                    <div className="label-eyebrow">Recommended machines</div>
                    <div className="mt-2 font-mono text-sm text-ink-700">
                      DF series · MF series · SF series
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-900 text-paper py-20 md:py-28">
        <div className="container-artitect">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="label-eyebrow text-accent-500 brass-bar">
                Application engineering
              </span>
              <h2 className="mt-6 font-display font-extrabold text-3xl md:text-5xl text-paper leading-tight tracking-tight">
                Bring us a part. We&apos;ll spec the right machine.
              </h2>
              <p className="mt-6 text-lg text-steel-200 max-w-2xl leading-relaxed">
                Our applications team reviews drawings, material specs, and
                tolerances to recommend the right machine, tooling, and
                automation package. It&apos;s a free 30-minute consultation,
                with no obligation.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link to="/contact" className="btn-accent">
                Book a consultation
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
