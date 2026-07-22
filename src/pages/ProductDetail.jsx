import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image, product.imageHover || product.image];
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'This piece is crafted from 18K gold-plated brass with a protective coating. To maintain its beauty, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not wearing.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. Items must be unworn with original packaging intact.',
    },
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-muted">
            <li>
              <Link to="/" className="hover:text-charcoal transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-charcoal transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-creamLight overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-gold'
                      : 'border-transparent hover:border-gold/50'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-24 h-fit">
            {/* Name & Price */}
            <h1 className="font-serif text-2xl md:text-h3 tracking-product uppercase mb-2">
              {product.name}
            </h1>
            <p className="text-xl font-medium mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'fill-gold text-gold' : 'text-border'
                    }`}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">
                {product.reviews} reviews
              </span>
            </div>

            {/* Description */}
            <p className="text-warmGray mb-6">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                Finish: <span className="text-warmGray font-normal capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-sm uppercase tracking-wider border transition-colors ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-charcoal'
                        : 'border-border text-warmGray hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-gold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" strokeWidth={2} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-gold transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
              className="mb-4"
            >
              Add to Cart
            </Button>

            {/* Accordions */}
            <div className="border-t border-border mt-8">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-border">
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.id ? null : item.id
                      )
                    }
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4" strokeWidth={1.5} />
                    ) : (
                      <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4 text-warmGray text-sm leading-relaxed animate-fadeIn">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-h3 mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}