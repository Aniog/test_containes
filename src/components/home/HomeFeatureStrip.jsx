import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeFeatureStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto">
        {/* Van Gogh Connection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest text-indigo-400">The Inspiration</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-3 mb-6 leading-tight">
              Van Gogh Saw
              <br />
              <span className="text-indigo-400">Turbulence</span> in the Sky
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              In 1889, Vincent van Gogh painted "The Starry Night" from his asylum room in Saint-Rémy-de-Provence. 
              What he captured — the swirling, luminous vortices of the night sky — bears a striking resemblance 
              to the mathematical concept of <span className="text-white">Kolmogorov turbulence</span>.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Modern physicists have found that the luminance variations in Van Gogh's brushstrokes follow 
              the same statistical patterns as turbulent fluid dynamics — a remarkable intersection of art and physics.
            </p>
            <Link
              to="/knowledge"
              className="group inline-flex items-center gap-2 text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors duration-300"
            >
              Explore the Physics
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                data-strk-img-id="feature-vangogh-turbulence-7d4e2f"
                data-strk-img="[feature-vangogh-desc] [feature-vangogh-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Starry night sky turbulence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#080C14]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#111827] border border-[#1F2937] rounded-xl p-4 max-w-xs">
              <p id="feature-vangogh-title" className="text-white text-sm font-medium mb-1">Kolmogorov Turbulence</p>
              <p id="feature-vangogh-desc" className="text-gray-500 text-xs leading-relaxed">
                The statistical self-similarity of turbulent flows, visible in Van Gogh's swirling night sky painting
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center py-16 border-y border-[#1F2937]">
          <blockquote className="text-2xl md:text-3xl font-light text-white max-w-3xl mx-auto leading-relaxed">
            "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, 
            the carbon in our apple pies were made in the interiors of collapsing stars."
          </blockquote>
          <cite className="block mt-6 text-gray-500 text-sm not-italic">
            — Carl Sagan, <span className="text-gray-400">Cosmos: A Personal Voyage</span>
          </cite>
        </div>

        {/* Three feature images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {[
            {
              imgId: 'feature-nebula-a1b2c3',
              titleId: 'feature-nebula-title',
              descId: 'feature-nebula-desc',
              title: 'Nebulae',
              desc: 'Stellar nurseries where gravity and gas sculpt the birthplace of new stars across light-years of space',
            },
            {
              imgId: 'feature-galaxy-d4e5f6',
              titleId: 'feature-galaxy-title',
              descId: 'feature-galaxy-desc',
              title: 'Galaxies',
              desc: 'Island universes containing hundreds of billions of stars, bound by gravity and dark matter halos',
            },
            {
              imgId: 'feature-blackhole-g7h8i9',
              titleId: 'feature-blackhole-title',
              descId: 'feature-blackhole-desc',
              title: 'Black Holes',
              desc: 'Regions of spacetime where gravity is so extreme that not even light can escape the event horizon',
            },
          ].map((item) => (
            <div key={item.imgId} className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={item.titleId} className="text-white text-xl font-light mb-2">{item.title}</h3>
                <p id={item.descId} className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
