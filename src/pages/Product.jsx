import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { findProduct } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import ProductGallery from "@/components/product/ProductGallery";
import VariantSelector from "@/components/product/VariantSelector";
import QuantityStepper from "@/components/product/QuantityStepper";
import Accordion from "@/components/product/Accordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import StarRating from "@/components/ui/StarRating";
import Container from "@/components/ui/Container";

export default function Product() {
  const { id } = useParams();
  const product = findProduct(id);
  const { addItem, openCart } = useCart();

  const [tone, setTone] = useState(product?.tone || "gold");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setTone(product.tone || "gold");
      setQuantity(1);
    }
  }, [product?.id]);

  if (!product) return <Navigate to="/shop" replace />;

  const onAdd = () => {
    addItem({ productId: product.id, tone, size: "One Size", quantity });
  };

  const onBuyNow = () => {
    addItem({ productId: product.id, tone, size: "One Size", quantity });
    openCart();
  };

  const accordionItems = [
    {
      title: "Description",
      content: <p>{product.description}</p>,
    },
    {
      title: "Materials & Care",
      content: <p>{product.materials} <br /><br /> {product.care}</p>,
    },
    {
      title: "Shipping & Returns",
      content: (
        <div>
          <p>
            Free worldwide shipping on orders over $75. Most pieces ship within
            1–2 business days from our studio.
          </p>
          <p className="mt-3">
            30-day returns on unworn pieces in original packaging. See our
            returns page for the full process.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Container className="pt-28 sm:pt-32 pb-10">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-taupe">
            <li><Link to="/" className="hover:text-espresso transition-colors">Home</Link></li>
            <li><ChevronRight size={11} strokeWidth={1.5} /></li>
            <li><Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link></li>
            <li><ChevronRight size={11} strokeWidth={1.5} /></li>
            <li className="text-espresso truncate max-w-[160px] sm:max-w-none">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
          <ProductGallery product={product} />

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3">{product.subcategory}</p>
            <h1
              id="product-name"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-light uppercase tracking-[0.06em] leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(product.price)}
              </span>
              {product.compareAt && (
                <span className="text-sm text-taupe line-through">
                  {formatPrice(product.compareAt)}
                </span>
              )}
            </div>

            <div className="mt-3 flex items-center gap-3">
              <StarRating value={product.rating} size={13} showValue />
              <span className="text-[11px] uppercase tracking-widest text-taupe">
                {product.reviewCount} reviews
              </span>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-taupe font-light max-w-prose">
              {product.shortDescription}
            </p>

            <div className="hairline my-8" />

            <div className="space-y-6">
              <VariantSelector value={tone} onChange={setTone} />
              <QuantityStepper value={quantity} onChange={setQuantity} />

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={onAdd}
                  className="block w-full text-center h-14 leading-[3.5rem] bg-espresso text-ivory text-xs uppercase tracking-widest font-medium hover:bg-espresso-200 transition-colors"
                >
                  Add to Bag · {formatPrice(product.price * quantity)}
                </button>
                <button
                  type="button"
                  onClick={onBuyNow}
                  className="block w-full text-center h-12 leading-[3rem] border border-espresso text-espresso text-xs uppercase tracking-widest font-medium hover:bg-espresso hover:text-ivory transition-colors"
                >
                  Buy It Now
                </button>
              </div>

              <ul className="pt-4 space-y-2.5 text-[12px] text-taupe">
                <li className="flex items-center gap-2.5">
                  <Truck size={14} strokeWidth={1.5} className="text-gold-dark" />
                  Free worldwide shipping over $75
                </li>
                <li className="flex items-center gap-2.5">
                  <RefreshCw size={14} strokeWidth={1.5} className="text-gold-dark" />
                  30-day easy returns
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck size={14} strokeWidth={1.5} className="text-gold-dark" />
                  Hypoallergenic · tarnish-resistant
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </Container>

      <RelatedProducts productId={product.id} />
    </>
  );
}
