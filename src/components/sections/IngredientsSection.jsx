const ingredients = [
  { emoji: '🌶️', name: 'Chiles', description: 'The backbone of Mexican flavor — from mild ancho to fiery habanero.' },
  { emoji: '🌽', name: 'Corn', description: 'Sacred and essential. Used for tortillas, tamales, pozole, and more.' },
  { emoji: '🥑', name: 'Avocado', description: 'Creamy and rich, the star of guacamole and countless garnishes.' },
  { emoji: '🍅', name: 'Tomato & Tomatillo', description: 'The base of salsas, both red and green, cooked and raw.' },
  { emoji: '🌿', name: 'Cilantro & Epazote', description: 'Fresh herbs that bring brightness and depth to every dish.' },
  { emoji: '🍫', name: 'Chocolate', description: 'Ancient and complex — used in mole sauces, not just desserts.' },
];

const IngredientsSection = () => (
  <section className="py-20 px-6 bg-[#FDF6EC]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-3">
          Building Blocks
        </p>
        <h2
          className="text-gray-900 text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Key Ingredients
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
          A handful of ingredients form the foundation of an entire culinary tradition.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {ingredients.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start gap-3"
          >
            <span className="text-4xl">{item.emoji}</span>
            <h3 className="text-gray-900 text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {item.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsSection;
