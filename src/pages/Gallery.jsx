import Layout from '../components/layout/Layout';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-4">
        <div className="text-center mb-4">
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">Visual Archive</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2">
            The Gallery
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Hundreds of microscopic images spanning bacteria, fungi, crystals, cells, and more.
          </p>
        </div>
      </div>
      <GalleryGrid />
    </Layout>
  );
}
