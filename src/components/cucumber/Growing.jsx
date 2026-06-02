import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    step: '01',
    title: 'Choose Your Spot',
    desc: 'Cucumbers love full sun — pick a location with at least 6–8 hours of direct sunlight daily.',
  },
  {
    step: '02',
    title: 'Prepare the Soil',
    desc: 'Use well-draining, fertile soil with a pH of 6.0–7.0. Mix in compost for best results.',
  },
  {
    step: '03',
    title: 'Plant the Seeds',
    desc: 'Sow seeds 1 inch deep, 12 inches apart. Plant after the last frost when soil is warm.',
  },
  {
    step: '04',
    title: 'Water Consistently',
    desc: 'Keep soil evenly moist. Water at the base to avoid leaf disease. About 1 inch per week.',
  },
  {
    step: '05',
    title: 'Train & Support',
    desc: 'Use a trellis or cage to keep vines off the ground. This improves airflow and yield.',
  },
  {
    step: '06',
    title: 'Harvest Time',
    desc: 'Pick cucumbers when firm and dark green, usually 50–70 days after planting. Don\'t wait too long!',
  },
];

const Growing = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="growing" className="py-20 md:py-28 bg-cucumber-pale" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-white text-cucumber font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              Grow Your Own
            </span>
            <h2
              id="growing-title"
              className="font-black text-3xl md:text-5xl text-cucumber-dark mb-6"
            >
              From Seed to<br />
              <span className="text-cucumber">Your Table</span>
            </h2>
            <p
              id="growing-subtitle"
              className="text-cucumber-muted text-lg leading-relaxed mb-8"
            >
              Growing cucumbers at home is easier than you think. With the right conditions,
              you can harvest fresh cucumbers in as little as 50 days.
            </p>
            <img
              alt="Growing cucumbers in garden"
              data-strk-img-id="growing-img-cuc-3b7e9d"
              data-strk-img="[growing-subtitle] [growing-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="space-y-5">
            {steps.map((s) => (
              <div
                key={s.step}
                className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-cucumber text-white rounded-full flex items-center justify-center font-black text-sm">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-bold text-cucumber-dark mb-1">{s.title}</h4>
                  <p className="text-cucumber-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growing;
