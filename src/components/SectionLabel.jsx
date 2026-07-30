export default function SectionLabel({ children, className = '' }) {
  return (
    <span className={`inline-block text-red-600 font-semibold text-xs uppercase tracking-widest mb-3 ${className}`}>
      {children}
    </span>
  );
}
