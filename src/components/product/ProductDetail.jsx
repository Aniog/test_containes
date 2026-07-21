import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-ivory text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-ivory">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => `$${price.toFixed(2)}`;

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
      content: 'This piece is crafted from premium 18K gold-plated brass, ensuring a luxurious look with lasting durability. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.'
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal pt-24 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-warm-gray">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-gold transition-colors capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-ivory">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-stone/10">
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
                  className={`w-20 h-24 border transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-stone/30 hover:border-gold/50'
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
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Product Name */}
            <h1 className="font-serif text-ivory text-2xl md:text-3xl uppercase tracking-widest mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl text-ivory font-medium mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < product.rating ? 'text-gold fill-gold' : 'text-stone'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">
                {product.rating}.0 ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm text-ivory mb-3">
                  Color: <span className="text-warm-gray capitalize">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 border text-sm uppercase tracking-widest transition-colors ${
                        selectedVariant === variant 
                          ? 'border-gold text-gold' 
                          : 'border-stone text-warm-gray hover:border-gold/50'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm text-ivory mb-3">Quantity</label>
              <div className="flex items-center border border-stone w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-warm-gray hover:text-ivory transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 text-ivory">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-warm-gray hover:text-ivory transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-charcoal py-4 px-8 uppercase tracking-widest text-sm font-medium hover:bg-gold/90 transition-colors flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-stone/30">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-stone/30">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-ivory text-sm uppercase tracking-widest">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={18} className="text-warm-gray" />
                    ) : (
                      <ChevronDown size={18} className="text-warm-gray" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-ivory text-section-mobile md:text-section mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;