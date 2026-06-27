import { Helmet } from 'react-helmet-async'
import strings from '@/strings/strings.en.js'
import TopBar from '@/components/generators/TopBar.jsx'
import Breadcrumb from '@/components/generators/Breadcrumb.jsx'
import Hero from '@/components/generators/Hero.jsx'
import FeaturedGenerators from '@/components/generators/FeaturedGenerators.jsx'
import BrowseByCategory from '@/components/generators/BrowseByCategory.jsx'
import AllGenerators from '@/components/generators/AllGenerators.jsx'
import HowItWorks from '@/components/generators/HowItWorks.jsx'
import WhyStrikingly from '@/components/generators/WhyStrikingly.jsx'
import FAQ from '@/components/generators/FAQ.jsx'
import ClosingCTA from '@/components/generators/ClosingCTA.jsx'
import Footer from '@/components/generators/Footer.jsx'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: strings.breadcrumb.homeLabel,
      item: 'https://www.strikingly.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: strings.breadcrumb.currentLabel,
      item: strings.site.canonicalUrl,
    },
  ],
}

export default function GeneratorsHub() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{strings.site.title}</title>
        <meta name="description" content={strings.site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={strings.site.canonicalUrl} />
        <meta property="og:title" content={strings.site.ogTitle} />
        <meta property="og:description" content={strings.site.ogDescription} />
        <meta property="og:url" content={strings.site.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
