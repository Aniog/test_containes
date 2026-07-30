import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const techniques = [
  {
    id: 'tech-grip-shakehand',
    level: 'Beginner',
    category: 'Grip',
    name: 'Shakehand Grip',
    titleId: 'tech-grip-shakehand-title',
    descId: 'tech-grip-shakehand-desc',
    imgId: 'tech-grip-shakehand-img-a1b2c3',
    summary: 'The most popular grip worldwide, used by the majority of European and many Asian players.',
    steps: [
      'Hold the racket as if shaking hands with it — thumb on one side, index finger on the other.',
      'Wrap the remaining three fingers around the handle.',
      'Keep a relaxed grip — tension reduces feel and speed.',
      'The index finger should rest along the bottom edge of the rubber.',
    ],
    tip: 'A relaxed grip gives you more wrist flexibility for spin shots.',
  },
  {
    id: 'tech-grip-penhold',
    level: 'Beginner',
    category: 'Grip',
    name: 'Penhold Grip',
    titleId: 'tech-grip-penhold-title',
    descId: 'tech-grip-penhold-desc',
    imgId: 'tech-grip-penhold-img-d4e5f6',
    summary: 'Traditional Asian grip offering exceptional forehand power and wrist mobility.',
    steps: [
      'Hold the racket between thumb and index finger, as if holding a pen.',
      'The other three fingers curl behind the blade for support.',
      'The racket head points downward.',
      'Rotate the wrist freely for powerful forehand strokes.',
    ],
    tip: 'Penhold players often use the reverse backhand (RPB) to cover the backhand side.',
  },
  {
    id: 'tech-forehand-drive',
    level: 'Beginner',
    category: 'Stroke',
    name: 'Forehand Drive',
    titleId: 'tech-forehand-drive-title',
    descId: 'tech-forehand-drive-desc',
    imgId: 'tech-forehand-drive-img-g7h8i9',
    summary: 'The foundational attacking stroke — fast, flat, and consistent.',
    steps: [
      'Stand slightly to the left of the table centre (for right-handers).',
      'Rotate your waist back as the ball approaches.',
      'Swing forward and upward, making contact at the peak of the bounce.',
      'Follow through toward your target, finishing with the racket near your forehead.',
      'Return to ready position immediately.',
    ],
    tip: 'Use your whole body — legs, waist, and arm — not just your arm.',
  },
  {
    id: 'tech-backhand-drive',
    level: 'Beginner',
    category: 'Stroke',
    name: 'Backhand Drive',
    titleId: 'tech-backhand-drive-title',
    descId: 'tech-backhand-drive-desc',
    imgId: 'tech-backhand-drive-img-j1k2l3',
    summary: 'A compact, controlled stroke for returning balls to the backhand side.',
    steps: [
      'Position the racket in front of your body, elbow bent at 90°.',
      'Rotate your forearm forward and upward on contact.',
      'Keep the stroke compact — no large backswing needed.',
      'Contact the ball slightly in front of your body.',
      'Follow through toward the target.',
    ],
    tip: 'The backhand drive is faster to execute than the forehand — use it for quick exchanges.',
  },
  {
    id: 'tech-topspin',
    level: 'Intermediate',
    category: 'Spin',
    name: 'Forehand Topspin Loop',
    titleId: 'tech-topspin-title',
    descId: 'tech-topspin-desc',
    imgId: 'tech-topspin-img-m4n5o6',
    summary: 'The most powerful attacking weapon in modern table tennis.',
    steps: [
      'Drop the racket low, below the ball level.',
      'Brush the back of the ball in a fast upward arc.',
      'The racket angle should be nearly closed (facing down).',
      'Accelerate through the ball — speed creates spin.',
      'Follow through high, finishing above your head.',
    ],
    tip: 'Topspin causes the ball to dip sharply — aim higher over the net than you think.',
  },
  {
    id: 'tech-backspin',
    level: 'Intermediate',
    category: 'Spin',
    name: 'Backspin Push',
    titleId: 'tech-backspin-title',
    descId: 'tech-backspin-desc',
    imgId: 'tech-backspin-img-p7q8r9',
    summary: 'A defensive stroke that keeps the ball low and forces errors from attackers.',
    steps: [
      'Open the racket angle (face upward).',
      'Move the racket forward and downward under the ball.',
      'Brush the bottom of the ball to generate backspin.',
      'Keep the stroke short and controlled.',
      'Aim for a low trajectory just over the net.',
    ],
    tip: 'Heavy backspin will cause the opponent\'s topspin to go into the net if they don\'t adjust.',
  },
  {
    id: 'tech-sidespin-serve',
    level: 'Intermediate',
    category: 'Serve',
    name: 'Sidespin Pendulum Serve',
    titleId: 'tech-sidespin-serve-title',
    descId: 'tech-sidespin-serve-desc',
    imgId: 'tech-sidespin-serve-img-s1t2u3',
    summary: 'A deceptive serve that curves the ball and creates difficult returns.',
    steps: [
      'Toss the ball and swing the racket in a pendulum motion (side to side).',
      'Brush the side of the ball to generate sidespin.',
      'Vary the contact point to produce topspin-side or backspin-side variations.',
      'Keep your wrist loose for maximum spin generation.',
      'Follow through naturally to disguise the spin direction.',
    ],
    tip: 'The key is disguise — make all your serves look the same until the last moment.',
  },
  {
    id: 'tech-flick',
    level: 'Intermediate',
    category: 'Stroke',
    name: 'Backhand Flick (Banana Flick)',
    titleId: 'tech-flick-title',
    descId: 'tech-flick-desc',
    imgId: 'tech-flick-img-v4w5x6',
    summary: 'An aggressive short-ball attack that turns defence into offence.',
    steps: [
      'Step in close to the table with your right foot (for right-handers).',
      'Reach over the table to the short ball.',
      'Use a fast wrist snap to brush the top of the ball.',
      'The motion curves like a banana — hence the name.',
      'Recover quickly to ready position.',
    ],
    tip: 'The banana flick is most effective against short backspin serves to the backhand.',
  },
  {
    id: 'tech-footwork',
    level: 'Advanced',
    category: 'Footwork',
    name: 'One-Step Footwork',
    titleId: 'tech-footwork-title',
    descId: 'tech-footwork-desc',
    imgId: 'tech-footwork-img-y7z8a9',
    summary: 'Efficient lateral movement to cover the table and maintain balance.',
    steps: [
      'Stay on the balls of your feet in a wide athletic stance.',
      'Push off the foot closest to the ball\'s direction.',
      'Move the other foot to maintain your stance width.',
      'Never cross your feet — shuffle step instead.',
      'Return to your base position after every stroke.',
    ],
    tip: 'Good footwork is more important than powerful strokes — position creates power.',
  },
  {
    id: 'tech-loop-against-backspin',
    level: 'Advanced',
    category: 'Stroke',
    name: 'Loop Against Backspin',
    titleId: 'tech-loop-against-backspin-title',
    descId: 'tech-loop-against-backspin-desc',
    imgId: 'tech-loop-against-backspin-img-b1c2d3',
    summary: 'Opening the rally with a powerful topspin against a backspin ball.',
    steps: [
      'Read the incoming backspin — heavier spin requires more upward brush.',
      'Drop the racket lower than usual to get under the ball.',
      'Open the racket angle slightly more than for a topspin-to-topspin loop.',
      'Accelerate sharply upward and forward.',
      'Aim higher over the net to account for the backspin\'s downward pull.',
    ],
    tip: 'The first loop against backspin doesn\'t need to be fast — focus on spin and placement.',
  },
  {
    id: 'tech-serve-receive',
    level: 'Advanced',
    category: 'Serve',
    name: 'Reading & Returning Serves',
    titleId: 'tech-serve-receive-title',
    descId: 'tech-serve-receive-desc',
    imgId: 'tech-serve-receive-img-e4f5g6',
    summary: 'The most important skill in competitive table tennis — reading spin and responding correctly.',
    steps: [
      'Watch the server\'s racket angle and contact point, not the ball.',
      'A downward brush = backspin; upward brush = topspin; sideways = sidespin.',
      'Open your racket for backspin, close it for topspin.',
      'Use a short push or flick for short serves; loop or drive for long serves.',
      'When unsure, push short and safe to reset the rally.',
    ],
    tip: 'Practice receiving with a partner who serves the same ball repeatedly until you can read it automatically.',
  },
  {
    id: 'tech-mental',
    level: 'Advanced',
    category: 'Mental Game',
    name: 'Mental Toughness & Match Strategy',
    titleId: 'tech-mental-title',
    descId: 'tech-mental-desc',
    imgId: 'tech-mental-img-h7i8j9',
    summary: 'Winning the mental battle is as important as technical skill at the highest levels.',
    steps: [
      'Develop a consistent pre-point routine to stay focused.',
      'Analyse your opponent\'s weaknesses in the first game.',
      'Vary your serve and placement to disrupt their rhythm.',
      'Stay calm after losing a point — reset with a deep breath.',
      'Play to your strengths, not just to exploit weaknesses.',
    ],
    tip: 'The best players win points before the rally starts — through serve tactics and positioning.',
  },
];

const levelColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-orange-100 text-orange-700',
};

const categoryColors = {
  Grip: 'bg-purple-100 text-purple-700',
  Stroke: 'bg-sky-100 text-sky-700',
  Spin: 'bg-yellow-100 text-yellow-700',
  Serve: 'bg-pink-100 text-pink-700',
  Footwork: 'bg-teal-100 text-teal-700',
  'Mental Game': 'bg-indigo-100 text-indigo-700',
};

export default function Techniques() {
  const containerRef = useRef(null);
  const [activeLevel, setActiveLevel] = useState('All');

  const filtered =
    activeLevel === 'All'
      ? techniques
      : techniques.filter((t) => t.level === activeLevel);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeLevel]);

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-slate-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3 block">
            Skills & Training
          </span>
          <h1
            id="techniques-page-title"
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
          >
            Table Tennis <span className="text-orange-400">Techniques</span>
          </h1>
          <p
            id="techniques-page-desc"
            className="text-slate-400 text-lg max-w-2xl leading-relaxed"
          >
            Master the strokes, spins, serves, and strategies that separate good players
            from great ones. Step-by-step guides for every skill level.
          </p>
        </div>
      </section>

      {/* Level filter */}
      <section className="bg-slate-900 sticky top-16 z-40 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeLevel === level
                    ? 'bg-orange-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [techniques-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tech.name}
                  className="w-full object-cover h-44"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColors[tech.level]}`}
                    >
                      {tech.level}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[tech.category]}`}
                    >
                      {tech.category}
                    </span>
                  </div>
                  <h3
                    id={tech.titleId}
                    className="text-xl font-bold text-slate-900 mb-2"
                  >
                    {tech.name}
                  </h3>
                  <p
                    id={tech.descId}
                    className="text-sm text-slate-600 leading-relaxed mb-5"
                  >
                    {tech.summary}
                  </p>

                  {/* Steps */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                      How to do it
                    </p>
                    <ol className="space-y-2">
                      {tech.steps.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex-shrink-0 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <p className="text-sm text-slate-600 leading-relaxed">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Pro tip */}
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-orange-600 mb-1">
                      Pro Tip
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">{tech.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training advice */}
      <section className="bg-slate-950 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            How to Practice Effectively
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Deliberate practice beats mindless repetition. Here's how to structure your training sessions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: '🎯',
                title: 'Focused Drills',
                desc: 'Isolate one technique per session. Repeat the same stroke 200+ times until it becomes automatic.',
              },
              {
                icon: '🤝',
                title: 'Multi-Ball Training',
                desc: 'Have a partner or robot feed balls continuously. This maximises repetitions per session.',
              },
              {
                icon: '🎮',
                title: 'Match Play',
                desc: 'Apply techniques under pressure. Play practice matches with specific tactical goals in mind.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-800 rounded-2xl p-6">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
