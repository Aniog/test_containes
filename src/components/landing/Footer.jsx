export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">L</span>
          </div>
          Launchpad
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Launchpad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
