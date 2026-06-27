import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-velmora-cream px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-medium">Product Not Found</h1>
          <p className="mt-3 text-velmora-muted">
            We couldn't find the piece you're looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
      <RelatedProducts currentId={product.id} />
    </div>
  );
}
