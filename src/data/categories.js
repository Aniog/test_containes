// Category tile data for the "Shop by Category" homepage section.
// Each category gets an `imgId` and `imageQuery` so the build-time
// strk-img plugin can resolve a real photo for the tile.

export const CATEGORY_TILES = [
  {
    id: "earrings",
    label: "Earrings",
    href: "/shop?cat=earrings",
    imgId: "cat-earrings-tile",
    imageQuery: "gold drop earrings on dark cream background editorial product photography",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    href: "/shop?cat=necklaces",
    imgId: "cat-necklaces-tile",
    imageQuery: "delicate gold necklace on linen fabric warm light flatlay product photography",
  },
  {
    id: "huggies",
    label: "Huggies",
    href: "/shop?cat=huggies",
    imgId: "cat-huggies-tile",
    imageQuery: "chunky gold huggie hoop earrings on cream background product photography",
  },
]
