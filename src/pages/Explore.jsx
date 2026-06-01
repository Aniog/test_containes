import Layout from '../components/layout/Layout';
import ExploreCategories from '../components/explore/ExploreCategories';
import ExploreTechniques from '../components/explore/ExploreTechniques';

export default function Explore() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-4">
        <div className="text-center mb-4">
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">Discover</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2">
            Explore the Micro World
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Dive into six kingdoms of microscopic life and the tools scientists use to reveal them.
          </p>
        </div>
      </div>
      <ExploreCategories />
      <ExploreTechniques />
    </Layout>
  );
}
