import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const legends = [
  {
    id: 'schumacher',
    name: 'Michael Schumacher',
    nationality: 'German',
    titles: 7,
    wins: 91,
    years: '1991–2012',
    quote: 'Once something is a passion, the motivation is there.',
    desc: 'The most decorated driver in F1 history. Schumacher\'s dominance with Ferrari in the early 2000s set records that stood for over a decade.',
    titleId: 'legend-schumacher-title',
    descId: 'legend-schumacher-desc',
    imgId: 'legend-img-schumacher-a1b2c3',
  },
  {
    id: 'senna',
    name: 'Ayrton Senna',
    nationality: 'Brazilian',
    titles: 3,
    wins: 41,
    years: '1984–1994',
    quote: 'And so you touch this limit, something happens and you suddenly can go a little bit further.',
    desc: 'Widely regarded as the greatest driver of all time. Senna\'s raw speed, qualifying mastery, and tragic story made him an immortal figure in motorsport.',
    titleId: 'legend-senna-title',
    descId: 'legend-senna-desc',
    imgId: 'legend-img-senna-d4e5f6',
  },
  {
    id: 'hamilton',
    name: 'Lewis Hamilton',
    nationality: 'British',
    titles: 7,
    wins: 103,
    years: '2007–present',
    quote: 'I am not defined by my wins or losses, but by my character.',
    desc: 'The most successful driver in F1 history by wins. Hamilton broke every record imaginable and became a global icon both on and off the track.',
    titleId: 'legend-hamilton-title',
    descId: 'legend-hamilton-desc',
    imgId: 'legend-img-hamilton-g7h8i9',
  },
  {
    id: 'verstappen',
    name: 'Max Verstappen',
    nationality: 'Dutch',
    titles: 4,
    wins: 62,
    years: '2015–present',
    quote: 'I just want to win. That\'s all I care about.',
    desc: 'The youngest race winner in F1 history. Verstappen\'s aggressive, fearless style and four consecutive championships have defined a new era of dominance.',
    titleId: 'legend-verstappen-title',
    descId: 'legend-verstappen-desc',
    imgId: 'legend-img-verstappen-j1k2l3',
  },
];

const Legends = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="legends" ref={containerRef} className="bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#e10600] font-bold uppercase tracking-[0.3em] text-sm">
            Hall of Fame
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mt-3 leading-tight">
            F1 <span className="text-[#e10600]">Legends</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            These drivers transcended the sport, becoming icons whose legacies will endure for generations.
          </p>
        </div>

        {/* Legends grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {legends.map((legend) => (
            <div
              key={legend.id}
              className="bg-[#1a1a1a] border border-white/10 overflow-hidden hover:border-[#e10600]/40 transition-all duration-300 group"
            >
              <div className="flex gap-0">
                {/* Image */}
                <div className="w-36 md:w-48 flex-shrink-0 relative overflow-hidden">
                  <img
                    alt={legend.name}
                    data-strk-img-id={legend.imgId}
                    data-strk-img={`[${legend.descId}] [${legend.titleId}] Formula 1 driver portrait`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: '220px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                      {legend.nationality} · {legend.years}
                    </div>
                    <h3
                      id={legend.titleId}
                      className="text-white font-black uppercase text-lg md:text-xl tracking-wide mb-2"
                    >
                      {legend.name}
                    </h3>
                    <p id={legend.descId} className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                      {legend.desc}
                    </p>
                  </div>

                  {/* Stats */}
                  <div>
                    <div className="flex gap-4 mb-3">
                      <div>
                        <div className="text-[#f59e0b] font-black text-xl">{legend.titles}</div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider">Titles</div>
                      </div>
                      <div className="w-px bg-white/10" />
                      <div>
                        <div className="text-white font-black text-xl">{legend.wins}</div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider">Wins</div>
                      </div>
                    </div>
                    {/* Quote */}
                    <blockquote className="border-l-2 border-[#e10600] pl-3 text-gray-500 text-xs italic leading-relaxed">
                      "{legend.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legends;
