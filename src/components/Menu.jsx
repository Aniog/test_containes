const menuItems = [
  {
    emoji: '🍗',
    name: 'Classic Crispy Bucket',
    description: '8 pieces of our signature hand-battered fried chicken, golden and juicy inside.',
    price: '$18.99',
    tag: 'Best Seller',
    tagColor: 'bg-orange-500',
  },
  {
    emoji: '🌶️',
    name: 'Nashville Hot Tenders',
    description: 'Fiery cayenne-glazed tenders with a kick that builds with every bite.',
    price: '$12.99',
    tag: 'Spicy',
    tagColor: 'bg-red-600',
  },
  {
    emoji: '🥪',
    name: 'Crispy Chicken Sandwich',
    description: 'Thick-cut fillet, house pickles, and creamy slaw on a toasted brioche bun.',
    price: '$10.99',
    tag: 'Fan Favorite',
    tagColor: 'bg-yellow-500',
  },
  {
    emoji: '🍱',
    name: 'Combo Meal',
    description: '3 pieces of chicken, seasoned fries, coleslaw, and a biscuit. The full deal.',
    price: '$14.99',
    tag: 'Great Value',
    tagColor: 'bg-green-600',
  },
  {
    emoji: '🥣',
    name: 'Chicken & Waffles',
    description: 'Fluffy buttermilk waffles topped with crispy fried chicken and maple syrup.',
    price: '$13.99',
    tag: 'Weekend Special',
    tagColor: 'bg-purple-600',
  },
  {
    emoji: '🍟',
    name: 'Loaded Chicken Fries',
    description: 'Crispy fries smothered in chicken gravy, cheese sauce, and jalapeños.',
    price: '$9.99',
    tag: 'New',
    tagColor: 'bg-blue-500',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-[#120600] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-orange-500/30">
            What We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our <span className="text-orange-400">Menu</span>
          </h2>
          <p className="text-orange-100/60 text-lg max-w-xl mx-auto">
            Every item made fresh to order. No shortcuts, no compromises — just pure fried chicken perfection.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group relative bg-[#1e0c00] border border-orange-900/30 rounded-2xl p-6 hover:border-orange-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Tag */}
              <span className={`absolute top-4 right-4 ${item.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                {item.tag}
              </span>

              {/* Emoji */}
              <div className="text-5xl mb-4">{item.emoji}</div>

              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-300 transition-colors">
                {item.name}
              </h3>
              <p className="text-orange-100/50 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-orange-400 font-extrabold text-xl">{item.price}</span>
                <button className="bg-orange-500/20 hover:bg-orange-500 text-orange-300 hover:text-white text-sm font-bold px-4 py-1.5 rounded-full border border-orange-500/40 hover:border-orange-500 transition-all">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
