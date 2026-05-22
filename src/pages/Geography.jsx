import GeographySection from '../components/mountain/GeographySection';
import PageHero from '../components/mountain/PageHero';

const Geography = () => (
  <>
    <PageHero
      badge="Geography"
      title="The World's Greatest Peaks"
      subtitle="Explore the mountain ranges, elevations, and extreme conditions that define the world's most iconic summits."
      bgImgId="page-hero-geo-bg-a1b2c3"
      bgQuery="[page-hero-geo-subtitle] [page-hero-geo-title]"
      titleId="page-hero-geo-title"
      subtitleId="page-hero-geo-subtitle"
    />
    <GeographySection hideHeader />
  </>
);

export default Geography;
