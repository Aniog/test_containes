export default function EmptyPage({ title }) {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[50vh] flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-stone-900 mb-4">{title}</h1>
      <p className="text-lg text-stone-600">This page is under construction.</p>
    </div>
  );
}