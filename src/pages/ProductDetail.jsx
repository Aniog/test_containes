import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(product);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-velmora-charcoal">Product not found</h1>
        <Link to="/shop" className="text-velmora-gold mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordionItems = [
    { 
      id: 'description', 
      title: 'Description', 
      content: product.description 
    },
    { 
      id: 'materials', 
      title: 'Materials & Care', 
      content: 'Our jewelry is crafted with 18K gold plating over sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.' 
    },
    { 
      id: 'shipping', 
      title: 'Shipping & Returns', 
      content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping available at checkout.' 
    }
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-velmora-taupe">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-velmora-sand overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal tracking-widest">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mt-3">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < Math.floor(product.rating) ? "#C9A962" : "none"} 
                    stroke="#C9A962" 
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-gold mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-velmora-charcoal/70 mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="font-sans text-sm text-velmora-charcoal/70 block mb-3">
                Finish
              </label>
              <div className="flex space-x-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border font-sans text-sm tracking-wide capitalize transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-charcoal'
                        : 'border-velmora-taupe/30 text-velmora-charcoal/70 hover:border-velmora-gold'
                    }`}
                  >
                    {variant} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="font-sans text-sm text-velmora-charcoal/70 block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-velmora-taupe/30 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 font-sans text-sm text-velmora-charcoal">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-velmora-charcoal text-velmora-cream font-sans text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span>Add to Cart</span>
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-velmora-taupe/20">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velmora-taupe/20">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-sans text-sm text-velmora-charcoal tracking-wide">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} className="text-velmora-taupe" />
                    ) : (
                      <ChevronDown size={18} className="text-velmora-taupe" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-velmora-charcoal/70 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-16 bg-velmora-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-velmora-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group">
                <div className="aspect-[3/4] bg-velmora-cream overflow-hidden">
                  <img 
                    src={item.images[0]} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-serif text-sm text-velmora-charcoal tracking-widest">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-velmora-gold mt-1">
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}