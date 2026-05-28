import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import HeroSection from '@/components/sections/HeroSection';

const featuredDishes = [
  {
    id: 'home-dish-tacos',
    imgId: 'home-dish-img-tacos-a1b2',
    title: 'Tacos al Pastor',
    tag: 'Street Food',
  },
  {
    id: 'home-dish-mole',
    imgId: 'home-dish-img-mole-c3d4',
    title: 'Mole Poblano',
    tag: 'Main Course',
  },
  {
    id: 'home-dish-pozole',
    imgId: 'home-dish-img-pozole-e5f6',
    title: 'Pozole',
    tag: 'Soup',
  },
];

const featuredRegions = [
  {
    id: 'home-region-oaxaca',
    imgId: 'home-region-img-oaxaca-g7h8',
    name: 'Oaxaca',
    label: 'The Land of Seven Moles',
  },
  {
    id: 'home-region-yucatan',
    imgId: 'home-region-img-yucatan-i9j0',
    name: 'Yucatán',
    label: 'Mayan Flavors',
  },
  {
    id: 'home-region-jalisco',
    imgId: 'home-region-img-jalisco-k1l2',
    name: 'Jalisco',
    label: 'Birthplace of Tequila',
  },
];

const Home = () => {
  const dishesRef = useRef(null);
  const regionsRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, dishesRef.current);
    ImageHelper.loadImages(strkImgConfig, regionsRef.current);
  }, []);

  return (
    <>
      <HeroSection />

      {/* Featured Dishes Teaser */}
      <section ref={dishesRef} className="py-20 px-6 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-2">
                Must-Try Classics
              </p>
              <h2
                id="home-dishes-title"
                className="text-gray-900 text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Iconic Dishes
              </h2>
            </div>
            <Link
              to="/dishes"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
            >
              View all dishes →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredDishes.map((dish) => (
              <Link to="/dishes" key={dish.id} className="group block">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-52 bg-orange-100">
                    <img
                      id={dish.id}
                      alt={dish.title}
                      data-strk-img-id={dish.imgId}
                      data-strk-img={`[${dish.id}] [home-dishes-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="bg-white p-4">
                    <h3 className="text-gray-900 text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {dish.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 px-6 bg-[#C0392B]">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-white text-2xl md:text-3xl font-bold leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Mexican cuisine is a living cultural heritage — a blend of indigenous wisdom and centuries of tradition."
          </p>
          <p className="text-red-200 mt-4 text-sm uppercase tracking-widest">UNESCO Intangible Cultural Heritage</p>
        </div>
      </section>

      {/* Featured Regions Teaser */}
      <section ref={regionsRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-2">
                Across the Country
              </p>
              <h2
                id="home-regions-title"
                className="text-gray-900 text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Regional Flavors
              </h2>
            </div>
            <Link
              to="/regions"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
            >
              Explore all regions →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredRegions.map((region) => (
              <Link to="/regions" key={region.id} className="group block">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative h-64">
                  <img
                    id={region.id}
                    alt={region.name}
                    data-strk-img-id={region.imgId}
                    data-strk-img={`[${region.id}] [home-regions-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-orange-300 text-xs uppercase tracking-widest font-semibold">{region.label}</p>
                    <h3 className="text-white text-xl font-bold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {region.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients CTA Banner */}
      <section className="py-16 px-6 bg-[#FDF6EC]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-2">Building Blocks</p>
            <h2
              className="text-gray-900 text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Makes It Mexican?
            </h2>
            <p className="text-gray-500 text-base max-w-md">
              From smoky chiles to sacred corn, discover the essential ingredients that give Mexican food its soul.
            </p>
          </div>
          <Link
            to="/ingredients"
            className="shrink-0 inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors duration-300 text-sm uppercase tracking-wide"
          >
            Explore Ingredients
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
