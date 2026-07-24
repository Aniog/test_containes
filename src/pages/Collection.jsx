import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Shop from "@/pages/Shop";
import { CATEGORIES } from "@/data/products";

export default function Collection() {
  const { category } = useParams();
  const exists = CATEGORIES.some((c) => c.slug === category);
  if (!exists) return <Navigate to="/shop" replace />;
  return <Shop initialCategory={category} eyebrow="The Collections" />;
}
