import { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pulsera Boho Flores',
    category: 'Pulseras',
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 128,
    tag: 'Más Vendido',
    emoji: '📿',
    bgGradient: 'from-blue-100 to-blue-200',
    colors: ['#e8b4b8', '#c9a96e', '#9b8ea8'],
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: 'Collar Perlas Naturales',
    category: 'Collares',
    price: 34.99,
    originalPrice: null,
    rating: 5.0,
    reviews: 89,
    tag: 'Nuevo',
    emoji: '💎',
    bgGradient: 'from-purple-100 to-violet-200',
    colors: ['#f5f5f0', '#e8c99a', '#d4a5a5'],
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: 'Pendientes Luna Dorada',
    category: 'Pendientes',
    price: 22.50,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 64,
    tag: 'Oferta',
    emoji: '✨',
    bgGradient: 'from-amber-100 to-yellow-200',
    colors: ['#c9a96e', '#e8c99a', '#b8860b'],
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: 'Anillo Piedra Turquesa',
    category: 'Anillos',
    price: 28.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 47,
    tag: 'Nuevo',
    emoji: '💍',
    bgGradient: 'from-teal-100 to-cyan-200',
    colors: ['#40e0d0', '#20b2aa', '#008b8b'],
    isNew: true,
    isSale: false,
  },
  {
    id: 5,
    name: 'Bolso Macramé Artesanal',
    category: 'Bolsos',
    price: 55.00,
    originalPrice: 70.00,
    rating: 4.7,
    reviews: 33,
    tag: 'Oferta',
    emoji: '👜',
    bgGradient: 'from-orange-100 to-amber-200',
    colors: ['#d2b48c', '#c4a882', '#a0856c'],
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: 'Pulsera Cristales Rosa',
    category: 'Pulseras',
    price: 15.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 92,
    tag: 'Popular',
    emoji: '🌸',
    bgGradient: 'from-blue-100 to-blue-200',
    colors: ['#ffb6c1', '#ff69b4', '#db7093'],
    isNew: false,
    isSale: false,
  },
  {
    id: 7,
    name: 'Collar Cadena Vintage',
    category: 'Collares',
    price: 42.00,
    originalPrice: null,
    rating: 5.0,
    reviews: 56,
    tag: 'Exclusivo',
    emoji: '🔮',
    bgGradient: 'from-indigo-100 to-purple-200',
    colors: ['#c9a96e', '#b8860b', '#daa520'],
    isNew: true,
    isSale: false,
  },
  {
    id: 8,
    name: 'Pendientes Flecos Étnicos',
    category: 'Pendientes',
    price: 19.99,
    originalPrice: 26.00,
    rating: 4.6,
    reviews: 41,
    tag: 'Oferta',
    emoji: '🌟',
    bgGradient: 'from-orange-100 to-red-200',
    colors: ['#8b4513', '#a0522d', '#cd853f'],
    isNew: false,
    isSale: true,
  },
];

const tagColors = {
  'Más Vendido': 'bg-blue-500',
  'Nuevo': 'bg-emerald-500',
  'Oferta': 'bg-orange-500',
  'Popular': 'bg-purple-500',
  'Exclusivo': 'bg-amber-600',
};

const ProductCard = ({ product, onAddToCart }) => {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100">
      {/* Product visual */}
      <div className="relative overflow-hidden aspect-square">
        <div className={`w-full h-full bg-gradient-to-br ${product.bgGradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
          <span className="text-7xl select-none">{product.emoji}</span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className={`${tagColors[product.tag] || 'bg-gray-500'} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
            {product.tag}
          </span>
          {discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setLiked(!liked)}
            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all ${
              liked ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:text-blue-500'
            }`}
            aria-label="Favorito"
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          </button>
          <button
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-gray-600 hover:text-purple-500 transition-all"
            aria-label="Vista rápida"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Add to cart overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
              added
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? '¡Añadido!' : 'Añadir al carrito'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-blue-400 font-semibold tracking-wider uppercase mb-1">{product.category}</p>
        <h3 className="font-semibold text-gray-800 text-sm mb-2 leading-tight">{product.name}</h3>

        {/* Colors */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-125 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const filters = ['Todos', 'Pulseras', 'Collares', 'Pendientes', 'Anillos', 'Bolsos'];

const ProductGrid = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section id="novedades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">Colección</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Productos Destacados
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Piezas únicas creadas con pasión y materiales de la más alta calidad.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gray-800 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all">
            Ver más productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
