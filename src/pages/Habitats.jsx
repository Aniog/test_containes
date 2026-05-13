import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { habitats, animals } from '@/data/animals';
import { ArrowRight, Thermometer, MapPin } from 'lucide-react';

const habitatColors = {
  savanna: 'bg-amber-50 border-amber-200',
  ocean: 'bg-blue-50 border-blue-200',
  forest: 'bg-green-50 border-green-200',
  rainforest: 'bg-emerald-50 border-emerald-200',
  polar: 'bg-sky-50 border-sky-200',
};

const Habitats = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef} className="bg-[#f8f5f0] min-h-screen">
      {/* Header */}
      <section className="bg-[#1b4332] py-16 px-4 text-center">
        <span className="text-[#e9c46a] text-sm font-semibold uppercase tracking-widest">Ecosystems</span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mt-2 mb-4">Habitats of the World</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          Every habitat is a unique world — explore the ecosystems that shape life on Earth.
        </p>
      </section>

      {/* Habitats List */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
        {habitats.map((habitat, index) => {
          const habitatAnimals = animals.filter((a) => habitat.animals.includes(a.id));
          const isEven = index % 2 === 0;

          return (
            <div
              key={habitat.id}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={habitat.name}
                  className="w-full h-72 object-cover"
                  data-strk-img-id={`habitat-${habitat.id}-img-p7q8r9`}
                  data-strk-img={`[habitat-${habitat.id}-desc] [habitat-${habitat.id}-name] landscape nature`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                />
              </div>

              {/* Info */}
              <div className="w-full lg:w-1/2">
                <span className="text-[#2d6a4f] text-sm font-semibold uppercase tracking-widest">Habitat</span>
                <h2 id={`habitat-${habitat.id}-name`} className="text-3xl md:text-4xl font-bold font-serif text-[#1a1a1a] mt-1 mb-4">
                  {habitat.name}
                </h2>
                <p id={`habitat-${habitat.id}-desc`} className="text-gray-600 leading-relaxed mb-6">
                  {habitat.description}
                </p>

                <div className={`rounded-xl border p-4 mb-6 ${habitatColors[habitat.id] || 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-start gap-2">
                      <Thermometer className="w-4 h-4 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Climate</p>
                        <p className="text-gray-700 text-sm font-medium">{habitat.climate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#2d6a4f] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Region</p>
                        <p className="text-gray-700 text-sm font-medium">{habitat.region}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animals in this habitat */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-3">Animals in this habitat</p>
                  <div className="flex flex-wrap gap-2">
                    {habitatAnimals.map((animal) => (
                      <Link
                        key={animal.id}
                        to={`/animals/${animal.id}`}
                        className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-[#2d6a4f] hover:text-white hover:border-[#2d6a4f] transition-colors flex items-center gap-1"
                      >
                        {animal.name} <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Habitats;
