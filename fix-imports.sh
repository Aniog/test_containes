#!/bin/bash
# Fix imports for files in src/components/home/ (need to go up 2 levels)
sed -i 's|from.*data/products|from "../../data/products"|g' src/components/home/Bestsellers.jsx
sed -i 's|from.*data/products|from "../../data/products"|g' src/components/home/CategoryTiles.jsx
sed -i 's|from.*data/products|from "../../data/products"|g' src/components/home/Testimonials.jsx

# Fix imports for files in src/pages/ (need to go up 1 level)
sed -i 's|from.*data/products|from "../data/products"|g' src/pages/ShopPage.jsx
sed -i 's|from.*data/products|from "../data/products"|g' src/pages/ProductDetail.jsx

echo "Imports fixed!"
