import React from 'react';
import TopBar from './TopBar';
import Breadcrumb from './Breadcrumb';
import Hero from './Hero';
import FeaturedGenerators from './FeaturedGenerators';
import BrowseByCategory from './BrowseByCategory';
import AllGenerators from './AllGenerators';
import HowItWorks from './HowItWorks';
import WhyStrikingly from './WhyStrikingly';
import FAQ from './FAQ';
import ClosingCTA from './ClosingCTA';
import Footer from './Footer';
import { t } from '@/i18n/strings';

export default function GeneratorsPage({ locale = 'en' }) {
  const s = t(locale);
  return (
    <div className="strk-page">
      <TopBar s={s} />
      <Breadcrumb s={s} />
      <main>
        <Hero s={s} />
        <FeaturedGenerators s={s} />
        <BrowseByCategory s={s} />
        <AllGenerators s={s} />
        <HowItWorks s={s} />
        <WhyStrikingly s={s} />
        <FAQ s={s} />
        <ClosingCTA s={s} />
      </main>
      <Footer s={s} />
    </div>
  );
}
