import { useState } from 'react';
import { BookOpen, Clock, ChevronDown, ChevronUp, Shield, Heart, Leaf, Star } from 'lucide-react';
import { careGuides } from '@/data/content';
import { Link } from 'react-router-dom';

const welfareStandards = [
  {
    icon: '🏠',
    title: 'Habitat Requirements',
    desc: 'Every magical creature must have adequate space, appropriate temperature zones, and access to their natural elements. We assess each home before finalizing adoptions.',
  },
  {
    icon: '🍽️',
    title: 'Dietary Standards',
    desc: 'Magical creatures have unique dietary needs. We provide detailed feeding guides and connect adopters with certified magical nutritionists.',
  },
  {
    icon: '🏥',
    title: 'Veterinary Care',
    desc: 'All creatures receive regular check-ups from certified magical veterinarians. We maintain a network of 500+ magical creature vets worldwide.',
  },
  {
    icon: '💝',
    title: 'Emotional Wellbeing',
    desc: 'Magical creatures are sentient beings with complex emotional needs. We provide behavioral support and enrichment guidance to all adopters.',
  },
  {
    icon: '🌿',
    title: 'Ethical Sourcing',
    desc: 'We never work with unethical breeders or poachers. All our creatures come from rescue situations, ethical sanctuaries, or voluntary surrenders.',
  },
  {
    icon: '📚',
    title: 'Ongoing Education',
    desc: 'Adopters receive lifetime access to our care library, training resources, and community support to ensure the best possible care.',
  },
];

function CareGuideCard({ guide }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover-lift">
      <div className={`bg-gradient-to-br ${guide.color} p-6`}>
        <div className="text-4xl mb-3">{guide.emoji}</div>
        <h3 className="font-display text-xl text-white mb-1">{guide.title}</h3>
        <div className="flex items-center gap-3">
          <span className="pill-badge bg-white/20 text-white">
            <Clock className="w-3 h-3" /> {guide.readTime}
          </span>
          <span className="pill-badge bg-white/20 text-white">
            {guide.difficulty}
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{guide.intro}</p>

        {expanded && (
          <div className="animate-slide-up mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Topics Covered</p>
            <ul className="space-y-1.5">
              {guide.topics.map(topic => (
                <li key={topic} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
          >
            {expanded ? (
              <><ChevronUp className="w-4 h-4" /> Show less</>
            ) : (
              <><ChevronDown className="w-4 h-4" /> View topics</>
            )}
          </button>
          <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-xl text-sm font-semibold hover:bg-purple-100 transition-colors">
            Read Guide →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState('guides');

  return (
    <div className="min-h-screen bg-[#fef9f0] pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-teal-600 py-16 px-6 relative overflow-hidden">
        <div className="blob-bg w-64 h-64 bg-emerald-300 top-0 right-0 opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4 animate-float inline-block">📚</div>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-4">Care & Education</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Everything you need to know about caring for magical creatures — from habitat setup to magical ability training.
          </p>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'guides', label: 'Care Guides', emoji: '📖' },
              { id: 'welfare', label: 'Welfare Standards', emoji: '🛡️' },
              { id: 'habitats', label: 'Habitat Guide', emoji: '🏠' },
              { id: 'donate', label: 'Support Us', emoji: '💝' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {tab.emoji} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Care Guides */}
        {activeTab === 'guides' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl text-green-800 mb-2">Species Care Guides</h2>
              <p className="text-gray-600">Comprehensive guides written by magical creature experts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careGuides.map(guide => (
                <CareGuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        )}

        {/* Welfare Standards */}
        {activeTab === 'welfare' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl text-green-800 mb-2">🛡️ Magical Creature Welfare Standards</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Monster Match is committed to the highest standards of magical creature welfare. Here's what we require from all adopters and what we promise to every creature in our care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {welfareStandards.map((standard, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover-lift">
                  <div className="text-3xl mb-3">{standard.icon}</div>
                  <h3 className="font-display text-xl text-green-800 mb-2">{standard.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{standard.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-8 text-white text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="font-display text-2xl mb-3">Our Ethical Adoption Promise</h3>
              <p className="text-green-100 max-w-2xl mx-auto leading-relaxed">
                Every creature that passes through Monster Match receives a full health assessment, behavioral evaluation, and is matched only with families who can meet their specific needs. We conduct follow-up visits at 1 month, 6 months, and 1 year post-adoption.
              </p>
            </div>
          </div>
        )}

        {/* Habitats */}
        {activeTab === 'habitats' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl text-green-800 mb-2">🏠 Habitat Requirements</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Different magical creatures have very different habitat needs. Use this guide to understand what your home needs before adopting.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { habitat: 'Mountain', emoji: '⛰️', creatures: ['Dragon', 'Crystal Deer', 'Frost Owl'], requirements: 'High ceilings, cool temperatures, rocky terrain or climbing structures, access to outdoor space', difficulty: 'Advanced' },
                { habitat: 'Forest', emoji: '🌲', creatures: ['Forest Spirit', 'Moss Golem', 'Dream Moth'], requirements: 'Garden access, natural light, plant-filled environment, humidity control', difficulty: 'Intermediate' },
                { habitat: 'Sky', emoji: '☁️', creatures: ['Cloud Whale', 'Wind Dancer', 'Thunder Bunny'], requirements: 'Very high ceilings (20ft+), outdoor access, weather monitoring equipment', difficulty: 'Expert' },
                { habitat: 'Meadow', emoji: '🌸', creatures: ['Moon Fox', 'Sunbeam Ferret', 'Starfish Sprite'], requirements: 'Yard or garden, natural light, moderate temperatures, soft bedding areas', difficulty: 'Beginner' },
                { habitat: 'Volcano', emoji: '🌋', creatures: ['Lava Kitten', 'Ember Toad', 'Pebble Troll'], requirements: 'Fireproof materials, heat zones, ventilation system, fire suppression equipment', difficulty: 'Intermediate' },
                { habitat: 'Ocean', emoji: '🌊', creatures: ['Bubble Serpent', 'Tide Nymph', 'Shadow Pup'], requirements: 'Large water feature or pool, humidity control, salt water access', difficulty: 'Advanced' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{item.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl text-green-800">{item.habitat} Habitat</h3>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                          item.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          item.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        <strong>Creatures:</strong> {item.creatures.join(', ')}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Requirements:</strong> {item.requirements}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Donate */}
        {activeTab === 'donate' && (
          <div>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl text-green-800 mb-2">💝 Support Monster Match</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your donations help us rescue, rehabilitate, and rehome magical creatures in need. Every contribution makes a difference!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { amount: '$10', impact: 'Feeds one magical creature for a week', emoji: '🍽️', color: 'from-green-400 to-teal-500' },
                { amount: '$50', impact: 'Covers a magical vet check-up', emoji: '🏥', color: 'from-blue-400 to-indigo-500', popular: true },
                { amount: '$200', impact: 'Sponsors a creature\'s full rehabilitation', emoji: '💝', color: 'from-purple-400 to-pink-500' },
              ].map((tier, i) => (
                <div key={i} className={`relative bg-gradient-to-br ${tier.color} rounded-2xl p-6 text-white text-center shadow-lg hover-lift`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className="text-4xl mb-3">{tier.emoji}</div>
                  <div className="font-display text-4xl mb-2">{tier.amount}</div>
                  <p className="text-white/80 text-sm mb-4">{tier.impact}</p>
                  <button className="w-full py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-display transition-colors">
                    Donate {tier.amount}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
              <h3 className="font-display text-2xl text-green-800 mb-4">🤝 Volunteer Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Foster Families', desc: 'Provide temporary homes for creatures awaiting adoption', emoji: '🏠' },
                  { title: 'Magical Vets', desc: 'Volunteer your expertise to care for creatures in our sanctuary', emoji: '🏥' },
                  { title: 'Community Educators', desc: 'Help us teach responsible magical creature ownership', emoji: '📚' },
                  { title: 'Event Helpers', desc: 'Assist at adoption events and community meetups', emoji: '🎉' },
                ].map((program, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <span className="text-2xl">{program.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-green-800">{program.title}</h4>
                      <p className="text-sm text-gray-600">{program.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-display text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Apply to Volunteer 🌟
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
