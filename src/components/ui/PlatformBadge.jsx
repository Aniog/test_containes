const PLATFORM_CONFIG = {
  steam: { label: 'Steam', bg: 'bg-[#1b2838]', text: 'text-[#c7d5e0]', border: 'border-[#66c0f4]/30' },
  epic: { label: 'Epic', bg: 'bg-gray-800', text: 'text-gray-100', border: 'border-gray-600' },
  nintendo: { label: 'Nintendo', bg: 'bg-red-700', text: 'text-white', border: 'border-red-500/30' },
  playstation: { label: 'PlayStation', bg: 'bg-blue-900', text: 'text-blue-200', border: 'border-blue-500/30' },
  xbox: { label: 'Xbox', bg: 'bg-green-800', text: 'text-green-200', border: 'border-green-500/30' },
  gog: { label: 'GOG', bg: 'bg-purple-900', text: 'text-purple-200', border: 'border-purple-500/30' },
  multi: { label: 'Multi', bg: 'bg-gray-700', text: 'text-gray-200', border: 'border-gray-500/30' },
  all: { label: 'All Platforms', bg: 'bg-gray-700', text: 'text-gray-200', border: 'border-gray-500/30' },
};

export default function PlatformBadge({ platform, size = 'sm' }) {
  const config = PLATFORM_CONFIG[platform] || PLATFORM_CONFIG.all;
  const sizeClass = size === 'xs' ? 'text-xs px-1.5 py-0.5' : 'text-xs px-2.5 py-1';

  return (
    <span className={`inline-flex items-center font-bold rounded-full border ${config.bg} ${config.text} ${config.border} ${sizeClass}`}>
      {config.label}
    </span>
  );
}

export { PLATFORM_CONFIG };
