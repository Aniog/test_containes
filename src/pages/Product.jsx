import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <Navigate to="/collections/all" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/collections/all">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/collections/${product.category.toLowerCase()}`}>{product.category}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground">{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
      
      <RelatedProducts currentProductId={product.id} />
    </div>
  );
};

export default Product;
