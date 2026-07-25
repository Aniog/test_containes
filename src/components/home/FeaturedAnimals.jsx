import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const animals = [
  {
    id: 'lion',
    titleId: 'feat-lion-title',
    descId: 'feat-lion-desc',
    imgId: 'feat-img-lion-a1b2c3',
    name: 'African Lion',
    habitat: 'Savanna, Africa',
    status: 'Vulnerable',
    statusColor: 'bg-amber-100 text-amber-700',
    desc: 'The king of the savanna, lions are the only truly social big cats, living in prides of up to 30 individuals.',
    fact: 'A lion\'s roar can be heard from 8 km away.',
  },
  {
    id: 'elephant',
    titleId: 'feat-elephant-title',
    descId: 'feat-elephant-desc',
    imgId: 'feat-img-elephant-d4e5f6',
    name: 'African Elephant',
    habitat: 'Grasslands, Africa',
    status: 'Endangered',
    statusColor: 'bg-red-100 text-red-700',
    desc: 'The largest land animal on Earth, elephants are highly intelligent and form deep family bonds.',
    fact: 'Elephants can recognize themselves in mirrors.',
  },
  {
    id: 'eagle',
    titleId: 'feat-eagle-title',
    descId: 'feat-eagle-desc',
    imgId: 'feat-img-eagle-g7h8i9',
    name: 'Bald Eagle',
    habitat: 'Forests, North America',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-700',
    desc: 'A symbol of freedom and power, the bald eagle soars over rivers and coastlines hunting for fish.',
    fact: 'Bald eagles can dive at speeds of 160 km/h.',
  },
  {
    id: 'dolphin',
    titleId: 'feat-dolphin-title',
    descId: 'feat-dolphin-desc',
    imgId: 'feat-img-dolphin-j0k1l2',
    name: 'Bottlenose Dolphin',
    habitat: 'Oceans, Worldwide',
    status: 'Least Concern',
    statusColor: 'bg-green-100 text-green-700',
    desc: 'Among the most intelligent animals, dolphins communicate with complex sounds and live in social pods.',
    fact: 'Dolphins sleep with one eye open.',
  },
  {
    id: 'tiger',
    titleId: 'feat-tiger-title',
    descId: 'feat-tiger-desc',
    imgId: 'feat-img-tiger-m3n4o5',
    name: 'Bengal Tiger',
    habitat: 'Forests, South Asia',
    status: 'Endangered',
    statusColor: 'bg-red-100 text-red-700',
    desc: 'The largest wild cat species, tigers are solitary hunters with iconic striped coats unique to each individual.',
    fact: 'No two tigers have the same stripe pattern.',
  },
  {
    id: 'penguin',
    titleId: 'feat-penguin-title',
    descId: 'feat-penguin-desc',
    imgId: 'feat-img-penguin-p6q7r8',
    name: 'Emperor Penguin',
    habitat: 'Antarctica',
    status: 'Near Threatened',
    statusColor: 'bg-blue-100 text-blue-700',
    desc: 'The tallest and heaviest penguin species, emperors brave the harshest winters on Earth to raise their chicks.',
    fact: 'Emperor penguins can dive to 550 meters deep.',
  },
];

const FeaturedAnimals = () => {
  const containerRef = useRef(null);
  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-20 px-4 md:px-8 bg-[#e8f5ec]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
            Spotlight
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c2b1e] mb-4">
            Featured Animals
          </h2>
          <p className="text-[#4b6b52] text-lg max-w-2xl mx-auto leading-relaxed">
            Meet some of the most iconic and fascinating creatures that share our planet. Hover to discover a fun fact!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="relative cursor-pointer"
              onMouseEnter={() => setFlipped(animal.id)}
              onMouseLeave={() => setFlipped(null)}
              onClick={() => setFlipped(flipped === animal.id ? null : animal.id)}
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                style={{ minHeight: '380px' }}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${flipped === animal.id ? 'opacity-0' : 'opacity-100'}`}
                >
                  <img
                    alt={animal.name}
                    data-strk-img-id={animal.imgId}
                    data-strk-img={`[${animal.descId}] [${animal.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                    style={{ minHeight: '380px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${animal.statusColor}`}>
                      {animal.status}
                    </span>
                    <h3 id={animal.titleId} className="text-xl font-bold text-white mb-1">
                      {animal.name}
                    </h3>
                    <p className="text-white/70 text-sm">📍 {animal.habitat}</p>
                  </div>
                </div>

                {/* Back (fact card) */}
                <div
                  className={`absolute inset-0 bg-[#1a5c38] flex flex-col items-center justify-center p-8 text-center transition-opacity duration-300 ${flipped === animal.id ? 'opacity-100' : 'opacity-0'}`}
                >
                  <span className="text-5xl mb-4">💡</span>
                  <h3 className="text-white font-bold text-lg mb-3">Did You Know?</h3>
                  <p className="text-white/90 text-base leading-relaxed mb-4 italic">
                    "{animal.fact}"
                  </p>
                  <p id={animal.descId} className="text-white/70 text-sm leading-relaxed">
                    {animal.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#4b6b52] text-sm mt-8">
          Hover over a card to reveal a fun fact
        </p>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
