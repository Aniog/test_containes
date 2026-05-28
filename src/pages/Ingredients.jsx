const ingredientGroups = [
  {
    id: 'ing-group-chiles',
    label: 'Chiles',
    color: 'border-red-300',
    accent: 'bg-red-50',
    tagColor: 'bg-red-100 text-red-700',
    items: [
      {
        emoji: '🌶️',
        name: 'Ancho Chile',
        flavor: 'Mild, fruity, smoky',
        description: 'A dried poblano chile with a deep, raisin-like sweetness. Essential in mole and adobo sauces.',
        usedIn: ['Mole Poblano', 'Adobo', 'Enchilada Sauce'],
      },
      {
        emoji: '🔥',
        name: 'Habanero',
        flavor: 'Fiery, floral, citrusy',
        description: 'One of the world\'s hottest chiles, beloved in Yucatán. Its fruity aroma balances the intense heat.',
        usedIn: ['Habanero Salsa', 'Cochinita Pibil', 'Xni-Pec'],
      },
      {
        emoji: '🫑',
        name: 'Poblano',
        flavor: 'Mild, earthy, slightly sweet',
        description: 'A large, dark green chile used fresh or dried. The star of chiles en nogada and chiles rellenos.',
        usedIn: ['Chiles Rellenos', 'Chiles en Nogada', 'Rajas'],
      },
      {
        emoji: '🌿',
        name: 'Chipotle',
        flavor: 'Smoky, spicy, rich',
        description: 'A smoked and dried jalapeño with a deep, complex flavor. Often found in adobo sauce.',
        usedIn: ['Chipotle Salsa', 'Adobo', 'Tacos'],
      },
    ],
  },
  {
    id: 'ing-group-staples',
    label: 'Staples',
    color: 'border-yellow-300',
    accent: 'bg-yellow-50',
    tagColor: 'bg-yellow-100 text-yellow-700',
    items: [
      {
        emoji: '🌽',
        name: 'Corn (Maíz)',
        flavor: 'Sweet, starchy, earthy',
        description: 'The sacred foundation of Mexican civilization. Used for tortillas, tamales, pozole, atole, and more.',
        usedIn: ['Tortillas', 'Tamales', 'Pozole', 'Atole'],
      },
      {
        emoji: '🫘',
        name: 'Black Beans',
        flavor: 'Earthy, creamy, mild',
        description: 'A protein-rich staple served whole, refried, or in soups. Inseparable from Mexican daily cooking.',
        usedIn: ['Frijoles de Olla', 'Tlayudas', 'Enfrijoladas'],
      },
      {
        emoji: '🍅',
        name: 'Tomatillo',
        flavor: 'Tart, bright, slightly herbal',
        description: 'A small green fruit in a papery husk. The base of salsa verde and countless green sauces.',
        usedIn: ['Salsa Verde', 'Enchiladas Verdes', 'Pozole Verde'],
      },
      {
        emoji: '🧅',
        name: 'White Onion',
        flavor: 'Sharp, pungent, sweet when cooked',
        description: 'Used raw as a garnish, charred for salsas, or slow-cooked as a base for nearly every dish.',
        usedIn: ['Salsas', 'Sofritos', 'Garnishes'],
      },
    ],
  },
  {
    id: 'ing-group-fresh',
    label: 'Fresh & Aromatic',
    color: 'border-green-300',
    accent: 'bg-green-50',
    tagColor: 'bg-green-100 text-green-700',
    items: [
      {
        emoji: '🥑',
        name: 'Avocado',
        flavor: 'Creamy, buttery, mild',
        description: 'Native to Mexico and central to its cuisine. Used in guacamole, as a garnish, and in salsas.',
        usedIn: ['Guacamole', 'Tacos', 'Tostadas'],
      },
      {
        emoji: '🌿',
        name: 'Cilantro',
        flavor: 'Fresh, citrusy, herbal',
        description: 'The most widely used fresh herb in Mexican cooking. Sprinkled over tacos, soups, and salsas.',
        usedIn: ['Tacos', 'Salsas', 'Soups'],
      },
      {
        emoji: '🍋',
        name: 'Mexican Lime',
        flavor: 'Tart, floral, intensely citrusy',
        description: 'Smaller and more aromatic than Persian limes. Squeezed over virtually everything — tacos, soups, fruit.',
        usedIn: ['Tacos', 'Ceviche', 'Agua Fresca'],
      },
      {
        emoji: '🧄',
        name: 'Garlic',
        flavor: 'Pungent, savory, earthy',
        description: 'Charred whole on a comal or blended raw into salsas, garlic adds depth to almost every Mexican sauce.',
        usedIn: ['Mole', 'Adobo', 'Salsas'],
      },
    ],
  },
  {
    id: 'ing-group-special',
    label: 'Special Ingredients',
    color: 'border-amber-300',
    accent: 'bg-amber-50',
    tagColor: 'bg-amber-100 text-amber-700',
    items: [
      {
        emoji: '🍫',
        name: 'Cacao',
        flavor: 'Bitter, complex, earthy',
        description: 'Domesticated in Mexico thousands of years ago. Used in mole, hot chocolate, and ceremonial drinks.',
        usedIn: ['Mole Negro', 'Champurrado', 'Tejate'],
      },
      {
        emoji: '🌸',
        name: 'Achiote',
        flavor: 'Earthy, slightly peppery, floral',
        description: 'Seeds from the annatto tree ground into a paste. Gives cochinita pibil its vivid orange-red color.',
        usedIn: ['Cochinita Pibil', 'Achiote Rice', 'Marinades'],
      },
      {
        emoji: '🌱',
        name: 'Epazote',
        flavor: 'Pungent, herbal, medicinal',
        description: 'A wild herb with a strong, distinctive flavor. Added to black beans and quesadillas in central Mexico.',
        usedIn: ['Frijoles', 'Quesadillas', 'Soups'],
      },
      {
        emoji: '🍦',
        name: 'Mexican Vanilla',
        flavor: 'Sweet, floral, creamy',
        description: 'First cultivated by the Totonac people of Veracruz. Considered the finest vanilla in the world.',
        usedIn: ['Tres Leches', 'Flan', 'Atole'],
      },
    ],
  },
];

const Ingredients = () => (
  <div>
    {/* Page Header */}
    <div className="pt-32 pb-16 px-6 bg-gray-900 text-center">
      <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold mb-3">Building Blocks</p>
      <h1
        className="text-white text-5xl md:text-6xl font-bold mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Key Ingredients
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mx-auto">
        The ingredients of Mexican cuisine tell a story of ancient civilizations, trade routes, and a deep connection to the land.
      </p>
    </div>

    {/* Ingredient Groups */}
    <div className="py-16 px-6 bg-[#FDF6EC]">
      <div className="max-w-6xl mx-auto space-y-16">
        {ingredientGroups.map((group) => (
          <div key={group.id}>
            {/* Group Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${group.tagColor}`}>
                {group.label}
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 ${group.color}`}
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3
                    className="text-gray-900 text-lg font-semibold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-orange-500 text-xs font-medium italic mb-3">{item.flavor}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide font-semibold mb-2">Used in</p>
                    <div className="flex flex-wrap gap-1">
                      {item.usedIn.map((dish) => (
                        <span
                          key={dish}
                          className={`text-xs px-2 py-0.5 rounded-full ${group.accent} ${group.tagColor}`}
                        >
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Ingredients;
