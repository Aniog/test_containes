import { ThumbsUp, ThumbsDown } from 'lucide-react';

const reviews = [
  {
    id: 'r1',
    game: 'Elden Ring',
    user: 'TarnishedWarrior',
    avatar: 'TW',
    avatarColor: 'bg-yellow-600',
    hours: 312,
    positive: true,
    text: "Absolutely breathtaking. Every corner of the Lands Between hides something incredible. The combat is punishing but fair, and the sense of discovery is unmatched. FromSoftware's masterpiece.",
    helpful: 847,
  },
  {
    id: 'r2',
    game: "Baldur's Gate 3",
    user: 'DiceRoller99',
    avatar: 'DR',
    avatarColor: 'bg-purple-600',
    hours: 520,
    positive: true,
    text: "I've never played a game that reacts to my choices this deeply. Every playthrough feels completely different. Larian Studios has set a new gold standard for RPGs. A must-play.",
    helpful: 1203,
  },
  {
    id: 'r3',
    game: 'Hades',
    user: 'ZagreusMain',
    avatar: 'ZM',
    avatarColor: 'bg-red-700',
    hours: 180,
    positive: true,
    text: "The best roguelike ever made. The story actually progresses through repeated runs, the combat is fluid and satisfying, and the voice acting is phenomenal. I can't stop playing.",
    helpful: 634,
  },
  {
    id: 'r4',
    game: 'Cyberpunk 2077',
    user: 'NightCityV',
    avatar: 'NC',
    avatarColor: 'bg-cyan-700',
    hours: 210,
    positive: true,
    text: "After the patches, this game is a masterpiece. Night City is the most detailed open world I've ever explored. The story is gripping and the side quests rival the main campaign.",
    helpful: 921,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 md:px-8 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[#a855f7] text-sm font-semibold uppercase tracking-widest">Community</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Player Reviews</h2>
          <p className="text-[#9d8fc0] mt-2 max-w-xl">
            Real opinions from real players. See what the community is saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#1a1a35] border border-[#2d2d55] rounded-xl p-6 hover:border-[#a855f7] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.user}</div>
                    <div className="text-[#9d8fc0] text-xs">{review.hours} hrs on record</div>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${review.positive ? 'bg-purple-900/50 text-purple-300' : 'bg-red-900/50 text-red-400'}`}>
                  {review.positive ? <ThumbsUp className="w-3 h-3" /> : <ThumbsDown className="w-3 h-3" />}
                  {review.positive ? 'Recommended' : 'Not Recommended'}
                </div>
              </div>

              <div className="text-[#a855f7] text-xs font-semibold uppercase tracking-wide mb-2">{review.game}</div>
              <p className="text-[#c4b8e8] text-sm leading-relaxed mb-4">"{review.text}"</p>

              <div className="flex items-center gap-2 text-[#9d8fc0] text-xs">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{review.helpful.toLocaleString()} people found this helpful</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
