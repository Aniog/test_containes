import { Outlet } from 'react-router-dom';

export default function GenericPage({ title, children }) {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">{title}</h1>
      <div className="prose prose-lg max-w-none text-slate-600">
        {children || <p>This page is currently under construction. Please check back later.</p>}
      </div>
    </div>
  );
}