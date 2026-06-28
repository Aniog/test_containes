import TopBar from '@/components/generators/TopBar';
import Breadcrumb from '@/components/generators/Breadcrumb';
import Hero from '@/components/generators/Hero';
import FeaturedGenerators from '@/components/generators/FeaturedGenerators';
import BrowseByCategory from '@/components/generators/BrowseByCategory';
import Directory from '@/components/generators/Directory';
import HowItWorks from '@/components/generators/HowItWorks';
import WhyStrikingly from '@/components/generators/WhyStrikingly';
import FAQ from '@/components/generators/FAQ';
import ClosingCTA from '@/components/generators/ClosingCTA';
import Footer from '@/components/generators/Footer';
import { strings } from '@/data/generators';
import { useEffect } from 'react';

const t = strings.en;

function BreadcrumbJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.breadcrumb.homeLabel,
        item: 'https://www.strikingly.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.breadcrumb.currentLabel,
        item: t.meta.canonical,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Generators() {
  useEffect(() => {
    document.title = t.meta.title;

    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.includes('property')
          ? 'property'
          : 'name';
        const key = selector.includes('property')
          ? 'property'
          : 'name';
        const value = selector.replace(/^[a-z]+\[/, '').replace(']', '');
        el.setAttribute(key, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.ogTitle);
    setMeta('meta[property="og:description"]', t.meta.ogDescription);
    setMeta('meta[property="og:url"]', t.meta.ogUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', t.meta.canonical);

    document.documentElement.lang = 'en';
  }, []);

  return (
    <>
      <BreadcrumbJsonLd />
      <div className="min-h-screen bg-white">
        <TopBar />
        <Breadcrumb />
        <main>
          <Hero />
          <FeaturedGenerators />
          <BrowseByCategory />
          <Directory />
          <HowItWorks />
          <WhyStrikingly />
          <FAQ />
          <ClosingCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
