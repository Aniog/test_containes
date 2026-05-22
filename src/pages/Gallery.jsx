import GallerySection from '../components/mountain/GallerySection';
import PageHero from '../components/mountain/PageHero';

const Gallery = () => (
  <>
    <PageHero
      badge="Gallery"
      title="Life on the Mountain"
      subtitle="A glimpse into the breathtaking beauty and raw challenge of high-altitude climbing."
      bgImgId="page-hero-gallery-bg-m4n5o6"
      bgQuery="[page-hero-gallery-subtitle] [page-hero-gallery-title]"
      titleId="page-hero-gallery-title"
      subtitleId="page-hero-gallery-subtitle"
    />
    <GallerySection hideHeader />
  </>
);

export default Gallery;
