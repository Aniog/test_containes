const IntroSection = () => {
  const stats = [
    { value: '27', label: 'UNESCO Heritage Sites' },
    { value: '500+', label: 'Cheese Varieties' },
    { value: '3', label: 'Michelin Stars Max' },
    { value: '1,000+', label: 'Wine Appellations' },
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">
            The Art of French Cuisine
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            A Culinary Heritage Like No Other
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-8" />
          <p className="text-[#6B6560] text-lg max-w-3xl mx-auto leading-relaxed">
            French cuisine is recognised by UNESCO as an Intangible Cultural Heritage of Humanity.
            From the rustic farmhouse kitchens of Provence to the grand brasseries of Paris,
            France has shaped the way the world cooks, eats, and celebrates food.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center border border-[#E8E0D5] shadow-sm"
            >
              <p className="font-['Playfair_Display'] text-4xl font-bold text-[#8B1A2F] mb-2">
                {stat.value}
              </p>
              <p className="text-[#6B6560] text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
