import BakeryHero from '@/components/bakery/BakeryHero';
import BakeryMenu from '@/components/bakery/BakeryMenu';
import BakeryArticles from '@/components/bakery/BakeryArticles';
import BakeryAbout from '@/components/bakery/BakeryAbout';

const Home = () => {
  return (
    <>
      <BakeryHero />
      <BakeryMenu />
      <BakeryArticles />
      <BakeryAbout />
    </>
  );
};

export default Home;
