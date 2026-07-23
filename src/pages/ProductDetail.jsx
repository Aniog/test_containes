import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { getProductById, products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import StarRating from '../components/ui/StarRating';
import Accordion from '../components/ui/Accordion';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">Product not found</h1>
        <Link to="/shop" className="text-velmora-gold hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: 'All our jewelry is crafted from 18K gold plated brass or sterling silver. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on orders over $100. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.'
    }
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-velmora-muted hover:text-velmora-charcoal mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-velmora-sand overflow-hidden transition-all ${
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
          <div className="md:sticky md:top-24 h-fit">
            <h1 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} showCount count={product.reviews} size="md" />
            </div>

            <p className="font-sans text-xl text-velmora-charcoal font-medium mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="font-sans text-velmora-muted leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block font-sans text-sm text-velmora-charcoal mb-3">
                Metal Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 border font-sans text-sm capitalize transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-charcoal'
                        : 'border-velmora-border text-velmora-muted hover:border-velmora-gold'
                    }`}
                  >
                    {variant} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-sans text-sm text-velmora-charcoal mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-velmora-muted hover:text-velmora-charcoal transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-sans text-velmora-charcoal">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-velmora-muted hover:text-velmora-charcoal transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <Button size="full" onClick={handleAddToCart} className="mb-8">
              Add to Cart
            </Button>

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showQuickAdd={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;