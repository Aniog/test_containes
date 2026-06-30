import { useMemo } from "react"

export function filterProducts(products, filters) {
  return products.filter((product) => {
    if (filters.category.length > 0 && !filters.category.includes(product.category)) {
      return false
    }

    if (filters.price.length > 0) {
      const matchesPrice = filters.price.some((range) => {
        if (range === "under40") return product.price < 40
        if (range === "40to60") return product.price >= 40 && product.price <= 60
        if (range === "60to100") return product.price > 60 && product.price <= 100
        if (range === "over100") return product.price > 100
        return false
      })
      if (!matchesPrice) return false
    }

    if (filters.material.length > 0) {
      const hasMaterial = filters.material.some((m) =>
        product.materials.toLowerCase().includes(m.toLowerCase())
      )
      if (!hasMaterial) return false
    }

    return true
  })
}

export function sortProducts(products, sort) {
  switch (sort) {
    case "price-asc":
      return [...products].sort((a, b) => a.price - b.price)
    case "price-desc":
      return [...products].sort((a, b) => b.price - a.price)
    case "rating":
      return [...products].sort((a, b) => b.rating - a.rating)
    default:
      return products
  }
}

export function useProductFilters(products, filters, sort) {
  return useMemo(() => {
    const filtered = filterProducts(products, filters)
    return sortProducts(filtered, sort)
  }, [products, filters, sort])
}
