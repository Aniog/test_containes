# Velmora Fine Jewelry Storefront

A high-end direct-to-consumer (DTC) e-commerce storefront for "Velmora Fine Jewelry", specializing in demi-fine gold jewelry.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, shadcn/ui components
- **State Management**: React Context (Cart)
- **Database**: Strikingly SDK for persistent product data
- **Icons**: Lucide React
- **Notifications**: Sonner

## Features
- **Editorial Experience**: A quiet luxury aesthetic with elegant serif typography and generous whitespace.
- **Dynamic Product Catalog**: Products fetched from a persistent database with category filtering and sorting.
- **Persistent Cart**: Full cart functionality with a slide-out drawer, local persistence, and quantity management.
- **Responsive Design**: Mobile-first architecture optimized for high-end retail browsing.
- **Stock Image Integration**: AI-powered image generation using the Strikingly stock image system.

## Project Structure
- `src/api`: Database client and operations.
- `src/components`: Reusable UI elements, grouped by page/function.
- `src/context`: Global cart state and provider.
- `src/pages`: Main view components (Home, Shop, PDP).
- `src/schemas`: JSON schema definitions for the product database.

## Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`
