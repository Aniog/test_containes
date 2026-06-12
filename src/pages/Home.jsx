import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import HomeHero from '../components/home/HomeHero';
import HomeServices from '../components/home/HomeServices';
import HomeProcess from '../components/home/HomeProcess';
import HomeProducts from '../components/home/HomeProducts';
import HomeProblems from '../components/home/HomeProblems';
import HomeTrust from '../components/home/HomeTrust';
import HomeCases from '../components/home/HomeCases';
import HomeFAQ from '../components/home/HomeFAQ';
import HomeInquiry from '../components/home/HomeInquiry';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCases />
      <HomeFAQ />
      <HomeInquiry />
    </div>
  );
}
