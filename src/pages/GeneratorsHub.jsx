import { useState } from 'react';
import { strings, categories, featuredGenerators, allGenerators } from '@/data/strings';
import TopBar from '@/components/generators/TopBar';
import Breadcrumb from '@/components/generators/Breadcrumb';
import Hero from '@/components/generators/Hero';
import FeaturedGenerators from '@/components/generators/FeaturedGenerators';
import BrowseByCategory from '@/components/generators/BrowseByCategory';
import AllGenerators from '@/components/generators/AllGenerators';
import HowItWorks from '@/components/generators/HowItWorks';
import WhyStrikingly from '@/components/generators/WhyStrikingly';
import FAQ from '@/components/generators/FAQ';
import ClosingCTA from '@/components/generators/ClosingCTA';
import Footer from '@/components/generators/Footer';

const t = strings.en;

export default function GeneratorsHub() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar t={t} />
      <Breadcrumb t={t} />
      <main>
        <Hero t={t} />
        <FeaturedGenerators t={t} data={featuredGenerators} />
        <BrowseByCategory t={t} categories={categories} />
        <AllGenerators t={t} categories={categories} generators={allGenerators} />
        <HowItWorks t={t} />
        <WhyStrikingly t={t} />
        <FAQ t={t} />
        <ClosingCTA t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
