// Price band definitions shared between FilterSidebar and Shop page.
export const PRICE_BANDS = [
  { id: "all", label: "All", test: () => true },
  { id: "under50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50to75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over75", label: "Over $75", test: (p) => p.price > 75 },
]

export const PRICE_TESTS = PRICE_BANDS.reduce((acc, b) => {
  acc[b.id] = b.test
  return acc
}, {})
