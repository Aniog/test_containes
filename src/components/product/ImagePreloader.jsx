import React from "react";
import { PRODUCTS } from "@/data/products";
import { PLACEHOLDER_SVG } from "@/lib/utils";

// Hidden, statically iterable list of every product image.
// This exists so the strk-img build-time plugin can discover every
// data-strk-img-id and pre-resolve a CDN URL for it, even though
// the live <ProductGallery> resolves images dynamically by route param.
export default function ImagePreloader() {
  return (
    <div aria-hidden="true" className="sr-only" style={{ display: "none" }}>
      {PRODUCTS.map((product) =>
        product.images.map((img) => (
          <img
            key={img.id}
            alt=""
            data-strk-img-id={img.id}
            data-strk-img={img.q}
            data-strk-img-ratio="3x4"
            data-strk-img-width="1000"
            src={PLACEHOLDER_SVG}
          />
        )),
      )}
    </div>
  );
}
