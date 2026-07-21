import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-dark mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const accordionSections = [
    {
      id: 'description',
      title: 'Description',
      content: product.description
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `This piece is crafted from ${product.material}, designed to last for years to come. 
      To maintain its beauty, avoid direct contact with water, perfumes, and cosmetics. 
      Store in the provided pouch when not in use. Clean gently with a soft cloth.`
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Free worldwide shipping on all orders. Orders are processed within 1-2 business days. 
      We offer a 30-day return policy for unworn items in original packaging. 
      International orders may be subject to customs duties.`
    }
  ];

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-velmora-creamDark py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-velmora-muted">
            <Link to="/" className="hover:text-velmora-gold">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-velmora-text">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[4/5] overflow-hidden bg-velmora-creamDark rounded-sm">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 overflow-hidden rounded-sm transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-2 ring-velmora-gold'
                        : 'opacity-60 hover:opacity-100'
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
              <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark uppercase tracking-wider">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-velmora-muted">
                  {product.reviews} reviews
                </span>
              </div>

              {/* Price */}
              <p className="mt-4 text-2xl text-velmora-gold font-medium">${product.price}</p>

              {/* Description */}
              <p className="mt-6 text-velmora-textLight leading-relaxed">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mt-8">
                <label className="block text-sm text-velmora-textLight mb-3">
                  Finish: <span className="text-velmora-dark font-medium">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'bg-velmora-gold text-white'
                          : 'bg-white border border-velmora-border text-velmora-text hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <label className="block text-sm text-velmora-textLight mb-3">Quantity</label>
                <div className="flex items-center border border-velmora-border rounded-full w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-velmora-creamDark rounded-l-full transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-velmora-creamDark rounded-r-full transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full mt-8 btn-primary flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-16 max-w-2xl">
            {accordionSections.map((section) => (
              <div key={section.id} className="border-b border-velmora-border">
                <button
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full py-5 flex items-center justify-between text-left"
                >
                  <span className="font-serif text-lg text-velmora-dark">{section.title}</span>
                  {openAccordion === section.id ? (
                    <ChevronUp className="w-5 h-5 text-velmora-gold" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-velmora-muted" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === section.id ? 'max-h-40 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-velmora-textLight leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-velmora-creamDark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-velmora-dark text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;