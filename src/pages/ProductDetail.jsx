import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const variants = [
    { id: 'gold', name: 'Gold', color: 'bg-velmora-gold' },
    { id: 'silver', name: 'Silver', color: 'bg-gray-300' }
  ];

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Our jewelry is crafted with 18K gold plating on sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-velmora-taupe">
            <li><Link to="/" className="hover:text-velmora-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal uppercase tracking-wider">
              {product.name}
            </h1>
            
            {/* Price */}
            <p className="text-2xl text-velmora-gold mt-3">${product.price}</p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-taupe/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">
                {product.reviews} reviews
              </span>
            </div>

            {/* Description */}
            <p className="text-velmora-charcoal/70 mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <span className="text-sm uppercase tracking-widest text-velmora-charcoal/70">
                Finish
              </span>
              <div className="flex gap-3 mt-3">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id)}
                    className={`px-5 py-2.5 border text-sm uppercase tracking-wider transition-all ${
                      variant === v.id
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-taupe/30 text-velmora-charcoal hover:border-velmora-charcoal'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-sm uppercase tracking-widest text-velmora-charcoal/70">
                Quantity
              </span>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center border border-velmora-taupe/30">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-velmora-gold transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-velmora-charcoal">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-velmora-gold transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-velmora-charcoal text-white text-sm uppercase tracking-widest hover:bg-velmora-gold transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 space-y-0">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-t border-velmora-taupe/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm uppercase tracking-widest text-velmora-charcoal">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4 text-velmora-taupe" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-taupe" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-6 text-velmora-charcoal/70 text-sm leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-3xl text-velmora-charcoal text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <RelatedProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function RelatedProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand mb-3">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-velmora-taupe mt-1">${product.price}</p>
      </div>
    </div>
  );
}