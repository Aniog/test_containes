import StoreGrid from '@/components/store/StoreGrid'

export default function Store() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-red-600 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Menu & Store</h1>
        <p className="text-red-100 text-lg">Order online for pickup or delivery</p>
      </div>
      <StoreGrid />
    </div>
  )
}
