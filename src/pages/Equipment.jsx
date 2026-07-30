import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Paddles', 'Balls', 'Tables', 'Accessories'];

const equipment = [
  {
    id: 'eq-beginner-paddle',
    category: 'Paddles',
    name: 'Beginner All-Round Paddle',
    level: 'Beginner',
    titleId: 'eq-beginner-paddle-title',
    descId: 'eq-beginner-paddle-desc',
    imgId: 'eq-beginner-paddle-img-b1c2d3',
    description:
      'A pre-assembled paddle with medium-speed rubber and a comfortable flared handle. Perfect for learning the basics of grip, stroke, and spin.',
    specs: ['Speed: 5/10', 'Spin: 6/10', 'Control: 9/10'],
    price: '$20–$40',
  },
  {
    id: 'eq-intermediate-paddle',
    category: 'Paddles',
    name: 'Intermediate Loop Paddle',
    level: 'Intermediate',
    titleId: 'eq-intermediate-paddle-title',
    descId: 'eq-intermediate-paddle-desc',
    imgId: 'eq-intermediate-paddle-img-e4f5g6',
    description:
      'A custom-assembled paddle with high-spin rubber sheets ideal for developing topspin loops and consistent attacking play.',
    specs: ['Speed: 7/10', 'Spin: 9/10', 'Control: 7/10'],
    price: '$60–$120',
  },
  {
    id: 'eq-advanced-paddle',
    category: 'Paddles',
    name: 'Advanced Carbon Blade',
    level: 'Advanced',
    titleId: 'eq-advanced-paddle-title',
    descId: 'eq-advanced-paddle-desc',
    imgId: 'eq-advanced-paddle-img-h7i8j9',
    description:
      'A carbon-fibre blade with professional-grade rubber for explosive speed and maximum spin. Designed for competitive tournament play.',
    specs: ['Speed: 10/10', 'Spin: 10/10', 'Control: 6/10'],
    price: '$150–$300',
  },
  {
    id: 'eq-ittf-ball',
    category: 'Balls',
    name: 'ITTF Approved 40+ Ball',
    level: 'All Levels',
    titleId: 'eq-ittf-ball-title',
    descId: 'eq-ittf-ball-desc',
    imgId: 'eq-ittf-ball-img-k1l2m3',
    description:
      'The standard 40mm poly ball approved for all ITTF competitions. Consistent bounce and durability make it the go-to choice for serious players.',
    specs: ['Diameter: 40mm', 'Weight: 2.7g', 'Material: Poly'],
    price: '$10–$20 (6-pack)',
  },
  {
    id: 'eq-training-ball',
    category: 'Balls',
    name: 'Training Ball Set (100-pack)',
    level: 'Beginner',
    titleId: 'eq-training-ball-title',
    descId: 'eq-training-ball-desc',
    imgId: 'eq-training-ball-img-n4o5p6',
    description:
      'Bulk training balls for multi-ball practice sessions. Slightly lower quality than competition balls but ideal for drilling and robot training.',
    specs: ['Diameter: 40mm', 'Quantity: 100', 'Colour: Orange/White'],
    price: '$25–$40',
  },
  {
    id: 'eq-competition-table',
    category: 'Tables',
    name: 'ITTF Competition Table',
    level: 'Advanced',
    titleId: 'eq-competition-table-title',
    descId: 'eq-competition-table-desc',
    imgId: 'eq-competition-table-img-q7r8s9',
    description:
      'A regulation 9×5 ft table with 25mm thick top for consistent bounce. Foldable design with lockable wheels for easy storage and transport.',
    specs: ['Size: 274×152.5cm', 'Height: 76cm', 'Top: 25mm'],
    price: '$500–$1,200',
  },
  {
    id: 'eq-home-table',
    category: 'Tables',
    name: 'Home & Recreational Table',
    level: 'Beginner',
    titleId: 'eq-home-table-title',
    descId: 'eq-home-table-desc',
    imgId: 'eq-home-table-img-t1u2v3',
    description:
      'A compact, affordable table perfect for home use. Folds to half-size for solo practice and stores easily in a garage or spare room.',
    specs: ['Size: 274×152.5cm', 'Top: 12–16mm', 'Foldable: Yes'],
    price: '$150–$400',
  },
  {
    id: 'eq-robot',
    category: 'Accessories',
    name: 'Table Tennis Robot',
    level: 'Intermediate',
    titleId: 'eq-robot-title',
    descId: 'eq-robot-desc',
    imgId: 'eq-robot-img-w4x5y6',
    description:
      'An automated ball-feeding machine that delivers consistent shots for solo practice. Programmable spin, speed, and placement settings.',
    specs: ['Ball capacity: 100+', 'Spin: Adjustable', 'Frequency: 20–100/min'],
    price: '$200–$800',
  },
  {
    id: 'eq-net',
    category: 'Accessories',
    name: 'Regulation Net & Post Set',
    level: 'All Levels',
    titleId: 'eq-net-title',
    descId: 'eq-net-desc',
    imgId: 'eq-net-img-z7a8b9',
    description:
      'A regulation 15.25cm high net with adjustable clamp posts. Fits any table edge and maintains consistent tension for fair play.',
    specs: ['Height: 15.25cm', 'Width: 183cm', 'Material: Nylon'],
    price: '$15–$50',
  },
];

const levelColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-orange-100 text-orange-700',
  'All Levels': 'bg-slate-100 text-slate-700',
};

export default function Equipment() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? equipment
      : equipment.filter((e) => e.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-slate-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3 block">
            Gear Guide
          </span>
          <h1
            id="equipment-page-title"
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Table Tennis <span className="text-orange-400">Equipment</span>
          </h1>
          <p
            id="equipment-page-desc"
            className="text-slate-400 text-lg max-w-2xl leading-relaxed"
          >
            From beginner paddles to professional-grade tables, find the right gear
            for your level and playing style.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-slate-900 sticky top-16 z-40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [equipment-page-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.name}
                  className="w-full object-cover h-44"
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      id={item.titleId}
                      className="text-base font-semibold text-slate-900 leading-snug"
                    >
                      {item.name}
                    </h3>
                    <span
                      className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${levelColors[item.level]}`}
                    >
                      {item.level}
                    </span>
                  </div>
                  <p
                    id={item.descId}
                    className="text-sm text-slate-600 leading-relaxed mb-4 flex-1"
                  >
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {item.category}
                    </span>
                    <span className="text-base font-bold text-orange-500">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying guide tip */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              🏓 Buying Guide Tips
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">For Beginners</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Start with a pre-assembled paddle rated for control. Don't spend more than
                  $40 until you've developed consistent strokes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">For Intermediate Players</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Invest in separate blade and rubber sheets. Choose rubber based on your
                  playing style — looper, defender, or all-rounder.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">For Advanced Players</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Consult a coach before buying. Carbon blades are fast but unforgiving.
                  Match rubber hardness to your swing speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
