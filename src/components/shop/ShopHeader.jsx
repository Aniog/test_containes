export function ShopHeader({ total }) {
  return (
    <div className="border-b border-velmora-line pb-8">
      <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">Collections</p>
      <h1 className="mt-3 font-display text-5xl text-velmora-espresso sm:text-6xl">
        Shop Velmora
      </h1>
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-2xl text-base leading-8 text-velmora-truffle">
          Discover demi-fine earrings, necklaces, and huggies in warm gold finishes designed to feel elevated and wearable from day to evening.
        </p>
        <p className="text-xs uppercase tracking-[0.28em] text-velmora-truffle">
          {total} pieces available
        </p>
      </div>
    </div>
  )
}
