import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const allFacts = [
  { emoji: '👁️', category: 'Anatomy', fact: 'Horses have the largest eyes of any land mammal. Their eyes are positioned on the sides of their head, giving them nearly 360-degree vision — but they have two blind spots: directly in front of their nose and directly behind them.' },
  { emoji: '😴', category: 'Behavior', fact: 'Horses can sleep both standing up and lying down. They have a special "stay apparatus" — a locking mechanism in their legs — that allows them to doze while standing. However, they need to lie down for REM (deep) sleep, usually for short periods.' },
  { emoji: '🦷', category: 'Anatomy', fact: 'You can estimate a horse\'s age by examining its teeth! As horses age, their teeth change in shape, angle, and the appearance of grooves and marks. This is where the saying "don\'t look a gift horse in the mouth" comes from.' },
  { emoji: '❤️', category: 'Anatomy', fact: 'A horse\'s heart weighs about 9–10 pounds (4–4.5 kg) on average. Secretariat, the legendary racehorse, had a heart estimated at 22 pounds — more than twice the normal size, which is believed to have contributed to his extraordinary racing ability.' },
  { emoji: '🏃', category: 'Speed', fact: 'The fastest recorded speed of a horse was 55 mph (88.5 km/h), achieved by a Quarter Horse named Winning Brew in 2008. Thoroughbreds typically race at 35–44 mph, while the average horse gallops at 25–30 mph.' },
  { emoji: '🧠', category: 'Intelligence', fact: 'Horses have excellent memories and can remember people, places, and experiences for decades. They can recognize human facial expressions and remember whether a person was kind or unkind to them years later.' },
  { emoji: '📏', category: 'Size', fact: 'The tallest horse ever recorded was a Shire horse named Sampson (later renamed Mammoth), born in 1846 in England. He stood 21.2½ hands (7 feet 2.5 inches / 2.19 m) tall and weighed 3,360 pounds.' },
  { emoji: '🐣', category: 'Development', fact: 'Foals (baby horses) can stand and walk within hours of birth — sometimes within 30 minutes! This is an evolutionary adaptation from when horses lived in the wild and needed to flee predators quickly.' },
  { emoji: '🌍', category: 'History', fact: 'Horses were domesticated approximately 5,500 years ago on the steppes of Central Asia (modern-day Kazakhstan). Before domestication, they were hunted for food. The relationship between humans and horses fundamentally changed civilization.' },
  { emoji: '🎨', category: 'Appearance', fact: 'A horse\'s coat color is determined by just two base pigments: black (eumelanin) and red (phaeomelanin). All the various colors and patterns — bay, chestnut, gray, palomino, pinto — are variations and combinations of these two pigments.' },
  { emoji: '🦴', category: 'Anatomy', fact: 'Horses have 205 bones in their skeleton — slightly fewer than humans (206). Interestingly, horses walk on the equivalent of their middle finger and middle toe. Their "knee" is actually their wrist, and their "hock" is their ankle.' },
  { emoji: '🌙', category: 'Behavior', fact: 'Horses are crepuscular animals, meaning they are most active at dawn and dusk. In the wild, this behavior helped them avoid predators that were more active during the day or night.' },
  { emoji: '👃', category: 'Senses', fact: 'Horses have an extraordinary sense of smell, with about 300 million olfactory receptors (humans have about 6 million). They use smell to identify other horses, detect danger, find water, and even sense human emotions through chemical signals.' },
  { emoji: '🎵', category: 'Communication', fact: 'Horses communicate through a complex system of vocalizations, body language, and facial expressions. They have 17 distinct facial expressions — more than dogs (16) and almost as many as humans (27). They can move each ear independently to show attention and mood.' },
  { emoji: '🌡️', category: 'Physiology', fact: 'Horses are incredibly efficient athletes. A horse\'s body temperature is 99–101.5°F (37.2–38.6°C). During intense exercise, their muscles can generate heat so rapidly that they could theoretically boil water — their sweating system is crucial for cooling.' },
  { emoji: '🐴', category: 'History', fact: 'There are approximately 60 million horses in the world today. The United States has the largest horse population with about 9.5 million horses. Horses are found on every continent except Antarctica.' },
  { emoji: '🔬', category: 'Science', fact: 'Horses are one of the few animals that sweat through their skin as a primary cooling mechanism (like humans). Horse sweat contains a natural protein called latherin that acts as a detergent, helping sweat spread through their thick coat for more efficient cooling.' },
  { emoji: '🌊', category: 'Abilities', fact: 'Horses are natural swimmers! They are buoyant and can swim long distances. Wild horses have been known to swim between islands. Swimming is also used as therapy and rehabilitation for horses with leg injuries.' },
  { emoji: '🎭', category: 'Culture', fact: 'Horses appear in the cave paintings at Lascaux, France, dating back 17,000 years — making them one of the most depicted animals in prehistoric art. They have been central to human culture, warfare, agriculture, and transportation throughout history.' },
  { emoji: '⚡', category: 'Physiology', fact: 'A horse\'s digestive system is about 100 feet (30 meters) long! Unlike cows, horses cannot vomit — their digestive system only moves in one direction. This is why colic (digestive pain) can be so dangerous and why proper feeding is critical.' },
];

const categories = ['All', 'Anatomy', 'Behavior', 'Speed', 'Intelligence', 'History', 'Physiology', 'Senses', 'Science', 'Abilities', 'Culture', 'Development', 'Size', 'Appearance', 'Communication'];

const categoryColors = {
  Anatomy: 'bg-red-100 text-red-700',
  Behavior: 'bg-blue-100 text-blue-700',
  Speed: 'bg-orange-100 text-orange-700',
  Intelligence: 'bg-purple-100 text-purple-700',
  History: 'bg-amber-100 text-amber-700',
  Physiology: 'bg-green-100 text-green-700',
  Senses: 'bg-pink-100 text-pink-700',
  Science: 'bg-cyan-100 text-cyan-700',
  Abilities: 'bg-teal-100 text-teal-700',
  Culture: 'bg-indigo-100 text-indigo-700',
  Development: 'bg-lime-100 text-lime-700',
  Size: 'bg-stone-100 text-stone-700',
  Appearance: 'bg-violet-100 text-violet-700',
  Communication: 'bg-rose-100 text-rose-700',
};

export default function Facts() {
  const [filter, setFilter] = useState('All');
  const [featured, setFeatured] = useState(allFacts[0]);

  const filtered = filter === 'All' ? allFacts : allFacts.filter((f) => f.category === filter);

  const randomFact = () => {
    const pool = filter === 'All' ? allFacts : filtered;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setFeatured(random);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] pt-20">
      {/* Header */}
      <div
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #1a1a4e 0%, #2d2d8a 60%, #4a3fa0 100%)' }}
      >
        <div className="text-5xl mb-4">✨</div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Amazing Horse Facts
        </h1>
        <p
          className="text-purple-100/80 text-lg max-w-xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {allFacts.length} fascinating facts that will make you love horses even more
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured Fact */}
        <div
          className="rounded-3xl p-8 mb-12 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #2c1810 0%, #6b3d1e 100%)' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-semibold bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full uppercase tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ⭐ Featured Fact
              </span>
              <button
                onClick={randomFact}
                className="flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <RefreshCw size={14} /> Random Fact
              </button>
            </div>
            <div className="text-5xl mb-4">{featured.emoji}</div>
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[featured.category] || 'bg-white/20 text-white'}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {featured.category}
            </span>
            <p
              className="text-lg text-amber-50 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {featured.fact}
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-[#2c1810] text-white'
                  : 'bg-white border border-amber-200 text-[#6b4c3b] hover:bg-amber-50'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <p
          className="text-sm text-[#6b4c3b] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Showing {filtered.length} facts
        </p>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((fact, i) => (
            <div
              key={i}
              onClick={() => setFeatured(fact)}
              className="bg-white border border-amber-100 rounded-2xl p-6 hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{fact.emoji}</span>
                <div>
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${categoryColors[fact.category] || 'bg-gray-100 text-gray-700'}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {fact.category}
                  </span>
                  <p
                    className="text-sm text-[#4a2c1a] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {fact.fact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
