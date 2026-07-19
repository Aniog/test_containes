import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="container-responsive py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-[hsl(var(--velmora-gold))] hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: selectedVariant,
      quantity: quantity
    });
  };

  const accordionItems = [
    {
      title: 'Description',
      content: `${product.name} - ${product.description}. This exquisite piece embodies the Velmora philosophy of quiet luxury. Crafted with meticulous attention to detail, it's designed to be worn and treasured for years to come.`
    },
    {
      title: 'Materials & Care',
      content: '18k gold plated over high-quality brass. Hypoallergenic and nickel-free. To maintain the beauty of your piece, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not wearing.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. If you\'re not completely satisfied with your purchase, return it within 30 days for a full refund. See our returns page for full details.'
    }
  ];

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container-responsive py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left - Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square bg-[hsl(var(--velmora-cream))] overflow-hidden">
            <img
              data-strk-img-id={`product-detail-${product.id}-${selectedImage}`}
              data-strk-img={product.images[selectedImage].dataStrkImg}
              data-strk-img-ratio={product.images[selectedImage].dataStrkImgRatio}
              data-strk-img-width={product.images[selectedImage].dataStrkImgWidth}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.images[selectedImage].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-[hsl(var(--velmora-cream))] overflow-hidden border-2 ${
                  selectedImage === index ? 'border-[hsl(var(--velmora-gold))]' : 'border-transparent'
                }`}
              >
                <img
                  data-strk-img-id={`product-thumb-${product.id}-${index}`}
                  data-strk-img={image.dataStrkImg}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="space-y-6">
          {/* Product Name */}
          <div>
            <h1 id={`product-name-${product.id}`} className="font-serif text-3xl md:text-4xl font-light mb-2">
              {product.name.toUpperCase()}
            </h1>
            <p id={`product-desc-${product.id}`} className="text-muted-foreground">
              {product.description}
            </p>
          </div>

          {/* Price */}
          <div className="text-2xl font-medium">${product.price}</div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) 
                      ? 'fill-[hsl(var(--velmora-gold))] text-[hsl(var(--velmora-gold))]' 
                      : 'text-muted'
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Variant Selector */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wider font-medium">Material</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-2 border-2 uppercase tracking-wider text-sm elegant-transition ${
                    selectedVariant === variant
                      ? 'border-[hsl(var(--velmora-gold))] bg-[hsl(var(--velmora-gold))] text-white'
                      : 'border-border hover:border-[hsl(var(--velmora-gold))]'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wider font-medium">Quantity</p>
            <div className="quantity-input inline-flex">
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="quantity-value">{quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-6">
            {accordionItems.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === index ? null : index)}
                  className="accordion-trigger"
                >
                  {item.title}
                  <span className="text-[hsl(var(--velmora-gold))]">
                    {expandedAccordion === index ? '−' : '+'}
                  </span>
                </button>
                {expandedAccordion === index && (
                  <div className="accordion-content">
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
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 text-center">
            You May Also Like
          </h2>
          <div className="product-grid">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="relative img-hover mb-4">
                  <img
                    data-strk-img-id={`related-${relatedProduct.id}`}
                    data-strk-img={`[product-desc-${relatedProduct.id}] [product-name-${relatedProduct.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={relatedProduct.name}
                    className="w-full aspect-square object-cover bg-[hsl(var(--velmora-cream))]"
                  />
                </div>
                <h3 className="product-name">{relatedProduct.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{relatedProduct.description}</p>
                <span className="font-medium mt-2 block">${relatedProduct.price}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
