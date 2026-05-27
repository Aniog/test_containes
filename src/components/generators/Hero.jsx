import React from 'react';
import { t } from '../../data/generatorsData';
import { WebsiteMockupSVG } from './Icons';

const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Faint purple-to-pink wash */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(118, 113, 255, 0.06) 0%, rgba(203, 12, 159, 0.04) 50%, transparent 70%)',
      }}
    />
    <div className="relative max-w-content mx-auto px-5 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left column */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-heading text-heading-darker mb-4">
            <span className="block text-[28px] md:text-[40px] lg:text-[48px]">
              {t('heroH1Line1')}
            </span>
            <span className="block text-[28px] md:text-[40px] lg:text-[48px] ai-gradient-text">
              {t('heroH1Line2')}
            </span>
          </h1>
          <p className="text-body-gray text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            {t('heroSubheadline')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <a
              href="/s/ai_site_builder"
              className="btn-primary btn-primary-big w-full sm:w-auto text-center"
            >
              {t('heroCtaPrimary')}
            </a>
            <a
              href="#all-generators"
              className="btn-ghost w-full sm:w-auto text-center"
            >
              {t('heroCtaSecondary')}
            </a>
          </div>
        </div>
        {/* Right column */}
        <div className="flex-shrink-0">
          <WebsiteMockupSVG className="w-[280px] h-[210px] md:w-[360px] md:h-[270px] lg:w-[400px] lg:h-[300px]" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
