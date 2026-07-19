import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { StarRating } from '@/components/ui/StarRating';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-20 md:pt-24 container-padding py-16 text-center">
        <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-primary hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = product.related
    .map(rid => products.find(p => p.id === rid))
    .filter(Boolean);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: product.materials + ' To maintain the beauty of your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.',
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets include complimentary gift wrapping.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="container-padding py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`product-${product.images[selectedImage].id}`}
                data-strk-img={`[${product.name}-detail] [product-detail-section]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-muted overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    alt=""
                    data-strk-img-id={`product-thumb-${img.id}`}
                    data-strk-img={`[${product.name}-detail] [product-detail-section]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <h1 id={`${product.name}-detail`} className="product-name text-2xl md:text-3xl mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="serif-heading text-2xl md:text-3xl mb-6">${product.price}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm border transition-colors ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              variant="dark"
              size="lg"
              className="w-full mb-4"
              onClick={handleAddToCart}
            >
              {addedToCart ? 'Added to Bag' : 'Add to Bag'}
            </Button>

            {/* Wishlist & Share */}
            <div className="flex items-center gap-6 mb-8">
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="serif-heading text-2xl md:text-3xl text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={{
                    ...relatedProduct,
                    nameId: `product-${relatedProduct.id}-name`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
