import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { useCartDispatch } from '@/context/CartContext';
import products from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductCard from '@/components/product/ProductCard';

const accordionData = [
  {
    title: 'Description',
    content: null, // dynamic
  },
  {
    title: 'Materials & Care',
    content: null, // dynamic
  },
  {
    title: 'Shipping & Returns',
    content:
      'Complimentary shipping on all orders over $50. Orders ship within 1–2 business days. We offer free 30-day returns on all unworn items. Items must be returned in original packaging. Sale items are final sale.',
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useCartDispatch();
  const product = products.find((p) => p.id === id);

  const [variant, setVariant] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAcc, setOpenAcc] = useState(0);

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-40 text-center">
        <h1 className="font-serif text-2xl text-velmora-deep">Product not found</h1>
        <Link to="/shop" className="btn-primary mt-6 inline-flex">
          Back to Shop
        </Link>
      </div>
    );
  }

  const accItems = accordionData.map((a) => ({
    ...a,
    content:
      a.title === 'Description'
        ? product.details
        : a.title === 'Materials & Care'
          ? `${product.materials}. Store in a dry place. Avoid contact with water, perfumes, and lotions. Clean gently with a soft cloth.`
          : a.content,
  }));

  const handleAdd = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant: product.variants[variant],
        images: product.images,
        quantity: qty,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wideprod uppercase text-velmora-deep font-semibold leading-tight">
              {product.name}
            </h1>
            <p className="font-sans text-2xl text-velmora-deep mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-velmora-divider'
                  }`}
                />
              ))}
              <span className="font-sans text-sm text-velmora-muted ml-2">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-sans text-sm text-velmora-muted mt-6 leading-relaxed">
              {product.description}
            </p>

            <hr className="hairline my-6" />

            {/* Variant selector */}
            <div>
              <span className="font-sans text-xs tracking-wider uppercase text-velmora-muted">
                Finish
              </span>
              <div className="flex gap-3 mt-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setVariant(i)}
                    className={`px-6 py-2.5 font-sans text-sm transition-colors border ${
                      i === variant
                        ? 'border-velmora-deep text-velmora-deep'
                        : 'border-velmora-divider text-velmora-muted hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="font-sans text-xs tracking-wider uppercase text-velmora-muted">
                Quantity
              </span>
              <div className="flex items-center gap-4 mt-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-divider text-velmora-deep hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-sans text-sm w-6 text-center">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-divider text-velmora-deep hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAdd} className={`btn-primary w-full mt-8 ${added ? 'bg-green-800 hover:bg-green-800' : ''}`}>
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 space-y-px">
              {accItems.map((item, i) => (
                <div key={item.title} className="border-t border-velmora-divider">
                  <button
                    onClick={() => setOpenAcc(openAcc === i ? -1 : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-wider uppercase text-velmora-deep">
                      {item.title}
                    </span>
                    {openAcc === i ? (
                      <ChevronUp className="w-4 h-4 text-velmora-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-muted" />
                    )}
                  </button>
                  {openAcc === i && (
                    <div className="pb-4 font-sans text-sm text-velmora-muted leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-velmora-divider">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-deep tracking-widetitle font-semibold text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
