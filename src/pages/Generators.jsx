import { useEffect } from 'react';
import GeneratorsTopBar from '../components/generators/GeneratorsTopBar';
import GeneratorsBreadcrumb from '../components/generators/GeneratorsBreadcrumb';
import GeneratorsHero from '../components/generators/GeneratorsHero';
import FeaturedGenerators from '../components/generators/FeaturedGenerators';
import BrowseByCategory from '../components/generators/BrowseByCategory';
import AllGenerators from '../components/generators/AllGenerators';
import HowItWorks from '../components/generators/HowItWorks';
import WhyStrikingly from '../components/generators/WhyStrikingly';
import GeneratorsFAQ from '../components/generators/GeneratorsFAQ';
import ClosingCTA from '../components/generators/ClosingCTA';
import GeneratorsFooter from '../components/generators/GeneratorsFooter';
import { strings } from '../data/generators';

const meta = strings.en.meta;

// BreadcrumbList JSON-LD (only schema on this page)
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Strikingly',
      item: 'https://www.strikingly.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'AI Generators',
      item: 'https://www.strikingly.com/generators',
    },
  ],
};

export default function Generators() {
  useEffect(() => {
    // Set page title
    document.title = meta.title;

    // Set/update meta tags
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', meta.description);
    setMeta('og:title', meta.ogTitle, true);
    setMeta('og:description', meta.ogDescription, true);
    setMeta('og:url', meta.canonical, true);

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', meta.canonical);

    // Inject BreadcrumbList JSON-LD (only schema on this page)
    const existingLd = document.getElementById('generators-breadcrumb-ld');
    if (!existingLd) {
      const script = document.createElement('script');
      script.id = 'generators-breadcrumb-ld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(breadcrumbJsonLd);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup JSON-LD on unmount
      const ld = document.getElementById('generators-breadcrumb-ld');
      if (ld) ld.remove();
    };
  }, []);

  return (
    <>
      <GeneratorsTopBar />
      <GeneratorsBreadcrumb />
      <main>
        <GeneratorsHero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <GeneratorsFAQ />
        <ClosingCTA />
      </main>
      <GeneratorsFooter />
    </>
  );
}
