const tips = [
  {
    number: '01',
    title: 'Fill Half Your Plate with Vegetables',
    description:
      'Aim for a colorful variety of vegetables at every meal. They are rich in fiber, vitamins, and minerals that support every system in your body.',
    emoji: '🥦',
  },
  {
    number: '02',
    title: 'Choose Whole Grains Over Refined',
    description:
      'Swap white bread and pasta for whole-grain alternatives. Whole grains provide more fiber and nutrients, keeping you fuller for longer.',
    emoji: '🌾',
  },
  {
    number: '03',
    title: 'Prioritize Lean Proteins',
    description:
      'Include sources like legumes, fish, eggs, and poultry. Protein is essential for muscle repair, hormone production, and immune function.',
    emoji: '🐟',
  },
  {
    number: '04',
    title: 'Limit Added Sugars & Processed Foods',
    description:
      'Excess sugar contributes to inflammation and chronic disease. Read labels and opt for naturally sweet foods like fruits instead.',
    emoji: '🍓',
  },
];

const NutritionTips = () => (
  <section id="nutrition" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#2d7a4f] text-sm font-semibold uppercase tracking-widest">Expert Guidance</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Essential Nutrition Tips
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Small, consistent changes to your diet can have a profound impact on your long-term health. Here are the core principles our nutritionists recommend.
          </p>
          <a
            href="#cta"
            className="inline-block bg-[#2d7a4f] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#245f3e] transition-colors"
          >
            Get Your Free Guide
          </a>
        </div>

        <div className="space-y-6">
          {tips.map((tip) => (
            <div
              key={tip.number}
              className="flex gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#e8f5ee] rounded-xl flex items-center justify-center text-2xl">
                {tip.emoji}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#2d7a4f] uppercase tracking-widest">{tip.number}</span>
                  <h3 className="text-base font-semibold text-gray-900">{tip.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NutritionTips;
