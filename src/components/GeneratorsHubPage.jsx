import React from 'react';

// Sections
import TopBar from './sections/TopBar.jsx';
import Breadcrumb from './sections/Breadcrumb.jsx';
import Hero from './sections/Hero.jsx';
import Featured from './sections/Featured.jsx';
import BrowseByCategory from './sections/BrowseByCategory.jsx';
import Directory from './sections/Directory.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import WhyStrikingly from './sections/WhyStrikingly.jsx';
import Faq from './sections/Faq.jsx';
import ClosingCta from './sections/ClosingCta.jsx';
import Footer from './sections/Footer.jsx';

export default function GeneratorsHubPage() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <Featured />
        <BrowseByCategory />
        <Directory />
        <HowItWorks />
        <WhyStrikingly />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
