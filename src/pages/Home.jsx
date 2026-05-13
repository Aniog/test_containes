import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { animals } from '@/data/animals';
import { ArrowRight, Leaf, Globe, Shield } from 'lucide-react';

const featuredAnimals = animals.slice(0, 6);

const stats = [
  { icon: Globe, label: 'Species Covered', value: '12+' },
  { icon: Leaf, label: 'Habitats Explored', value: '5' },
  { icon: Shield, label: 'Conservation Stories', value: '8+' },
];

const statusColor = (status) => {
  if (status === 'Endangered') return 'bg-red-100 text-red-700';
  if (status === 'Vulnerable') return 'bg-orange-100 text-orange-700';
  if (status === 'Near Threatened') return 'bg-yellow-100 text-yellow-700';
  return 'bg-green-100 text-green-700';
};

const Home = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    if (cardsRef.current) ImageHelper.loadImages(strkImgConfig, cardsRef.current);
  }, []);

  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span id="home-hero-subtitle" className="inline-block text-[#e9c46a] text-sm font-semibold uppercase tracking-widest mb-4">
            Discover the Animal Kingdom
          </span>
          <h1 id="home-hero-title" className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight">
            Explore the World of Wildlife
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Journey through diverse habitats and meet the incredible creatures that share our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/animals"
              className="bg-[#2d6a4f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1b4332] transition-colors flex items-center justify-center gap-2"
            >
              Explore Animals <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/habitats"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1b4332] transition-colors"
            >
              View Habitats
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1b4332] py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon className="w-6 h-6 text-[#e9c46a] mb-1" />
              <span className="text-2xl md:text-3xl font-bold text-white font-serif">{value}</span>
              <span className="text-xs md:text-sm text-gray-300 uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Animals */}
      <section ref={cardsRef} className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#2d6a4f] text-sm font-semibold uppercase tracking-widest">Featured</span>
          <h2 id="featured-section-title" className="text-3xl md:text-4xl font-bold font-serif text-[#1a1a1a] mt-2">
            Meet Our Animals
          </h2>
          <p id="featured-section-subtitle" className="text-gray-500 mt-3 max-w-xl mx-auto">
            From the African savanna to the deep ocean, discover the diversity of life on Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredAnimals.map((animal) => (
            <Link
              key={animal.id}
              to={`/animals/${animal.id}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={animal.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`home-animal-${animal.id}-img-d4e5f6`}
                  data-strk-img={`[home-animal-${animal.id}-name] [home-animal-${animal.id}-habitat] wildlife`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${statusColor(animal.status)}`}>
                  {animal.status}
                </span>
              </div>
              <div className="p-5">
                <span id={`home-animal-${animal.id}-habitat`} className="text-xs text-[#2d6a4f] font-semibold uppercase tracking-wide">
                  {animal.habitat} · {animal.category}
                </span>
                <h3 id={`home-animal-${animal.id}-name`} className="text-xl font-bold font-serif text-[#1a1a1a] mt-1 mb-2">
                  {animal.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{animal.description}</p>
                <div className="mt-4 flex items-center text-[#2d6a4f] text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/animals"
            className="bg-[#2d6a4f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1b4332] transition-colors inline-flex items-center gap-2"
          >
            View All Animals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2d6a4f] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
          Explore by Habitat
        </h2>
        <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
          Dive into the world's most fascinating ecosystems and discover the animals that call them home.
        </p>
        <Link
          to="/habitats"
          className="bg-[#e9c46a] text-[#1a1a1a] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors inline-flex items-center gap-2"
        >
          Explore Habitats <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
