import React from 'react';
import TopBar from './components/generators/TopBar';
import Breadcrumb from './components/generators/Breadcrumb';
import Hero from './components/generators/Hero';
import FeaturedGenerators from './components/generators/FeaturedGenerators';
import BrowseByCategory from './components/generators/BrowseByCategory';
import AllGenerators from './components/generators/AllGenerators';
import HowItWorks from './components/generators/HowItWorks';
import WhyStrikingly from './components/generators/WhyStrikingly';
import Faq from './components/generators/Faq';
import ClosingCta from './components/generators/ClosingCta';
import Footer from './components/generators/Footer';
import { strings } from './data/strings';
import { featuredGenerators, allGenerators, categoryOrder, VISIBLE_COUNT } from './data/generators';

const s = strings.en;

function App() {
  const categories = categoryOrder.map(id => ({
    id,
    name: s.categories[id].name,
    description: s.categories[id].description,
  }));

  return (
    <div className="min-h-screen bg-white">
      <TopBar logo={s.topBar.logo} />
      <Breadcrumb home={s.breadcrumb.home} current={s.breadcrumb.current} />
      <main>
        <Hero
          h1Line1={s.hero.h1Line1}
          h1Line2={s.hero.h1Line2}
          subheadline={s.hero.subheadline}
          primaryCta={s.hero.primaryCta}
          secondaryCta={s.hero.secondaryCta}
        />
        <FeaturedGenerators
          heading={s.featured.heading}
          subheading={s.featured.subheading}
          generators={featuredGenerators}
        />
        <BrowseByCategory
          heading={s.browseByCategory.heading}
          categories={categories}
        />
        <AllGenerators
          strings={s.allGenerators}
          categories={s.categories}
          allGenerators={allGenerators}
          categoryOrder={categoryOrder}
          visibleCount={VISIBLE_COUNT}
        />
        <HowItWorks
          heading={s.howItWorks.heading}
          steps={s.howItWorks.steps}
        />
        <WhyStrikingly
          heading={s.whyStrikingly.heading}
          items={s.whyStrikingly.items}
        />
        <Faq
          heading={s.faq.heading}
          items={s.faq.items}
        />
        <ClosingCta
          headline={s.closingCta.headline}
          sub={s.closingCta.sub}
          cta={s.closingCta.cta}
        />
      </main>
      <Footer
        copyright={s.footer.copyright.replace('{year}', new Date().getFullYear())}
        product={s.footer.product}
        resources={s.footer.resources}
        company={s.footer.company}
        legal={s.footer.legal}
      />
    </div>
  );
}

export default App;
