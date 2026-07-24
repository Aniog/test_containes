import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products as allProducts } from '@/data/products';
import ProductGrid from '@/components/collection/ProductGrid';
import FilterSidebar from '@/components/collection/FilterSidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Collection = () => {
  const { categoryId } = useParams();
  
  const [filters, setFilters] = useState({
    category: categoryId && categoryId !== 'all' && categoryId !== 'bestsellers' 
      ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) 
      : 'all',
    priceRange: null,
    sort: 'featured',
    count: 0
  });

  // Update category filter when URL changes
  useEffect(() => {
    if (categoryId && categoryId !== 'all' && categoryId !== 'bestsellers') {
      setFilters(prev => ({ 
        ...prev, 
        category: categoryId.charAt(0).toUpperCase() + categoryId.slice(1) 
      }));
    } else if (categoryId === 'all' || !categoryId) {
      setFilters(prev => ({ ...prev, category: 'all' }));
    }
  }, [categoryId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by Category
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Filter by Bestsellers Route
    if (categoryId === 'bestsellers') {
      result = result.sort((a, b) => b.rating - a.rating).slice(0, 8); // Just an example condition
    }

    // Filter by Price
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-');
      if (max === 'plus') {
        result = result.filter(p => p.price >= parseInt(min));
      } else {
        result = result.filter(p => p.price >= parseInt(min) && p.price <= parseInt(max));
      }
    }

    // Sort
    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Mocking newest by sorting reversed
        result.reverse();
        break;
      case 'featured':
      default:
        // Use default order
        break;
    }

    return result;
  }, [filters.category, filters.priceRange, filters.sort, categoryId]);

  // Update count in filters state for the sidebar display without triggering infinite loops
  useEffect(() => {
    setFilters(prev => ({...prev, count: filteredAndSortedProducts.length}));
  }, [filteredAndSortedProducts.length]);

  const getPageTitle = () => {
    if (categoryId === 'all' || !categoryId) return 'All Jewelry';
    if (categoryId === 'bestsellers') return 'Bestsellers';
    return `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`;
  };

  const getSortLabel = () => {
    switch (filters.sort) {
      case 'price-asc': return 'Price: Low to High';
      case 'price-desc': return 'Price: High to Low';
      case 'newest': return 'Newest Arrivals';
      case 'featured': 
      default: return 'Featured';
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-4 hidden md:flex">
          <BreadcrumbList className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/collections/all">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            {categoryId && categoryId !== 'all' && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground">{getPageTitle()}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header Area */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">{getPageTitle()}</h1>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base">
            {categoryId === 'bestsellers' 
              ? 'Our most loved demi-fine pieces, curated just for you.' 
              : 'Discover our collection of demi-fine jewelry designed for everyday wear.'}
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex justify-between items-center py-4 border-y border-border/60 mb-8 sticky top-20 bg-background/95 backdrop-blur z-30">
          
          {/* Mobile Filter Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 flex items-center gap-2 hover:bg-transparent">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="uppercase text-xs tracking-widest font-medium">Filter</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="font-serif text-2xl">Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebar filters={filters} setFilters={setFilters} />
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:block text-xs uppercase tracking-widest text-muted-foreground">
            {filteredAndSortedProducts.length} Products
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-block text-xs uppercase tracking-widest text-muted-foreground mr-2">Sort By</span>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest font-medium focus:outline-none">
                {getSortLabel()} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px] rounded-none">
                <DropdownMenuItem 
                  className="text-sm tracking-wide py-2 cursor-pointer focus:bg-secondary rounded-none"
                  onClick={() => setFilters(prev => ({...prev, sort: 'featured'}))}
                >
                  Featured
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-sm tracking-wide py-2 cursor-pointer focus:bg-secondary rounded-none"
                  onClick={() => setFilters(prev => ({...prev, sort: 'newest'}))}
                >
                  Newest Arrivals
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-sm tracking-wide py-2 cursor-pointer focus:bg-secondary rounded-none"
                  onClick={() => setFilters(prev => ({...prev, sort: 'price-asc'}))}
                >
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-sm tracking-wide py-2 cursor-pointer focus:bg-secondary rounded-none"
                  onClick={() => setFilters(prev => ({...prev, sort: 'price-desc'}))}
                >
                  Price: High to Low
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-[240px] flex-shrink-0 sticky top-40 h-[calc(100vh-160px)] overflow-y-auto hide-scrollbar">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredAndSortedProducts} />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default Collection;
