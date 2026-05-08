import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  {
    id: 'feeding',
    emoji: '🌾',
    title: 'Feeding & Nutrition',
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    accent: 'bg-green-600',
    items: [
      {
        q: 'What do horses eat?',
        a: 'Horses are herbivores and their diet should consist primarily of high-quality hay or pasture grass (1.5–2% of body weight daily). They also benefit from grains like oats or barley for extra energy, and fresh vegetables like carrots and apples as treats. Always ensure access to fresh, clean water — a horse can drink 5–10 gallons per day!',
      },
      {
        q: 'How often should horses be fed?',
        a: 'Horses have small stomachs relative to their size and are designed to graze continuously. Ideally, feed them small amounts frequently — at least 2–3 times per day. Avoid long gaps between meals as this can lead to digestive issues like colic or ulcers.',
      },
      {
        q: 'What supplements do horses need?',
        a: 'Most horses on a balanced diet of quality hay and pasture get adequate nutrition. However, salt/mineral blocks are important for electrolyte balance. Depending on your region and hay quality, horses may need calcium, phosphorus, or vitamin E supplements. Always consult a veterinarian before adding supplements.',
      },
      {
        q: 'What foods are toxic to horses?',
        a: 'Several foods are dangerous for horses: avocado (all parts), chocolate, onions and garlic, tomatoes, potatoes, rhubarb, lawn clippings (can ferment), and certain plants like ragwort, yew, and bracken fern. Always research before introducing new foods.',
      },
    ],
  },
  {
    id: 'grooming',
    emoji: '✂️',
    title: 'Grooming',
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
    accent: 'bg-purple-600',
    items: [
      {
        q: 'How often should I groom my horse?',
        a: 'Daily grooming is ideal and serves multiple purposes: it removes dirt and debris, stimulates circulation, allows you to check for injuries or skin conditions, and strengthens the bond between horse and rider. At minimum, always groom before and after riding.',
      },
      {
        q: 'What grooming tools do I need?',
        a: 'Essential grooming tools include: a curry comb (loosens dirt and dead hair), a hard brush (removes loosened debris), a soft brush (finishing and face), a mane and tail comb, a hoof pick (clean hooves daily!), a sponge for eyes and dock, and a sweat scraper for after bathing.',
      },
      {
        q: 'How do I clean a horse\'s hooves?',
        a: 'Use a hoof pick to clean from heel to toe, removing dirt, stones, and manure from the grooves around the frog. Check for signs of thrush (black, foul-smelling discharge), cracks, or loose shoes. Hooves should be cleaned at least once daily and before/after every ride.',
      },
      {
        q: 'How often do horses need their hooves trimmed?',
        a: 'Hooves grow approximately 1/4 to 3/8 inch per month. Most horses need trimming or shoeing every 6–8 weeks. Horses without shoes (barefoot) may need trimming every 4–6 weeks. Regular farrier visits are essential for soundness and preventing lameness.',
      },
    ],
  },
  {
    id: 'health',
    emoji: '🏥',
    title: 'Health & Veterinary Care',
    color: 'from-red-50 to-rose-50',
    border: 'border-red-200',
    accent: 'bg-red-600',
    items: [
      {
        q: 'What vaccinations do horses need?',
        a: 'Core vaccines recommended for all horses include: Tetanus, Eastern/Western Equine Encephalomyelitis (EEE/WEE), West Nile Virus, and Rabies. Risk-based vaccines include Influenza, Rhinopneumonitis (EHV), Strangles, and Potomac Horse Fever. Consult your vet for a schedule based on your location and horse\'s lifestyle.',
      },
      {
        q: 'How often should horses be dewormed?',
        a: 'Modern deworming programs are based on fecal egg counts (FEC) rather than calendar-based treatment. Have your vet perform a FEC test 2–4 times per year to determine parasite burden. High shedders may need treatment 3–4 times yearly; low shedders may only need 1–2 treatments.',
      },
      {
        q: 'What is colic and how serious is it?',
        a: 'Colic refers to abdominal pain in horses and is one of the most common and potentially life-threatening conditions. Signs include pawing, looking at flanks, rolling, refusing food, and elevated heart rate. Always call a vet immediately if you suspect colic — it can range from mild gas pain to a life-threatening twisted gut.',
      },
      {
        q: 'How do I know if my horse is sick?',
        a: 'Know your horse\'s normal vital signs: Temperature (99–101.5°F), Heart rate (28–44 bpm), Respiratory rate (12–20 breaths/min), Gut sounds (present on both sides). Warning signs include: lethargy, loss of appetite, abnormal droppings, nasal discharge, coughing, lameness, or unusual behavior.',
      },
    ],
  },
  {
    id: 'training',
    emoji: '🎯',
    title: 'Training Basics',
    color: 'from-blue-50 to-sky-50',
    border: 'border-blue-200',
    accent: 'bg-blue-600',
    items: [
      {
        q: 'What is natural horsemanship?',
        a: 'Natural horsemanship is a philosophy of working with horses using communication methods that mimic how horses interact with each other. It emphasizes understanding horse psychology, using body language, pressure and release, and building trust rather than force. Key figures include Pat Parelli, Buck Brannaman, and Monty Roberts.',
      },
      {
        q: 'How do I teach a horse to lead?',
        a: 'Start with a well-fitting halter and lead rope. Stand at the horse\'s shoulder, apply gentle forward pressure on the lead, and release immediately when the horse steps forward. Reward with praise or a treat. Practice in a safe, enclosed area. Consistency and patience are key — never drag or force the horse.',
      },
      {
        q: 'What are the basic gaits of a horse?',
        a: 'Horses have four natural gaits: Walk (4-beat, slowest), Trot (2-beat diagonal pairs, ~8-12 mph), Canter/Lope (3-beat, ~12-17 mph), and Gallop (4-beat, fastest, up to 55 mph). Some breeds have additional gaits like the Icelandic Horse\'s tölt or the Tennessee Walker\'s running walk.',
      },
      {
        q: 'How long does it take to train a horse?',
        a: 'Training timelines vary greatly. Basic groundwork and leading can be taught in weeks. Starting a young horse under saddle typically takes 60–90 days of consistent work. Developing a well-rounded riding horse takes 1–3 years. Specialized disciplines like dressage or jumping can take many years to master.',
      },
    ],
  },
  {
    id: 'housing',
    emoji: '🏠',
    title: 'Housing & Environment',
    color: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    accent: 'bg-amber-600',
    items: [
      {
        q: 'How much space does a horse need?',
        a: 'A minimum of 1–2 acres of pasture per horse is recommended for grazing. A standard box stall should be at least 12×12 feet (larger for big breeds). Horses are social animals and do best with companions. They need daily turnout for exercise and mental well-being.',
      },
      {
        q: 'How should a horse stall be set up?',
        a: 'A proper stall needs: adequate size (12×12 minimum), good ventilation without drafts, safe flooring (rubber mats over concrete or packed clay), clean bedding (straw, shavings, or pellets) 4–6 inches deep, a water bucket or automatic waterer, and a hay rack or net. Clean stalls daily.',
      },
      {
        q: 'Can horses live outside year-round?',
        a: 'Many horses can live outside year-round with proper shelter, nutrition, and care. They need a three-sided run-in shed for protection from wind, rain, and sun. In cold climates, horses grow thick winter coats. However, clipped horses, elderly horses, or those with health conditions may need more protection.',
      },
    ],
  },
];

function AccordionItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/60 rounded-xl overflow-hidden bg-white/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/50 transition"
      >
        <span
          className="font-semibold text-[#2c1810] pr-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.q}
        </span>
        {open ? (
          <ChevronUp size={18} className="text-[#6b4c3b] flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-[#6b4c3b] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p
            className="text-[#4a2c1a] leading-relaxed text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Care() {
  const [activeSection, setActiveSection] = useState('feeding');

  const current = sections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-[#faf8f5] pt-20">
      {/* Header */}
      <div
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 100%)' }}
      >
        <div className="text-5xl mb-4">🌿</div>
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Care & Training
        </h1>
        <p
          className="text-green-100/80 text-lg max-w-xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Everything you need to know about keeping horses healthy, happy, and well-trained
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Section Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeSection === s.id
                  ? 'bg-[#2c1810] text-white shadow-md'
                  : 'bg-white border border-amber-200 text-[#6b4c3b] hover:bg-amber-50'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>{s.emoji}</span>
              {s.title}
            </button>
          ))}
        </div>

        {/* Active Section */}
        {current && (
          <div className={`bg-gradient-to-br ${current.color} border ${current.border} rounded-3xl p-6 sm:p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{current.emoji}</span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#2c1810]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {current.title}
              </h2>
            </div>
            <div className="space-y-3">
              {current.items.map((item) => (
                <AccordionItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Quick Tips */}
        <div className="mt-12 bg-[#2c1810] rounded-3xl p-8 text-white">
          <h3
            className="text-2xl font-bold mb-6 text-amber-400"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            🌟 Golden Rules of Horse Care
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '💧', tip: 'Always provide fresh, clean water — horses drink 5–10 gallons daily' },
              { icon: '🌾', tip: 'Feed little and often — horses are designed to graze continuously' },
              { icon: '🦷', tip: 'Schedule dental checks every 6–12 months for proper chewing' },
              { icon: '🏃', tip: 'Ensure daily exercise and turnout for physical and mental health' },
              { icon: '👁️', tip: 'Observe your horse daily — early detection saves lives' },
              { icon: '🤝', tip: 'Build trust through consistent, calm, and patient handling' },
            ].map(({ icon, tip }) => (
              <div key={tip} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{icon}</span>
                <p
                  className="text-amber-100/80 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
