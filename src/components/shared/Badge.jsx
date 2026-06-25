export default function Badge({ children, variant = 'blue' }) {
  const variants = {
    blue: 'bg-[#1a4f8a]/10 text-[#1a4f8a]',
    orange: 'bg-[#e8621a]/10 text-[#e8621a]',
    green: 'bg-green-100 text-green-700',
    gray: 'bg-gray-100 text-gray-600',
  };
  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant]}`}>
      {children}
    </span>
  );
}
