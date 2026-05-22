import TeamsSection from '../components/mountain/TeamsSection';
import PageHero from '../components/mountain/PageHero';

const Teams = () => (
  <>
    <PageHero
      badge="Teams"
      title="Elite Climbing Teams"
      subtitle="Behind every successful summit is a team of highly trained professionals who dedicate their lives to the mountains."
      bgImgId="page-hero-teams-bg-g7h8i9"
      bgQuery="[page-hero-teams-subtitle] [page-hero-teams-title]"
      titleId="page-hero-teams-title"
      subtitleId="page-hero-teams-subtitle"
    />
    <TeamsSection hideHeader />
  </>
);

export default Teams;
