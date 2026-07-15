export function productImageSrc(productId, index = 0) {
  const queries = {
    1: ["gold ear cuff crystal luxury jewelry", "gold ear cuff close up product photo", "ear cuff model wearing gold jewelry"],
    2: ["multicolor floral crystal necklace gold chain", "floral necklace product photography", "crystal flower necklace on model"],
    3: ["chunky gold dome huggie earrings", "gold huggie hoop earrings product", "huggie earrings worn on ear"],
    4: ["textured gold filigree drop earrings", "gold lace earrings jewelry product", "filigree gold earrings editorial"],
    5: ["gold jewelry gift set box velvet", "matching gold earring necklace set", "luxury jewelry gift set packaging"],
  }
  return queries[productId]?.[index] || "gold jewelry product photography"
}

export function categoryImageSrc(category) {
  const map = {
    earrings: "gold earrings collection product photography warm light",
    necklaces: "gold necklace collection jewelry editorial",
    huggies: "gold huggie hoop earrings collection",
    sets: "gold jewelry gift set collection packaging",
  }
  return map[category] || "gold jewelry collection"
}

export function heroImageSrc() {
  return "gold jewelry on woman model warm light editorial close up"
}

export function ugcImageSrc(index) {
  const queries = [
    "woman wearing gold earrings close up ear",
    "gold necklace on woman neck editorial",
    "gold huggie earrings ear close up",
    "woman hands gold jewelry ring bracelet",
    "gold earrings on ear lifestyle photo",
    "woman neck gold layered necklaces",
  ]
  return queries[index % queries.length]
}

export function storyImageSrc() {
  return "jewelry designer hands crafting gold jewelry workshop artisan"
}
