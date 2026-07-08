import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">Product not found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageSecondary];

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-sm text-velmora-taupe">
            <li><Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?category=${product.category}`} className="hover:text-velmora-gold transition-colors capitalize">{product.category}</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/5] bg-velmora-sand mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-velmora-sand ${
                    selectedImage === index ? 'ring-2 ring-velmora-gold' : ''
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
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal tracking-wider">
              {product.name}
            </h1>
            
            {/* Price */}
            <p className="font-sans text-2xl text-velmora-gold mt-2">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-taupe'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-taupe">
                {product.reviews} reviews
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-base text-velmora-charcoal/80 mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="font-sans text-sm text-velmora-charcoal tracking-wider">
                METAL TONE
              </label>
              <div className="flex gap-3 mt-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border font-sans text-sm tracking-wider transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-warmBlack'
                        : 'border-velmora-taupe/50 text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="font-sans text-sm text-velmora-charcoal tracking-wider">
                QUANTITY
              </label>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center border border-velmora-taupe/50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-velmora-gold transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-sans text-base">{quantity}</span>
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
              className="w-full btn-primary mt-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 border-t border-velmora-taupe/30">
              {/* Description */}
              <div className="border-b border-velmora-taupe/30">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-wider text-velmora-charcoal"
                >
                  Description
                  {openAccordion === 'description' ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <div
                  className={`accordion-content ${
                    openAccordion === 'description' ? 'max-h-40 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="font-sans text-sm text-velmora-charcoal/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Materials & Care */}
              <div className="border-b border-velmora-taupe/30">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-wider text-velmora-charcoal"
                >
                  Materials & Care
                  {openAccordion === 'materials' ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <div
                  className={`accordion-content ${
                    openAccordion === 'materials' ? 'max-h-40 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="font-sans text-sm text-velmora-charcoal/80 leading-relaxed">
                    {product.materials}
                  </p>
                  <p className="font-sans text-sm text-velmora-charcoal/80 leading-relaxed mt-2">
                    {product.care}
                  </p>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="border-b border-velmora-taupe/30">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-wider text-velmora-charcoal"
                >
                  Shipping & Returns
                  {openAccordion === 'shipping' ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <div
                  className={`accordion-content ${
                    openAccordion === 'shipping' ? 'max-h-40 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="font-sans text-sm text-velmora-charcoal/80 leading-relaxed">
                    {product.shipping}
                  </p>
                  <p className="font-sans text-sm text-velmora-charcoal/80 leading-relaxed mt-2">
                    {product.returns}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-3xl text-velmora-charcoal mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="product-card group"
                >
                  <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="product-image-primary absolute inset-0 w-full h-full object-cover"
                    />
                    <img
                      src={relatedProduct.imageSecondary}
                      alt={relatedProduct.name}
                      className="product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-serif text-sm tracking-wider text-velmora-charcoal">
                      {relatedProduct.name}
                    </h3>
                    <p className="font-sans text-sm text-velmora-gold mt-1">
                      ${relatedProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}