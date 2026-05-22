import SafetySection from '../components/mountain/SafetySection';
import PageHero from '../components/mountain/PageHero';

const Safety = () => (
  <>
    <PageHero
      badge="Safety"
      title="Safety First, Summit Second"
      subtitle="The mountains demand respect. Understanding risks and following proven safety protocols is what separates successful expeditions from tragedies."
      bgImgId="page-hero-safety-bg-j1k2l3"
      bgQuery="[page-hero-safety-subtitle] [page-hero-safety-title]"
      titleId="page-hero-safety-title"
      subtitleId="page-hero-safety-subtitle"
    />
    <SafetySection hideHeader />
  </>
);

export default Safety;
